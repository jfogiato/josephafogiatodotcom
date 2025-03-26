# Joseph A. Fogiato Dot Com

This is my personal website built with **Next.js** & **Tailwind CSS**, deployed on **Vercel**. It showcases my work in **photography, software projects, and other creative pursuits**.

## Live Site

🔗 **[fogiato.com](https://fogiato.com)**

## Features

- **Minimalist Design** → Clean, responsive UI with dark mode support.
- **Photography Portfolio** → Browse photos from my travels & projects.
- **Software Projects** → Expandable sections with GIFs & links to GitHub repos.
- **Floating Bug Report Button** → Report issues & request features directly in GitHub.
- **Global Navigation** → Dynamic page links with smooth transitions.

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/jfogiato/josephafogiatodotcom.git
cd josephafogiatodotcom
npm install
```

### Run Locally

Start the local development server:

```bash
npm run dev
```

Then open **[localhost:3000](http://localhost:3000)** in your browser.

## 📂 Project Structure

```
/src
 ├── app/                    # Next.js app directory (pages & layouts)
 │   ├── whoami/             # "About Me" page
 │   ├── software/           # Software projects section
 │   ├── film/               # Film photography section
 │   ├── [page]/             # Additional photography pages...
 │   ├── layout.tsx          # Root layout with global styles
 ├── components/             # Reusable UI components
 │   ├── Header.tsx          # Persistent header with navigation
 │   ├── BugReportButton.tsx # Floating bug report button
 │   ├── ImageBlog.tsx       # Blog template for photo pages
 │   ├── [Component].tsx...  # Other reusable components...
 ├── public/images/          # Static assets (backgrounds, photos, icons)
 ├── styles/                 # Global Tailwind CSS styles
 ├── next.config.ts          # Next.js configuration
```

## 📦 Built With

- **[Next.js](https://nextjs.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)**
- **[Lucide Icons](https://lucide.dev/)**
- **[Vercel](https://vercel.com/)**

## 🚀 Deploying

This site is deployed automatically via **Vercel**.

To build for production locally:

```bash
npm run build
```

Then run:

```bash
npm start
```

## 🐛 Reporting Bugs & Feature Requests

Found a bug? Have a feature idea? **Click the floating bug icon** 🐞 at the bottom-right of any page, or submit directly:  
🔗 **[GitHub Issues](https://github.com/jfogiato/josephafogiatodotcom/issues)**
