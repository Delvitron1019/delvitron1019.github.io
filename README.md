# Portfolio

A static portfolio site — plain HTML, CSS, and JavaScript. No build step, no
dependencies, no npm. Open `index.html` in a browser and it works.

```
portfolio/
├── index.html              home page
├── projects/<slug>/        one folder per project detail page
├── css/styles.css          base styling; change --accent to recolour the site
├── css/project.css         detail-page styling
├── css/skin-anime.css      optional anime skin (overrides only)
├── js/data.js              ← YOUR CONTENT LIVES HERE
├── js/common.js            shared helpers, theming, skins
├── js/main.js              home-page rendering
├── js/project.js           detail-page rendering
└── assets/                 icons, og-image, resume.pdf
```

## Project detail pages

Each project with a `slug` and a `detail` block in `data.js` gets its own page
at `/projects/<slug>/`, following a fixed narrative:

**Problem → Data → Approach → Model → Results → Deployment → Limitations**

That order is the point. It's what makes the work read as machine learning
rather than as a repo tour — a reviewer can see how you framed the problem,
what you compared against, and where you think it breaks. Omit any key in
`data.js` and its section simply disappears from the page.

Two of those sections carry more weight than the others:

- **Results** takes a `table` with a `highlight` index marking your own model,
  so the baseline comparison is legible at a glance. A results table with only
  your own row filled in is worse than no table.
- **Limitations** is the section that buys credibility. Naming where your work
  breaks reads as confidence and pre-empts the question an interviewer was
  going to open with.

To add a project: give it a `slug` and a `detail` block in `data.js`, then copy
any folder under `projects/` and change the `PROJECT_SLUG` value plus the title
and description meta tags. The `<head>` is static on purpose — link unfurlers
don't run JavaScript, so per-page titles and og tags have to be real HTML.

## Two skins

The site ships with two looks, sharing one set of content:

- **`anime`** (current default) — night-sky gradients, glass panels, sakura
  accents, gradient headline, Japanese section labels, drifting petals.
- **`technical`** — clean, understated, engineering-forward.

Compare them without editing anything:

```
http://localhost:8000/?skin=anime
http://localhost:8000/?skin=technical
```

To set what visitors get by default, change `site.skin` in `js/data.js`. The
header also carries a style switcher so visitors can flip between them; set
`site.showSkinToggle: false` if you'd rather commit to one look.

`anime` is the shipping default, with the toggle left in so anyone who wants
the plain version can get it in one click. If you ever want to flip it for a
specific application — a conservative shop, a formal referral — change
`site.skin` to `"technical"` and redeploy; the content is identical either way,
so nothing else needs touching.

The petals are decoration only — they're skipped entirely under
`prefers-reduced-motion` and on screens under 640px, and both skins clear WCAG
AA contrast in light and dark.

## Editing

Everything you write lives in **`js/data.js`** — it's already filled in from
your résumé. Anything still starting with `TODO:` is highlighted in yellow on
the page and counted in the browser console, so you can see at a glance what's
left. Replace the text and the highlight disappears.

To preview while editing, open `index.html` directly, or run a local server so
the clipboard and fetch APIs behave normally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What's left

Content is populated from `Dev_Resume.pdf`. One thing remains:

**Project links.** All four projects are real and written up, but every `links`
entry still points at a placeholder, so nothing in the Projects section is
clickable. A portfolio project with no repo behind it is the one thing a
reviewer will notice, so this is the highest-value hour you can spend on the
site. A public repo with a decent README is enough; a live demo of the T5
summarizer would be better. Drafts for all four repo READMEs are in
`../project-readmes/`.

Optional, worth doing before you send the link widely:

- **Rewrite the About paragraphs.** I drafted them from your résumé, so they're
  accurate but they're my voice, not yours. Say it how you'd say it out loud.
- **Add `og:url` and `og:image`** in `index.html` once you have a domain, so
  LinkedIn and email previews render properly.

## Keeping the résumé current

`assets/resume.pdf` is a copy, not a link. When you update the original, copy
it over again:

```bash
cp ~/Downloads/Dev_Resume.pdf portfolio/assets/resume.pdf
```

If the file is ever missing, the Résumé button removes itself rather than
leaving a dead link.

## Deploying

The site is host-agnostic — all paths are relative, so it works from any
subdirectory on any of these.

### GitHub Pages

The repo doubles as something recruiters can browse, which is why it's worth
picking for a job-hunting site.

```bash
git init && git add -A && git commit -m "Portfolio site"
```

Create a repo named `<your-username>.github.io`, then:

```bash
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git branch -M main && git push -u origin main
```

In the repo: **Settings → Pages → Source: main / (root)**. Live at
`https://<your-username>.github.io` in a minute or two. The included
`.nojekyll` file stops Jekyll from touching the output.

### Vercel

```bash
npx vercel --prod
```

Accept the defaults; there's no framework or build command to configure. Or
import the GitHub repo at vercel.com for automatic deploys on every push.

### Netlify

Drag the `portfolio` folder onto the drop zone at
[app.netlify.com/drop](https://app.netlify.com/drop) — that's the whole
process. For automatic deploys, connect the GitHub repo instead and leave the
build command empty with the publish directory set to `/`.

## Before you share the link

- [ ] No yellow highlights left on the page
- [ ] Every project link opens something real
- [ ] Decide which skin ships (`site.skin` in `js/data.js`)
- [ ] Check it on your phone — the layout is responsive, but read your own copy at that width
- [ ] Toggle to light mode and look again; recruiters won't all be on dark
- [ ] Update the `og:title` / `og:description` meta tags in `index.html` so link previews look right in LinkedIn and email
- [ ] Ctrl+P → the print stylesheet gives you a clean PDF of the whole site

## Notes

- Dark by default; follows the visitor's system preference on first load and
  remembers their toggle afterwards.
- No external requests — no CDN, no web fonts, no analytics. It loads instantly
  and works offline.
- Accessibility: skip link, keyboard-navigable, visible focus rings, and
  animations disabled under `prefers-reduced-motion`.
