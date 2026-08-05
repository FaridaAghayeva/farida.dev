# Farida Aghayeva — Portfolio

A responsive Vue 3 portfolio built with Vite and Vue Router. The project is driven from a single content source, with a soft pastel developer-themed visual system and reusable tech-chip styling.

## Project overview

This portfolio includes:

- a landing page hero with profile visual
- an about page with featured stack, skills, languages, and resume download
- work experience and education timelines
- awards and scholarship highlights
- contact and social links

## Routes

- `/` — Home
- `/about` — About me
- `/experience` — Work experience
- `/education` — Education and training
- `/awards` — Awards and recognition
- `/socials` — Social profiles
- `/contact` — Contact page

## Run locally

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

## Content source

Most portfolio content is centralized in:

```text
src/data/resume.js
```

Update the profile, summary, skills, experience, education, awards, languages, and social links there to keep all pages in sync.

## Resume download

The portfolio includes a download action for the CV. The file is stored in the source assets and exposed through the profile data object in:

```text
src/data/resume.js
```

## Styling

Global visual tokens and shared layout helpers live in:

```text
src/assets/main.css
```

## Stack

- Vue 3
- Vue Router 4
- Vite
- Sass via `sass-embedded`

## Deployment

This is a static Vite app, so it can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

Typical production flow:

```bash
npm run build
```

Then publish the generated `dist/` folder.

