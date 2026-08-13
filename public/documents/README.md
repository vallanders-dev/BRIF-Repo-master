# Parents documents

Files placed here are served verbatim at `brif.one/documents/<filename>`. These
URLs get pasted into emails and WhatsApp messages, so once a file is live,
keep its filename permanent — replace the file in place rather than renaming it.

This file itself is never deployed as a public document (Astro only publishes
what's referenced from a page); it's just a checklist for whoever adds files here.

To wire a file up once it's added, set its `status` to `'available'` and add
an `href` in the matching `documents` entry for `parentsHub` in
`src/data/content.js` (English and French objects both), e.g.:

```js
{ title: 'School supply lists', description: '…', status: 'available', href: '/documents/supply-lists-2026-2027.pdf' }
```

## Expected files (none exist yet)

- `supply-lists-2026-2027-en.pdf` / `supply-lists-2026-2027-fr.pdf` — per-level school supply lists
- `uniform-dress-code-en.pdf` / `uniform-dress-code-fr.pdf` — uniform & dress code
- `transport-bus-routes-en.pdf` / `transport-bus-routes-fr.pdf` — transport & bus routes
- `canteen-info-en.pdf` / `canteen-info-fr.pdf` — canteen information / menus

## Règlement Intérieur — different pattern, not in this folder

The Règlement Intérieur (Internal Regulations) is **not** a downloadable file
here. Per the school's request, it's view-only: the source PDF was rasterized
into per-page images at `public/images/reglement-interieur/page-01.png`
… `page-14.png` (see `reglementInterieurPages` in `content.js`) and rendered
inline as a scrollable image gallery at `/en/parents/internal-regulations/`
and `/fr/parents/reglement-interieur/` — no PDF link, no browser download
button, non-draggable images, right-click disabled on the viewer.

Be upfront with the school about what this actually buys them: on a public
website with no login, nothing stops a determined visitor from screenshotting,
screen-recording, or opening dev tools to fetch the images directly. This
removes the *casual* "right-click → save as PDF" path — it is not DRM and
shouldn't be described as making the document impossible to copy.

If another document ever needs this same "view but don't casually download"
treatment, follow the same recipe: rasterize to `public/images/<doc-name>/`,
add a shared page-list export in `content.js`, and give it its own page
using `ReglementInterieurPage.astro` as the template.

## Registration form

The registration form is a separate case — it belongs on the **Admissions**
page (step 3, "Submit an application"), not duplicated here in Parents. Once
the PDF exists, link it from `content.js`'s `admissions.steps[2]` entry rather
than adding it to this list.
