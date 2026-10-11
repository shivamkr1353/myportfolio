import { motion as Motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  Mail,
  Phone,
  Sparkles,
  Workflow,
} from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const heroTags = ['Full Stack Engineering', 'AI Workflow Automation', 'Product-Focused Development']

const quickStats = [
  {
    icon: BriefcaseBusiness,
    value: '2 Internships',
    label: 'Hands-on experience across web and AI domains',
  },
  {
    icon: Database,
    value: '30% Faster',
    label: 'MongoDB query performance improvement in production',
  },
  {
    icon: Workflow,
    value: '40% Saved',
    label: 'Reduced repetitive ETL workload through automation',
  },
  {
    icon: Cloud,
    value: 'CI/CD Ready',
    label: 'Agile delivery with GitHub Actions and cloud tooling',
  },
]

const storyBlocks = [
  {
    icon: Code2,
    title: 'Build cleanly',
    description:
      'I design interfaces and APIs together so product behavior remains cohesive from browser to backend.',
    detail: 'React, Node.js, Express, and production-minded architecture.',
  },
  {
    icon: Database,
    title: 'Optimize early',
    description:
      'I focus on query performance, data contracts, and predictable latency before bottlenecks appear.',
    detail: 'Indexed queries, structured payloads, and consistent API patterns.',
  },
  {
    icon: BrainCircuit,
    title: 'Automate smartly',
    description:
      'I integrate LLM workflows where they create clear leverage for engineering and operations teams.',
    detail: 'Prompt design, RAG experimentation, and pipeline insights.',
  },
]

const experiences = [
  {
    role: 'Full Stack Web Developer (Remote)',
    company: 'Highleap Media',
    certificate: 'https://credsverse.com/credentials/c8d79fcb-9fe7-4cef-9bad-b42c6202dca1',
    location: 'Ranchi, Jharkhand, India',
    period: 'Jun 2025 - Aug 2025',
    points: [
      'Built product catalog and inventory pages for an electronics dealership platform using React.js and Node.js, improving user experience and engagement.',
      'Designed and implemented RESTful APIs for product search, filtering, and order management, collaborating with a 4–5 engineer team in an Agile sprint workflow.',
      'Optimized MongoDB queries through indexing and projection, cutting page load time by 30%.',
      'Set up and maintained CI/CD pipelines with GitHub Actions, streamlining deployment and version control practices.',
    ],
  },
  {
    role: 'AI/ML Intern (Remote)',
    company: 'a1 AI',
    website: 'https://www.a1-ai.com/',
    blog: 'https://www.a1-ai.com/blogs/DevSecOps',
    location: 'Chesterfield, Missouri, USA',
    period: 'May 2023 - May 2024',
    points: [
      'Integrated the OpenAI API and built prompt engineering workflows for internal LLM-based tools, directly relevant to generative AI application development.',
      'Built RAG pipelines using vector databases (ChromaDB, FAISS) to power retrieval-augmented AI features.',
      'Developed Python scripts for preprocessing and validating structured CSV datasets, improving data quality for AI pipeline inputs.',
      'Automated ETL tasks, cutting manual processing effort by 40% and increasing operational efficiency.',
    ],
  },
]

const internshipSpotlight = {
  company: 'a1 AI (EAIVision)',
  website: 'https://www.a1-ai.com/',
  tagline: 'An AI Era Innovations',
  summary:
    'At a1 AI, I worked on practical AI workflow support from structured data preprocessing to OpenAI-assisted internal tooling and early-stage RAG experimentation.',
  initiatives: [
    'Prepared and validated CSV datasets to make downstream AI pipelines more reliable.',
    'Automated repetitive ETL activities to reduce manual handling and increase consistency.',
    'Supported prompt engineering and OpenAI API integration workflows for internal use cases.',
  ],
  impact: [
    { metric: '40%', label: 'manual ETL effort reduced' },
    { metric: 'LLM', label: 'internal OpenAI workflow contribution' },
    { metric: 'RAG', label: 'hands-on vector retrieval exploration' },
  ],
}

const highleapSpotlight = {
  company: 'Highleap Media',
  profile: 'https://www.linkedin.com/company/highleap-media/',
  certificate: 'https://credsverse.com/credentials/c8d79fcb-9fe7-4cef-9bad-b42c6202dca1',
  tagline: 'Full-Stack Web Delivery',
  summary:
    'At Highleap Media, I built product-facing interfaces and backend APIs for an electronics dealership platform with a focus on speed, reliability, and usability.',
  initiatives: [
    'Built product catalog and inventory experiences in React.js for day-to-day business operations.',
    'Designed REST APIs for search, filtering, and order management in a collaborative engineering workflow.',
    'Improved MongoDB query efficiency using indexing and projection to reduce response and page-load times.',
  ],
  impact: [
    { metric: '30%', label: 'faster page-load performance' },
    { metric: 'React + Node', label: 'end-to-end feature delivery' },
    { metric: 'CI/CD', label: 'sprint-based delivery with GitHub Actions' },
  ],
}

