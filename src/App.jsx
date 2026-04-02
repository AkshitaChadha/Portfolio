import { useState } from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ProjectDemoModal } from './components/ProjectDemoModal'
import { Reveal } from './components/Reveal'
import { SectionHeading } from './components/SectionHeading'
import {
  achievements,
  contactLinks,
  footerLinks,
  heroHighlights,
  projects,
  skills,
} from './data/portfolio'

const iconMap = {
  email: (
    <path
      d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25Zm2.06-.25 5.85 4.52a1.75 1.75 0 0 0 2.18 0l5.85-4.52"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  linkedin: (
    <path
      d="M8 10v7m0-10.5v.01M12 17v-4.25A2.75 2.75 0 0 1 14.75 10 2.25 2.25 0 0 1 17 12.25V17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  github: (
    <path
      d="M9.25 18.5c-3.5 1.05-3.5-1.75-4.9-2.1m9.8 4.2v-2.7a2.35 2.35 0 0 0-.67-1.82c2.25-.25 4.62-1.1 4.62-5a3.9 3.9 0 0 0-1.05-2.7 3.63 3.63 0 0 0-.06-2.66s-.88-.28-2.88 1.04a9.97 9.97 0 0 0-5.22 0C6.87 5.44 6 5.72 6 5.72a3.63 3.63 0 0 0-.06 2.66 3.9 3.9 0 0 0-1.05 2.7c0 3.88 2.37 4.73 4.62 5a2.35 2.35 0 0 0-.67 1.82v2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  phone: (
    <path
      d="M8.9 5.25h2.35c.36 0 .69.24.79.58l.63 2.1a1 1 0 0 1-.25 1.01l-1.2 1.2a12.5 12.5 0 0 0 4.64 4.64l1.2-1.2a1 1 0 0 1 1.01-.25l2.1.63c.34.1.58.43.58.79v2.35A1.9 1.9 0 0 1 18.1 20C10.86 20 5 14.14 5 6.9a1.9 1.9 0 0 1 1.9-1.65Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

function Icon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      {iconMap[type]}
    </svg>
  )
}

