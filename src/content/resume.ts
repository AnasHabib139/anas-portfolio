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
  bullets: readonly string[];
}

export const resume = {
  name: 'Anas Habib',
  role: 'Full-Stack & AI Engineer',
  location: 'Munich, Germany',
  // Work authorisation lives in the footer, not the hero: leading with it read
  // as pleading rather than as a qualification.
  eyebrow: 'Munich, Germany',
  summary:
    'Full-stack & AI engineer. Production LLM agents with tool calling and RAG, the TypeScript and Python services around them, and the AWS infrastructure underneath.',
  metrics: [
    { value: '2+', label: 'Years shipping' },
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
      body: "HR emails and scanned receipts flow through extract, validate, store. What the model isn't sure about gets flagged for a human instead of quietly guessed at.",
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
      body: 'Three internal apps at ProSiebenSat.1, a pricing engine across 111 licensors, and a 200-endpoint platform. All on AWS, provisioned in Terraform, released on merge.',
      chips: ['ECS Fargate', 'Aurora', 'Terraform', 'GitLab CI/CD'],
      side: 'right',
    },
  ] as const satisfies readonly Act[],

  experience: [
    {
      title: 'Full-Stack AI Engineer',
      company: 'Redseven Entertainment GmbH',
      context: 'ProSiebenSat.1 Group',
      location: 'Munich, Germany',
      period: 'Mar 2026 — Present',
      bullets: [
        'Reduced contract licensing and cost research from 30–60 minutes to one cited AI response, enabling rights teams to retrieve evidence without manual contract review',
        'Built and shipped a pgvector RAG assistant across 100+ agreements within three months, using iterative query reformulation and evidence-backed citations',
        'Saved 10+ staff hours per week by automating receipt entry for 50 employees, achieving 90% tax-code classification accuracy across 20 categories',
        'Achieved 90% routing accuracy across three AI agents and 12 typed tools by implementing a fail-closed classifier for low-confidence requests',
        'Caught a routing regression before production by gating releases on a 50-case evaluation suite; release candidates scored 0.85 against a 0.70 threshold',
        'Protected finance workflows with human-approved proposals, permission revalidation before atomic database writes and end-to-end decision audit logs',
        'Deployed two production AI platforms to AWS ECS Fargate using Docker, Terraform and CI/CD, with Braintrust tracing through the internal model gateway',
      ],
    },
    {
      title: 'Full-Stack AI Engineer',
      company: 'Arcpeak',
      location: 'Munich, Germany',
      period: 'Aug 2025 — Feb 2026',
      bullets: [
        "Enabled the platform's first paying customers by shipping Stripe subscription billing with JWT/OAuth authentication",
        'Produced prioritized client roadmaps by converting a 20-question intake into 10 AI-ranked opportunities, scored by expected savings and implementation effort',
        'Improved recommendation reliability by grounding timelines and budgets in client inputs and cited web research, then evaluating each release against a baseline with an LLM reviewer',
        'Preserved multi-minute report jobs across interrupted sessions with Redis Streams while streaming completed sections to users in real time',
        'Cut deployment time 80% with Terraform-provisioned AWS and automated CI/CD across Python/FastAPI and React/TypeScript',
        'Caught invalid agent tool calls before deployment by adding Pytest release gates for backend and AI workflows',
      ],
    },
    {
      title: 'Backend Engineer',
      company: 'WorkSpin',
      location: 'Remote — Karachi, Pakistan',
      period: 'Jul 2023 — Jul 2025',
      bullets: [
        'Scaled a multi-tenant workspace backend to 200+ REST endpoints while enforcing tenant isolation through scoped data access and company-level permissions',
        'Consolidated eight bespoke task integrations into one shared import framework, processing hundreds of tasks asynchronously with provider-specific rate limits and retries',
        'Reduced query latency 70% and peak database load 50% by redesigning MongoDB schemas and introducing Redis caching',
        'Separated payment operations into a dedicated microservice integrating Stripe Connect, Treasury and Issuing for multi-party billing and card issuance',
        'Enabled concurrent multi-user editing with Socket.IO conflict handling, presence and a configurable company-level permission engine',
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
    { group: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java'] },
    { group: 'AI & LLM', items: ['OpenAI API', 'OpenAI Agents SDK', 'LangChain', 'AI Agents', 'Tool/Function Calling', 'RAG', 'Vector Databases (pgvector, Pinecone)', 'Prompt Engineering', 'PyTorch'] },
    { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'FastAPI', 'REST APIs', 'GraphQL', 'WebSockets (Socket.IO)', 'Prisma', 'TypeORM'] },
    { group: 'Frontend', items: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML/CSS'] },
    { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
    { group: 'Cloud & DevOps', items: ['AWS (ECS Fargate, Aurora/RDS, S3, Secrets Manager)', 'Docker', 'Terraform', 'Kubernetes', 'GitLab CI/CD', 'GitHub Actions', 'Git'] },
    { group: 'Practices', items: ['Agile/Scrum', 'Code Review', 'Unit Testing (Jest, Pytest)', 'CI/CD', 'Microservices'] },
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
  authorisation: 'Student visa, eligible for EU Blue Card',
} as const;
