/* ============================================================================
   project.js — renders a single project detail page.

   Each page under projects/<slug>/ sets window.PROJECT_SLUG in its own <script>
   before loading this file. Everything else comes from DATA.projects in
   js/data.js, so there is exactly one place to edit content.
   ========================================================================== */
(function () {
  "use strict";

  const { $, el, txt, isRealUrl, icon } = SITE;

  /* Narrative order. This is the spine of the page — Problem through
     Limitations — and it's deliberately fixed: the sequence is what makes a
     project read as ML work rather than as a repo tour. Omit any key in
     data.js and its section disappears. */
  const SECTIONS = [
    { key: "problem",     label: "Problem",     hint: "What was broken, and for whom" },
    { key: "data",        label: "Data",        hint: "Where it came from and what shape it was in" },
    { key: "approach",    label: "Approach",    hint: "How the problem was framed" },
    { key: "model",       label: "Model",       hint: "What was built, and why this and not that" },
    { key: "results",     label: "Results",     hint: "Measured against a baseline" },
    { key: "deployment",  label: "Deployment",  hint: "How it runs outside a notebook" },
    { key: "limitations", label: "Limitations", hint: "Where it breaks, stated plainly" },
  ];

  /* A section value can be a string, a list of strings, or a block with prose,
     bullets, a spec table, and a results table. */
  function renderBody(value) {
    const out = [];
    if (value === null || value === undefined) return out;

    if (typeof value === "string") {
      out.push(el("p", { class: "pd-p" }, [txt(value)]));
      return out;
    }

    if (Array.isArray(value)) {
      out.push(el("ul", { class: "pd-list" }, value.map((v) => el("li", {}, [txt(v)]))));
      return out;
    }

    if (value.text)  out.push(el("p", { class: "pd-p" }, [txt(value.text)]));

    if (value.bullets) {
      out.push(el("ul", { class: "pd-list" }, value.bullets.map((b) => el("li", {}, [txt(b)]))));
    }

    // Key/value spec list — hyperparameters, cluster config, dataset stats.
    if (value.spec) {
      out.push(el("dl", { class: "pd-spec" },
        value.spec.flatMap(([k, v]) => [
          el("dt", {}, [txt(k)]),
          el("dd", {}, [txt(v)]),
        ])));
    }

    // Results table. `highlight` marks the row that is your own model, so the
    // baseline comparison is legible at a glance.
    if (value.table) {
      const { columns, rows, highlight } = value.table;
      out.push(el("div", { class: "pd-table-wrap" }, [
        el("table", { class: "pd-table" }, [
          el("thead", {}, [el("tr", {}, columns.map((c) => el("th", {}, [txt(c)])))]),
          el("tbody", {}, rows.map((r, i) =>
            el("tr", { class: i === highlight ? "is-mine" : null },
              r.map((cell) => el("td", {}, [txt(cell)]))))),
        ]),
      ]));
    }

    if (value.note) out.push(el("p", { class: "pd-note" }, [txt(value.note)]));
    return out;
  }

  function notFound(slug) {
    $("#pdMain").appendChild(el("div", { class: "wrap" }, [
      el("div", { class: "pd-missing" }, [
        el("h1", {}, "Project not found"),
        el("p", {}, `No project in data.js has the slug "${slug}".`),
        el("p", {}, [el("a", { class: "btn btn-primary", href: "../../index.html#projects" },
          "Back to all projects")]),
      ]),
    ]));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof DATA === "undefined") {
      console.error("data.js failed to load — check the <script> paths.");
      return;
    }

    const slug = window.PROJECT_SLUG;
    const projects = DATA.projects || [];
    const proj = projects.find((p) => p.slug === slug);

    SITE.applySkin(SITE.initialSkin());
    SITE.wireHeader();

    if (!proj) { notFound(slug); return; }

    const d = proj.detail || {};
    const cat = (DATA.categories.find((c) => c.id === proj.category) || {}).label || proj.category;

    if (!SITE.isTodo(proj.title)) {
      document.title = `${proj.title} — ${DATA.profile.shortName}`;
    }

    /* ── Hero ─────────────────────────────────────────────────────────── */
    const hero = $("#pdHero");
    hero.appendChild(el("a", { class: "pd-back", href: "../../index.html#projects" },
      [icon("back"), "All projects"]));

    hero.appendChild(el("div", { class: "pd-meta" }, [
      el("span", { class: "pc-cat" }, cat),
      proj.period ? el("span", { class: "pc-period" }, [txt(proj.period)]) : null,
    ]));

    hero.appendChild(el("h1", { class: "pd-title" }, [txt(proj.title)]));
    if (proj.blurb) hero.appendChild(el("p", { class: "pd-lede" }, [txt(proj.blurb)]));

    if (proj.impact) {
      hero.appendChild(el("div", { class: "pd-headline" }, [
        el("strong", {}, "Result"),
        txt(proj.impact),
      ]));
    }

    if (proj.tags && proj.tags.length) {
      hero.appendChild(el("div", { class: "tag-row" },
        proj.tags.map((t) => el("span", { class: "tag" }, [txt(t)]))));
    }

    const usable = (proj.links || []).filter((l) => isRealUrl(l.url));
    if (usable.length) {
      hero.appendChild(el("div", { class: "pd-links" }, usable.map((l) =>
        el("a", { class: "btn btn-ghost", href: l.url, target: "_blank", rel: "noopener noreferrer" },
          [l.label, icon("arrow")]))));
    }

    /* ── Narrative sections ───────────────────────────────────────────── */
    const body = $("#pdBody");
    const present = SECTIONS.filter((s) => d[s.key]);

    present.forEach((s, i) => {
      body.appendChild(el("section", { class: "pd-section", id: s.key }, [
        el("div", { class: "pd-head" }, [
          el("span", { class: "pd-num" }, String(i + 1).padStart(2, "0")),
          el("h2", {}, s.label),
          el("span", { class: "pd-hint" }, s.hint),
        ]),
        el("div", { class: "pd-content" }, renderBody(d[s.key])),
      ]));
    });

    if (!present.length) {
      body.appendChild(el("p", { class: "pd-missing" },
        "This project has no detail written yet — add a `detail` block to it in js/data.js."));
    }

    /* ── Prev / next across projects ──────────────────────────────────── */
    const withSlugs = projects.filter((p) => p.slug);
    const idx = withSlugs.findIndex((p) => p.slug === slug);
    const prev = withSlugs[idx - 1];
    const next = withSlugs[idx + 1];

    if (prev || next) {
      const nav = $("#pdNav");
      nav.appendChild(el("div", { class: "pd-nav-inner" }, [
        prev ? el("a", { class: "pd-nav-link", href: `../${prev.slug}/` }, [
          icon("back"),
          el("span", {}, [el("small", {}, "Previous"), el("strong", {}, [txt(prev.title)])]),
        ]) : el("span"),
        next ? el("a", { class: "pd-nav-link is-next", href: `../${next.slug}/` }, [
          el("span", {}, [el("small", {}, "Next"), el("strong", {}, [txt(next.title)])]),
          icon("forward"),
        ]) : el("span"),
      ]));
    }

    SITE.wireReveal(".pd-section");
    SITE.reportTodos();
  });
})();
