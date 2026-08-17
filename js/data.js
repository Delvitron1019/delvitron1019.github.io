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
      blurb:    "Biomedical articles bury their findings in length. I fine-tuned " +
                "T5 to produce abstractive summaries, then measured it against " +
                "the two baselines that decide whether such a project is worth " +
                "anything: a lead-3 extractive baseline, and the same model " +
                "without fine-tuning.",
      impact:   "ROUGE-L 20.06 on 200 held-out examples, against 18.56 for lead-3 " +
                "and 13.83 for untuned T5. Trained in 18.7 minutes on a 4 GB laptop GPU.",
      tags:     ["Python", "T5", "Transformers", "PyTorch", "ROUGE", "Streamlit"],
      links:    [
        { label: "Code", url: "https://github.com/Delvitron1019/medical-text-summarization" },
      ],
      detail: {
        problem:
          "Biomedical articles are long and structured, and the findings sit " +
          "buried in them. Extractive summarizers handle this badly: they pull " +
          "whole sentences, which means pulling the surrounding scaffolding " +
          "along with the finding. Abstractive summarization can learn which " +
          "parts of the structure carry signal — but only if it can beat the " +
          "embarrassingly strong baseline of just taking the first three " +
          "sentences, which is the question this project actually tests.",

        data: {
          text: "PubMed article/abstract pairs — biomedical literature, not " +
                "clinical notes. The clinically ideal corpus would be MIMIC " +
                "discharge summaries or radiology reports, but those need " +
                "credentialed access (a CITI course and a signed data use " +
                "agreement) and cannot back a public repo whose point is that " +
                "anyone can reproduce the numbers. The pipeline transfers to " +
                "clinical data; the numbers do not.",
          spec: [
            ["Train / val / test", "6,000 / 400 / 400 pairs, frozen to disk before training"],
            ["Article length", "3,324 words on average"],
            ["Abstract length", "211 words on average"],
            ["Filtering", "Dropped stub abstracts, truncated articles, and rows where the abstract was longer than its article"],
          ],
        },

        approach: {
          bullets: [
            "Abstractive seq2seq rather than extractive, so the model can drop scaffolding instead of copying whole sentences",
            "T5's 'summarize: ' task prefix — it was pretrained multi-task with instruction prefixes, and omitting it measurably degrades output",
            "Target length raised from 128 to 256 tokens after the corpus statistics showed references average 211 words; the shorter cap was truncating labels and teaching the model to stop early",
            "no_repeat_ngram_size=3 at generation — without it T5 loops, and beam search alone does not fix that",
          ],
        },

        model: {
          text: "t5-small chosen to fit a 4 GB laptop GPU. Larger variants would " +
                "score higher; this is a compute constraint, not a design choice, " +
                "and the write-up says so rather than implying otherwise.",
          spec: [
            ["Architecture", "t5-small, 60.5M parameters, full fine-tune"],
            ["Epochs / LR", "3 epochs, 3e-4, 5% warmup"],
            ["Batch", "4 per device × 4 accumulation = effective 16"],
            ["Precision", "bf16"],
            ["Context", "512 source tokens, 256 target tokens"],
            ["Hardware", "RTX 3050 Ti (4 GB), 18.7 minutes"],
          ],
        },

        results: {
          text: "200 held-out examples. Both baselines are load-bearing: the " +
                "untuned row shows whether fine-tuning did anything, the lead-3 " +
                "row shows whether the whole approach was worth taking.",
          table: {
            columns: ["System", "ROUGE-1", "ROUGE-2", "ROUGE-L", "Avg words"],
            rows: [
              ["lead-3 baseline",     "28.90", "10.33", "18.56", "95.4"],
              ["t5-small, untuned",   "19.60", "6.91",  "13.83", "43.6"],
              ["t5-small, fine-tuned","33.57", "11.86", "20.06", "96.6"],
            ],
            highlight: 2,
          },
          note: "Fine-tuning beats lead-3 by 1.50 ROUGE-L and beats the untuned " +
                "model by 6.23. The margin over lead-3 is modest, and that is " +
                "what an honest result looks like for a 60M-parameter model that " +
                "sees roughly 11% of each article — published state of the art on " +
                "this corpus is 21–27 ROUGE-L using far larger models with far " +
                "longer context. Plenty of abstractive summarizers quietly fail " +
                "the lead-3 test, which is exactly why a ROUGE score quoted " +
                "without baselines means very little.",
        },

        deployment:
          "A Streamlit app: paste an article, get a summary, with generation " +
          "parameters exposed and the measured ROUGE shown alongside. Model " +
          "weights load once per server via st.cache_resource rather than per " +
          "request, and the UI flags when an input hits the 512-token limit — " +
          "that truncation is a real architectural constraint, not a UI quirk, " +
          "and hiding it would misrepresent what the model saw.",

        limitations: [
          "Not clinically validated and not a medical device. Nothing it produces should inform patient care.",
          "Wrong domain for a clinical claim: PubMed abstracts are written to be summaries, whereas a discharge summary is written under time pressure. Only the pipeline transfers.",
          "Sees about 11% of each article. T5 caps input at 512 tokens while articles average 3,324 words, so the model summarises the opening and never reads the rest. A long-context model (LongT5, LED) is the obvious next step.",
          "ROUGE measures n-gram overlap, not truth. A summary that drops a negation and inverts a finding can still score well. No factual-consistency metric was computed.",
          "Single training run, no seed sweep — small differences between configurations are not meaningful.",
          "Reported train_loss is scaled by gradient accumulation in current transformers versions: it logs ~11.7 against an eval_loss of 2.59. Read naively that looks like total failure, since uniform-random over T5's vocabulary is 10.38. I lost a retrain to chasing this as fp16 instability before identifying it as a reporting artifact.",
        ],
      },
    },
    {
      title:    "Phishing Email Detection",
      slug:     "phishing-email-detection",
      category: "ml",
      period:   "2025",
      blurb:    "A hybrid feature pipeline for phishing detection: two " +
                "class-conditional HMMs score how likely an email is under " +
                "phishing versus legitimate word statistics, those likelihoods " +
                "are concatenated with a BERT sentence embedding, and classical " +
                "classifiers run on the combined vector.",
      impact:   "93.5% accuracy on a held-out set of 200 emails — logistic regression " +
                "over combined HMM + BERT features, against 92.0% for random forest.",
      tags:     ["Python", "BERT", "HMM", "CRF", "Logistic Regression", "NLTK", "scikit-learn"],
      links:    [
        { label: "Code", url: "https://github.com/Delvitron1019/Phishing-Email-Detection-Framework" },
      ],
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
          text: "The Enron email corpus, labelled phishing versus legitimate. " +
                "Near-balanced, which matters: it means accuracy is a meaningful " +
                "headline number here rather than a misleading one, since the " +
                "majority-class baseline sits at about 53%.",
          spec: [
            ["Corpus", "Enron.csv — subject, body, binary label"],
            ["Emails available", "29,767"],
            ["Class balance", "15,791 legitimate (53.0%) / 13,976 phishing (47.0%)"],
            ["Body length", "median 694 characters, mean 1,465, max 228,353"],
            ["Missing values", "198 emails with no subject line; bodies complete"],
            ["Used for modelling", "1,000 emails, randomly sampled from the 29,767"],
            ["Fields used", "Body text only — headers and URLs were not used as features"],
          ],
          note: "The 1,000-email subsample is the honest caveat on every number " +
                "below: BERT embeddings were computed on CPU one email at a time, " +
                "which makes the full corpus impractical in a notebook session. " +
                "Worth stating plainly rather than quoting the 29,767 figure.",
        },

        approach: {
          text: "Rather than fine-tuning a transformer end to end, the pipeline " +
                "treats sequence models as feature extractors and lets a cheap " +
                "classifier do the deciding.",
          bullets: [
            "Preprocessing: NLTK tokenisation, lowercasing, alphanumeric filter, English stopword removal, WordNet lemmatisation",
            "Two class-conditional HMMs — one trained only on phishing emails, one only on legitimate — each scoring an email's log-likelihood under its own word statistics",
            "A frozen BERT encoder producing a [CLS] sentence embedding per email",
            "The two HMM log-likelihoods concatenated with the 768-dimensional BERT vector into a single 770-dimensional feature per email",
            "Logistic regression and random forest trained on that combined vector; a MEMM and a CRF explored separately over token-level features",
          ],
        },

        model: {
          text: "BERT here is a frozen feature extractor, not a fine-tuned " +
                "classifier — the [CLS] embedding is read out and the gradient " +
                "never flows back into the encoder. That's a meaningful " +
                "distinction and cheaper by orders of magnitude, but it does mean " +
                "the transformer never adapts to the phishing domain.",
          spec: [
            ["Encoder", "bert-base-uncased, frozen, max_length 128 tokens"],
            ["Sequence models", "hmmlearn MultinomialHMM, 2 hidden states, 100 iterations"],
            ["Feature vector", "770-d = 2 HMM log-likelihoods + 768-d BERT [CLS]"],
            ["Classifiers", "LogisticRegression (max_iter 1000), RandomForest (100 trees)"],
            ["Also explored", "NLTK MaxentClassifier (MEMM), 10 iterations; pycrfsuite CRF, c1=c2=1.0, 1,930 features"],
            ["Split", "80/20 stratified, random_state 42 → 200 test emails (101 legitimate, 99 phishing)"],
          ],
        },

        results: {
          text: "Measured on the 200-email held-out set. Precision, recall, and F1 " +
                "are for the phishing class.",
          table: {
            columns: ["Model", "Accuracy", "Precision", "Recall", "F1"],
            rows: [
              ["Majority-class baseline",        "53.0%", "—",    "—",    "—"],
              ["Random forest (HMM + BERT)",     "92.0%", "0.94", "0.90", "0.92"],
              ["Logistic regression (HMM + BERT)", "93.5%", "0.94", "0.93", "0.93"],
            ],
            highlight: 2,
          },
          note: "Logistic regression beat random forest on the same features, " +
                "which is the more interesting result: once the HMM and BERT " +
                "features carry the signal, a linear model is enough, and the " +
                "extra capacity of an ensemble buys nothing. Confusion matrix for " +
                "the best model: 95 legitimate and 92 phishing correct, 6 false " +
                "positives, 7 missed phishing emails.",
        },

        deployment:
          "Not deployed — the project stops at evaluation in a Colab notebook. " +
          "The pipeline would be cheap to serve if it were: BERT inference " +
          "dominates the cost, the HMMs and the linear classifier are negligible, " +
          "and the whole thing is a single forward pass with no fine-tuned weights " +
          "to host.",

        limitations: [
          "Trained on 1,000 of the 29,767 available emails. Scaling to the full corpus is the obvious next step and would likely move these numbers.",
          "BERT is frozen rather than fine-tuned, so the encoder never adapts to phishing language. Fine-tuning it is the single change most likely to improve results.",
          "Inputs truncated to 128 BERT tokens while the median email body runs to 694 characters, so most emails are only partly seen by the encoder.",
          "The CRF branch is not soundly evaluated — its reported figures re-print the logistic regression scores rather than scoring the CRF's own predictions. Treat the CRF as exploratory, not as a result.",
          "The MEMM's 90.6% is training accuracy over token-level features, and its train/test split is at token level rather than email level, so tokens from the same email appear on both sides. It is not comparable to the held-out numbers above.",
          "The Enron corpus is old and phishing language shifts quickly, so performance on current phishing would be lower.",
          "Body text only — no header, sender-domain, or URL features, which is what real detectors lean on hardest.",
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
      blurb:    "A PySpark pipeline that ingests raw event logs, aggregates them " +
                "in parallel, and writes analytics tables — benchmarked against a " +
                "single-threaded pandas implementation computing identical " +
                "outputs, to find where distributed processing actually starts " +
                "paying for itself.",
      impact:   "Crossover measured between 1M and 4M rows: pandas wins at 1M, Spark " +
                "wins by 1.72× at 4M. Useful core count turned out to depend on data " +
                "size, not on the job.",
      tags:     ["Python", "PySpark", "pandas", "Parquet", "Benchmarking"],
      links:    [
        { label: "Code", url: "https://github.com/Delvitron1019/distributed-log-processing" },
      ],
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
          text: "Synthetic, and generated by a script in the repo so the whole " +
                "benchmark is reproducible from a clean clone. The generator is " +
                "deliberately not uniform: endpoint popularity follows a Zipf " +
                "distribution and latency is log-normal with a long tail, because " +
                "uniform random data would hide partition skew — the actual " +
                "engineering problem — and would make p95 agree with the mean, " +
                "which never happens in reality.",
          spec: [
            ["Corpus", "1,000,000 and 4,000,000 line variants (227 MB / 907 MB)"],
            ["Format", "JSON Lines, 8 shards, 10 fields per event"],
            ["Skew", "Zipf-distributed endpoints; two injected incident windows"],
            ["Malformed lines", "0.40% written broken on purpose — invalid JSON, truncated objects, blank lines, null timestamps"],
            ["Bad-row handling", "PERMISSIVE read with a corrupt-record column: quarantined and counted, never silently dropped"],
          ],
        },

        approach: {
          text: "Four aggregations, chosen because each stresses the engine differently.",
          bullets: [
            "endpoint_stats — volume, error rate, and p50/p95/p99 latency per endpoint. A wide shuffle over skewed keys",
            "error_timeline — error rate per service per 1-minute event-time window, which surfaces the injected incidents",
            "service_health — per-service, per-region rollup. Cheap, small output",
            "top_users — groupBy over ~120,000 distinct keys, the genuinely expensive one",
            "percentile_approx rather than an exact percentile: one pass with bounded error instead of a full sort within each group",
          ],
        },

        model: {
          text: "PySpark, structured as ingest → parse → aggregate → Parquet. " +
                "The schema is declared explicitly rather than inferred — " +
                "inference costs an extra full pass and silently changes column " +
                "types when a new file arrives with a null column, which is the " +
                "classic way a working pipeline breaks overnight.",
          spec: [
            ["Engine", "PySpark 4.2.0, local mode, adaptive query execution on"],
            ["Machine", "WSL2 Ubuntu, 16 logical cores, 7 GB RAM, OpenJDK 17"],
            ["Shuffle partitions", "16"],
            ["Baseline", "Single-threaded pandas computing byte-identical outputs"],
            ["Output", "Parquet, one directory per aggregation"],
          ],
        },

        results: {
          text: "Both engines on the same machine and OS, computing identical " +
                "outputs. The interesting number is not the speedup but where it " +
                "crosses one.",
          table: {
            columns: ["Cores", "1M rows", "4M rows", "4M speedup"],
            rows: [
              ["pandas (1 thread)", "19.8s", "61.5s", "1.00×"],
              ["Spark local[1]",    "37.6s", "83.6s", "0.74×"],
              ["Spark local[4]",    "24.5s", "41.0s", "1.50×"],
              ["Spark local[16]",   "27.1s", "35.8s", "1.72×"],
            ],
            highlight: 3,
          },
          note: "Two findings. First, the crossover sits between 1M and 4M rows: " +
                "below it Spark loses at every core count, above it Spark wins by " +
                "1.72× while pandas' peak memory climbs linearly (608 MB → 1,959 MB " +
                "for 4× the data) toward a ceiling Spark doesn't have. Second, and " +
                "more useful — the scaling curve changes shape with data size. At " +
                "1M rows throughput peaks at 4 cores and then declines, because " +
                "each task is too small to justify its scheduling overhead. At 4M " +
                "all 16 cores still help. How many cores are worth provisioning is " +
                "a property of the data volume, not of the job, so sizing a cluster " +
                "from a benchmark on a smaller sample would under-provision.",
        },

        deployment:
          "Runs as a local spark-submit job over a directory of JSONL shards, " +
          "writing Parquet. The repo ships a synthetic log generator so a reviewer " +
          "can reproduce every number above from a clean clone without needing " +
          "access to real traffic logs.",

        limitations: [
          "Local mode, not a real cluster — one JVM heap and no network shuffle, which understates shuffle cost and overstates how cheap coordination is.",
          "An early version of this benchmark was invalid: the pandas baseline ran on Windows while Spark ran under WSL. The same workload took 29.2s on Windows and 19.8s in WSL, a 47% gap with nothing to do with the engine. Both sides now run in one environment.",
          "Batch over files, not streaming. The timeline aggregation uses event-time windows and would port to Structured Streaming, but late-arriving events and watermarking are not handled.",
          "Output is overwritten each run — no incremental or idempotent writes.",
          "Executor failure mid-run is untested; local mode makes it hard to exercise.",
          "Measured to 4M rows. The next bottleneck is likely the top_users groupBy, whose key cardinality grows with the user base rather than with traffic volume.",
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
