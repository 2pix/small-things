---
layout: post
title: "Style Guide"
subtitle: "Every text element on the site, in one place, for tuning sizes and spacing"
category: the-floor
permalink: /style-guide/
date: 2026-07-18
---
Filed here for now, under The Floor — likely to move once UX has its own real place on the site. Every heading level, blockquote, list, and shortcode the site currently knows how to render, shown together so sizing and spacing can be tuned in isolation rather than hunting through actual posts. Still a working draft, not finished prose.

{% include divider.html %}

### Heading levels

# H1 — used for post titles (`.post__title`) and section labels (`.section-label`)

## H2 — used for post-card titles in feeds (`.post-card__title`)

### H3 — not currently used anywhere on the site, default browser size

#### H4 — not currently used anywhere on the site, default browser size

##### H5 — not currently used anywhere on the site, default browser size

###### H6 — not currently used anywhere on the site, default browser size

{% include divider.html %}

### Subtitle

*This is what `.post__subtitle` / `.post-card__subtitle` looks like — italic, sits directly under a title, used for the "Lie 40." style epigraph line.*

### Meta line

<p class="post__meta">the-floor · 18 Jul 2026</p>

This is `.post__meta` — small caps-adjacent sans, low opacity, sits under the subtitle on an actual post page.

{% include divider.html %}

### Body paragraph

This is a standard paragraph inside `.post__body` — the reading type, Noto Serif, the size and line-height every scene and essay actually reads at. A second sentence here so line-wrapping and paragraph-to-paragraph spacing can be seen, not just a single line in isolation. A third sentence, longer than the others, specifically so a paragraph wraps across three or four lines at typical phone width, the way real prose actually does.

A second paragraph, to show the gap between paragraphs (`margin-bottom: var(--space-3)` currently) — is it too tight, too loose, once real prose sits here instead of a placeholder line.

{% include divider.html %}

### Diamond divider

The scene-break used throughout Black Cat pieces:

{% include divider.html %}

### Pull-quote

{% include pull-quote.html text="This is the pull-quote shortcode — accent-coloured left border, italic, breaks out of the paragraph flow for a line worth setting apart." attribution="Optional attribution line" %}

### Plain markdown blockquote

> This is a plain `>` blockquote, no shortcode, no custom class — currently unstyled, just whatever the browser does by default. Worth deciding: does this need its own look, or should every quote in practice just use the pull-quote shortcode instead?

{% include divider.html %}

### Lists

Currently unstyled — browser defaults, not yet designed:

- An unordered list item
- A second unordered list item
- A third, slightly longer unordered list item, to see how a wrapped line looks against the bullet indent

1. An ordered list item
2. A second ordered list item
3. A third ordered list item

{% include divider.html %}

### Links and inline emphasis

A [link inside a sentence](/) uses the accent colour, same as everywhere else on the site. Here is some **bold text** and some *italic text* inline, to see how emphasis reads against the body serif.

{% include divider.html %}

### Image with caption

{% include image.html src="/assets/images/placeholder.jpg" alt="Placeholder — swap for a real image to test" caption="This is the figcaption — small, sans, muted, sits under the image." %}

*(The image above will show as broken until a real file exists at that path — the caption and spacing around it can still be judged.)*

{% include divider.html %}

### This card, in the feed

This post is now filed under The Floor — see it render as an actual feed card, title/subtitle/meta/excerpt and all, on [The Floor](/the-floor/) itself, alongside whatever else lives there.