const projects = [
  {
    id: 'devops',
    title: 'DevOps Failure Analysis Platform with RAG',
    highlight: 'AIOps & Log Analysis',
    description:
      'Built a full-stack AIOps platform with FastAPI and React that ingests CI/CD failure logs via GitHub Actions integration and uses a RAG pipeline for incident retrieval and analysis.',
    bullets: [
      'Built a full-stack AIOps platform with FastAPI and React that ingests CI/CD failure logs via GitHub Actions integration and uses a RAG pipeline for incident retrieval and analysis.',
      'Containerized the system with Docker and added persistent storage for incident history, supporting reliable, scalable deployment.',
    ],
    stack: ['FastAPI', 'React', 'ChromaDB', 'Gemini API', 'Docker', 'RAG'],
    github: 'https://github.com/shivamkr1353/llm-powered-devops-failure-analysis-system',
    live: 'https://llm-powered-devops-failure-analysis.onrender.com',
    image: '/devops_preview.png',
    previewGradient: 'radial-gradient(circle at 12% 12%, rgba(26,115,232,0.28), rgba(255,255,255,0))',
  },
  {
    id: 'interview',
    title: 'AI Mock Interview Platform',
    highlight: 'EdTech & AI Speech',
    description:
      'Architected a browser-based AI mock interview platform using Gemini AI to generate interview questions dynamically based on user profiles.',
    bullets: [
      'Architected a browser-based AI mock interview platform using Gemini AI to generate interview questions dynamically based on user profiles.',
      'Integrated a real-time speech-to-text pipeline with the Web Speech API to provide live transcription and feedback.',
    ],
    stack: ['Next.js 14', 'Clerk', 'PostgreSQL', 'Gemini AI', 'Drizzle ORM'],
    github: 'https://github.com/shivamkr1353/AI-Mock-Interview',
    live: 'https://ai-mock-interview-seven-pi.vercel.app',
    image: '/mock_interview_preview.png',
    previewGradient: 'radial-gradient(circle at 88% 10%, rgba(0,199,190,0.26), rgba(255,255,255,0))',
  },
  {
    id: 'nlp-resume',
    title: 'NLP-based Resume Parser & Matcher (Built from Scratch)',
    highlight: 'NLP & Algorithm Engine',
    description:
      'Built a transparent resume-ranking engine where core NLP algorithms (TF-IDF, cosine similarity, Porter stemmer) are written entirely from scratch in Python with zero external NLP framework dependencies.',
    bullets: [
      'Architected a transparent resume-ranking engine writing core NLP algorithms (TF-IDF, cosine similarity, Porter stemmer) from scratch in Python with zero dependency on scikit-learn, spaCy, or NLTK.',
      'Ranks candidates against job descriptions, extracts matched vs. missing skills, and visualizes exact mathematical scoring (TF/IDF matrices, dot products) via an interactive Streamlit dashboard.',
      'Validated numerical correctness against scikit-learn\'s standard implementation using a dedicated pytest test suite.',
    ],
    stack: ['Python', 'Streamlit', 'Plotly', 'pdfplumber', 'python-docx', 'pytest'],
    github: 'https://github.com/shivamkr1353/NLP-based-Resume-Parser-Matcher-From-Scratch-',
    live: 'https://nlp-based-resume-matching.streamlit.app/',
    linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7482443928508522496/',
    image: '/nlp_preview.png',
    previewGradient: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.25), rgba(255,255,255,0))',
  },
]

const skillGroups = [
  {
    heading: 'Languages',
    items: ['Python', 'JavaScript', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    heading: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    heading: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    heading: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    heading: 'AI / GenAI',
    items: [
      'LLMs',
      'RAG Pipelines',
      'Prompt Engineering',
      'Vector Databases (ChromaDB, FAISS)',
      'OpenAI API',
      'Gemini API',
      'LangGraph',
    ],
  },
  {
    heading: 'Tools & Cloud',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
  },
]

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivamkumar997386/' },
  { label: 'GitHub', href: 'https://github.com/shivamkr1353' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Shivam_cooddee/' },
]

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[var(--primary)]">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl leading-tight text-[var(--text)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  )
}

