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
- `reglement-interieur.pdf` — Règlement Intérieur (school rules; French original, likely no EN version needed)
- `transport-bus-routes-en.pdf` / `transport-bus-routes-fr.pdf` — transport & bus routes
- `canteen-info-en.pdf` / `canteen-info-fr.pdf` — canteen information / menus

## Registration form

The registration form is a separate case — it belongs on the **Admissions**
page (step 3, "Submit an application"), not duplicated here in Parents. Once
the PDF exists, link it from `content.js`'s `admissions.steps[2]` entry rather
than adding it to this list.
