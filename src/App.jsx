import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Sparkles,
} from 'lucide-react'

const profile = {
  name: 'Weddy Nkatha',
  title: 'Software Engineer | Data Scientist | AI Enthusiast',
  summary:
    'I build scalable software, data-driven products, and AI-powered experiences that turn complex ideas into practical solutions.',
  email: 'gikundaweddy1@gmail.com',
  phone: '+254 115 842 214, +254746728328',
  whatsapp: 'https://wa.me/254746728328',
  location: 'Kenya',
  linkedin: 'https://www.linkedin.com/in/weddy-nkatha-a84740358',
  github: 'https://github.com/Weddy93',
  avatar: 'https://github.com/Weddy93.png',
}

const skills = {
  'AI & LLM Skills': [
    'Prompt Engineering',
    'LLM Evaluation',
    'AI Agent Testing',
    'RAG Systems',
    'Machine Learning',
    'NLP & Content Analysis',
  ],
  'Programming Languages': ['Python', 'SQL', 'JavaScript', 'Java', 'HTML', 'CSS'],
  'Frameworks & Tools': [
    'React',
    'FastAPI',
    'Flask',
    'PyTorch',
    'TensorFlow',
    'scikit-learn',
    'Pandas',
    'NumPy',
    'Power BI',
    'AWS',
    'Git',
    'Selenium',
  ],
  'Core Competencies': [
    'Data Structures & Algorithms',
    'System Analysis & Design',
    'Agile & Scrum',
    'Logical Reasoning',
    'Statistical Analysis',
    'Linear Algebra',
    'Discrete Maths',
    'Critical Thinking',
  ],
  'Soft Skills': [
    'Collaborative Teamwork',
    'Creative Problem-Solving',
    'Time Management',
    'Reliability',
    'Analytical Decision-Making',
    'Precision in Work',
  ],
}

const education = [
  {
    title: 'Bachelor of Science in Software Engineering',
    meta: 'Kirinyaga University • 2024 - 2028',
    description:
      'Focused on software engineering, AI, algorithms, system design, calculus, linear algebra, and data-driven problem solving.',
  },
  {
    title: 'Certified AI & Machine Learning Expert',
    meta: 'Power Learn Project Africa • Jul - Nov 2025',
    description:
      'Hands-on training in AI/ML workflows, ML deployment, model reasoning, and AI agent evaluation.',
  },
  {
    title: 'AWS Cloud Infrastructure',
    meta: 'ICT Kenya • Dec 2025',
    description:
      'Built foundational skills in cloud-native infrastructure, deployment, and scalable application architecture.',
  },
  {
    title: 'Data Analytics & Artificial Intelligence',
    meta: 'ICT Kenya • Mar 2026',
    description:
      'Strengthened capabilities in analytics, BI reporting, and applied AI experience design using real-world data.',
  },
]

const projectsData = [
  {
    title: 'health-check',
    desc: 'A practical monitoring and diagnostic platform for service health tracking, reliability checks, and operational visibility.',
    tech: ['React', 'Node.js', 'Monitoring', 'DevOps'],
    accent: 'from-cyan-500 to-blue-500',
    link: 'https://github.com/Weddy93/health-check',
  },
  {
    title: 'AI-future-directions',
    desc: 'A forward-looking AI exploration project focused on emerging trends, ideas, and systems shaping the future of intelligence.',
    tech: ['AI', 'Research', 'Strategy', 'Python'],
    accent: 'from-violet-500 to-indigo-500',
    link: 'https://github.com/Weddy93/AI-future-directions',
  },
  {
    title: 'Healthycoffee',
    desc: 'A product concept blending wellness, digital experience, and branded commerce into a health-focused coffee offering.',
    tech: ['UX', 'Branding', 'Web', 'Commerce'],
    accent: 'from-amber-500 to-orange-500',
    link: 'https://github.com/Weddy93/Healthycoffee',
  },
  {
    title: 'Justice-Hub',
    desc: 'A civic-tech concept built to improve access to justice, information, and public services through digital channels.',
    tech: ['JavaScript', 'Full Stack', 'UI/UX', 'Social Impact'],
    accent: 'from-emerald-500 to-teal-500',
    link: 'https://github.com/Weddy93/Justice-Hub',
  },
  {
    title: 'Shopsphere',
    desc: 'An e-commerce experience showcasing digital storefront design, catalog organization, and smooth customer flows.',
    tech: ['React', 'Commerce', 'Frontend', 'Design'],
    accent: 'from-pink-500 to-rose-500',
    link: 'https://github.com/Weddy93/Shopsphere',
  },
  {
    title: 'Slauson-Cafe',
    desc: 'A hospitality or cafe concept site focused on menu presentation, brand atmosphere, and customer engagement.',
    tech: ['Web Design', 'Branding', 'Frontend', 'Marketing'],
    accent: 'from-fuchsia-500 to-purple-500',
    link: 'https://github.com/Weddy93/Slauson-Cafe',
  },
]

