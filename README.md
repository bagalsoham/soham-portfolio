# Soham Bagal — macOS Portfolio

A macOS-style interactive portfolio website built with Next.js 14 + Tailwind CSS.

## ✨ Features
- macOS desktop simulation with draggable windows
- Menu bar with clock & dropdown menus
- Dock with magnification effect & open-app indicators
- 5 windows: About, Terminal (Skills), Projects, Experience, Contact
- Fully responsive dark theme

## 🚀 Local Development

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## 📦 Deploy to Vercel (Free)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "init: soham portfolio"
git remote add origin https://github.com/YOUR_USERNAME/soham-portfolio.git
git push -u origin main
```

### Step 2 — Deploy
1. Go to [vercel.com](https://vercel.com) → Sign in with GitHub
2. Click **"Add New Project"** → Import your repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** → Live in ~60 seconds ✅

## 🌐 Custom Domain

### Buy a domain
- [Namecheap](https://namecheap.com) — ~$10/yr for `.com`
- [Cloudflare Registrar](https://cloudflare.com/registrar) — at-cost pricing

### Connect to Vercel
1. Vercel Dashboard → Your project → **Settings → Domains**
2. Add your domain (e.g. `sohambagal.dev`)
3. Copy the Vercel DNS records shown
4. Go to your domain registrar → DNS settings → paste the records
5. Wait 5–10 mins → HTTPS auto-configured ✅

**Recommended domains:**
- `sohambagal.dev` ($12/yr)
- `sohambagal.com` ($12/yr)
- `soham.tech` ($10/yr)

## 🖼️ Adding Your Photo

1. Add your photo as `public/avatar.jpg`
2. In `components/windows/AboutWindow.jsx`, replace the emoji `🧑‍💻` with:
```jsx
<img
  src="/avatar.jpg"
  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
  alt="Soham Bagal"
/>
```

## 📧 Real Contact Form (EmailJS)

1. Sign up at [emailjs.com](https://emailjs.com) (free)
2. Create a service + template
3. Install: `npm install emailjs-com`
4. In `ContactWindow.jsx`, replace the mailto with:
```js
import emailjs from 'emailjs-com';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

## 📁 Project Structure

```
soham-portfolio/
├── app/
│   ├── layout.js       # SEO metadata
│   ├── page.js         # Entry point
│   └── globals.css     # macOS design tokens + styles
├── components/
│   ├── Desktop.jsx     # Window state management
│   ├── MacWindow.jsx   # Draggable window chrome
│   ├── MenuBar.jsx     # Top menu bar
│   ├── Dock.jsx        # Bottom dock
│   └── windows/
│       ├── AboutWindow.jsx
│       ├── SkillsWindow.jsx
│       ├── ProjectsWindow.jsx
│       ├── ExperienceWindow.jsx
│       └── ContactWindow.jsx
```

## 🎨 Customization

All personal data is in the window components — no config file needed.
- **Colors**: `app/globals.css` CSS variables
- **Projects**: `components/windows/ProjectsWindow.jsx`
- **Experience**: `components/windows/ExperienceWindow.jsx`
- **Skills**: `components/windows/SkillsWindow.jsx`
