# For Dad — A Memory Box 💌

An immersive, scrapbook-style Father's Day homepage that feels like opening a
secret memory box made by three children — **Anjalee, Pratibha, and Bhaskar** —
for their father.

It is intentionally *not* a modern SaaS site. It's handmade, nostalgic, dreamy,
and personal: striped vintage wrapping paper, floating scrapbook objects, falling
petals, and three aged envelopes scattered on a desk waiting to be opened.

## The experience

- **A pinned hero postcard** greets you:
  _"To the man who gave us a thousand memories, we saved a few for you."_
- **Three vintage envelopes** with wax seals, stamps, tape and handwritten
  labels. Each shows only a mysterious title at first:
  - 💌 What I Never Said Out Loud
  - 🌻 Things I Learned From You
  - 📸 Memories I Didn't Want To Forget
- **Click an envelope** — the flap unfolds, the letter slides out, and only then
  is the sender revealed. Dad discovers *who* wrote it after opening it.
- **Hidden doodles** are scattered faintly around the desk (a camera, a butterfly,
  ice cream, a Manali mountain, a rain cloud, a little gift box). Hover to brighten
  them and read a tiny whispered memory.
- **Gentle motion everywhere**: drifting stars, butterflies and ribbons, slowly
  falling flower petals, occasional twinkles, envelope wiggles, and a subtle
  mouse-driven parallax for depth.

## Running it

It's a static page with no build step. Just open `index.html` in a browser, or
serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The desk, envelopes, hero postcard, hidden doodles, letter overlay |
| `styles.css` | Striped paper background, textures, envelope + letter styling, animations |
| `script.js` | Envelope opening, letter content, parallax, petals, whispers, twinkles |

## Notes

- Fonts (Cormorant Garamond, Parisienne, Caveat, Indie Flower) load from Google Fonts.
- Respects `prefers-reduced-motion` — animations are disabled for visitors who ask.
- Letter text lives in the `LETTERS` object in `script.js` and is easy to personalize.

_Made in secret, with love._
