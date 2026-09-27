export interface Act {
  kicker: string;
  heading: string;
  emphasis: string;
  headingTail: string;
  body: string;
  chips: readonly string[];
  side: 'left' | 'right';
}

export interface Role {
  title: string;
  company: string;
  /** Live product, where there is one to show. */
  url?: string;
  context?: string;
  location: string;
  period: string;
  employment: 'Part-time' | 'Full-time';
  bullets: readonly string[];
}

export const resume = {
  name: 'Anas Habib',
  role: 'Software Engineer – Applied AI',
  location: 'Munich, Germany',
  // Work authorisation lives in the footer, not the hero: leading with it read
  // as pleading rather than as a qualification.
  eyebrow: 'Munich, Germany',
  summary:
    'Software engineer specialising in applied AI. Evaluated agents, agentic RAG and multimodal document automation with human-in-the-loop controls, built in Python, TypeScript, PostgreSQL and AWS.',
  metrics: [
    { value: '3+', label: 'Years engineering' },
    { value: '10h', label: 'Saved / week' },
    { value: '111', label: 'Licensors priced' },
  ],

  acts: [
    {
      kicker: '01 — Retrieval',
      heading: 'Finding the ',
      emphasis: 'right',
      headingTail: ' context',
      body: 'Documents become vectors. A question becomes a vector too. The neighbourhood that lights up is what the model actually gets to see — get this wrong and nothing downstream matters.',
      chips: ['pgvector', 'Pinecone', 'LangChain', 'RAG'],
      side: 'left',
    },
    {
      kicker: '02 — Extraction',
      heading: 'Messy in, ',
      emphasis: 'schema',
      headingTail: ' out',
      body: "Scanned receipts flow through extract, validate, store. What the model isn't sure about gets flagged for a human instead of quietly guessed at.",
      chips: ['Python', 'FastAPI', 'Structured output', 'PostgreSQL'],
      side: 'right',
    },
    {
      kicker: '03 — Agents',
      heading: 'Tools, not ',
      emphasis: 'chat',
      headingTail: '',
      body: 'A router reads the question and hands it to the specialist agent that can answer it. Twelve typed tools underneath. Agents propose changes; a person approves them, applied in one transaction, logged.',
      chips: ['OpenAI Agents SDK', 'Responses API', 'Tool calling', 'NestJS'],
      side: 'left',
    },
    {
      kicker: '04 — Shipped',
      heading: 'Running in ',
      emphasis: 'production',
      headingTail: '',
      body: 'Two production apps and an internal demo at ProSiebenSat.1, pricing across 111 licensors, and a 200-endpoint platform. All on AWS, provisioned in Terraform, released through CI/CD.',
      chips: ['ECS Fargate', 'Aurora', 'Terraform', 'GitLab CI/CD'],
      side: 'right',
    },
  ] as const satisfies readonly Act[],

  experience: [
    {
      title: 'Software Engineer – Applied AI',
      company: 'Redseven Entertainment GmbH',
      context: 'ProSiebenSat.1 Group',
      location: 'Munich, Germany',
      period: 'Mar 2026 — Present',
      employment: 'Part-time',
      bullets: [
        'Owned end-to-end delivery of a rights-clearance platform, partnering directly with rights, editorial and production teams to replace shared Excel workflows and reach production in roughly three months for 10–20 users',
        'Built “Nellie,” a three-agent, 12-tool assistant with cross-session memory and agentic pgvector RAG over 100+ contracts, reducing an estimated 30–60-minute licensing lookup to one evidence-backed response',
        'Gated AI releases on faithfulness and context recall using a 50-case evaluation suite; maintained scores near 0.85 against a 0.70 threshold and caught a real tool-routing regression before production',
        'Designed human-in-the-loop write controls that revalidated every proposal before atomic PostgreSQL updates, blocked unsafe bulk actions and recorded approvals and rejections in an end-to-end audit trail',
        'Built a multimodal receipt pipeline for approximately 50 users, reaching roughly 90% field-level accuracy across 20 tax-code categories and saving the finance team a reported 10+ hours per week',
        'Replaced legacy pricing workflows by migrating 111 licensors into PostgreSQL and implementing live exchange rates, billing-rule parity and non-destructive Excel import/export compatible with existing processes',
        'Deployed two production applications and one internal demo to AWS ECS Fargate using Docker, Terraform and GitLab CI/CD, with EU-hosted infrastructure, internal LLM routing and Braintrust tracing',
      ],
    },
    {
      title: 'Software Engineer – Applied AI',
      company: 'Arcpeak',
      location: 'Munich, Germany',
      period: 'Aug 2025 — Feb 2026',
      employment: 'Part-time',
      bullets: [
        "Built a personalized AI strategy agent that converted each client's 20-question intake into 10 tailored use cases, ranked by expected savings and implementation effort",
        'Grounded recommendations, budgets and timelines in client data and cited web research, then evaluated every release against a fixed baseline with an LLM reviewer',
        "Enabled the platform's first paying customers by delivering Stripe subscriptions and JWT/OAuth authentication across a Python/FastAPI and React/TypeScript application",
        'Kept multi-minute AI report jobs recoverable across interrupted sessions using Redis Streams, while streaming each completed section to users in real time',
        'Reduced deployment time by 80% through Docker, Terraform-provisioned AWS infrastructure and automated CI/CD',
        'Prevented invalid agent tool calls from reaching production by adding Pytest release gates for backend services and AI workflows',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'WorkSpin',
      location: 'Remote — Karachi, Pakistan',
      period: 'Jul 2023 — Jul 2025',
      employment: 'Full-time',
      bullets: [
        'Owned the backend of a feature-complete multi-tenant workspace platform, building a 106,000-line Node.js/Express system spanning 47 Mongoose models, 52 migrations and 200+ REST endpoints',
        'Unified imports from eight external platforms behind a reusable BullMQ architecture with bounded concurrency, provider-specific rate limits, retries and Socket.IO progress, tested on hundreds of tasks per run',
        'Reduced query latency by 70% and peak database load by 50% on an event platform through MongoDB schema redesign, index tuning and Redis caching',
        'Isolated payment operations behind a service-authenticated microservice integrating Stripe Connect, Treasury and Issuing for connected accounts, invoicing and virtual-card controls',
        'Built real-time collaboration with Socket.IO conflict handling, presence and scoped rooms, backed by tenant-isolated data access and a per-company configurable permission engine',
      ],
    },
  ] as readonly Role[],

  projects: [
    {
      name: 'InsightQL',
      url: 'https://github.com/AnasHabib139/InsightQL',
      tagline: 'AI Database Assistant',
      body: "A Next.js and NestJS tool that lets non-technical users query a database by typing a question in plain English, using LangChain's SQL agent over OpenAI GPT. Gets people an answer roughly 3x faster than writing the SQL themselves.",
      chips: ['Next.js', 'NestJS', 'LangChain', 'OpenAI GPT'],
    },
    {
      name: 'bugSage',
      url: 'https://github.com/AnasHabib139/bugSage',
      tagline: 'AI Debugging Assistant',
      body: 'A FastAPI chatbot that pulls relevant docs and past issues out of a Pinecone vector database (RAG) before answering, so its fixes for Express.js bugs match the code you are actually running.',
      chips: ['FastAPI', 'Pinecone', 'RAG', 'PyTorch'],
    },
    {
      name: 'CLI Assistant',
      url: 'https://github.com/AnasHabib139/personal_cli_assistant',
      tagline: 'Agentic Terminal Tool',
      body: 'A Python assistant that runs entirely offline on a local model via Ollama, with an agentic loop that chains five tools together through function calling.',
      chips: ['Python', 'Ollama', 'Function calling'],
    },
  ],

  skills: [
    { group: 'AI & LLM', items: ['AI Agents', 'Tool/Function Calling', 'Agentic RAG', 'Prompt Engineering', 'LLM Evaluation', 'LLM-as-Judge'] },
    { group: 'AI Tooling', items: ['OpenAI API', 'LangChain', 'LangGraph', 'Braintrust'] },
    { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { group: 'Backend', items: ['FastAPI', 'NestJS', 'Node.js', 'Express', 'REST APIs', 'WebSockets'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Redux', 'Tailwind CSS'] },
    { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector', 'Pinecone'] },
    { group: 'Cloud & DevOps', items: ['AWS (ECS Fargate, Aurora/RDS, S3, Secrets Manager)', 'Docker', 'Terraform', 'CI/CD'] },
    { group: 'Testing & Practices', items: ['Pytest', 'Jest', 'Evaluation Suites', 'Code Review', 'Agile/Scrum'] },
    { group: 'AI Development Tools', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex'] },
  ],

  education: [
    { school: 'University of Passau', degree: 'MSc in Computer Science', location: 'Passau, Germany', period: 'Oct 2024 — Present' },
    { school: 'National University of Computer and Emerging Sciences (FAST-NUCES)', degree: 'BS in Software Engineering', location: 'Karachi, Pakistan', period: 'Aug 2020 — Jun 2024' },
  ],

  publication: {
    title: 'Deep Learning for User Mobility Prediction in RIS-Assisted 6G THz Networks',
    url: 'https://ieeexplore.ieee.org/document/11119895',
    venue: 'IEEE',
    body: 'Benchmarked deep learning models for predicting user movement in next-generation (6G) mobile networks, to keep connections stable as users move.',
  },

  contact: {
    email: 'anashabib139@gmail.com',
    phone: '+49 170 9055176',
    linkedin: 'https://www.linkedin.com/in/anashabib139/',
    github: 'https://github.com/AnasHabib139',
    cv: '/anas-cv.pdf',
  },

  languages: 'English (C1), German (A1)',
  authorisation: 'Eligible to apply for an EU Blue Card',
} as const;