const glyphMap = {
  github: (
    <path
      d="M9.25 18.5c-3.5 1.05-3.5-1.75-4.9-2.1m9.8 4.2v-2.7a2.35 2.35 0 0 0-.67-1.82c2.25-.25 4.62-1.1 4.62-5a3.9 3.9 0 0 0-1.05-2.7 3.63 3.63 0 0 0-.06-2.66s-.88-.28-2.88 1.04a9.97 9.97 0 0 0-5.22 0C6.87 5.44 6 5.72 6 5.72a3.63 3.63 0 0 0-.06 2.66 3.9 3.9 0 0 0-1.05 2.7c0 3.88 2.37 4.73 4.62 5a2.35 2.35 0 0 0-.67 1.82v2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  link: (
    <path
      d="M10.5 13.5 19 5m0 0h-6m6 0v6M13.5 10.5 5 19m0 0h6m-6 0v-6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  image: (
    <path
      d="M5 7.75A2.75 2.75 0 0 1 7.75 5h8.5A2.75 2.75 0 0 1 19 7.75v8.5A2.75 2.75 0 0 1 16.25 19h-8.5A2.75 2.75 0 0 1 5 16.25Zm2.5 7.75 2.85-3.1a1 1 0 0 1 1.47-.02l1.56 1.64 1.87-2.25a1 1 0 0 1 1.53.03L19 14.5M9 9.75h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  py: <path d="M8 6.5A2.5 2.5 0 0 1 10.5 4h3A2.5 2.5 0 0 1 16 6.5v2A2.5 2.5 0 0 1 13.5 11H9a1 1 0 0 0-1 1v1.5A2.5 2.5 0 0 0 10.5 16h3A2.5 2.5 0 0 1 16 18.5v1" strokeLinecap="round" strokeLinejoin="round" />,
  js: <path d="M8 7v7.5a2.5 2.5 0 0 1-5 0M13 16h2.5a2.5 2.5 0 0 0 0-5H14a2.5 2.5 0 0 1 0-5h2" strokeLinecap="round" strokeLinejoin="round" />,
  html: <path d="m7 5 1.5 14L12 20l3.5-1L17 5H7Zm2.75 3.5H14M10 12h3.5" strokeLinecap="round" strokeLinejoin="round" />,
  css: <path d="m7 5 1.5 14L12 20l3.5-1L17 5H7Zm2.5 4h4m-3.5 4h3" strokeLinecap="round" strokeLinejoin="round" />,
  django: <path d="M8 5.5v13m0-7h4a3 3 0 1 0 0-6H8Zm5 13V8" strokeLinecap="round" strokeLinejoin="round" />,
  api: <path d="M5 9h14M5 15h14M8 6v12M16 6v12" strokeLinecap="round" strokeLinejoin="round" />,
  flask: <path d="M10 4h4M12 4v5m0 0 4.5 7.5A1.5 1.5 0 0 1 15.2 19H8.8a1.5 1.5 0 0 1-1.3-2.5L12 9Z" strokeLinecap="round" strokeLinejoin="round" />,
  git: <path d="m8 8 4-4 4 4-4 4-4-4Zm4 4v8m0 0-3-3m3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />,
  db: <path d="M6 7.5C6 5.57 8.69 4 12 4s6 1.57 6 3.5S15.31 11 12 11 6 9.43 6 7.5Zm0 4.5c0 1.93 2.69 3.5 6 3.5s6-1.57 6-3.5M6 12v4.5C6 18.43 8.69 20 12 20s6-1.57 6-3.5V12" strokeLinecap="round" strokeLinejoin="round" />,
  streamlit: <path d="M8 18 16 6M7 8h5M12 16h5" strokeLinecap="round" strokeLinejoin="round" />,
  lock: <path d="M8 11V8.75a4 4 0 1 1 8 0V11m-8 0h8a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 16 18h-8a1.5 1.5 0 0 1-1.5-1.5v-4A1.5 1.5 0 0 1 8 11Z" strokeLinecap="round" strokeLinejoin="round" />,
  server: <path d="M6 7.5h12M6 12h12M6 16.5h12M8 7.5v9m8-9v9" strokeLinecap="round" strokeLinejoin="round" />,
  stack: <path d="m12 4 7 3.5-7 3.5-7-3.5L12 4Zm7 8-7 3.5L5 12m14 4-7 4-7-4" strokeLinecap="round" strokeLinejoin="round" />,
  trophy: <path d="M8 5h8v3a4 4 0 1 1-8 0V5Zm0 0H5v2a3 3 0 0 0 3 3m8-5h3v2a3 3 0 0 1-3 3m-4 2v3m-3 4h6" strokeLinecap="round" strokeLinejoin="round" />,
  mic: <path d="M12 14a3 3 0 0 0 3-3V8a3 3 0 1 0-6 0v3a3 3 0 0 0 3 3Zm0 0v4m-4 0h8" strokeLinecap="round" strokeLinejoin="round" />,
  spark: <path d="m12 4 1.3 4.2L17.5 9l-4.2 1.3L12 14.5l-1.3-4.2L6.5 9l4.2-.8L12 4Zm6 10 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14Zm-12 0 .7 2.3L9 17l-2.3.7L6 20l-.7-2.3L3 17l2.3-.7L6 14Z" strokeLinecap="round" strokeLinejoin="round" />,
}

const techIconMap = {
  Python: 'py',
  JavaScript: 'js',
  HTML: 'html',
  CSS: 'css',
  Django: 'django',
  'Django REST Framework': 'api',
  Flask: 'flask',
  Git: 'git',
  GitHub: 'github',
  SQL: 'db',
  SQLite: 'db',
  Streamlit: 'streamlit',
  'REST APIs': 'api',
  Authentication: 'lock',
  'Backend Systems': 'server',
  'Full Stack Development': 'stack',
}

const achievementIconMap = {
  'Public speaking': 'mic',
  Debate: 'trophy',
  Leadership: 'spark',
}

function Glyph({ type, className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      {glyphMap[type]}
    </svg>
  )
}

function SkillBadge({ item }) {
  return (
    <span className="skill-badge">
      <span className="skill-icon-shell">
        <Glyph type={techIconMap[item] ?? 'stack'} className="h-3.5 w-3.5" />
      </span>
      {item}
    </span>
  )
}

function ActionLink({ href, icon, children, secondary = false, onClick }) {
  const className = secondary ? 'action-button-secondary' : 'action-button'

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        <Glyph type={icon} />
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      <Glyph type={icon} />
      <span>{children}</span>
    </button>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeDemoIndex, setActiveDemoIndex] = useState(0)

  const handleChange = ({ target: { name, value } }) => {
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )

    window.location.href = `mailto:akshitachadha01@gmail.com?subject=${subject}&body=${body}`
  }

  const openProjectDemo = (project) => {
    setSelectedProject(project)
    setActiveDemoIndex(0)
  }

  const closeProjectDemo = () => {
    setSelectedProject(null)
    setActiveDemoIndex(0)
  }

  const showNextDemoImage = () => {
    if (!selectedProject?.images?.length) {
      return
    }

    setActiveDemoIndex((current) => (current + 1) % selectedProject.images.length)
  }

  const showPreviousDemoImage = () => {
    if (!selectedProject?.images?.length) {
      return
    }

    setActiveDemoIndex((current) =>
      (current - 1 + selectedProject.images.length) % selectedProject.images.length,
    )
  }

  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="ambient-orb left-[-8rem] top-[-6rem] h-72 w-72 bg-fuchsia-500/35 blur-3xl" />
        <div className="ambient-orb right-[-10rem] top-26 h-96 w-96 bg-cyan-400/20 blur-3xl" />
        <div className="ambient-orb bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 bg-indigo-500/20 blur-3xl" />
        <div className="grid-pattern" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[88rem] items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
          <a href="#home" className="text-base font-semibold tracking-[0.38em] uppercase transition hover:text-cyan-100">
            <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
              Akshita Chadha
            </span>
          </a>
          <div className="hidden items-center gap-8 text-base text-slate-300 md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#achievements" className="nav-link">Achievements</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative isolate">
          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-14 px-5 py-[4.5rem] sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
            <Motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-xs font-medium tracking-[0.3em] text-cyan-200 uppercase shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
                Python Full Stack Developer
              </p>
              
              <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-[-0.075em] text-white sm:text-6xl lg:text-[5.25rem] lg:leading-[0.94]">
                Building full stack products with strong backend foundations.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                I am a final year Computer Science Engineering student focused on
                full stack web applications, scalable APIs, and collaborative developer tools that
                turn complex workflows into polished product experiences.
              </p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                I enjoy building reliable Python and Django systems, crafting intuitive user
                experiences, and communicating ideas clearly on stage as confidently as I do in
                code reviews.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="cta-primary">
                  <Glyph type="image" />
                  <span>View Projects</span>
                </a>
                <a href="#contact" className="cta-secondary">
                  <Glyph type="link" />
                  <span>Contact Me</span>
                </a>
              </div>
              
            </Motion.div>

            <Motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[34rem]">
                <div className="absolute inset-x-6 top-6 -z-10 h-56 rounded-full bg-fuchsia-500/35 blur-3xl" />
                <div className="absolute inset-x-16 top-24 -z-10 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="hero-halo absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/30 via-violet-500/18 to-cyan-400/20 blur-3xl" />

                <div className="glass-panel hero-frame overflow-hidden px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="flex items-center justify-between text-xs tracking-[0.3em] text-slate-400 uppercase">
                    <span>Developer Signal</span>
                    <span>Available for internships/Full-Time Roles</span>
                  </div>

                  <div className="relative mt-6 h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/12 via-white/4 to-transparent sm:h-[27rem]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.16),transparent_58%)]" />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    <Motion.img
                      src="/akshita-portrait.png"
                      alt="Portrait of Akshita Chadha"
                      className="absolute left-1/2 top-[-1.25rem] w-[96%] max-w-none -translate-x-1/2 object-contain sm:top-[-1.75rem] sm:w-[92%]"
                      animate={reduceMotion ? {} : { y: [0, -10, 0] }}
                      transition={
                        reduceMotion
                          ? {}
                          : { duration: 6.5, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }
                      }
                    />
                  </div>

                  <div className="-mt-12 rounded-[1.75rem] border border-white/10 bg-slate-950/88 p-5 shadow-2xl shadow-fuchsia-950/25 backdrop-blur-xl">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs tracking-[0.28em] text-slate-500 uppercase">
                        Core focus
                      </p>
                      <p className="mt-3 text-lg font-medium text-white">
                        Full stack web development powered by Python, Django, APIs, and real-time collaboration.
                      </p>
                    </div>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {heroHighlights.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                          <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                            {item.value}
                          </p>
                          <p className="mt-2 text-xs tracking-[0.22em] text-slate-500 uppercase">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Full stack development with strong engineering fundamentals."
              description="I build Python-led web products that balance reliability, usability, and clarity. My work spans Django, Django REST Framework, frontend implementation, and scalable application design, while my speaking and anchoring experience helps me translate technical ideas into confident collaboration."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal delay={0.1}>
              <div className="glass-panel h-full p-6 sm:p-8">
                <p className="section-label">What I bring</p>
                <div className="mt-6 space-y-5 text-slate-300">
                  <p>
                    My strongest work spans the full stack, from designing APIs and implementing
                    authentication flows to shaping clean interfaces and building applications that
                    stay maintainable as usage grows.
                  </p>
                  <p>
                    Alongside engineering, I bring polished communication and public speaking
                    strengths that help in team coordination, demos, presentations, and
                    cross-functional problem solving.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-panel h-full p-6 sm:p-8">
                <p className="section-label">Quick profile</p>
                <dl className="mt-6 space-y-5 text-sm text-slate-300">
                  <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                    <dt className="text-slate-500">Location</dt>
                    <dd className="text-right text-white">Amritsar, Punjab</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                    <dt className="text-slate-500">Current role</dt>
                    <dd className="text-right text-white">Final Year CSE Student</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
                    <dt className="text-slate-500">Primary stack</dt>
                    <dd className="text-right text-white">Python, Django, DRF</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-slate-500">Strengths</dt>
                    <dd className="text-right text-white">Full stack apps, APIs, public speaking</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="A practical full stack toolkit with depth in Python and Django."
              description="The toolkit is intentionally balanced: Python and Django for strong application logic, modern JavaScript foundations for frontend work, and the delivery tools needed to ship secure, scalable web applications."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={0.1 * index}>
                <div className="glass-panel h-full p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-medium text-white">{group.title}</h3>
                    <span className="text-xs tracking-[0.25em] text-slate-500 uppercase">
                      {String(group.items.length).padStart(2, '0')} items
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3.5">
                    {group.items.map((item) => (
                      <SkillBadge key={item} item={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Projects"
              title="Selected work built around real use, speed, and impact."
              description="These projects show how I approach engineering problems end-to-end: from real-time collaboration and AI-assisted workflows to automated evaluation systems and content-driven web apps."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3 xl:auto-rows-fr">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.1 * index} className="h-full">
                <article className="project-card h-full">
                  <div className="flex h-full flex-col">
                    {project.images?.[0] ? (
                      <button
                        type="button"
                        onClick={() => openProjectDemo(project)}
                        className="project-card-thumb group"
                      >
                        <img
                          src={typeof project.images[0] === 'string' ? project.images[0] : project.images[0].src}
                          alt={`${project.title} preview`}
                          className="project-card-thumb-image"
                        />
                        <div className="project-card-thumb-overlay" />
                      </button>
                    ) : null}
                    <div className="flex flex-wrap items-center gap-3">
                      
                      <span className="text-sm text-slate-500">{project.period}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">
                      {project.title}
                    </h3>
                    <p className="project-summary mt-3 text-sm leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {project.tech.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 pt-5">
                      <ActionLink icon="image" onClick={() => openProjectDemo(project)}>
                        {project.demoType === 'screenshots' && project.images?.length ? 'View Demo' : 'Details'}
                      </ActionLink>
                      {project.demoType !== 'screenshots' && project.live ? (
                        <ActionLink href={project.live} icon="link">
                          Live Demo
                        </ActionLink>
                      ) : null}
                      {project.github ? (
                        <ActionLink href={project.github} icon="github" secondary>
                          GitHub
                        </ActionLink>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Achievements"
              title="Strong delivery on stage as well as in engineering teams."
              description="A communication-driven track record that supports technical growth: public speaking, debate, and live event leadership all feed into sharper collaboration and clearer product storytelling."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.title} delay={0.1 * index}>
                <div className="achievement-card glass-panel h-full p-6">
                  <div className="achievement-icon">
                    <Glyph type={achievementIconMap[achievement.kicker] ?? 'spark'} className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-xs tracking-[0.28em] text-slate-500 uppercase">{achievement.kicker}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {achievement.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{achievement.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-24">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build thoughtful full stack products with real-world polish."
              description="Open to internships, full-time roles, collaborations, and conversations around Python, Django, full stack development, developer tools, or product-focused engineering roles."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal delay={0.1}>
              <div className="glass-panel h-full p-6 sm:p-8">
                <p className="section-label">Reach out</p>
                <div className="mt-6 space-y-4">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-4 transition duration-300 hover:border-cyan-300/30 hover:bg-white/8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/7 p-3 text-cyan-200">
                          <Icon type={item.icon} />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">{item.label}</p>
                          <p className="text-sm font-medium text-white sm:text-base">{item.value}</p>
                        </div>
                      </div>
                      <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-200">
                        {'->'}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="glass-panel h-full p-6 sm:p-8">
                <p className="section-label">Quick message</p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm text-slate-400">Your name</span>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="Enter your name"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm text-slate-400">Email</span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>
                  <label className="space-y-2">
                    <span className="text-sm text-slate-400">Message</span>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-input resize-none"
                      placeholder="Tell me about the role, product, or project."
                    />
                  </label>
                  <button type="submit" className="cta-primary w-full justify-center sm:w-auto">
                    <Glyph type="link" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <ProjectDemoModal
        project={selectedProject}
        activeIndex={activeDemoIndex}
        onClose={closeProjectDemo}
        onNext={showNextDemoImage}
        onPrevious={showPreviousDemoImage}
        onSelect={setActiveDemoIndex}
      />

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Akshita Chadha. Crafted with React, Vite, Tailwind CSS, and Framer Motion.</p>
          <div className="flex flex-wrap items-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
