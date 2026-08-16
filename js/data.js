/* ============================================================================
   data.js — EVERYTHING YOU EDIT LIVES IN THIS FILE.
   ----------------------------------------------------------------------------
   index.html and main.js are plumbing; you shouldn't need to touch them.

   Populated from Dev_Resume.pdf. Anything still starting with "TODO:" gets a
   yellow highlight on the page so you can spot it at a glance — replace the
   text and the highlight disappears on its own.
   ========================================================================== */

const DATA = {

  /* ── Site settings ────────────────────────────────────────────────────────
     skin: "technical" — clean, understated, engineering-forward (default)
           "anime"     — night-sky gradients, glass panels, sakura accents,
                         Japanese section labels

     Preview either one without editing this file by adding ?skin=anime or
     ?skin=technical to the URL. Whichever you set here is what visitors get.

     showSkinToggle: true leaves the style switcher in the header so visitors
     can flip between the two themselves. Set it to false once you've decided,
     if you'd rather commit to one look.
  ─────────────────────────────────────────────────────────────────────────── */
  site: {
    skin: "anime",
    showSkinToggle: true,
  },

  /* ── Identity ─────────────────────────────────────────────────────────── */
  profile: {
    name:      "Dev Trusharkumar Shah",
    shortName: "Dev Shah",
    role:      "Data Science · NLP & Large Language Models",
    availability: "Open to data science & ML roles",

    blurb:
      "MS Data Science candidate at the University of Maryland (4.0 GPA), " +
      "working on NLP, large language models, and the ML pipelines that put " +
      "them into production. Six internships across research labs, startups, " +
      "enterprise SAP, and university operations — from benchmarking object " +
      "detection on Raspberry Pi hardware to fine-tuning transformers for " +
      "clinical text.",

    email: "shahdev5203@gmail.com",

    // Your résumé PDF is already in place at assets/resume.pdf.
    // Re-copy the file whenever you update it and this button stays current.
    resumeUrl: "assets/resume.pdf",

    links: [
      { label: "GitHub",   url: "https://github.com/delvitron1019",                     icon: "github"   },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/dev-shah-100736228",       icon: "linkedin" },
      { label: "Email",    url: "mailto:shahdev5203@gmail.com",                         icon: "mail"     },
    ],

    // Deliberately leaving your phone number off the public page — put it on
    // the résumé PDF only. Scrapers harvest numbers off portfolio sites.

    stats: [
      { value: "4.0",  label: "GPA at UMD"        },
      { value: "6",    label: "Internships"         },
      { value: "3★",   label: "CodeChef, peak 1691" },
    ],
  },

  /* ── About ────────────────────────────────────────────────────────────── */
  about: {
    paragraphs: [
      "I'm a Data Science master's student at the University of Maryland with " +
      "a 4.0 GPA, focused on machine learning, NLP, large language models, and " +
      "building data-driven systems that make it beyond the notebook. Before " +
      "UMD, I completed my B.Tech in Computer Science & AI at IIIT Lucknow, " +
      "where I worked across computer vision, recommendation systems, and " +
      "applied AI research.",

      "My strongest interest lies at the intersection of modeling and " +
      "engineering. At IIIT Lucknow, I benchmarked YOLOv3–v8 and Faster R-CNN " +
      "on Raspberry Pi hardware, where inference speed and resource " +
      "constraints mattered alongside accuracy. At IIIT Allahabad, I built a " +
      "multilingual knowledge-graph recommendation system over 10K+ ratings " +
      "spanning 18 languages, improved recommendation precision by 9%, and " +
      "deployed the system through a Flask REST API. I've since worked across " +
      "ML pipelines, data engineering, and AI strategy and operations at " +
      "Georgia Tech.",

      "I bring the same end-to-end mindset to my projects: fine-tuning a T5 " +
      "transformer for clinical report summarization and deploying it through " +
      "Streamlit, training a BERT-based phishing detector to 92% accuracy, and " +
      "building distributed Spark pipelines capable of processing 1M+ event " +
      "logs. I enjoy the full lifecycle — from understanding the data and " +
      "choosing the model to evaluating, deploying, and making the system " +
      "usable.",

      // Note: 1691 is your CodeChef peak, not a LeetCode rating — your draft
      // attributed it to LeetCode. Corrected here to match your résumé and the
      // Competitive programming card, which would otherwise contradict this.
      "Outside ML, I keep my algorithmic fundamentals sharp through " +
      "competitive programming — a 3-star CodeChef rating with a peak of 1691, " +
      "a top-40 global contest finish, and a top-5% LeetCode ranking. I'm at " +
      "Maryland through May 2027 and looking for opportunities across data " +
      "science, applied machine learning, and ML engineering.",
    ],

    /* Cards down the right side of the About section. Add, reorder, or delete
       freely — an empty `items` array hides its card. */
    sideCards: [
      {
        title: "What I like working on",
        items: [
          "NLP and LLM fine-tuning — BERT, T5, and domain-specific variants",
          "Turning notebooks into deployed, monitored services",
          "ETL and data quality: the unglamorous half that decides the outcome",
          "Experiment design, A/B testing, and evaluation you can trust",
          "Dashboards people actually open twice",
        ],
      },
      {
        title: "Competitive programming",
        items: [
          "CodeChef 3★ (delvitron1019) — peak rating 1691, best contest global rank 39",
          "LeetCode — top 5% overall, best contest rank 931",
        ],
      },
      {
        title: "Beyond the work",
        items: [
          "E-Cell IIITL Coordinator — ran ENspire'23 E-Summit, grew reach 120% and footfall 67%",
          "Social Awareness Club, Finance & Treasury Lead — owned budget and fundraising",
        ],
      },
    ],
  },

  /* ── Projects ─────────────────────────────────────────────────────────────
     THE MOST IMPORTANT SECTION ON THE SITE. Recruiters skim here first.
     Every one of these needs a real link — a repo at minimum, a live demo if
     you can manage it. Right now that's the main thing standing between this
     page and being ready to send out.

     category must be one of the ids in `categories` below; unused categories
     hide themselves automatically. `featured: true` makes a card span two
     columns — use it on your strongest one or two.
  ─────────────────────────────────────────────────────────────────────────── */
  categories: [
    { id: "all",       label: "All"              },
    { id: "nlp",       label: "NLP & LLMs"       },
    { id: "ml",        label: "Machine Learning" },
    { id: "cv",        label: "Computer Vision"  },
    { id: "data-eng",  label: "Data Engineering" },
    { id: "software",  label: "Software"         },
    { id: "analytics", label: "Analytics & BI"   },
  ],

  projects: [
    {
      title:    "Medical Report Summarization",
      category: "nlp",
      featured: true,
      period:   "2025",
      blurb:    "Clinicians lose hours to dense report text. I fine-tuned a T5 " +
                "transformer on clinical documents to produce summaries that " +
                "keep the findings and drop the boilerplate, then deployed it " +
                "as a Streamlit app so it could actually be used.",
      impact:   "ROUGE-L of 0.71 on held-out clinical reports, deployed end to end via Streamlit.",
      tags:     ["Python", "T5", "Transformers", "PyTorch", "Streamlit"],
      links:    [
        { label: "Code", url: "TODO: repo url" },
        { label: "Demo", url: "TODO: live Streamlit url — or delete this line" },
      ],
    },
    {
      title:    "Phishing Email Detection",
      category: "ml",
      period:   "2025",
      blurb:    "Classified 10K+ emails as phishing or legitimate, benchmarking " +
                "a fine-tuned BERT against SVM and Random Forest baselines to " +
                "see what the transformer actually bought over classical models.",
      impact:   "92% accuracy with fine-tuned BERT, beating both classical baselines.",
      tags:     ["Python", "BERT", "SVM", "Random Forest", "scikit-learn"],
      links:    [{ label: "Code", url: "TODO: repo url" }],
    },
    /* Cut from this list, deliberately — both are still real work, they just
       weren't helping here:
         · Financial News Sentiment Analyzer (FinBERT, 83%) — the most-done
           portfolio project there is, and an 83% directional-accuracy claim
           invites a lookahead-bias interrogation you don't want to have.
         · Fall Detection System (CNN, 99.8%) — that number reads as a small or
           homogeneous dataset rather than as a strong result.
       Both are worth reinstating if you redo the evaluation so the numbers hold
       up: chronological split for the first, video-level split for the second.
       The "cv" category is left defined below so a CV project can slot back in. */
    {
      title:    "Decentralized AI for Medical Diagnostics",
      category: "software",
      period:   "2024",
      blurb:    "Diagnostic records normally sit behind whichever hospital " +
                "created them. This puts them on-chain instead: hospitals " +
                "upload reports, patients reach their own history and insurance " +
                "in one place, and the ledger provides the audit trail that " +
                "would otherwise need a trusted intermediary.",
      impact:   "Role-based access control across three actor types — patients, " +
                "hospitals, and insurers — each with different permissions over " +
                "the same records.",
      tags:     ["Solidity", "Smart Contracts", "Access Control", "Blockchain", "Python"],
      links:    [{ label: "Code", url: "TODO: repo url" }],
    },
    {
      title:    "Distributed Log Processing",
      category: "data-eng",
      period:   "2024",
      blurb:    "A Spark pipeline that ingests event logs at volume, aggregates " +
                "them in parallel, and surfaces real-time analytics rather than " +
                "overnight batch reports.",
      impact:   "Processes 1M+ event logs with parallel aggregation and real-time output.",
      tags:     ["Python", "Spark", "ETL Pipelines", "Hadoop"],
      links:    [{ label: "Code", url: "TODO: repo url" }],
    },
  ],

  /* ── Skills ───────────────────────────────────────────────────────────── */
  skillGroups: [
    {
      name: "Languages",
      items: ["Python", "R", "SQL", "C++", "Java", "Solidity", "ABAP", "MATLAB"],
    },
    {
      name: "NLP & LLMs",
      items: ["BERT", "T5", "FinBERT", "Transformers", "NLTK", "spaCy"],
    },
    {
      name: "ML & Deep Learning",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost",
              "Random Forest", "SVM", "Hyperparameter Tuning", "Cross-Validation"],
    },
    {
      name: "Computer Vision",
      items: ["YOLO (v3–v8)", "Faster R-CNN", "CNNs", "OpenCV", "Data Augmentation"],
    },
    {
      name: "Data & Cloud",
      items: ["ETL Pipelines", "Spark", "Hadoop", "AWS (S3, EC2, SageMaker)",
              "Azure ML", "BigQuery", "Docker", "Git"],
    },
    {
      name: "Analytics & Statistics",
      items: ["A/B Testing", "Hypothesis Testing", "Statistical Inference",
              "Feature Engineering", "PCA", "Clustering"],
    },
    {
      name: "Visualization & BI",
      items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
    },
    {
      name: "Web & APIs",
      items: ["REST APIs", "Flask", "Microservices", "HTML", "CSS", "JavaScript (basic)"],
    },
  ],

  /* ── Experience ───────────────────────────────────────────────────────── */
  experience: [
    {
      role:    "AI Strategy & Operations Intern",
      org:     "Georgia Institute of Technology — Office of Development",
      period:  "Jun 2026 – Jul 2026",
      location: "Atlanta, GA",
      bullets: [
        "Conducted workflow analysis across operations teams to identify AI and automation integration opportunities.",
        "Developed data-driven AI adoption recommendations, collaborating with department leads to design scalable solutions.",
      ],
      tags: ["AI Strategy", "Workflow Analysis", "Stakeholder Collaboration"],
    },
    {
      role:    "Software Developer Intern",
      org:     "Nativebyte",
      period:  "Dec 2024 – May 2025",
      location: "New Delhi, India",
      bullets: [
        "Built Python recommendation systems using XGBoost and regression models, improving UI personalization and engagement.",
        "Designed and deployed end-to-end ML pipelines covering data cleaning, feature engineering, model training, and cross-validation.",
      ],
      tags: ["Python", "XGBoost", "ML Pipelines", "Feature Engineering"],
    },
    {
      role:    "ABAP Developer Intern",
      org:     "HB Fuller",
      period:  "Jun 2024 – Aug 2024",
      location: "Pune, India",
      bullets: [
        "Built SAP ERP reporting in ABAP for a project covering taxation rules on plastic shipping.",
        "Worked inside a live enterprise ERP environment, learning how SAP data models constrain what reporting can do.",
      ],
      tags: ["ABAP", "SAP", "ERP"],
    },
    {
      role:    "Data Analyst Intern",
      org:     "Unified Mentor",
      period:  "Mar 2024 – May 2024",
      location: "Remote",
      bullets: [
        "Consolidated and cleaned 5+ heterogeneous datasets into automated ETL pipelines, running EDA and hypothesis testing for partner firms.",
        "Built Power BI and Tableau dashboards to communicate KPIs and data trends to non-technical stakeholders.",
      ],
      tags: ["ETL Pipelines", "Power BI", "Tableau", "Hypothesis Testing"],
    },
    {
      role:    "AI Research Intern",
      org:     "IIIT Lucknow — AI Research Lab",
      period:  "Jan 2024 – May 2024",
      location: "Lucknow, India · Advisor: Dr. Deepak Kumar Singh",
      bullets: [
        "Benchmarked YOLOv3–v8 and Faster R-CNN in PyTorch and TensorFlow on Raspberry Pi, improving inference speed by 12%.",
        "Applied hyperparameter tuning and data augmentation to improve object detection precision across real-world datasets.",
      ],
      tags: ["PyTorch", "TensorFlow", "YOLO", "Edge Deployment"],
    },
    {
      role:    "Software Engineering Research Intern",
      org:     "IIIT Allahabad — Research Lab",
      period:  "Aug 2023 – Nov 2023",
      location: "Remote · Advisor: Dr. Naveen Saini",
      bullets: [
        "Built a knowledge graph recommendation system via collaborative filtering on 10K+ multilingual ratings across 18 languages.",
        "Applied PCA and clustering to improve recommendation precision by 9%; deployed the prototype behind a Flask REST API.",
      ],
      tags: ["Python", "Collaborative Filtering", "PCA", "Flask"],
    },
  ],

  /* ── Education ────────────────────────────────────────────────────────── */
  education: [
    {
      degree: "M.S. in Data Science",
      field:  "GPA 4.0 / 4.0",
      school: "University of Maryland, College Park, MD",
      period: "Aug 2025 – May 2027",
      detail: "Probability & Statistics · Machine Learning · Big Data Systems · " +
              "Algorithms for Data Science · Data Representation & Modelling",
    },
    {
      degree: "B.Tech in Computer Science & AI",
      field:  "GPA 8.78 / 10",
      school: "Indian Institute of Information Technology, Lucknow, India",
      period: "Nov 2021 – May 2025",
      detail: "Data Structures & Algorithms · AI · NLP · Generative AI · DBMS · " +
              "Feature Engineering · Computer Networks",
    },
  ],

  /* A `url` turns the chip into a link. Use the issuer's own verification page,
     not an uploaded image or PDF of the certificate — a self-hosted JPG proves
     nothing and reads as padding, whereas a verifiable link is worth the click.
       Azure  → Microsoft Learn profile → the credential's "Share" link
       Google → Coursera → Accomplishments → "Verify certificate"
     Leave url empty and the chip renders as plain text, which is the right
     treatment for anything not yet finished. */
  certifications: [
    {
      name:   "Google Advanced Data Analytics",
      issuer: "Google",
      url:    "https://coursera.org/verify/professional-cert/FL8NAB8HDVBC",
    },
    {
      name:   "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      url:    "https://www.credly.com/badges/651bc61b-a523-4bef-8330-9cda6d9b17f5/public_url",
    },
    {
      name:   "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      url:    "https://www.credly.com/badges/9b1fb593-8a0f-4053-acfc-b2a1040aa0de/public_url",
    },
    { name: "AWS ML Specialty (in progress)", issuer: "AWS", url: "" },
  ],

  /* ── Contact ──────────────────────────────────────────────────────────── */
  contact: {
    heading: "Let's talk.",
    body: "I'm looking for data science and machine learning roles. " +
          "If you're hiring, or you just want to compare notes on a problem, " +
          "my inbox is open.",
  },
};