const quotes = [
  'Code. Learn. Build. Repeat. — Weddy Nkatha',
  'Precision in AI evaluation leads to real-world impact.',
  'Data structures and algorithms are the architecture of logical thinking.',
  'The best products bridge engineering discipline with human-centered design.',
]

const initialForm = {
  name: '',
  email: '',
  message: '',
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const socialLinks = [
  { href: profile.github, label: 'GitHub', icon: Globe },
  { href: profile.linkedin, label: 'LinkedIn', icon: Globe },
  { href: `mailto:${profile.email}`, label: 'Email', icon: Mail },
  { href: profile.whatsapp, label: 'WhatsApp', icon: MessageCircle },
]

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [formData, setFormData] = useState(initialForm)
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { name, email, message } = formData

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedback('Please fill in all fields before sending your message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setFeedback('Please enter a valid email address.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setFeedback('Thanks for reaching out! Your email app should open with the message ready to send.')
    setFormData(initialForm)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <a href="#home" className="text-lg font-black tracking-[0.2em] text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text">
            WEDDY
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
          >
            Let&apos;s Connect
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),transparent_28%)]" />
          <div className="section-shell relative py-20 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
                  <BrainCircuit size={16} />
                  AI &amp; LLM Specialist • Software Engineer
                </div>

                <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
                  Building intelligent systems
                  <span className="block text-blue-400">and scalable digital products.</span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  {profile.summary}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300">
                  <div className="inline-flex items-center gap-2">
                    <Phone size={16} className="text-blue-400" />
                    <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-white">{profile.phone}</a>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Mail size={16} className="text-blue-400" />
                    <a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400">
                    View Projects <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-slate-100 transition hover:border-blue-400 hover:text-blue-200">
                    Hire Me
                  </a>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                className="relative mx-auto w-full max-w-md"
              >
                <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/30 via-sky-500/20 to-violet-500/30 blur-3xl" />
                <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/90">
                    <img src={profile.avatar} alt={profile.name} className="h-[430px] w-full object-cover" />
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                      <Code2 className="mb-2 text-blue-400" size={18} />
                      <div className="text-xl font-bold text-white">5+</div>
                      <div className="text-xs text-slate-400">Years building</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                      <Bot className="mb-2 text-cyan-400" size={18} />
                      <div className="text-xl font-bold text-white">AI</div>
                      <div className="text-xs text-slate-400">Driven products</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3">
                      <Database className="mb-2 text-violet-400" size={18} />
                      <div className="text-xl font-bold text-white">Data</div>
                      <div className="text-xs text-slate-400">Informed decisions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <motion.section id="about" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="border-t border-white/10 py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-sm font-medium text-violet-200">
                <Sparkles size={16} />
                About me
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">Engineer with a passion for AI, data, and practical innovation.</h2>
            </div>

            <div className="space-y-6 text-slate-300">
              <p>
                I enjoy solving real-world problems through software engineering, intelligent systems, and strong product thinking. My work sits at the intersection of data science, AI experimentation, and clean application architecture.
              </p>
              <p>
                From prompt engineering and LLM evaluation to cloud infrastructure and analytics, I bring a balanced approach: technical depth, business awareness, and a strong focus on quality, clarity, and reliability.
              </p>
            </div>
          </div>
        </motion.section>

        <section id="about-details" className="py-8">
          <div className="section-shell grid gap-6 lg:grid-cols-4">
            {[
              { icon: BriefcaseBusiness, label: 'Focus', value: 'AI systems' },
              { icon: BrainCircuit, label: 'Strength', value: 'LLM evaluation' },
              { icon: Database, label: 'Approach', value: 'Data-driven' },
              { icon: Code2, label: 'Style', value: 'Clean engineering' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-panel rounded-3xl p-5">
                <Icon className="mb-4 text-blue-400" size={24} />
                <div className="text-sm uppercase tracking-[0.14em] text-slate-400">{label}</div>
                <div className="mt-2 text-xl font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-20">
          <div className="section-shell">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Education</p>
                <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Background & learning journey</h2>
              </div>
            </div>

            <div className="space-y-5">
              {education.map((entry, index) => (
                <motion.div
                  key={entry.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="glass-panel rounded-3xl p-6"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                    <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-blue-200">
                      {entry.meta}
                    </span>
                  </div>
                  <p className="mt-3 max-w-3xl text-slate-300">{entry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Skills</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Tools I use to turn ideas into products</h2>
            </div>

            <div className="space-y-8">
              {Object.entries(skills).map(([title, items], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <h3 className="mb-4 text-lg font-semibold text-slate-200">{title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-blue-400 hover:text-blue-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="section-shell">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Portfolio</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Featured projects & experiments</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectsData.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/80 shadow-[0_25px_45px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:border-blue-500/40"
                >
                  <div className={`h-36 bg-gradient-to-br ${project.accent} p-5`}>
                    <div className="flex h-full items-end justify-between">
                      <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-white/90">
                        Project
                      </div>
                      <span className="rounded-full bg-slate-950/25 p-2 text-white">
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{project.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[11px] uppercase tracking-[0.08em] text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition group-hover:text-blue-200">
                      View repository <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="section-shell">
            <div className="glass-panel flex items-center justify-center gap-3 rounded-[2rem] px-6 py-8 text-center text-lg text-slate-200 md:text-2xl">
              <Quote size={30} className="text-blue-400" />
              <span>{quotes[quoteIndex]}</span>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Contact</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Let&apos;s build something impactful together.</h2>
              <p className="mt-4 max-w-xl text-slate-300">
                I&apos;m open to AI-driven product work, engineering opportunities, collaborations, and impactful ideas that blend software, data, and smart automation.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 transition hover:text-blue-300">
                  <Phone size={18} className="text-blue-400" />
                  {profile.phone}
                </a>
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-blue-300">
                  <Mail size={18} className="text-blue-400" />
                  {profile.email}
                </a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-300">
                  <MessageCircle size={18} className="text-emerald-400" />
                  WhatsApp: +254 746 728 328
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-300">
                  <Globe size={18} className="text-blue-400" />
                  linkedin.com/in/weddy-nkatha-a84740358
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-blue-300">
                  <Globe size={18} className="text-blue-400" />
                  github.com/Weddy93
                </a>
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin size={18} className="text-blue-400" />
                  {profile.location}
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">Send a message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Your name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea, project, or collaboration..."
                    className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-400 focus:outline-none"
                    required
                  />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                  Send Message <ArrowRight size={18} />
                </button>

                {feedback && (
                  <div className={`rounded-2xl border px-4 py-3 text-sm ${feedback.includes('Thanks') ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-rose-500/30 bg-rose-500/10 text-rose-200'}`}>
                    {feedback}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-slate-400">© 2025 {profile.name} • Software Engineer | Data Scientist | AI Enthusiast</div>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="rounded-full border border-slate-700 bg-slate-900/80 p-2.5 text-slate-300 transition hover:border-blue-400 hover:text-blue-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
