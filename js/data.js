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
      slug:     "medical-report-summarization",
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
      detail: {
        problem:
          "Clinical reports are long, templated, and written under time pressure. " +
          "The diagnostically relevant content is often a few sentences buried in " +
          "boilerplate, so anyone picking up a patient's history reads far more " +
          "text than they need. Extractive summarizers handle this badly — they " +
          "pull whole sentences, which in clinical text means pulling the " +
          "boilerplate along with the finding.",

        data: {
          text: "TODO: name the corpus and link it (MIMIC-III? PubMed? MedQuAD?). " +
                "State access requirements — reviewers want to know whether they " +
                "could reproduce this. If the data was synthetic or scraped, say " +
                "so; being upfront about provenance reads as a strength in " +
                "clinical ML, not a weakness.",
          spec: [
            ["Records", "TODO: how many report/summary pairs"],
            ["Split", "TODO: train / val / test, and how it was drawn"],
            ["Preprocessing", "TODO: cleaning, and how you handled reports longer than T5's input limit"],
          ],
        },

        approach: {
          text: "Framed as abstractive rather than extractive summarization, so " +
                "the model learns which parts of the templated structure carry " +
                "signal instead of copying whole sentences.",
          bullets: [
            "TODO: how input/target pairs were constructed",
            "TODO: the chunking or truncation strategy for long reports — clinical notes routinely exceed 512 tokens, and how you handled that is one of the more interesting decisions here",
            "TODO: anything you tried that did not work, and why you moved on",
          ],
        },

        model: {
          text: "TODO: one or two sentences on why T5 rather than BART, PEGASUS, " +
                "or an instruction-tuned LLM. The comparison you didn't run is " +
                "the first question an interviewer asks.",
          spec: [
            ["Architecture", "T5 (TODO: t5-small / t5-base / t5-large)"],
            ["Fine-tuning", "TODO: full fine-tune or parameter-efficient (LoRA)?"],
            ["Epochs", "TODO"],
            ["Learning rate", "TODO"],
            ["Batch size", "TODO"],
            ["Hardware", "TODO: GPU and training time"],
          ],
        },

        results: {
          text: "Evaluated on a held-out split with ROUGE against reference summaries.",
          table: {
            columns: ["Model", "ROUGE-1", "ROUGE-2", "ROUGE-L"],
            rows: [
              ["Lead-3 baseline",   "TODO", "TODO", "TODO"],
              ["T5, off the shelf", "TODO", "TODO", "TODO"],
              ["T5, fine-tuned",    "TODO", "TODO", "0.71"],
            ],
            highlight: 2,
          },
          note: "TODO: fill the baseline rows. \"ROUGE-L 0.71\" is a number; " +
                "\"0.71 against 0.42 for the untuned model\" is a result — and " +
                "the empty rows are the first thing a technical reviewer will " +
                "notice. Worth adding a sentence on ROUGE's limits too: it " +
                "rewards overlap, not factual correctness, which matters more " +
                "than usual in a clinical setting.",
        },

        deployment:
          "Served as a Streamlit app: paste in a report, get the summary back. " +
          "TODO: where it runs (Streamlit Community Cloud? a VM?), inference " +
          "latency, and whether the model is loaded once at startup or per request.",

        limitations: [
          "Not clinically validated. A research project, not a medical device — its output should not inform patient care.",
          "TODO: hallucination behaviour — does it ever invent findings that aren't in the source?",
          "TODO: negation handling. Abstractive clinical summarizers are well known to drop \"no evidence of\" and flip a finding's meaning. Checking this and reporting what you found is a strong thing to be able to say.",
          "TODO: which report types it was trained on, and where it degrades outside them.",
        ],
      },
    },
    {
      title:    "Phishing Email Detection",
      slug:     "phishing-email-detection",
      category: "ml",
      period:   "2025",
      blurb:    "Classified 10K+ emails as phishing or legitimate, benchmarking " +
                "a fine-tuned BERT against SVM and Random Forest baselines to " +
                "see what the transformer actually bought over classical models.",
      impact:   "92% accuracy with fine-tuned BERT, beating both classical baselines.",
      tags:     ["Python", "BERT", "SVM", "Random Forest", "scikit-learn"],
      links:    [{ label: "Code", url: "TODO: repo url" }],
      detail: {
        problem:
          "Phishing detection is class-imbalanced text classification where the " +
          "two error types cost wildly different amounts: a missed phishing email " +
          "is a breach, a false positive is an annoyed user. Classical models on " +
          "TF-IDF features are fast, cheap, and harder to beat than people expect, " +
          "which makes this a good setting for a specific question — does a " +
          "transformer earn its cost here, or does TF-IDF plus SVM get you most " +
          "of the way? The comparison is the point of the project, not the 92%.",

        data: {
          text: "TODO: name and link the corpus (Enron + Nazario? SpamAssassin? Kaggle?).",
          spec: [
            ["Emails", "10,000+"],
            ["Class balance", "TODO: what fraction was phishing? This decides whether 92% is strong or barely above the majority-class baseline, so state it explicitly"],
            ["Fields used", "TODO: subject and body only, or headers and URLs too?"],
            ["Deduplication", "TODO: public phishing corpora have heavy near-duplicate overlap; leakage between splits is the standard way these numbers get inflated"],
          ],
        },

        approach: {
          bullets: [
            "Classical baselines on TF-IDF features — TODO: n-gram range, and any handcrafted features such as URL counts, sender-domain mismatch, or IP literals",
            "BERT fine-tuned on the same split — TODO: checkpoint, max sequence length, and how you handled emails longer than it",
            "TODO: did the classical baselines get a genuine tuning budget? An untuned baseline flatters the transformer, and acknowledging that is a strong signal",
          ],
        },

        model: {
          spec: [
            ["Transformer", "TODO: bert-base-uncased?"],
            ["Max sequence length", "TODO"],
            ["Epochs / LR / batch", "TODO"],
            ["Classical models", "SVM, Random Forest (scikit-learn)"],
            ["Selection", "TODO: grid search or fixed hyperparameters?"],
          ],
        },

        results: {
          text: "On imbalanced data, accuracy is the weakest cell in this table — " +
                "recall on the phishing class is what actually matters.",
          table: {
            columns: ["Model", "Accuracy", "Precision", "Recall", "F1"],
            rows: [
              ["Random Forest",     "TODO", "TODO", "TODO", "TODO"],
              ["SVM (TF-IDF)",      "TODO", "TODO", "TODO", "TODO"],
              ["BERT, fine-tuned",  "92%",  "TODO", "TODO", "TODO"],
            ],
            highlight: 2,
          },
          note: "TODO: the finding, in two or three sentences. BERT won by X " +
                "points but cost Y× more inference time, so for deployment the " +
                "tradeoff is Z. If the classical models came closer than " +
                "expected, say so — a nuanced result you can explain is more " +
                "interesting than a clean win you can't.",
        },

        deployment:
          "TODO: was this deployed anywhere, or does it stop at evaluation? " +
          "Either answer is fine — say which. If it stops at evaluation, the " +
          "honest framing is that inference cost is what would decide the " +
          "production choice, and point at the timing numbers.",

        limitations: [
          "TODO: corpus age. Public phishing datasets skew old and phishing language shifts fast, so performance on current phishing is likely below these numbers.",
          "TODO: does the model see headers and URLs, or body text only? Real detectors lean heavily on header and link signals.",
          "Adversarial robustness untested — none of these models were evaluated against an attacker who knows the classifier exists.",
        ],
      },
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
      slug:     "decentralized-medical-diagnostics",
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
      detail: {
        problem:
          "Diagnostic records normally sit behind whichever hospital created " +
          "them. Patients can rarely assemble their own history, and insurers " +
          "need a verifiable subset without getting everything. The usual fix is " +
          "a trusted intermediary holding the master copy — which reintroduces " +
          "the single point of failure it was meant to remove.",

        data: {
          text: "TODO: what actually goes on-chain versus off-chain. This is the " +
                "central design question in any health-record blockchain — full " +
                "records on a public ledger is a privacy problem, so most designs " +
                "store hashes or pointers on-chain and the records elsewhere. " +
                "Whichever you did, say so; it's the detail a reviewer probes.",
        },

        approach: {
          bullets: [
            "Three actor types with distinct permissions over the same records: patients, hospitals, and insurers",
            "TODO: how identity and role assignment work — who grants a hospital its role?",
            "TODO: how a patient grants and revokes access, and whether revocation is enforceable once data has been read",
          ],
        },

        model: {
          text: "Smart contracts in Solidity implementing role-based access control.",
          spec: [
            ["Contracts", "TODO: how many, and what each is responsible for"],
            ["Chain / testnet", "TODO: Ethereum testnet? A local chain?"],
            ["Storage", "TODO: on-chain records, or hashes with off-chain storage such as IPFS?"],
            ["The AI part", "TODO: where does the diagnostics model fit? Right now the project name promises AI and the write-up is all ledger — worth being explicit"],
          ],
        },

        results: {
          text: "Role-based access control across patients, hospitals, and insurers, " +
                "each with different permissions over the same records.",
          note: "TODO: this is the one project without a measurable result. " +
                "Gas cost per operation, number of record types supported, or a " +
                "working demo would all count. If it stopped at a prototype, say " +
                "that plainly — it's a fine thing for a project to be.",
        },

        deployment:
          "TODO: deployed to a testnet, run locally, or a demo front end? Say " +
          "which, and link it if it's reachable.",

        limitations: [
          "TODO: on-chain data is permanent and public by design, which is in direct tension with health-record privacy and with a right to erasure. How the design handles that is worth stating.",
          "TODO: not audited. Access-control bugs in smart contracts are the classic failure mode, and saying it up front is better than being asked.",
          "TODO: scale and cost — what happens to gas cost as records grow?",
        ],
      },
    },
    {
      title:    "Distributed Log Processing",
      slug:     "distributed-log-processing",
      category: "data-eng",
      period:   "2024",
      blurb:    "A Spark pipeline that ingests event logs at volume, aggregates " +
                "them in parallel, and surfaces real-time analytics rather than " +
                "overnight batch reports.",
      impact:   "Processes 1M+ event logs with parallel aggregation and real-time output.",
      tags:     ["Python", "Spark", "ETL Pipelines", "Hadoop"],
      links:    [{ label: "Code", url: "TODO: repo url" }],
      detail: {
        problem:
          "Log analytics defaults to batch: collect all day, aggregate overnight, " +
          "read yesterday's numbers this morning. That's fine until you need to " +
          "notice something while it's still happening — an error-rate spike, a " +
          "traffic anomaly, a service degrading. The engineering question is " +
          "where the bottleneck actually sits: naive log processing is I/O-bound " +
          "on parsing and shuffle-bound on aggregation, and those two want " +
          "opposite things from your partitioning strategy.",

        data: {
          spec: [
            ["Volume", "1,000,000+ event logs"],
            ["Source", "TODO: files on disk, S3, a Kafka topic?"],
            ["Format", "TODO: JSON lines, Apache combined log, custom?"],
            ["Malformed rows", "TODO: dropped silently, or routed to a dead-letter path with a counter? Every real log corpus has them, and this is the detail that separates a pipeline someone would run in production from one they wouldn't"],
          ],
        },

        approach: {
          bullets: [
            "TODO: what's computed — request counts by endpoint, error rates, latency percentiles?",
            "TODO: windowed (tumbling, sliding) or full-scan aggregation?",
            "TODO: the partitioning strategy, and why. If you hit skew — and with real logs you almost certainly did, because traffic is never uniform across keys — say what it looked like and what fixed it. Salting a hot key is an unglamorous fix that proves you've debugged a real Spark job rather than run a tutorial",
          ],
        },

        model: {
          text: "PySpark, structured as ingest → parse → aggregate → sink.",
          spec: [
            ["Engine", "Apache Spark (PySpark)"],
            ["Mode", "TODO: Structured Streaming, or micro-batch on a schedule? \"Real-time\" covers a lot of ground and reviewers will ask"],
            ["Cluster", "TODO: executors, cores, memory"],
            ["Output", "TODO: Parquet, a database, a dashboard?"],
          ],
        },

        results: {
          text: "TODO: the before/after timings are the whole story of this " +
                "project. \"Processes 1M+ logs\" describes what it does; \"cut a " +
                "40-minute single-threaded pass to 90 seconds across 8 " +
                "executors\" describes what you achieved.",
          table: {
            columns: ["Configuration", "Runtime", "Throughput"],
            rows: [
              ["Single-threaded baseline", "TODO", "TODO"],
              ["Spark, tuned",             "TODO", "TODO"],
            ],
            highlight: 1,
          },
        },

        deployment:
          "TODO: how it's run — spark-submit locally, on a cluster, scheduled? " +
          "Worth including a synthetic log generator in the repo so a reviewer " +
          "can run it without sourcing a million log lines themselves. That's the " +
          "single highest-value addition to this project.",

        limitations: [
          "TODO: does it handle late-arriving events, or assume ordered arrival?",
          "TODO: exactly-once or at-least-once semantics on the output?",
          "TODO: what happens on executor failure mid-run?",
          "TODO: tested at 1M events — what's the next bottleneck at 100M?",
        ],
      },
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
