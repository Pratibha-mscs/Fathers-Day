/* ============================================================
   For Dad — A Memory Box
   Interactions: opening envelopes, parallax, petals, whispers.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Letter contents (revealed after opening) ---------- */
  const LETTERS = {
    anjalee: {
      eyebrow: "💌 The Words I Never Said",
      from: "From Anjalee",
      signoff: "— your Anjalee, always",
      doodle: "🦋",
      body: [
        "Papa,",
        "There are things I always meant to tell you but somehow never did — they'd get stuck somewhere between my heart and my throat, and I'd just hug you instead.",
        "So here it is, finally out loud: thank you for every time you waited up, every time you said \"drive safe\" twice, and every time you pretended my drawings belonged in a museum.",
        "I never said how safe the world felt just because you were in it. You made big things small and scary things silly. You still do.",
        "I'm braver than I look, and it's only because you showed me how.",
        { ps: "P.S. — I kept the butterfly. The one from the garden. It's still pressed in my book. 🦋" }
      ]
    },
    pratibha: {
      eyebrow: "🌻 Things I Learned From You",
      from: "From Pratibha",
      signoff: "— with all my love, Pratibha",
      doodle: "🌻",
      body: [
        "Dear Papa,",
        "If I made a list of everything you taught me it would never fit on this paper, so here are the ones I carry everywhere:",
        "That patience is a kind of love. That you can fix almost anything if you stay calm and read the instructions twice. That the best conversations happen over chai, slowly.",
        "You taught me to look up at mountains and feel small in the best way — Manali still smells like that trip in my memory.",
        "Mostly you taught me that showing up, quietly and every single day, is the loudest way to say \"I love you.\"",
        "I'm still learning from you, Papa. I hope I always am.",
        { ps: "P.S. — One more scoop? You always said yes. 🍦" }
      ]
    },
    bhaskar: {
      eyebrow: "📸 Memories I Didn't Want To Forget",
      from: "From Bhaskar",
      signoff: "— your son, Bhaskar",
      doodle: "📸",
      body: [
        "Hi Papa,",
        "You were always the one behind the camera, so you're missing from half our photos — but you're in every single memory, which is better.",
        "I remember the rain we ran through and how you laughed louder than the thunder. I remember the carnival, the long drives, the songs you'd hum without knowing it.",
        "I remember you teaching me to ride, running behind, then letting go — and pretending you weren't a little proud and a little scared.",
        "I saved these memories here so they can never fade. So that one day, when we're both grey, we can open this box and be young again for a minute.",
        { ps: "P.S. — Step out from behind the camera sometimes, okay? We want you in the picture too. 📷" }
      ]
    }
  };

  const FATHERS_DAY = "Father's Day, 2026";

  /* ---------- Element refs ---------- */
  const overlay   = document.getElementById("letterOverlay");
  const closeBtn  = document.getElementById("letterClose");
  const eyebrowEl = document.getElementById("letterEyebrow");
  const fromEl    = document.getElementById("letterFrom");
  const dateEl    = document.getElementById("letterDate");
  const bodyEl    = document.getElementById("letterBody");
  const signoffEl = document.getElementById("letterSignoff");
  const doodleEl  = document.getElementById("letterDoodle");
  const whisper   = document.getElementById("whisper");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Open / close letters ---------- */
  function renderLetter(key) {
    const data = LETTERS[key];
    if (!data) return;

    eyebrowEl.textContent = data.eyebrow;
    fromEl.textContent = data.from;
    dateEl.textContent = FATHERS_DAY;
    signoffEl.textContent = data.signoff;
    doodleEl.textContent = data.doodle;

    bodyEl.innerHTML = "";
    data.body.forEach(function (block) {
      const p = document.createElement("p");
      if (typeof block === "string") {
        p.textContent = block;
      } else if (block && block.ps) {
        p.textContent = block.ps;
        p.className = "ps";
      }
      bodyEl.appendChild(p);
    });
  }

  function openLetter(envelope) {
    const key = envelope.dataset.key;
    envelope.classList.add("opening");

    // Let the envelope physically open and the letter peek out first.
    const delay = prefersReduced ? 0 : 520;
    window.setTimeout(function () {
      // Anjalee's letter unfolds into the immersive memory storybook.
      if (key === "anjalee" && window.Storybook) {
        window.Storybook.open();
        // re-seal the envelope on the desk behind the book
        envelope.classList.remove("opening");
        return;
      }
      renderLetter(key);
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      closeBtn.focus();
    }, delay);
  }

  function closeLetter() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    // Re-seal every envelope so the desk resets.
    document.querySelectorAll(".envelope.opening").forEach(function (env) {
      env.classList.remove("opening");
    });
  }

  document.querySelectorAll(".envelope").forEach(function (env) {
    env.addEventListener("click", function () { openLetter(env); });
  });

  closeBtn.addEventListener("click", closeLetter);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeLetter();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeLetter();
  });

  /* ---------- Mouse parallax for depth ---------- */
  const parallaxEls = Array.prototype.slice.call(
    document.querySelectorAll("[data-depth]")
  );

  if (!prefersReduced && window.matchMedia("(pointer:fine)").matches) {
    let targetX = 0, targetY = 0, curX = 0, curY = 0, raf = null;

    window.addEventListener("mousemove", function (e) {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;   // -1..1
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = window.requestAnimationFrame(loop);
    });

    function loop() {
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;

      parallaxEls.forEach(function (el) {
        const depth = parseFloat(el.dataset.depth) || 1;
        const dx = -curX * 18 * depth;
        const dy = -curY * 14 * depth;
        el.style.setProperty("--px", dx.toFixed(2) + "px");
        el.style.setProperty("--py", dy.toFixed(2) + "px");
      });

      if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
        raf = window.requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    }
  }

  /* Apply parallax offsets via translate without clobbering animations:
     floaties keep their drift animation; we nudge them with a wrapper transform
     using CSS custom props on a secondary translate. */
  parallaxEls.forEach(function (el) {
    if (el.classList.contains("floaty")) {
      // floaties already animate transform; layer parallax on the element box.
      el.style.transition = "translate 0.2s ease-out";
    }
  });
  // Use the `translate` longhand so it composes with the `transform` animation.
  const styleObserver = function () {
    parallaxEls.forEach(function (el) {
      const px = el.style.getPropertyValue("--px") || "0px";
      const py = el.style.getPropertyValue("--py") || "0px";
      el.style.translate = px + " " + py;
    });
    window.requestAnimationFrame(styleObserver);
  };
  if (!prefersReduced) window.requestAnimationFrame(styleObserver);

  /* ---------- Falling petals ---------- */
  const petalLayer = document.getElementById("petals");
  const PETAL_GLYPHS = ["🌸", "🌼", "🌷", "✿", "❀"];

  function spawnPetal() {
    if (prefersReduced || document.hidden) return;
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = PETAL_GLYPHS[Math.floor(Math.random() * PETAL_GLYPHS.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (0.9 + Math.random() * 1.1).toFixed(2) + "rem";
    const dur = 9 + Math.random() * 9;
    petal.style.animationDuration = dur + "s";
    petal.style.opacity = (0.5 + Math.random() * 0.45).toFixed(2);
    petalLayer.appendChild(petal);
    window.setTimeout(function () { petal.remove(); }, dur * 1000 + 400);
  }
  if (!prefersReduced) {
    window.setInterval(spawnPetal, 2200);
    spawnPetal();
  }

  /* ---------- Whispers on hidden doodles ---------- */
  document.querySelectorAll(".doodle").forEach(function (doodle) {
    doodle.addEventListener("mouseenter", function () {
      whisper.textContent = doodle.dataset.whisper || "";
      const r = doodle.getBoundingClientRect();
      whisper.style.left = (r.left + r.width / 2) + "px";
      whisper.style.top  = r.top + "px";
      whisper.classList.add("show");
    });
    doodle.addEventListener("mouseleave", function () {
      whisper.classList.remove("show");
    });
  });

  /* ---------- Twinkle: occasionally flicker a floaty ---------- */
  if (!prefersReduced) {
    const floaties = document.querySelectorAll(".floaty");
    window.setInterval(function () {
      if (document.hidden || !floaties.length) return;
      const f = floaties[Math.floor(Math.random() * floaties.length)];
      f.animate(
        [
          { filter: "drop-shadow(0 4px 5px rgba(61,39,34,0.25)) brightness(1)" },
          { filter: "drop-shadow(0 0 12px rgba(255,237,173,0.9)) brightness(1.6)" },
          { filter: "drop-shadow(0 4px 5px rgba(61,39,34,0.25)) brightness(1)" }
        ],
        { duration: 1100, easing: "ease-in-out" }
      );
    }, 2600);
  }
})();
