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
  workMode: 'Hybrid' | 'Remote';
  bullets: readonly string[];
}

export const resume = {
  name: 'Anas Habib',
  role: 'Software Engineer',
  location: 'Munich, Germany',
  // Work authorisation lives in the footer, not the hero: leading with it read
  // as pleading rather than as a qualification.
  eyebrow: 'Munich, Germany',
  summary:
    'Software engineer with 2+ years building full-stack products and 1+ year shipping production AI. React and Next.js frontends, TypeScript and Python APIs, and the agents, retrieval and evaluation behind them, on AWS.',
  metrics: [
    { value: '2+', label: 'Years engineering' },
    { value: '10h', label: 'Saved / week' },
    { value: '100+', label: 'Contracts indexed' },
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
      chips: ['Multimodal LLM', 'JSON Schema', 'NestJS', 'React'],
      side: 'right',
    },
    {
      kicker: '03 — Agents',
      heading: 'Tools, not ',
      emphasis: 'chat',
      headingTail: '',
      body: 'A router reads the question and hands it to one of three specialist agents. Agents propose changes; an authorized person confirms each one before it is saved.',
      chips: ['OpenAI Responses API', 'Tool calling', 'Human-in-the-loop', 'NestJS'],
      side: 'left',
    },
    {
      kicker: '04 — Shipped',
      heading: 'Running in ',
      emphasis: 'production',
      headingTail: '',
      body: 'Three production apps at ProSiebenSat.1, an AI consulting platform with paying customers, and a multi-tenant workspace backend. All on AWS, shipped through automated CI/CD.',
      chips: ['ECS Fargate', 'Docker', 'Terraform', 'GitLab CI/CD'],
      side: 'right',
    },
  ] as const satisfies readonly Act[],

  experience: [
    {
      title: 'Software Engineer',
      company: 'Redseven Entertainment GmbH',
      context: 'ProSiebenSat.1 Group',
      location: 'Munich, Germany',
      period: 'Mar 2026 — Present',
      workMode: 'Hybrid',
      bullets: [
        'Led full-stack development of three production apps using TypeScript, NestJS, Next.js, React and PostgreSQL on AWS, including a licensing platform for 30+ staff launched in three months',
        'Built an AI assistant for rights and production teams that answers licensing cost questions in one step instead of a 30–60-minute manual search, using NestJS, the OpenAI Responses API and 3 specialist agents',
        'Shipped a receipt-processing app for 50+ finance staff in React and NestJS, saving 10+ hours per week',
        'Engineered an AI extraction pipeline that reads receipt images with a multimodal LLM into JSON-schema structured outputs, reaching 90% field-level accuracy across 20 country tax codes',
        'Designed an agentic RAG pipeline on pgvector over 100+ contracts and policies, so every answer cites its source',
        'Implemented an LLM evaluation pipeline in Braintrust that blocks any release below 70% faithfulness and context recall (scoring 85%), catching a routing bug before launch',
        'Automated deployments with GitLab CI/CD, Docker and automated tests on AWS ECS Fargate, cutting deployment time by an estimated 70% and eliminating failed deploys',
        'Developed a human-in-the-loop approval flow in React with RBAC, where authorized users confirm every AI-proposed change before it is saved, preventing an incorrect licensing update',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Arcpeak',
      location: 'Munich, Germany',
      period: 'Aug 2025 — Feb 2026',
      workMode: 'Hybrid',
      bullets: [
        'Led full-stack development of an AI consulting platform using Python, FastAPI, React, TypeScript and PostgreSQL, turning 20 client answers into 10 ranked AI opportunities',
        'Integrated Stripe subscriptions and OAuth sign-in into the FastAPI platform, enabling its first paying customers',
        'Developed a Python AI agent with live web search that turns each opportunity into a cited adoption plan',
        'Architected a background job system with Redis Streams that keeps long AI reports running after users close the browser, streaming each section to the React dashboard',
        'Automated agent release checks in CI with LLM evaluation and Pytest tool-call tests, stopping faulty releases',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'WorkSpin',
      location: 'Barnet, UK',
      period: 'Jun 2024 — Jul 2025',
      workMode: 'Remote',
      bullets: [
        'Led backend development of Boarddd, a multi-tenant business workspace, using Node.js, Express, MongoDB, Redis and Socket.IO on AWS, with frontend and QA engineers',
        'Optimized MongoDB schemas, indexes and Redis caching, cutting query latency by 70% and peak load by 50%',
        'Built a Node.js payments microservice behind service-to-service authentication on 3 Stripe products (Connect, Treasury, Issuing) for subscriptions, recurring invoices and virtual cards',
        'Engineered integrations with 8 external tool APIs (Jira, Asana, Trello and more) on a fault-tolerant BullMQ job pipeline with rate limiting, retries and live progress',
        'Designed a scalable real-time messaging backend with Socket.IO and MongoDB for group channels of 50+ members and direct messages, with threaded replies, reactions and paginated queries',
      ],
    },
  ] as readonly Role[],

  projects: [
    {
      name: 'InsightQL',
      url: 'https://github.com/AnasHabib139/InsightQL',
      tagline: 'AI Database Assistant',
      body: 'A natural-language database assistant that lets non-technical users query three database engines (PostgreSQL, SQLite, MongoDB) in plain English through a LangChain SQL agent, with charts, CSV/Excel export and JWT-secured access.',
      chips: ['Next.js', 'NestJS', 'LangChain', 'OpenAI', 'Docker'],
    },
    {
      name: 'bugSage',
      url: 'https://github.com/AnasHabib139/bugSage',
      tagline: 'AI Debugging Assistant',
      body: "An AI debugging chatbot that retrieves relevant docs and past issues from a vector database before answering, so its Express.js fixes match the project's own code.",
      chips: ['FastAPI', 'Pinecone', 'RAG'],
    },
    {
      name: 'CLI Assistant',
      url: 'https://github.com/AnasHabib139/personal_cli_assistant',
      tagline: 'Agentic Terminal Tool',
      body: 'A fully offline terminal assistant on a local model, with an agentic loop that chains five tools to complete multi-step tasks.',
      chips: ['Python', 'Ollama', 'Function calling'],
    },
  ],

  skills: [
    { group: 'Programming Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { group: 'Backend & Frameworks', items: ['Node.js', 'NestJS', 'FastAPI', 'Express', 'REST APIs', 'Socket.IO', 'BullMQ'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'] },
    { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'pgvector'] },
    { group: 'AI/ML', items: ['AI Agents', 'Agentic RAG', 'LLM Evaluation', 'Function Calling', 'OpenAI API', 'LangChain', 'LangGraph'] },
    { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Terraform', 'GitLab CI/CD'] },
    { group: 'AI Tools', items: ['Claude Code', 'Cursor', 'GitHub Copilot', 'Codex'] },
  ],

  education: [
    { school: 'University of Passau', degree: 'MSc in Computer Science', location: 'Passau, Germany', period: 'Oct 2024 — Oct 2026' },
    { school: 'FAST-NUCES', degree: 'BS in Software Engineering', location: 'Karachi, Pakistan', period: 'Aug 2020 — Jun 2024' },
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

  languages: 'English (C1), German (A2)',
  authorisation: 'Eligible to apply for an EU Blue Card',
} as const;