function ProjectPreview({ image, title, gradient }) {
  if (image) {
    return (
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] aspect-[16/10] flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] p-4">
      <div className="pointer-events-none absolute inset-0" style={{ background: gradient }} />
      <div className="relative">
        <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          <span>Interface Preview</span>
          <span>v1</span>
        </div>
        <div className="space-y-2 rounded-xl border border-[var(--line)] bg-white p-3">
          <div className="h-2.5 w-2/3 rounded-full bg-slate-200" />
          <div className="h-2.5 w-full rounded-full bg-slate-100" />
          <div className="h-2.5 w-10/12 rounded-full bg-slate-100" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-lg bg-slate-100" />
            <div className="h-14 rounded-lg bg-slate-100" />
            <div className="h-14 rounded-lg bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="top-glow pointer-events-none absolute left-1/2 top-[-20rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full" />

      <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[color:rgba(248,250,252,0.88)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="font-display text-lg tracking-tight text-[var(--text)] sm:text-xl">
            Shivam Kumar
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="mailto:shivamkr997386@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-strong)]"
          >
            Contact
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-5 pb-24 pt-12 sm:px-8 sm:pt-20">
        <section id="home" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Motion.div
            initial="hidden"
            animate="show"
            variants={revealUp}
            className="surface-card p-7 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
              Full Stack Engineer | AI Workflow Builder
            </p>
            <h1 className="font-display mt-4 text-4xl leading-[1.03] tracking-tight text-[var(--text)] sm:text-6xl">
              Software crafted with product clarity and engineering depth.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              I am Shivam Kumar, a Computer Science student at Thapar Institute. I build polished
              web experiences, reliable backend systems, and AI-assisted tools that solve practical
              problems.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]"
                >
                  <Sparkles size={14} className="text-[var(--primary)]" />
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)]"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="mailto:shivamkr997386@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
              >
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="/Shivam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
              >
                View Resume
              </a>
            </div>
          </Motion.div>

          <Motion.div
            initial="hidden"
            animate="show"
            custom={1}
            variants={revealUp}
            className="surface-card p-6 sm:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Current Focus
            </p>
            <h3 className="font-display mt-3 text-3xl tracking-tight text-[var(--text)]">
              Building from idea to production
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              Internship-backed execution across modern web engineering and LLM-enhanced developer
              workflows.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--muted)] sm:text-base">
              <li className="rounded-xl border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-3">
                Production-ready React and Node.js systems
              </li>
              <li className="rounded-xl border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-3">
                Prompt engineering and RAG exploration
              </li>
              <li className="rounded-xl border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-3">
                Cloud-first workflows and CI/CD automation
              </li>
            </ul>
          </Motion.div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickStats.map((item, index) => {
            const Icon = item.icon
            return (
              <Motion.article
                key={item.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                custom={index}
                variants={revealUp}
                className="surface-card p-5"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[var(--surface-muted)] p-2 text-[var(--primary)]">
                  <Icon size={18} />
                </div>
                <p className="font-display text-2xl text-[var(--text)] sm:text-3xl">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.label}</p>
              </Motion.article>
            )
          })}
        </section>

        <section id="about" className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="surface-card p-7 sm:p-10 lg:sticky lg:top-24">
            <SectionHeader
              eyebrow="About"
              title="An end-to-end engineering mindset"
              description="I combine interface quality, backend reliability, and measurable optimization to ship products that feel both polished and practical."
            />
          </div>
          <div className="space-y-4">
            {storyBlocks.map((block, index) => {
              const Icon = block.icon
              return (
                <Motion.article
                  key={block.title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                  variants={revealUp}
                  className="surface-card p-6 sm:p-7"
                >
                  <div className="mb-4 inline-flex rounded-xl border border-[var(--line)] bg-[var(--surface-muted)] p-2.5 text-[var(--primary)]">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-2xl text-[var(--text)]">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {block.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-[var(--primary-strong)]">{block.detail}</p>
                </Motion.article>
              )
            })}
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <SectionHeader
            eyebrow="Experience"
            title="Internships with measurable impact"
            description="Real-world experience in scalable web systems, automation, and AI-assisted workflows."
          />
          <div className="grid gap-5">
            {experiences.map((item, index) => (
              <Motion.article
                key={item.role}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                variants={revealUp}
                className="surface-card relative p-6 pl-8 sm:p-8 sm:pl-10"
              >
                <span className="absolute left-0 top-8 h-8 w-1 rounded-full bg-[var(--primary)]" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl text-[var(--text)]">{item.role}</h3>
                  <p className="rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                    {item.period}
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-[var(--primary-strong)]">
                  {item.company} | {item.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-4">
                  {item.website && (
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                    >
                      Visit Company Website
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {item.blog && (
                    <a
                      href={item.blog}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                    >
                      My Blogs at a1 AI
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {item.certificate && (
                    <a
                      href={item.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                    >
                      View Certificate
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="internship-spotlight" className="space-y-8">
          <SectionHeader
            eyebrow="Internship Spotlight"
            title="a1 AI: practical AI workflow contributions"
            description="A focused snapshot of my internship work that combined data reliability, automation, and applied LLM experimentation."
          />
          <Motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
            className="surface-card overflow-hidden p-0"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="p-7 sm:p-10"
                style={{
                  background:
                    'radial-gradient(circle at 20% 0%, rgba(26,115,232,0.16), rgba(255,255,255,0) 56%)',
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {internshipSpotlight.tagline}
                </p>
                <h3 className="font-display mt-3 text-3xl leading-tight text-[var(--text)] sm:text-4xl">
                  {internshipSpotlight.company}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {internshipSpotlight.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={internshipSpotlight.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)]"
                  >
                    Visit a1-ai.com
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="https://www.a1-ai.com/blogs/DevSecOps"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
                  >
                    My Blogs at a1 AI
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {internshipSpotlight.initiatives.map((initiative) => (
                    <li key={initiative} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[var(--line)] bg-[var(--surface-muted)] p-7 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Key Outcomes
                </p>
                <div className="mt-4 grid gap-3">
                  {internshipSpotlight.impact.map((entry) => (
                    <div
                      key={entry.label}
                      className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4"
                    >
                      <p className="font-display text-2xl text-[var(--text)]">{entry.metric}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{entry.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Motion.article>
        </section>

        <section id="internship-spotlight-highleap" className="space-y-8">
          <SectionHeader
            eyebrow="Internship Spotlight"
            title="Highleap Media: full-stack product execution"
            description="A second internship snapshot focused on shipping frontend and backend features with measurable performance gains."
          />
          <Motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealUp}
            className="surface-card overflow-hidden p-0"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div
                className="p-7 sm:p-10"
                style={{
                  background:
                    'radial-gradient(circle at 20% 0%, rgba(12,148,82,0.16), rgba(255,255,255,0) 56%)',
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                  {highleapSpotlight.tagline}
                </p>
                <h3 className="font-display mt-3 text-3xl leading-tight text-[var(--text)] sm:text-4xl">
                  {highleapSpotlight.company}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {highleapSpotlight.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={highleapSpotlight.profile}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
                  >
                    View Highleap on LinkedIn
                    <ArrowUpRight size={16} />
                  </a>
                  {highleapSpotlight.certificate && (
                    <a
                      href={highleapSpotlight.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)]"
                    >
                      View Internship Certificate
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {highleapSpotlight.initiatives.map((initiative) => (
                    <li key={initiative} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-[var(--line)] bg-[var(--surface-muted)] p-7 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Key Outcomes
                </p>
                <div className="mt-4 grid gap-3">
                  {highleapSpotlight.impact.map((entry) => (
                    <div
                      key={entry.label}
                      className="rounded-2xl border border-[var(--line)] bg-white px-4 py-4"
                    >
                      <p className="font-display text-2xl text-[var(--text)]">{entry.metric}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{entry.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Motion.article>
        </section>

        <section id="projects" className="space-y-8">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            description="Project snapshots designed and built with strong execution across frontend, backend, and AI integration layers."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <Motion.article
                key={project.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                custom={index}
                variants={revealUp}
                className="surface-card flex h-full flex-col p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                  {project.highlight}
                </p>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl leading-tight text-[var(--text)]">{project.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                 <ProjectPreview image={project.image} title={project.title} gradient={project.previewGradient} />
                <div className="mt-auto pt-6 border-t border-[var(--line)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                      >
                        GitHub
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                      >
                        Live Site
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--text)]"
                  >
                    Discuss
                    <ArrowRight size={14} />
                  </a>
                </div>
              </Motion.article>
            ))}
          </div>

          {projects[2] && (
            <Motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
              variants={revealUp}
              className="surface-card overflow-hidden p-6 sm:p-8 mt-6"
            >
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
                      {projects[2].highlight}
                    </p>
                    <h3 className="font-display mt-2 text-2xl sm:text-3xl leading-tight text-[var(--text)]">
                      {projects[2].title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                      {projects[2].description}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                      {projects[2].bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {projects[2].stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold text-[var(--muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-4">
                      {projects[2].github && (
                        <a
                          href={projects[2].github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                        >
                          GitHub
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      {projects[2].live && (
                        <a
                          href={projects[2].live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                        >
                          Live Site
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                      {projects[2].linkedin && (
                        <a
                          href={projects[2].linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--primary-strong)] transition hover:text-[var(--text)]"
                        >
                          LinkedIn Post
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--text)]"
                    >
                      Discuss
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] aspect-[16/10] flex items-center justify-center shadow-md">
                  <img
                    src={projects[2].image}
                    alt={projects[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </Motion.article>
          )}
        </section>

        <section id="certifications" className="space-y-8">
          <SectionHeader
            eyebrow="Certifications & Achievements"
            title="Recognition & hackathons"
            description="Selected highlights from competitive engineering, hackathons, and industry certifications."
          />
          <div className="grid gap-5">
            <Motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealUp}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-blue-500/10 px-3.5 py-1.5 text-sm font-bold text-blue-600 dark:text-blue-400">
                    Meta × PyTorch OpenEnv Hackathon Finalist
                  </span>
                  <h3 className="font-display text-2xl text-[var(--text)]">
                    Finalist (out of 31,000+ teams)
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    Developed <strong>API Drift Gym</strong> for the hackathon finale—an adversarial RL environment and fine-tuned agent (Qwen 0.5B + LoRA) that learns structured fault recovery to handle silent API schema drift, partial observability, and cascading failures.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 whitespace-nowrap">
                  <a
                    href="https://github.com/shivamkr1353/Meta_Hack_Round2"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
                  >
                    Source Code
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/shivamkumar997386_meta-pytorch-openenv-ugcPost-7461179188465754113-FMI-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3PAcIBGFlpEEQfcPLLQoY-mFZiSwciCYU"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
                  >
                    LinkedIn Post
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://huggingface.co/spaces/shivamkr1353/api-drift-gym"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)]"
                  >
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Motion.article>

            <Motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              variants={revealUp}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-blue-500/10 px-3.5 py-1.5 text-sm font-bold text-blue-600 dark:text-blue-400">
                    Flipkart GRID 8.0 Semi-Finalist
                  </span>
                  <h3 className="font-display text-2xl text-[var(--text)]">
                    Semi-Finalist (Round 3) among 160,000+ Participants
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    Advanced to Round 3 in Flipkart GRID 8.0, a prestigious national tech competition evaluating advanced problem solving, engineering scale, and algorithmic competence.
                  </p>
                </div>
              </div>
            </Motion.article>

            <Motion.article
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              variants={revealUp}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-flex rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    Oracle Certification
                  </span>
                  <h3 className="font-display text-2xl text-[var(--text)]">
                    Agentic AI Certified Foundations Associate
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    Certified by Oracle in foundational concepts, workflows, architecture, and practical implementations of Agentic AI systems.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 whitespace-nowrap">
                  <a
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=45AA2AE137B4762893B683546385D7F50C7A98982220582E972BC15FE1713E6D"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white transition hover:bg-[var(--primary-strong)]"
                  >
                    View Certificate
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </Motion.article>
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <SectionHeader
            eyebrow="Skills"
            title="Technology toolkit"
            description="A practical stack for building product-grade experiences from interface to infrastructure."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Motion.article
                key={group.heading}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                variants={revealUp}
                className="surface-card p-6"
              >
                <h3 className="font-display text-2xl text-[var(--text)]">{group.heading}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div id="education" className="surface-card p-7 sm:p-10">
            <SectionHeader
              eyebrow="Education"
              title="Thapar Institute of Engineering and Technology"
              description="B.E. in Computer Science Engineering | Expected Graduation: 2027"
            />
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-2 text-sm font-semibold text-[var(--primary-strong)]">
              <GraduationCap size={17} />
              Core strengths: DSA, OOP, DBMS, OS
            </div>
          </div>

          <div id="contact" className="surface-card p-7 sm:p-10">
            <SectionHeader
              eyebrow="Contact"
              title="Open to internships and engineering collaborations"
              description="If you are building modern web or AI products, I would love to contribute and learn with your team."
            />
            <div className="mt-6 grid gap-3">
              <a
                href="mailto:shivamkr997386@gmail.com"
                className="inline-flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)]"
              >
                <Mail size={17} className="text-[var(--primary)]" />
                shivamkr997386@gmail.com
              </a>
              <a
                href="tel:+916201756559"
                className="inline-flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--primary)]"
              >
                <Phone size={17} className="text-[var(--primary)]" />
                +91 62017 56559
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary-strong)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-6 text-center text-sm text-[var(--muted)] sm:px-8">
        Designed & Developed with <span className="inline-block text-red-500 animate-pulse">❤️</span> by{' '}
        <span className="font-semibold text-[var(--text)]">Shivam</span>
      </footer>
    </div>
  )
}

export default App
