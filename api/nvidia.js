export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const auth = req.headers['authorization'];
  if (!auth?.startsWith('Bearer nvapi-')) {
    return res.status(401).json({ error: 'Invalid NVIDIA API key' });
  }

  try {
    const r = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth,
        'Accept': 'application/json'
      },
      body: JSON.stringify({ ...req.body, stream: false })
    });

    const text = await r.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch(e) {
      return res.status(500).json({ error: 'NVIDIA returned invalid response', raw: text.slice(0, 300) });
    }

    return res.status(r.ok ? 200 : r.status).json(data);

  } catch(e) {
    return res.status(500).json({ error: e.message });
  }
}
