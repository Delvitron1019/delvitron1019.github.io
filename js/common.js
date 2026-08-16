/* ============================================================================
   common.js — shared by the home page (main.js) and the project detail pages
   (project.js). DOM helpers, theming, the skin system, and header chrome.

   Plain globals rather than modules: the site has no build step and must work
   from file:// as well as over http.
   ========================================================================== */
window.SITE = (function () {
  "use strict";

  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ── DOM ──────────────────────────────────────────────────────────────── */
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

  /* Matches "TODO" on its own (table cells, where a colon would be clutter)
     as well as "TODO: explanation". */
  const isTodo = (s) => typeof s === "string" && /^TODO\b/.test(s.trim());

  function txt(str) {
    if (str === null || str === undefined) return document.createTextNode("");
    return isTodo(str)
      ? el("span", { class: "todo", title: "Placeholder — edit js/data.js" }, String(str))
      : document.createTextNode(String(str));
  }

  const isRealUrl = (u) => typeof u === "string" && u.trim() !== "" && !isTodo(u);

  /* ── Icons ────────────────────────────────────────────────────────────── */
  const ICON_PATHS = {
    github:   '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>',
    mail:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    link:     '<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
    award:    '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    arrow:    '<path d="M7 17L17 7M9 7h8v8"/>',
    back:     '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    forward:  '<path d="M5 12h14M13 6l6 6-6 6"/>',
  };
  const FILLED_ICONS = new Set(["github", "linkedin"]);

  /* SVG lives in its own XML namespace, so document.createElement("svg") makes
     an inert HTML element that never paints. innerHTML parses it correctly. */
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
  const applyTheme = (t) => document.documentElement.setAttribute("data-theme", t);

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (_) { /* private mode */ }
    const systemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    applyTheme(saved || (systemLight ? "light" : "dark"));
  }

  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (_) { /* ignore */ }
  }

  /* ── Skin ─────────────────────────────────────────────────────────────── */
  const SKIN_KEY = "portfolio-skin";
  const SKINS = ["technical", "anime"];

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
      petal.style.left              = `${Math.random() * 100}%`;
      petal.style.animationDelay    = `${-Math.random() * 18}s`;
      petal.style.animationDuration = `${13 + Math.random() * 12}s`;
      petal.style.transform         = `scale(${0.6 + Math.random() * 0.8})`;
      petalHost.appendChild(petal);
    }
    document.body.appendChild(petalHost);
  }

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

  function toggleSkin() {
    const next = document.documentElement.getAttribute("data-skin") === "anime" ? "technical" : "anime";
    applySkin(next);
    try { localStorage.setItem(SKIN_KEY, next); } catch (_) { /* ignore */ }
  }

  /* ── Toast ────────────────────────────────────────────────────────────── */
  let toastTimer;
  function toast(message) {
    const t = $("#toast");
    if (!t) return;
    t.textContent = message;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-visible"), 2200);
  }

  /* ── Header chrome: sticky border, scroll progress, toggles, mobile nav ── */
  function wireHeader() {
    const header   = $("#siteHeader");
    const progress = $("#scrollProgress");
    const nav      = $("#nav");
    const navBtn   = $("#navToggle");

    if (header) {
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y   = window.scrollY;
          const max = document.documentElement.scrollHeight - window.innerHeight;
          header.classList.toggle("is-stuck", y > 4);
          if (progress) progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
          ticking = false;
        });
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    if (nav && navBtn) {
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
    }

    const themeBtn = $("#themeToggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    const skinBtn = $("#skinToggle");
    if (skinBtn) {
      if (DATA.site && DATA.site.showSkinToggle === false) skinBtn.remove();
      else skinBtn.addEventListener("click", toggleSkin);
    }

    // Petals depend on viewport width, so re-evaluate on resize.
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(
        () => renderPetals(document.documentElement.getAttribute("data-skin") === "anime"), 180);
    });
  }

  /* ── Reveal on scroll ─────────────────────────────────────────────────── */
  function wireReveal(selector) {
    const targets = $$(selector);
    if (!("IntersectionObserver" in window) || !targets.length) return;
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

  /* Count leftover placeholders and mention them in the console. */
  function reportTodos() {
    const n = document.querySelectorAll(".todo").length;
    if (n) {
      console.info(
        `%c${n} placeholder${n === 1 ? "" : "s"} left to fill in js/data.js` +
        " (highlighted in yellow on the page).",
        "color:#eab308;font-weight:600");
    }
  }

  initTheme();   // run immediately to avoid a flash of the wrong theme

  return { $, $$, el, txt, isTodo, isRealUrl, icon, toast,
           applySkin, initialSkin, wireHeader, wireReveal, reportTodos };
})();
