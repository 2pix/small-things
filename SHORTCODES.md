{% raw %}
# Shortcodes

Reusable Jekyll includes — same idea as a WordPress shortcode. Each one bundles the HTML structure and CSS class together so you never hand-type the wrapper markup in a post, and every usage stays visually consistent site-wide.

Usage: paste the `{% include ... %}` line directly into a post body, same place as any paragraph.

---

## `{% include youtube.html id="VIDEO_ID" %}`

Responsive YouTube embed, 16:9, scales to the width of the text column.

- `id` (required) — the video ID from the YouTube URL (the part after `v=`, or from the Share → Embed button).

```
{% include youtube.html id="dQw4w9WgXcQ" %}
```

---

## `{% include image.html src="/assets/images/photo.jpg" alt="description" caption="Optional caption or credit" %}`

Full-width responsive image with an optional caption underneath.

- `src` (required) — path to the image, usually under `/assets/images/`.
- `alt` (required) — accessibility text, describes the image for screen readers.
- `caption` (optional) — small text under the image, e.g. a photo credit.

```
{% include image.html src="/assets/images/bridge.jpg" alt="A large bridge over a large body of water" caption="Photo by Enguerrand Photography on Unsplash" %}
```

---

## `{% include pull-quote.html text="The line you want pulled out." attribution="Optional source" %}`

A visually distinct pulled quote — left border in the accent colour, italic, breaks out of the regular paragraph flow. For a striking line worth setting apart, not for the subtitle/epigraph (that's the post's own front matter).

- `text` (required) — the quoted line.
- `attribution` (optional) — who said it / where it's from, shown smaller underneath.

```
{% include pull-quote.html text="The survival was not meant to be the whole story. It was meant to be the floor." %}
```

---

## `{% include divider.html %}`

The centred diamond (❖) scene-break, used throughout the Black Cat pieces to mark a section shift within a post.

No parameters.

```
{% include divider.html %}
```

---

*Building this out as it's needed — more shortcodes get added here as they're built. Eventually intended to become a releasable Jekyll theme; this file is the usage documentation for that.*
{% endraw %}
