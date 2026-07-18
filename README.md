# Farida Aghayeva — Portfolio

A multi-page Vue 3 portfolio site (Vite + Vue Router), built from the resume content. Soft-pastel
"developer" visual language: the header nav reads like editor tabs (`~/about`, `~/projects`…),
and every technology gets a consistent colour used as a chip throughout the site — so Vue, React,
Laravel and the MERN stack are visible at a glance instead of buried in a plain skills list.

## Pages

| Route            | Content                                   |
|-------------------|--------------------------------------------|
| `/`                | Hero, photo frame, floating stack chips   |
| `/about`           | Summary, featured stack, full skills grid, languages |
| `/experience`      | Work history timeline                     |
| `/education`       | Degrees & training                        |
| `/projects`        | Project cards (edit with your real repos) |
| `/awards`          | Hackathon / competition recognition       |
| `/scholarships`    | Scholarship awards                        |
| `/socials`         | GitHub / LinkedIn / email                 |
| `/contact`         | Contact details + a working contact form  |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

Build for production:

```bash
npm run build
npm run preview
```

## Add your photo

Drop a photo named **`profile.jpg`** into the `public/` folder. The homepage hero automatically
picks it up inside the browser-window frame; if it's missing, a soft gradient placeholder with
your initials shows instead — so the site never breaks without it.

## Edit your content

Everything (name, summary, experience, education, projects, awards, scholarships, socials,
skills) lives in one file:

```
src/data/resume.js
```

Update the arrays there and every page updates automatically. Tech-chip colours are defined once
in `src/data/techColors.js`.

## Contact form

The contact form has no backend — submitting it opens the visitor's email client with a
pre-filled message addressed to you (a `mailto:` link). To wire it up to a real inbox instead,
swap the `submit()` function in `src/views/Contact.vue` for a call to a form service (e.g.
Formspree, Getform) or your own API endpoint.

## Deploying

This is a static Vite build, so it deploys anywhere static hosting is supported:

- **Vercel / Netlify**: import the repo, framework preset "Vite", build command `npm run build`,
  output directory `dist`.
- **GitHub Pages**: run `npm run build`, then publish the `dist/` folder (add a `base` path in
  `vite.config.js` if the repo isn't served from the domain root).

## Stack

Vue 3, Vue Router 4, Vite. No UI framework — all styling is hand-written CSS using a small set of
design tokens in `src/assets/main.css`.

