# RFWave Resources — RF 101 · BY SANU

> A curated, community-driven resource hub for RF & Microwave Engineering students and professionals.  
> Built and maintained by **Sanu Roy** · M.Tech in RF & Microwave Engineering, IIT Kharagpur · 3+ Years RF Design & Simulation Experience

---

## 📂 Project Structure

```
rf_microwave_resources/
│
├── index.html              ← Main page (this enhanced version)
├── logo.png                ← Site logo (replace with your own)
├── README.md               ← This file
│
├── pdfs/                   ← Downloadable PDF references
│   ├── Mixer_Basic.pdf
│   ├── Impedance_Matching.pdf
│   ├── PLL Fundamental.pdf
│   ├── RF_FILTERS.pdf
│   └── Signal_integrity_PCB.pdf
│
└── books/                  ← Recommended textbooks (PDFs)
    ├── Pozar_Microwave Engineering(2012).pdf
    ├── Antenna Theory Analysis and Design 3rd ed.pdf
    ├── Gonzalez_G._Microwave_Transistor_Amplifiers.pdf
    ├── Introduction to Electromagnetic Compatibility - Clayton R. Paul.pdf
    ├── RF Microelectronics (Razavi).pdf
    ├── Power_Amplifiers_S.C.Cripps.pdf
    ├── Bogatin, Eric - Signal and power integrity, simplified (2018, Prentice Hall).pdf
    └── LNA-ESD Co-Design P.Leroux M.Steyaert.pdf
```

---

## 🚀 How to Use (Zero Setup)

This is a **fully static, client-side website** — no server, no build step, no dependencies to install.

### Option A: Open locally
```bash
# Clone the repo
git clone https://github.com/Sanu0910/rf_microwave_resources.git
cd rf_microwave_resources

# Open directly in your browser
open index.html         # macOS
start index.html        # Windows
xdg-open index.html    # Linux
```

### Option B: GitHub Pages (recommended for sharing)
1. Go to your GitHub repo → **Settings** → **Pages**
2. Under "Source", select `main` branch → `/ (root)` folder → **Save**
3. Your site will be live at `https://Sanu0910.github.io/rf_microwave_resources/`

### Option C: Netlify / Vercel drag-and-drop
- Zip the entire project folder
- Drag it into [Netlify Drop](https://app.netlify.com/drop) — live in 10 seconds, free

---

## ✏️ How to Add or Edit Resources

All resources are hardcoded directly in `index.html` — no CMS, no database. Just edit the HTML.

### Adding a new card

Find the relevant section (e.g. "Online Study Resources") and paste a new card block:

```html
<div class="card">
  <div class="card-icon"><i class="fa-solid fa-ICON-NAME"></i></div>
  <a href="YOUR_LINK" target="_blank">Title of Resource</a>
  <p>One or two sentences describing what this resource covers and why it's useful.</p>
  <span class="card-tag">Web</span>   <!-- tag options: Web · YouTube (yt) · PDF (pdf) · Book (book) · Tool (tool) -->
</div>
```

**Tag class options:**

| Class | Color | Use for |
|---|---|---|
| `card-tag` (no extra class) | Teal | Websites, general links |
| `card-tag yt` | Red | YouTube videos/channels |
| `card-tag pdf` | Orange-red | Downloadable PDFs |
| `card-tag book` | Copper/amber | Textbooks |
| `card-tag tool` | Blue | Software tools |

### Adding a new section

1. Add a section heading before your cards:
```html
<div class="section-head reveal">
  <div class="section-icon"><i class="fa-solid fa-ICON"></i></div>
  <h2>Your Section Title</h2>
</div>
<div class="cards reveal">
  <!-- cards go here -->
</div>
```
2. Add a nav link in the `<nav class="nav-links">` block in the navbar.

### Adding a PDF

1. Drop the file into the `pdfs/` folder
2. Add a card:
```html
<div class="card">
  <div class="card-icon"><i class="fa-solid fa-file-pdf"></i></div>
  <a href="pdfs/YOUR_FILE.pdf" target="_blank">Title</a>
  <p>Description of the PDF.</p>
  <span class="card-tag pdf">PDF</span>
</div>
```

### Adding a book

1. Drop the PDF into the `books/` folder
2. Add a card with `href="books/YOUR_BOOK.pdf"` and `<span class="card-tag book">Book</span>`

---

## 🎨 Design & Branding

### Color tokens (edit in `:root` inside `<style>`)

| Variable | Default (Dark) | Purpose |
|---|---|---|
| `--teal` | `#3ddc97` | Primary accent, interactive highlights |
| `--copper` | `#d98e54` | Secondary accent, section icons |
| `--bg` | `#070f0c` | Page background |
| `--panel` | `#0f1e16` | Card / panel background |
| `--ink` | `#e8efe9` | Body text |
| `--muted` | `#7e9489` | Secondary text, labels |

### Fonts
- **Display / Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)
- **Code / Monospace labels:** JetBrains Mono (Google Fonts)

### Logo
Replace `logo.png` with your own image. The navbar will automatically use it. If the image fails to load, a fallback `RF` text badge is shown.

### Dark / Light mode
The page ships dark by default. Users can toggle via the 🌙 button. Light mode tokens are in `[data-theme="light"]` — customize there.

---

## ⚙️ Features Overview

| Feature | How it works |
|---|---|
| **Live search** | Filters all cards and MATLAB list items in real-time as you type |
| **Dark/Light toggle** | CSS custom property swap via `data-theme` attribute |
| **Particle background** | Canvas-based animated EM field with mouse-repel interaction |
| **Scroll reveal** | IntersectionObserver fades sections in as you scroll |
| **Back to top** | Appears after scrolling 400px, smooth scrolls to top |
| **Visitor counter** | `localStorage` — counts visits per browser (no server needed) |
| **Card hover effects** | CSS-only border gradient sweep + translateY lift |

---

## 🤝 Contributing

Contributions are welcome! If you have a resource that should be here:

1. **Fork** this repository
2. **Edit** `index.html` to add your card(s) in the correct section
3. **Commit** with a clear message: `Add [resource name] to [section]`
4. Open a **Pull Request** — describe what you added and why it's useful

Please keep descriptions concise (1–2 sentences), factual, and helpful to students. No affiliate links.

---

## 📜 License

This project is open-source under the **MIT License**. Feel free to fork, adapt, and share — attribution appreciated.

---

## 📬 Contact

**Sanu Roy**  
M.Tech in RF & Microwave Engineering, IIT Kharagpur  
3+ Years RF Design & Simulation Experience  
IEEE AP-MTTS Member  

GitHub: [@Sanu0910](https://github.com/Sanu0910)

---

*RF 101 · BY SANU — Building the next generation of RF engineers, one concept at a time.*
