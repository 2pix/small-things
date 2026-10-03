# Small Things — Index

---
what-this-is: Index of the Small Things folder.
created: 2026 Oct 3
last-updated: 2026 Oct 3
maintained-by: Any session touching files in this folder.
theme: Working copy of the artofsmallthings.com Jekyll site (2pix/small-things, staging branch): Black Cat, The Floor and The Art of sections. The food project is the entry point to the whole practice, and this site is its public face. Edits here must be synced back to the real repo before they build - the README carries the rule.
next-up: Reconfigure the site repo to point at 2pix/sandbox instead of the old vault (Task.md, artofsmallthings.com design).
---

*Index sweep 2026 Oct 3; stub lines rewritten from the actual files 2026 Oct 3. One line per file. Prune and reword as the folder earns real entries.*

---

- `00-README.md` - how this folder is a working copy of the `2pix/small-things` site (branch `staging`), what was excluded from the copy, and the standing rule that edits here must be synced back to the real repo before they build or go live.
- `Gemfile` - Jekyll dependency file. Pins the `github-pages` gem so the site builds the same on GitHub Pages as anywhere else.
- `SEO Descriptions — Registry.md` - every post's search description in one place; the read-through and revision surface for the descriptions. Revise there + frontmatter, never the scene (RULES.md rule 1).
- `RULES.md` - the site's standing rules: do-not-SEO-the-novel (rule 1), mobile-first, palette, sync-back, one identity. Read before editing anything here.
- `black-cat/line.md` - the Line: the whole novel on one vertical line, exact web titles, publication dates, story-year bands, Lies as diamonds. /black-cat/line/ on build.
- `black-cat-line-map.html` - the standalone preview of the Line (same content, no Jekyll needed).
- `toggles-preview.html` - standalone preview of the reading toggles (Sepia + Easy read).
- `README.md` - the site's identity in six words: Black Cat + Art of Small Things.
- `SHORTCODES.md` - cheat sheet of reusable Jekyll includes (YouTube embed, image with caption) so posts stay visually consistent without hand-typing wrapper markup.
- `_config.yml` - Jekyll site config: title, url (`artofsmallthings.com`), permalink shape, and the three sections the site is built around: Black Cat, The Floor, The Art of.
- `index.html` - homepage. Two lines of frontmatter pointing at the home layout; the content lives in the layout and the section pages.

---
Footnote
---

## How to update this index

Add or amend one line for any file touched in this folder, in this pass. Refresh `last-updated` in the frontmatter from the real clock. If the folder grows past a stub's usefulness, rewrite it by hand per `Kronos/Protocols/Index — The Protocol.md`.

## 2026 Oct 3 — created in the vault-wide index sweep

Claire asked every folder without an index to get one. First pass was an auto-generated file listing; the stub lines have since been rewritten from the files themselves.
## 2026 Oct 3 - frontmatter upgraded (Claire's spec)

Frontmatter upgraded per Claire's 2026 Oct 3 index spec: next-up added (Reconfigure the site repo to point at 2pix/sandbox instead of the old vault); last-updated refreshed to 2026 Oct 3. what-this-is, created and maintained-by carried over unchanged.

Also repaired stray line-number prefixes ("N|N|") left on every line of this file by an earlier pass; no body content was rewritten.
