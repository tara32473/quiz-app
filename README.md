# Quiz App

This is a minimal static Quiz App (HTML/CSS/JavaScript).

Files added in this repository:

- `index.html` — the app entry page
- `style.css` — basic styling for the quiz
- `script.js` — quiz logic and sample questions

How to run locally

1. Open `index.html` directly in your browser (quick, no server required). If you open it from the filesystem some browsers may restrict module or fetch requests, but this project doesn't use those features.

2. Recommended: serve the folder with a static server. From the repository root run one of these commands:

Python 3 built-in server:

```bash
python3 -m http.server 8000
```

Node.js (http-server)

```bash
npm install --global http-server
http-server -p 8000
```

Then open: http://localhost:8000/

Next steps

- If you want, I can add more sample questions, persist scores, or scaffold a simple build/dev setup (Vite) with hot reload.