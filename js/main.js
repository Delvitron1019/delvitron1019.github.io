/* ============================================================================
   main.js — renders the page from DATA (js/data.js) and wires up interaction.
   You shouldn't need to edit this file to change content.
   ========================================================================== */
(function () {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ── Tiny DOM helper ──────────────────────────────────────────────────── */
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v);
    }
    for (const c of [].concat(children)) {
      if (c === null || c === undefined || c === false) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  }

  /* ── Placeholder handling ─────────────────────────────────────────────────
     Strings starting with "TODO:" render highlighted so unfinished content is
     impossible to miss. Replace the text in data.js and the styling vanishes.
  ─────────────────────────────────────────────────────────────────────────── */
  const isTodo = (s) => typeof s === "string" && s.trim().startsWith("TODO:");

  // Returns a text node, or a highlighted <span> for placeholders.
  function txt(str) {
    if (str === null || str === undefined) return document.createTextNode("");
    return isTodo(str)
      ? el("span", { class: "todo", title: "Placeholder — edit js/data.js" }, String(str))
      : document.createTextNode(String(str));
  }

  // Real, followable URL? (skips placeholders and empty strings)
  const isRealUrl = (u) => typeof u === "string" && u.trim() !== "" && !isTodo(u);

  /* ── Icons ────────────────────────────────────────────────────────────────
     Brand marks (github, linkedin) are filled single paths; the rest are
     stroked UI glyphs. That split is deliberate — logos should look like
     logos, interface icons should match the site's 1.7px stroke weight.
  ─────────────────────────────────────────────────────────────────────────── */
  const ICON_PATHS = {
    github:   '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>',
    mail:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    link:     '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    award:    '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    arrow:    '<path d="M7 17L17 7M9 7h8v8"/>',
  };

  const FILLED_ICONS = new Set(["github", "linkedin"]);

  /* SVG lives in its own XML namespace, so document.createElement("svg") makes
     an inert HTML element that never paints. Parsing through innerHTML puts it
     in the right namespace. */
  function icon(name) {
    const key = ICON_PATHS[name] ? name : "link";
    const cls = FILLED_ICONS.has(key) ? "icon icon-brand" : "icon";
    const host = document.createElement("div");
    host.innerHTML =
      `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICON_PATHS[key]}</svg>`;
    return host.firstElementChild;
  }

  /* ── Theme ────────────────────────────────────────────────────────────── */
  const THEME_KEY = "portfolio-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  (function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (_) { /* private mode */ }
    const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(saved || (systemLight ? "light" : "dark"));
  })();

  /* ── Skin ("technical" | "anime") ─────────────────────────────────────────
     Precedence: ?skin= URL param  >  visitor's saved choice  >  data.js.
     The URL param is there so you can compare the two without editing files.
  ─────────────────────────────────────────────────────────────────────────── */
  const SKIN_KEY = "portfolio-skin";
  const SKINS = ["technical", "anime"];

  function applySkin(skin) {
    document.documentElement.setAttribute("data-skin", skin);
    renderPetals(skin === "anime");
  }

  function initialSkin() {
    const param = new URLSearchParams(location.search).get("skin");
    if (SKINS.includes(param)) return param;

    let saved = null;
    try { saved = localStorage.getItem(SKIN_KEY); } catch (_) { /* ignore */ }
    if (SKINS.includes(saved)) return saved;

    const configured = (typeof DATA !== "undefined" && DATA.site && DATA.site.skin) || "technical";
    return SKINS.includes(configured) ? configured : "technical";
  }

  /* Sakura petals — decoration only, so they're skipped entirely when the
     visitor has asked for reduced motion or is on a small screen. */
  let petalHost = null;
  function renderPetals(on) {
    const unwelcome = window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
                      window.matchMedia("(max-width: 640px)").matches;

    if (!on || unwelcome) {
      if (petalHost) { petalHost.remove(); petalHost = null; }
      return;
    }
    if (petalHost) return;

    petalHost = el("div", { class: "petals", "aria-hidden": "true" });
    for (let i = 0; i < 14; i++) {
      const petal = el("span", { class: "petal" });
      petal.style.left            = `${Math.random() * 100}%`;
      petal.style.animationDelay    = `${-Math.random() * 18}s`;
      petal.style.animationDuration = `${13 + Math.random() * 12}s`;
      petal.style.transform         = `scale(${0.6 + Math.random() * 0.8})`;
      petalHost.appendChild(petal);
    }
    document.body.appendChild(petalHost);
  }

  /* ── Simple string binding for static bits in the HTML ────────────────── */
  function bindStatic() {
    $$("[data-bind]").forEach((node) => {
      const path  = node.getAttribute("data-bind");
      const value = path.split(".").reduce((o, k) => (o ? o[k] : undefined), DATA);
      if (value === undefined) return;
      node.textContent = "";
      node.appendChild(txt(value));
    });
  }

  /* ── Hero ─────────────────────────────────────────────────────────────── */
  function renderHero() {
    const p = DATA.profile;

    // Keep the tab title in sync with data.js; fall back to the static <title>.
    if (!isTodo(p.shortName) && !isTodo(p.role)) {
      document.title = `${p.shortName} — ${p.role}`;
    }

    // Résumé button: shown only if the URL is set AND the file is actually there,
    // so a missing PDF never becomes a dead link on a live site.
    const resume = $("#resumeLink");
    if (!isRealUrl(p.resumeUrl)) {
      resume.remove();
    } else if (/^https?:/i.test(p.resumeUrl)) {
      resume.href = p.resumeUrl;
      resume.removeAttribute("download");
      resume.target = "_blank";
      resume.rel = "noopener noreferrer";
    } else {
      resume.href = p.resumeUrl;
      // Relative path — probe it. Can't probe over file://, so trust it there.
      if (location.protocol.startsWith("http")) {
        fetch(p.resumeUrl, { method: "HEAD" })
          .then((r) => { if (!r.ok) resume.remove(); })
          .catch(() => resume.remove());
      }
    }

    const links = $("#heroLinks");
    (p.links || []).forEach((l) => {
      const li = el("li");
      if (isRealUrl(l.url)) {
        const external = /^https?:/i.test(l.url);
        li.appendChild(el("a", {
          href: l.url,
          target: external ? "_blank" : null,
          rel: external ? "noopener noreferrer" : null,
        }, [icon(l.icon), l.label]));
      } else {
        li.appendChild(el("a", { href: "#", "aria-disabled": "true",
          onclick: (e) => e.preventDefault() }, [icon(l.icon), txt(l.url)]));
      }
      links.appendChild(li);
    });

    const stats = $("#heroStats");
    (p.stats || []).forEach((s) => {
      stats.appendChild(el("div", {}, [
        el("dt", {}, [txt(s.value)]),
        el("dd", {}, [txt(s.label)]),
      ]));
    });
  }

  /* ── About ────────────────────────────────────────────────────────────── */
  function renderAbout() {
    const copy = $("#aboutCopy");
    (DATA.about.paragraphs || []).forEach((para) => copy.appendChild(el("p", {}, [txt(para)])));

    const side = $("#aboutSide");
    (DATA.about.sideCards || []).forEach((card) => {
      if (!card.items || !card.items.length) return;
      side.appendChild(el("div", { class: "side-card" }, [
        el("h3", { class: "side-title" }, card.title),
        el("ul", { class: "focus-list" }, card.items.map((i) => el("li", {}, [txt(i)]))),
      ]));
    });
  }

  /* ── Projects ─────────────────────────────────────────────────────────── */
  function projectCard(proj) {
    const cat = (DATA.categories.find((c) => c.id === proj.category) || {}).label || proj.category;

    const card = el("article", {
      class: "project-card" + (proj.featured ? " is-featured" : ""),
      "data-category": proj.category,
    });

    card.appendChild(el("div", { class: "pc-top" }, [
      el("span", { class: "pc-cat" }, cat),
      proj.period ? el("span", { class: "pc-period" }, [txt(proj.period)]) : null,
    ]));

    card.appendChild(el("h3", { class: "pc-title" }, [txt(proj.title)]));

    if (proj.blurb) card.appendChild(el("p", { class: "pc-blurb" }, [txt(proj.blurb)]));

    if (proj.impact) {
      card.appendChild(el("div", { class: "pc-impact" }, [
        el("strong", {}, "Impact"),
        txt(proj.impact),
      ]));
    }

    if (proj.tags && proj.tags.length) {
      card.appendChild(el("div", { class: "tag-row" },
        proj.tags.map((t) => el("span", { class: "tag" }, [txt(t)]))));
    }

    const usable = (proj.links || []).filter((l) => isRealUrl(l.url));
    if (usable.length) {
      card.appendChild(el("div", { class: "pc-links" }, usable.map((l) =>
        el("a", { href: l.url, target: "_blank", rel: "noopener noreferrer" },
          [l.label, icon("arrow")]))));
    }

    return card;
  }

  function renderProjects() {
    const grid    = $("#projectGrid");
    const empty   = $("#projectEmpty");
    const filters = $("#filters");
    const projects = DATA.projects || [];

    // Only show categories that actually have projects.
    const present = DATA.categories.filter(
      (c) => c.id === "all" || projects.some((p) => p.category === c.id)
    );

    let active = "all";

    function paint() {
      const visible = active === "all"
        ? projects
        : projects.filter((p) => p.category === active);

      grid.textContent = "";
      visible.forEach((p, i) => {
        const card = projectCard(p);
        card.style.animationDelay = `${Math.min(i * 45, 270)}ms`;
        grid.appendChild(card);
      });

      empty.hidden = visible.length > 0;

      $$(".filter-btn", filters).forEach((b) => {
        const on = b.dataset.cat === active;
        b.classList.toggle("is-active", on);
        b.setAttribute("aria-pressed", String(on));
      });
    }

    // With only a handful of projects the filter bar is more chrome than help —
    // it ends up offering one card per category. Show it once there's enough
    // to actually filter.
    if (projects.length < 5 || present.length < 3) {
      filters.remove();
      paint();
      return;
    }

    present.forEach((c) => {
      const n = c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length;
      filters.appendChild(el("button", {
        type: "button",
        class: "filter-btn",
        "data-cat": c.id,
        "aria-pressed": "false",
        onclick: () => { active = c.id; paint(); },
      }, [c.label, el("span", { class: "count" }, String(n))]));
    });

    paint();
  }

  /* ── Skills ───────────────────────────────────────────────────────────── */
  function renderSkills() {
    const grid = $("#skillGrid");
    (DATA.skillGroups || []).forEach((g) => {
      grid.appendChild(el("div", { class: "skill-card" }, [
        el("h3", {}, g.name),
        el("ul", {}, (g.items || []).map((i) => el("li", {}, [txt(i)]))),
      ]));
    });
  }

  /* ── Experience ───────────────────────────────────────────────────────── */
  function renderExperience() {
    const list = $("#timeline");
    (DATA.experience || []).forEach((job) => {
      const meta = [];
      if (job.period)   meta.push(el("span", {}, [txt(job.period)]));
      if (job.location) meta.push(el("span", {}, [txt(job.location)]));

      list.appendChild(el("li", { class: "tl-item" }, [
        el("div", { class: "tl-head" }, [
          el("span", { class: "tl-role" }, [txt(job.role)]),
          el("span", { class: "tl-org" }, [txt(job.org)]),
        ]),
        meta.length ? el("div", { class: "tl-meta" }, meta) : null,
        el("ul", { class: "tl-bullets" },
          (job.bullets || []).map((b) => el("li", {}, [txt(b)]))),
        job.tags && job.tags.length
          ? el("div", { class: "tag-row" }, job.tags.map((t) => el("span", { class: "tag" }, [txt(t)])))
          : null,
      ]));
    });
  }

  /* ── Education & certifications ───────────────────────────────────────── */
  function renderEducation() {
    const grid = $("#eduGrid");
    (DATA.education || []).forEach((e) => {
      grid.appendChild(el("div", { class: "edu-card" }, [
        el("h3", { class: "edu-degree" }, [txt(e.degree)]),
        e.field   ? el("p", { class: "edu-field" },  [txt(e.field)])  : null,
        el("p", { class: "edu-school" }, [txt(e.school)]),
        e.period  ? el("p", { class: "edu-period" }, [txt(e.period)]) : null,
        e.detail  ? el("p", { class: "edu-detail" }, [txt(e.detail)]) : null,
      ]));
    });

    const row = $("#certRow");
    (DATA.certifications || []).forEach((c) => {
      const inner = [icon("award"), txt(c.name),
        c.issuer ? el("span", { class: "issuer" }, [txt(c.issuer)]) : null];
      row.appendChild(isRealUrl(c.url)
        ? el("a", { class: "cert-chip", href: c.url, target: "_blank", rel: "noopener noreferrer" }, inner)
        : el("span", { class: "cert-chip" }, inner));
    });
  }

  /* ── Contact ──────────────────────────────────────────────────────────── */
  function renderContact() {
    const email = DATA.profile.email;
    const btn   = $("#emailBtn");

    if (isRealUrl(email)) {
      btn.href = `mailto:${email}`;
      $("#emailBtnText").textContent = email;
    } else {
      btn.href = "#";
      btn.addEventListener("click", (e) => e.preventDefault());
    }

    $("#copyEmail").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        toast("Email copied to clipboard");
      } catch (_) {
        toast(email);   // clipboard blocked (http:// or permissions) — show it instead
      }
    });
  }

  /* ── Toast ────────────────────────────────────────────────────────────── */
  let toastTimer;
  function toast(message) {
    const t = $("#toast");
    t.textContent = message;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2200);
  }

  /* ── Header: sticky border, scroll progress, mobile menu, scrollspy ───── */
  function wireChrome() {
    const header   = $("#siteHeader");
    const progress = $("#scrollProgress");
    const nav      = $("#nav");
    const navBtn   = $("#navToggle");

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y   = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        header.classList.toggle("is-stuck", y > 4);
        progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    navBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", String(open));
      navBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        navBtn.setAttribute("aria-expanded", "false");
      }
    });

    $("#themeToggle").addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (_) { /* ignore */ }
    });

    const skinBtn = $("#skinToggle");
    if (DATA.site && DATA.site.showSkinToggle === false) {
      skinBtn.remove();
    } else {
      skinBtn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-skin") === "anime"
          ? "technical" : "anime";
        applySkin(next);
        try { localStorage.setItem(SKIN_KEY, next); } catch (_) { /* ignore */ }
        // No toast here — the style change is its own confirmation. The button's
        // tooltip carries the name for anyone who wants it.
      });
    }

    // Petals depend on viewport width, so re-evaluate them on resize.
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(
        () => renderPetals(document.documentElement.getAttribute("data-skin") === "anime"),
        180
      );
    });

    // Scrollspy — highlight the nav link for the section in view.
    const navLinks = $$(".nav a");
    const sections = navLinks
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) =>
            a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
        });
      }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ── Reveal on scroll ─────────────────────────────────────────────────── */
  function wireReveal() {
    const targets = $$(".section .section-title, .section-lede, .about-grid, .filters, " +
                       ".project-grid, .skill-grid, .timeline, .edu-grid, .cert-row, .contact-card");
    if (!("IntersectionObserver" in window)) return;

    targets.forEach((t) => t.classList.add("reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    targets.forEach((t) => io.observe(t));
  }

  /* ── Boot ─────────────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof DATA === "undefined") {
      console.error("data.js failed to load — check the <script> path in index.html.");
      return;
    }

    applySkin(initialSkin());
    bindStatic();
    renderHero();
    renderAbout();
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    renderContact();
    wireChrome();
    wireReveal();

    const remaining = document.querySelectorAll(".todo").length;
    if (remaining) {
      console.info(
        `%c${remaining} placeholder${remaining === 1 ? "" : "s"} left to fill in js/data.js` +
        " (highlighted in yellow on the page).",
        "color:#eab308;font-weight:600"
      );
    }
  });
})();
