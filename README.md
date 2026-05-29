# 🖥️ Ninna's Portfolio — Cyber Terminal Aesthetic

> Personal portfolio of **Ninna**, Full-Stack Engineer & DevOps.
> Built with **React + TypeScript**, featuring a cyber terminal design, an interactive blog, case studies, and CI/CD-ready deployment on Vercel.

<p align="center">
  <a href="https://github.com/Ninna-log/ninna-log-portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/Ninna-log/ninna-log-portfolio?style=for-the-badge&color=00ff41&labelColor=0a0a0a" alt="GitHub Stars" />
  </a>
  <a href="https://www.linkedin.com/in/gianinna-marquez/">
    <img src="https://img.shields.io/badge/LinkedIn-gianinna--marquez-00ff41?style=for-the-badge&labelColor=0a0a0a&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="https://github.com/Ninna-log/ninna-log-portfolio/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-00ff41?style=for-the-badge&labelColor=0a0a0a" alt="MIT License" />
  </a>
  <a href="https://ninna-log-portfolio.vercel.app">
    <img src="https://img.shields.io/badge/Live%20Demo-Vercel-00ff41?style=for-the-badge&labelColor=0a0a0a&logo=vercel" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <b><a href="https://ninna-log-portfolio.vercel.app">🔴 Live Demo</a></b> •
  <b><a href="#-quick-start">Quick Start</a></b> •
  <b><a href="#-customization-guide">Customization</a></b> •
  <b><a href="#-deployment">Deploy</a></b>
</p>

---

## 👋 About Me

I'm **Gianinna "Ninna" Márquez**, a **Full-Stack & DevOps Engineer** based in Buenos Aires, Argentina.

I have 5+ years of experience building scalable fintech platforms and production microservices at companies like **Mercado Libre**, **AstroPay**, **Osana Salud**, and **NEORIS**. I work across the full stack — from React/TypeScript frontends to Node.js microservices — with a DevOps mindset focused on observability, reliability, and CI/CD. AWS Certified Cloud Practitioner, AWS Developer Associate in progress.

**Stack:** React · TypeScript · Node.js · Microservices · Datadog · Kibana · AWS

This portfolio is a terminal-inspired showcase of my projects, case studies, and technical background.

---

## 🖥️ Preview

> Live at → **[ninna-log-portfolio.vercel.app](https://ninna-log-portfolio.vercel.app)** _(placeholder — update once deployed)_

| Section | What You'll Find |
|---|---|
| 🏠 Home | Animated terminal hero, typewriter effect, neon aesthetic |
| 🛠️ Skills | Visual proficiency indicators across my full stack |
| 📁 Projects | Filterable project cards with tech stack tags |
| 📊 Case Studies | Challenge → Solution → Impact breakdowns with real metrics |
| 📝 Blog | Modal-based reading, view counts, category filters |
| 📬 Contact | Web3Forms-powered contact form, no backend required |

---

## 🚀 Quick Start

```bash
# 1 — Clone the repo
git clone https://github.com/Ninna-log/ninna-log-portfolio.git
cd ninna-log-portfolio

# 2 — Install dependencies
npm install

# 3 — Set up environment (required for the contact form)
cp .env.example .env
# Open .env and add your Web3Forms key (free at web3forms.com)

# 4 — Run locally
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## ✨ Features

### 🎯 Portfolio Core
- **Cyber Terminal Design** — Electric neon green theme, monospace fonts, authentic command-line aesthetic
- **Animated Background** — Dynamic 3D grid
- **Typewriter & Glitch Effects** — Smooth transitions powered by Framer Motion
- **Fully Responsive** — Optimized for desktop, tablet, and mobile
- **Interactive Skill Explorer** — Visual proficiency indicators across the full stack
- **Project Filtering** — Filter projects by technology

### 📝 Interactive Tech Blog (`/blog`)
- Full article modal reading experience
- Real-time view count tracking
- Category filtering (Full-Stack, DevOps, Cloud Infrastructure)
- Search, sort by date / views / likes
- Featured article highlights

### 📊 Case Studies (`/case-studies`)
- Detailed challenge → solution → impact breakdowns
- Realistic performance metrics
- Before/after comparisons
- Full technology stack context per project

### 🛠️ DevOps-Ready Deployment
- Vercel auto-deployment on push to `main`
- SPA redirect rules pre-configured (`vercel.json`)
- Environment variable support for secrets
- Netlify-compatible with one config file

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Routing | React Router DOM 6 |
| Icons | Lucide React |
| Utilities | clsx + tailwind-merge |
| Linter | ESLint 9 |
| Contact Form | Web3Forms (free, no backend) |
| Deployment | Vercel |

---

## ⚠️ Environment Setup (Required for Contact Form)

The contact form uses **[Web3Forms](https://web3forms.com)** — a free service that delivers form submissions to your email.

### Step 1 — Get your free Web3Forms key (30 seconds)
Go to [web3forms.com](https://web3forms.com) → enter your email → copy your access key.

### Step 2 — Set up your local `.env` file
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_WEB3FORMS_KEY=your_access_key_here
```

### Step 3 — Add to Vercel (for production)
In your Vercel project → **Settings** → **Environment Variables**:

| Key | Value | Environments |
|---|---|---|
| `VITE_WEB3FORMS_KEY` | `your_access_key_here` | Production, Preview, Development |

After adding, **redeploy** the project.

> **Never commit your `.env` file.** It is already in `.gitignore`.

---

## 🎨 Customization Guide

### Personal Information

| What to change | File |
|---|---|
| Name, role, bio | `src/data/portfolio.ts` or `src/pages/Home.tsx` |
| Navigation links | `src/components/Navbar.tsx` |
| Footer links + socials | `src/components/Footer.tsx` |
| Skills & proficiency | `src/pages/Skills.tsx` |
| Contact details | `src/data/portfolio.ts` |

### Projects & Case Studies

Edit the `caseStudies` array in:
```
src/components/case-studies/EnhancedCaseStudies.tsx
```

### Blog Posts

Edit the `blogPosts` array in:
```
src/components/blog/EnhancedBlog.tsx
```

### Colors & Branding

```js
// tailwind.config.js
colors: {
  primary: {
    500: '#00ff41',   // primary accent color
  },
  'bg-page':    '#0a0a0a',
  'bg-surface': '#111111',
}
```

---

## 📁 Project Structure

```
ninna-log-portfolio/
├── src/
│   ├── components/
│   │   ├── blog/
│   │   │   └── EnhancedBlog.tsx
│   │   ├── case-studies/
│   │   │   └── EnhancedCaseStudies.tsx
│   │   ├── visual/
│   │   │   └── VisualComponents.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env.example
├── .gitignore
├── vercel.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Deployment

### Vercel (Recommended — Free)

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import the repo
3. Add `VITE_WEB3FORMS_KEY` in **Settings → Environment Variables**
4. Deploy — live in under 2 minutes

### Netlify

```bash
npm run build
# Upload the `dist/` folder to Netlify Drop
```

Create a `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔧 Development Scripts

```bash
npm run dev      # Start dev server (localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

---

## 📱 Browser Support

Chrome, Firefox, Safari, Edge (latest versions) · iOS Safari · Chrome Mobile

---

## 📄 License

MIT

---

## 🔗 Links

- **Live Site**: [ninna-log-portfolio.vercel.app](https://ninna-log-portfolio.vercel.app) _(update once deployed)_
- **GitHub**: [github.com/Ninna-log](https://github.com/Ninna-log)
