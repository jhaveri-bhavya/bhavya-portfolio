# Editing this website

A guide for making common changes yourself, without needing help for every small edit.

## The site is bilingual

The site exists in two languages:

- **English** — https://jhaveri-bhavya.github.io/bhavya-portfolio/
- **German** — https://jhaveri-bhavya.github.io/bhavya-portfolio/de/

The `EN | DE` switch in the top-right corner links between them. Both languages are built
from the *same* components — only the words differ, and all the words live in one file.

## Where each section of the page lives

The homepage is assembled from small component files in `src/components/`. Each visible
section on the site maps to one file for its **layout**, and to one block in
`src/i18n/ui.ts` for its **text**:

| What you see on the page          | Text lives in (`src/i18n/ui.ts`) | Layout lives in           |
|------------------------------------|----------------------------------|---------------------------|
| Top banner (name, photo, bio, buttons) | `hero`                       | `src/components/Hero.astro` |
| Experience                         | `experience`                     | `src/components/Experience.astro` |
| Education                          | `education`                      | `src/components/Education.astro` |
| Skills                             | `skills`                         | `src/components/Skills.astro` |
| Blog list                          | `blog`                           | `src/components/Blog.astro` |
| Contact                            | `contact`                        | `src/components/Contact.astro` |
| Top navigation bar                 | `nav`                            | `src/components/Navbar.astro` |
| Page title / Google description    | `meta`                           | `src/layouts/Layout.astro` |
| Footer                             | — (no translatable text)         | `src/components/Footer.astro` |

The order sections appear in, and which ones are shown or hidden, is controlled by
`src/components/Home.astro` — shared by both languages, so you only change it once.
The two route files (`src/pages/index.astro` and `src/pages/de/index.astro`) just render it.

## Making a text/content change

**Almost every text edit happens in one file: `src/i18n/ui.ts`.**

Open it and you'll find two big blocks — `en:` and `de:` — with the same keys in each:

```ts
contact: {
  heading: 'Get in touch',
  sub: 'Open to collaborations, research opportunities, and internships.',
},
```

Find the text you want to change and edit it between the quotes. **Change it in both the
`en:` and the `de:` block**, otherwise one language will still show the old wording.

Longer content is stored as lists — the hero bio is a list of paragraphs, each job has a
list of bullet points, and education is a list of entries. Add or remove items there rather
than touching the markup.

### The one rule

`en` and `de` must stay the **same shape**: the same keys, and lists of the same length. If
English has 4 bio paragraphs, German needs 4 too.

You don't have to remember this — `npm run build` checks it and fails with the exact thing
that's missing, for example:

```
[i18n] de: missing translation for "blog.back". Add it to the "de" block in src/i18n/ui.ts.
```

That's a good thing: it means a half-finished translation can never reach the live site.

### Adding or fixing German text

Just edit the value in the `de:` block and rebuild. A few conventions already used there:

- Technical terms stay in English (*Machine Learning*, *Deep Learning*, *Generative AI*,
  *RAG*, *Retrieval*), the way German tech job ads write them.
- Proper nouns are never translated: your name, company names (eMoveUs, Dassault Systèmes),
  universities, and the skill tags (PyTorch, Docker, FastAPI…).
- German uses a comma as the decimal separator — `Note 2,3`, not `Grade 2.3`.

### What is *not* in `ui.ts`

- **Blog posts** — these stay in English in `src/content/blog/`. The German blog list says so
  automatically (`blog.langNote`).
- **Skill tags** — product names, kept in `src/components/Skills.astro`. Only the four
  category headings are translated.
- **Styling** — the `class="..."` attributes in the components. Leave those alone unless you
  specifically want to change how something looks.

## Adding another language later

1. Add the language code to `i18n.locales` in `astro.config.mjs`.
2. Copy the whole `en:` block in `src/i18n/ui.ts` to a new block (e.g. `fr:`) and translate it.
3. Create `src/pages/fr/index.astro` and `src/pages/fr/blog/[...slug].astro` by copying the
   two files in `src/pages/de/` and fixing the import paths.

The language switch picks new languages up automatically — it is built from the list in
`ui.ts`, so there is nothing to change in the navbar.

## Running the site locally to check a change

You don't need to guess whether a change looks right — always check it locally first.

**Option A — Node dev server** (auto-reloads as you edit):
```bash
npm install
npm run dev
```
Then open http://localhost:4321/bhavya-portfolio/ (German: http://localhost:4321/bhavya-portfolio/de/)

**Option B — Docker** (matches production more closely, no local Node install needed):
```bash
docker compose up --build
```
Then open http://localhost:8080/bhavya-portfolio/ (German: http://localhost:8080/bhavya-portfolio/de/)

Use `--build` whenever you've made changes, so Docker rebuilds instead of reusing an old
image. Stop it with `Ctrl+C`, then `docker compose down`.

**Build check** (catches errors, including a missing German translation, before you commit):
```bash
npm run build
```

## Git workflow: saving and publishing a change

1. **Create a branch** for your change (don't edit `main` directly):
   ```bash
   git checkout main
   git pull
   git checkout -b my-change-name
   ```
2. **Make your edits**, then check them locally (see above).
3. **Commit**:
   ```bash
   git add <changed files>
   git commit -m "Describe what changed"
   ```
4. **Push**:
   ```bash
   git push -u origin my-change-name
   ```
5. **Merge into `main`** — either open a Pull Request on GitHub (it'll show a link after
   the push) and merge it there once you're happy, or merge locally:
   ```bash
   git checkout main
   git pull
   git merge my-change-name
   git push
   ```

Once `main` is updated, GitHub Actions (`.github/workflows/deploy.yml`) automatically
builds and publishes the site to https://jhaveri-bhavya.github.io/bhavya-portfolio/ —
no manual deploy step needed.

## Switching branches in VS Code

Click the branch name in the bottom-left status bar and pick a branch from the list. If a
branch was created on GitHub and doesn't show up yet, run **Fetch** first (`...` menu in
the Source Control panel, or the sync icon in the status bar).
