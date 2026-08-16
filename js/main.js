/* ============================================================================
   main.js — renders the home page from DATA (js/data.js).
   Shared helpers, theming, and the skin system live in js/common.js.
   You shouldn't need to edit this file to change content.
   ========================================================================== */
(function () {
  "use strict";

  const { $, $$, el, txt, isTodo, isRealUrl, icon, toast } = SITE;

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
    const hasPage = !!(proj.slug && proj.detail);

    const card = el("article", {
      class: "project-card" + (proj.featured ? " is-featured" : "") + (hasPage ? " has-page" : ""),
      "data-category": proj.category,
    });

    card.appendChild(el("div", { class: "pc-top" }, [
      el("span", { class: "pc-cat" }, cat),
      proj.period ? el("span", { class: "pc-period" }, [txt(proj.period)]) : null,
    ]));

    // When a detail page exists the title links to it, and a stretched
    // pseudo-element makes the whole card clickable without nesting the
    // other links inside an anchor.
    const title = hasPage
      ? el("h3", { class: "pc-title" }, [
          el("a", { class: "pc-title-link", href: `projects/${proj.slug}/` }, [txt(proj.title)]),
        ])
      : el("h3", { class: "pc-title" }, [txt(proj.title)]);
    card.appendChild(title);

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

    const footer = [];
    if (hasPage) {
      footer.push(el("a", { class: "pc-readmore", href: `projects/${proj.slug}/` },
        ["Read the write-up", icon("forward")]));
    }
    (proj.links || []).filter((l) => isRealUrl(l.url)).forEach((l) => {
      footer.push(el("a", { href: l.url, target: "_blank", rel: "noopener noreferrer" },
        [l.label, icon("arrow")]));
    });
    if (footer.length) card.appendChild(el("div", { class: "pc-links" }, footer));

    return card;
  }

  function renderProjects() {
    const grid     = $("#projectGrid");
    const empty    = $("#projectEmpty");
    const filters  = $("#filters");
    const projects = DATA.projects || [];

    const present = DATA.categories.filter(
      (c) => c.id === "all" || projects.some((p) => p.category === c.id));

    let active = "all";

    function paint() {
      const visible = active === "all" ? projects : projects.filter((p) => p.category === active);

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
    // it ends up offering one card per category.
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
        el("ul", { class: "tl-bullets" }, (job.bullets || []).map((b) => el("li", {}, [txt(b)]))),
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
        e.field  ? el("p", { class: "edu-field" },  [txt(e.field)])  : null,
        el("p", { class: "edu-school" }, [txt(e.school)]),
        e.period ? el("p", { class: "edu-period" }, [txt(e.period)]) : null,
        e.detail ? el("p", { class: "edu-detail" }, [txt(e.detail)]) : null,
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

  /* ── Boot ─────────────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof DATA === "undefined") {
      console.error("data.js failed to load — check the <script> path in index.html.");
      return;
    }

    SITE.applySkin(SITE.initialSkin());
    bindStatic();
    renderHero();
    renderAbout();
    renderProjects();
    renderSkills();
    renderExperience();
    renderEducation();
    renderContact();
    SITE.wireHeader();

    // Scrollspy — highlight the nav link for the section in view.
    const navLinks = $$(".nav a");
    const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
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

    SITE.wireReveal(".section .section-title, .section-lede, .about-grid, .filters, " +
                    ".project-grid, .skill-grid, .timeline, .edu-grid, .cert-row, .contact-card");
    SITE.reportTodos();
  });
})();
