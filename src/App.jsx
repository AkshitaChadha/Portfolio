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
        <div className="ambient-orb left-[-8rem] top-[-4rem] h-72 w-72 bg-fuchsia-500/35 blur-3xl" />
        <div className="ambient-orb right-[-10rem] top-24 h-96 w-96 bg-cyan-400/20 blur-3xl" />
        <div className="ambient-orb bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 bg-indigo-500/20 blur-3xl" />
        <div className="grid-pattern" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-sm font-semibold tracking-[0.35em] text-white/90 uppercase">
            Akshita Chadha
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
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
          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
            <Motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-xs font-medium tracking-[0.3em] text-cyan-200 uppercase shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur">
                Python Full Stack Developer
              </p>
              <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
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
                  View Projects
                </a>
                <a href="#contact" className="cta-secondary">
                  Contact Me
                </a>
              </div>
            </Motion.div>

            <Motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
              animate={reduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[32rem]">
                <div className="absolute inset-x-10 top-10 -z-10 h-56 rounded-full bg-fuchsia-500/30 blur-3xl" />
                <div className="absolute inset-x-16 top-24 -z-10 h-64 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="glass-panel overflow-hidden px-6 pb-6 pt-5 sm:px-8 sm:pb-8">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="flex items-center justify-between text-xs tracking-[0.3em] text-slate-400 uppercase">
                    <span>Developer Signal</span>
                    <span>Available for internships</span>
                  </div>

                  <div className="relative mt-6 h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-transparent sm:h-[27rem]">
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    <img
                      src="/akshita-portrait.png"
                      alt="Portrait of Akshita Chadha"
                      className="absolute left-1/2 top-[-1.25rem] w-[96%] max-w-none -translate-x-1/2 object-contain sm:top-[-1.75rem] sm:w-[92%]"
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

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
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

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {skills.map((group, index) => (
              <Reveal key={group.title} delay={0.1 * index}>
                <div className="glass-panel h-full p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl font-medium text-white">{group.title}</h3>
                    <span className="text-xs tracking-[0.25em] text-slate-500 uppercase">
                      {String(group.items.length).padStart(2, '0')} items
                    </span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
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

          <div className="mt-12 grid gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.1 * index}>
                <article className="project-card">
                  <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-[0.24em] text-cyan-200 uppercase">
                          Featured project
                        </span>
                        <span className="text-sm text-slate-500">{project.period}</span>
                      </div>
                      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] text-white">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.tech.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.demoType === 'screenshots' && project.images?.length ? (
                          <button
                            type="button"
                            onClick={() => openProjectDemo(project)}
                            className="action-button"
                          >
                            View Demo
                          </button>
                        ) : null}
                        {project.demoType !== 'screenshots' && project.live ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="action-button"
                          >
                            Live Demo
                          </a>
                        ) : null}
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="action-button-secondary"
                          >
                            GitHub
                          </a>
                        ) : null}
                      </div>
                      {project.note ? (
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{project.note}</p>
                      ) : null}
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-5">
                      <p className="text-xs tracking-[0.3em] text-slate-500 uppercase">Key impact</p>
                      <p className="mt-4 text-lg font-medium leading-8 text-white">{project.impact}</p>
                      <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
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

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <Reveal key={achievement.title} delay={0.1 * index}>
                <div className="glass-panel h-full p-6">
                  <p className="text-xs tracking-[0.28em] text-slate-500 uppercase">{achievement.kicker}</p>
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

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
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
                        →
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
                    Send Message
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
