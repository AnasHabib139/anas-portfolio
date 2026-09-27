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
    'Software engineer with 3+ years building full-stack products and 1+ year shipping production AI. React and Next.js frontends, TypeScript and Python APIs, and the agents, retrieval and evaluation behind them, on EU-hosted AWS.',
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
      body: "Scanned receipts flow through extract, validate, store. What the model isn't sure about lands in a review screen for a person instead of being quietly guessed at.",
      chips: ['Python', 'FastAPI', 'Structured output', 'PostgreSQL'],
      side: 'right',
    },
    {
      kicker: '03 — Agents',
      heading: 'Tools, not ',
      emphasis: 'chat',
      headingTail: '',
      body: 'A router reads the question and hands it to the specialist agent that can answer it. Twelve typed tools underneath. Agents propose changes; a person approves them, applied in one transaction, logged.',
      chips: ['OpenAI API', 'Tool calling', 'Human-in-the-loop', 'NestJS'],
      side: 'left',
    },
    {
      kicker: '04 — Shipped',
      heading: 'Running in ',
      emphasis: 'production',
      headingTail: '',
      body: 'Two production apps at ProSiebenSat.1, pricing across 111 licensors, and a 200-endpoint multi-tenant backend. EU-hosted on AWS, provisioned in Terraform, released through OIDC-backed CI/CD.',
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
        'Launched a production rights-clearance platform in three months with rights, editorial and production teams, replacing shared spreadsheets with a NestJS, Next.js and PostgreSQL workflow',
        'Migrated 111 licensors into PostgreSQL with Excel-parity billing rules and daily exchange-rate updates, keeping clearance cost estimates current while preserving finance workbook imports and exports',
        'Replaced an estimated 30–60-minute manual search per complex licensing question with a cited answer by combining three cost, clearance and policy agents with pgvector retrieval over 100+ contracts',
        'Maintained AI faithfulness and context-recall scores around 0.85 against a 0.70 release gate across 50 cases; separate router tests reached 90% accuracy and caught a tool-routing regression before release',
        'Prevented a wrong-licensor update during live use by placing dozens of AI-proposed changes behind human approval, revalidating scope before atomic writes and recording decisions in an audit trail',
        'Saved finance a reported 10+ hours per week by combining multimodal receipt extraction at about 90% field-level accuracy with a German/English receipt-review UI in React, Redux and AG Grid for around 50 staff',
        'Preserved VBA macros, buttons and dropdowns in three official .xlsm finance forms by patching raw OOXML instead of regenerating files; stamped sequential receipt numbers onto PDFs to remove manual numbering',
        'Secured sensitive contract and finance data in company-controlled EU infrastructure through an internal LLM gateway, Entra ID sign-in and role-based approvals, deploying two production apps with ECS Fargate, Terraform and OIDC-backed GitLab CI/CD',
      ],
    },
    {
      title: 'Software Engineer – Applied AI',
      company: 'Arcpeak',
      location: 'Munich, Germany',
      period: 'Aug 2025 — Feb 2026',
      employment: 'Part-time',
      bullets: [
        "Enabled the platform's first paying customers with the founder by integrating Stripe subscriptions and JWT/OAuth sign-in into a FastAPI and React/TypeScript product",
        'Converted a 20-question intake into 10 ranked AI opportunities grounded in cited research and projected savings versus effort, giving clients a decision-ready investment shortlist',
        'Eliminated browser-triggered report restarts by persisting long-running jobs in Redis Streams and streaming completed sections into the React dashboard',
        'Automated AWS releases with Docker, Terraform and CI/CD across ECS Fargate, RDS and ElastiCache, replacing manual deployment steps with repeatable launches',
        'Gated AI recommendations with fixed-baseline LLM reviews and Pytest tool-call checks in CI, keeping budgets and timelines traceable to client answers and catching invalid agent actions before release',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'WorkSpin',
      location: 'Karachi, Pakistan / Remote',
      period: 'Jul 2023 — Sep 2025',
      employment: 'Full-time',
      bullets: [
        "Architected Boardd's pre-launch backend with frontend and QA partners across 200+ REST endpoints, 47 tenant-scoped data models and 52 versioned migrations, supporting collaboration, integrations and billing",
        'Unified imports from eight project-management platforms in BullMQ, testing hundreds of tasks per run while preserving assignees and task structure through rate-limited workers, retries and live progress',
        'Built subscription billing, recurring invoices and spending-controlled cards for launch by isolating Stripe Connect, Treasury and Issuing in a service-authenticated payments API',
        'Broadcast drag-and-drop task reordering and presence in real time over tenant-scoped Socket.IO rooms, with conflict handling for concurrent edits in shared workspaces',
        'Enforced tenant-specific permissions and per-device token rotation for Boardd, allowing platform admins to revoke every company session immediately when disabling a tenant',
        "Lowered query latency by 70% and peak database load by 50% on WorkSpin's event-discovery app through MongoDB schema redesign, index tuning and Redis caching",
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
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { group: 'AI & LLM', items: ['AI Agents', 'Tool/Function Calling', 'Agentic RAG', 'Prompt Engineering', 'LLM Evaluation', 'LLM-as-Judge'] },
    { group: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'REST APIs', 'WebSockets', 'BullMQ'] },
    { group: 'AI Tooling', items: ['OpenAI API', 'LangChain', 'LangGraph', 'Braintrust'] },
    { group: 'Frontend', items: ['React', 'Next.js App Router', 'Redux', 'AG Grid', 'Tailwind CSS', 'i18n'] },
    { group: 'Data & ORMs', items: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector', 'Pinecone', 'Prisma', 'TypeORM', 'Mongoose'] },
    { group: 'Cloud & DevOps', items: ['AWS (ECS Fargate, EC2, Aurora/RDS, S3, Secrets Manager)', 'Docker', 'Terraform', 'Git', 'GitLab CI/CD', 'GitHub Actions'] },
    { group: 'Security', items: ['OAuth 2.0', 'JWT', 'RBAC', 'Microsoft Entra ID', 'Multi-tenant Isolation'] },
    { group: 'Testing & Practices', items: ['Pytest', 'Jest', 'Evaluation Suites', 'Code Review', 'Agile/Scrum', 'Technical Documentation'] },
    { group: 'AI Development Tools', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex'] },
  ],

  education: [
    { school: 'University of Passau', degree: 'MSc in Computer Science', location: 'Passau, Germany', period: 'Oct 2024 — Expected Oct 2026' },
    { school: 'National University of Computer and Emerging Sciences (FAST)', degree: 'BS in Software Engineering', location: 'Karachi, Pakistan', period: 'Aug 2020 — Jun 2024' },
  ],

  publication: {
    title: 'Ris-Enhanced 6G Networks: Advanced User Location Prediction with Generative Models',
    url: 'https://ieeexplore.ieee.org/document/11119895',
    venue: '2024 IEEE 9th International Conference on Engineering Technologies and Applied Sciences (ICETAS)',
    body: 'Compared GRU, LSTM and Transformer models for user-location prediction in RIS-assisted 6G networks; the Transformer achieved the lowest mean absolute error in the study.',
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
