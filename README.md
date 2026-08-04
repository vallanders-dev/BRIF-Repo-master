# British & French Academy (BRIF) — Website

A bilingual (English / French) static website for British & French Academy,
Cotonou, Benin. Built with [Astro](https://astro.build). No database, no
server code — it compiles to plain HTML/CSS/JS that you host anywhere,
including OVH shared hosting.

---

## 1. Prerequisites

You need [Node.js](https://nodejs.org) version 18 or newer.
Check with:

```bash
node --version
```

## 2. First-time setup

From this folder, install dependencies once:

```bash
npm install
```

## 3. Preview locally

```bash
npm run dev
```

Then open the URL it prints (usually `http://localhost:4321`).
The site auto-reloads as you edit. Visit:

- `http://localhost:4321/en/` — English home
- `http://localhost:4321/fr/` — French home

## 4. Build for production

```bash
npm run build
```

This creates a **`dist/`** folder containing the finished static site.
Everything a browser needs is inside `dist/`.

You can double-check the built site with:

```bash
npm run preview
```

---

## 5. Deploying

### Recommended flow: preview online first, then OVH

1. Push this project to a **GitHub** repo.
2. Connect the repo to **Netlify** or **Vercel** (both free).
   - Build command: `npm run build`
   - Publish directory: `dist`
   They give you a live preview URL to share with the school for sign-off.
3. Once approved, upload to OVH (below).

### Uploading to OVH (shared hosting)

1. Run `npm run build`.
2. Open OVH's file manager or an SFTP client (FileZilla).
3. Upload **the contents of `dist/`** (not the folder itself) into your
   web root — usually `www/` on OVH.
4. Point the `brif.one` domain at the hosting (OVH DNS panel).

Because the site is static, OVH serves it with zero configuration.
The included `.htaccess` (see below) handles clean URLs and the language
redirect if needed.

---

## 6. Editing content

Almost all text lives in **one file**:

```
src/data/content.js
```

Open it, find the English (`en:`) or French (`fr:`) block, edit the text,
save, and rebuild. Shared details (name, phone, email, address, Facebook
URL) are at the top of that file in the `site` object.

### Common edits

| I want to change…                | Edit…                                             |
|----------------------------------|---------------------------------------------------|
| Phone, email, address, Facebook  | `site` object at top of `src/data/content.js`     |
| Any page's words                 | the matching block in `src/data/content.js`       |
| News items                       | the `news` object at the bottom of that file      |
| Colours                          | `:root` variables in `src/styles/global.css`      |
| The logo                         | replace files in `public/images/`                 |

---

## 7. Making the enrolment form live

The form (on `/en/enrol/` and `/fr/inscription/`) currently falls back to
opening the parent's email app. To collect submissions properly:

1. Create a free account at [Web3Forms](https://web3forms.com) or
   [Formspree](https://formspree.io).
2. Copy your form endpoint / access key.
3. Paste it into `formEndpoint` in the `site` object in
   `src/data/content.js`.
4. Rebuild. Submissions now arrive in your inbox as structured data.

---

## 8. Facebook feed

The News page includes the official Facebook Page Plugin. It only renders
on the **published** site (it needs a public URL). Make sure the
`facebook` URL in the `site` object points to the real page. The styled
news cards above it are edited manually in `src/data/content.js`.

---

## 9. Photos

Real photos make a school site. Placeholders (marked 📷) are in Student
Life and News. To add real images:

1. Put photos in `public/images/`.
2. Replace the placeholder markup in the relevant component in
   `src/components/` with an `<img src="/images/yourphoto.jpg" …>`.

Ask your developer if you'd like help wiring specific photos in.

---

## Project structure

```
src/
  data/content.js      ← ALL text content (edit here)
  i18n/ui.js           ← nav labels + URL routing per language
  styles/global.css    ← colours, fonts, design system
  layouts/Base.astro   ← page shell (head, header, footer)
  components/           ← reusable pieces + one file per page
  pages/
    index.astro        ← redirects / → /en/
    en/ , fr/          ← the actual pages per language
    404.astro
public/
  images/              ← logo, favicon, your photos
  scripts/interactions.js  ← button/scroll/counter effects
```
