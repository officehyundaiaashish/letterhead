# CodX Editor
### The Ultimate Pocket-Sized Code Editor & AI Agent

<p align="center">
  <img src="https://img.shields.io/badge/Platform-PWA%20%7C%20Web%20%7C%20Mobile-blue?style=for-the-badge" alt="Platform" />
  <img src="https://img.shields.io/badge/Editor-Ace%20Editor-green?style=for-the-badge&logo=aceeditor" alt="Editor" />
  <img src="https://img.shields.io/badge/AI-Multi--Model%20Support-orange?style=for-the-badge" alt="AI" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge" alt="License" />
</p>

**CodX** is a high-performance, mobile-first web code editor that fits in your pocket. It combines a powerful syntax-highlighting editor, a live preview engine, in-browser Python execution, and a deeply integrated AI coding assistant into a single, installable HTML file.

---

## 🚀 Features

### 🛠 Core Editor
*   **Ace Editor Engine:** Fast, reliable syntax highlighting for HTML, CSS, JS, Python, and more.
*   **Live Preview:** Instant rendering of HTML/CSS/JS projects using Blob URLs.
*   **Python in Browser:** Powered by **Pyodide**, run Python 3.12 directly in your browser with full standard library support.
*   **Multi-Tab Support:** Manage multiple open files seamlessly.
*   **Find & Replace:** Advanced regex and case-sensitive search capabilities.

### 🤖 AI Agent Integration
CodX doesn't just edit; it thinks. Connect your own API keys to unlock:
*   **Smart Code Generation:** "Create a navbar" or "Fix this bug."
*   **Code Explanation:** Ask the AI to explain complex logic.
*   **Refactoring:** Automatically clean up and optimize code.
*   **Multi-Model Support:** Works with **Gemini, Groq, OpenRouter, OpenAI, Anthropic, and DeepSeek**.

### ☁️ GitHub Sync
*   **Full Repository Management:** Clone, create, delete, and rename files directly from the app.
*   **Commit & Push:** Save your work to GitHub instantly.
*   **Pull Requests:** Fetch latest changes from your remote repository.

### 🎨 User Interface
*   **Glassmorphism Design:** Modern, translucent UI elements.
*   **Mobile Optimized:** Touch-friendly toolbar, virtual keyboard handling, and responsive layout.
*   **PWA Ready:** Install it as a standalone app on iOS or Android.
*   **Dark/Light Mode:** Automatic theme switching based on system preference.

---

## 📸 Screenshots

*(Note: As this is a text-based README, imagine a sleek, dark-themed interface with a glowing green accent color, code on the left, and a chat panel sliding up from the bottom.)*

---

## ⚡ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Editor Core** | Ace Editor |
| **Python Runtime** | Pyodide (WebAssembly) |
| **Icons** | Material Icons Round |
| **Fonts** | Poppins, Courier New |
| **Storage** | IndexedDB (via CodXStore) & LocalStorage |
| **Styling** | CSS Variables, Flexbox, Grid |

---

## 🛠 Installation & Usage

CodX is designed to be **serverless**. You do not need Node.js, Python, or a backend server to run it.

### Option 1: Run Locally (Recommended)
1.  Download the `index.html` file.
2.  Open it in any modern web browser (Chrome, Safari, Edge).
3.  **Optional:** Use a local server (like Live Server in VS Code) to enable PWA features properly.

### Option 2: Deploy to Web
1.  Upload the `index.html` to GitHub Pages, Netlify, or Vercel.
2.  Access via your phone and "Add to Home Screen".

---

## 🔑 AI Configuration

To use the AI features, you need an API Key. CodX stores keys locally on your device; they are never sent to any server other than the AI provider you select.

1.  Tap the **AI Agent** button in the toolbar.
2.  Enter your API Key (e.g., from Google AI Studio or Groq).
3.  Select a model (e.g., `gemini-2.5-flash` or `llama-3.3-70b`).
4.  Start chatting!

**Supported Providers:**
*   **Gemini:** Free tier available.
*   **Groq:** Extremely fast inference.
*   **OpenRouter:** Access to hundreds of models.
*   **OpenAI / Anthropic / DeepSeek:** Full support for paid tiers.

---

## 📂 File Structure

Since this is a single-file application, the structure is self-contained:

```text
CodX/
├── index.html        # The entire application (HTML, CSS, JS)
└── README.md         # This file
```

---

## 🤝 Contributing

Contributions are welcome! Since the logic is contained within the single HTML file, you can contribute by:
1.  Improving the CSS styling.
2.  Adding new syntax modes to the Ace Editor configuration.
3.  Enhancing the AI prompt engineering logic.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by the Aashish Giri H</sub>
</div>
