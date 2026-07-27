# www.laneluo.com

Personal academic website for Lan E. Luo, Assistant Professor of Marketing at the
Yale School of Management. Hand-written static HTML and CSS, no build step and no
dependencies. Pushing to `main` publishes.

## Editing

| File | Holds |
| --- | --- |
| `index.html` | Bio, headshot, link row, and the three research sections |
| `teaching.html` | Course materials, research opportunities, teaching history |
| `credentials.html` | Employment, education, awards, doctoral coursework |
| `cv.html` | Embedded PDF viewer and download button |
| `fun.html` | Books, past-life awards, band videos |
| `404.html` | Shown for any address that does not exist |
| `assets/style.css` | The whole design system, one file |
| `assets/theme.js` | Dark/light toggle |

The navbar and footer are repeated verbatim in each page. Changing a nav item means
editing all six files, including `404.html`. That is the cost of having no build
step, and at six pages it is cheaper than a generator.

### Adding a paper

Copy an existing `<li>` inside the relevant `<ol class="pubs">`. Wrap your own name
in `<span class="me">` so it bolds. The `<details class="abstract">` block is
optional; leave it out and the entry simply has no abstract toggle.

### Replacing the CV

Overwrite `assets/cv.pdf`. Nothing else references the filename.

## Design

Palette, type scale, and the accent bar under each `h2` are ported from
`~/teaching/sample-ai-course/assets/yale-site.scss`, so the site reads as one system
with the Quarto lecture decks. Light-mode values come from `yale-talk.scss`.

Dark is the default, including for visitors whose OS prefers light; only an explicit
click on the toggle overrides it, and that choice persists in `localStorage`. Each
page repeats a small script in `<head>` that applies the stored theme before first
paint, which is what keeps a light flash off the screen.

Yale blue `#00356b` measures 1.4:1 against the dark ground, so on the dark theme it
appears only in the navbar, where white on it is 12.2:1. On the light theme it
becomes the heading ink. That is why `--accent` holds a different hue per theme
rather than one shared value.

Fonts are system stacks. A webfont would make every page fetch at display time.

## Legacy URLs

The old Google Sites paths (`/about`, `/education`, `/experience`, `/cv`,
`/fun-facts`) each have a directory with a redirect stub, so inbound links from the
previous site keep working.

## Local preview

```
python3 -m http.server 8847
```

Then open <http://127.0.0.1:8847/>. Serve over HTTP rather than opening the files
directly; `file://` breaks the absolute asset paths in `404.html`.

## Hosting

GitHub Pages serves `main` at the repository root. `.nojekyll` is present so Jekyll
does not process the tree. The custom domain is set by the `CNAME` file plus the DNS
records at Squarespace, which is the registrar for `laneluo.com`.
