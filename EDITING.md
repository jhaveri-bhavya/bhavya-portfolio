# Editing this website

A guide for making common changes yourself, without needing help for every small edit.

## Where each section of the page lives

The homepage (`src/pages/index.astro`) is assembled from small component files in
`src/components/`. Each visible section on the site maps to one file:

| What you see on the page          | File to edit                          |
|------------------------------------|----------------------------------------|
| Top banner (name, photo, bio, GitHub/LinkedIn buttons) | `src/components/Hero.astro` |
| Experience                         | `src/components/Experience.astro`     |
| Education                          | `src/components/Education.astro`      |
| Skills                             | `src/components/Skills.astro`         |
| Blog list                          | `src/components/Blog.astro`           |
| Contact form + social links        | `src/components/Contact.astro`        |
| Top navigation bar                 | `src/components/Navbar.astro`         |
| Footer                             | `src/components/Footer.astro`         |

The order sections appear in on the page, and which ones are shown/hidden, is controlled
by `src/pages/index.astro`.

## Making a text/content change

Most edits are just changing text inside a file — for example, in `Education.astro` you'll
find plain HTML-like blocks such as:

```html
<p class="text-sm font-medium text-zinc-900 dark:text-zinc-100">M.Sc. Applied AI &amp; Robotics</p>
<p class="text-xs font-bold text-zinc-900 dark:text-zinc-100">March 2025 – March 2027</p>
```

You can open the file, find the text you want to change, and edit it directly (in VS Code,
or by asking Claude Code to do it). The `class="..."` attributes control styling — leave
those alone unless you specifically want to change how something looks.

Things like `Experience.astro` and `Skills.astro` keep their content in a small array near
the top of the file (e.g. a list of jobs, or a list of skill categories) — edit the entries
in that array rather than the markup below it.

## Running the site locally to check a change

You don't need to guess whether a change looks right — always check it locally first.

**Option A — Node dev server** (auto-reloads as you edit):
```bash
npm install
npm run dev
```
Then open http://localhost:4321/bhavya-portfolio/

**Option B — Docker** (matches production more closely, no local Node install needed):
```bash
docker compose up --build
```
Then open http://localhost:8080/bhavya-portfolio/

Use `--build` whenever you've made changes, so Docker rebuilds instead of reusing an old
image. Stop it with `Ctrl+C`, then `docker compose down`.

**Build check** (catches errors before you commit):
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
