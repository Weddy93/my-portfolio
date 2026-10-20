import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  Check,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'

const profile = {
  name: 'Weddy Nkatha',
  email: 'gikundaweddy1@gmail.com',
  github: 'https://github.com/Weddy93',
  whatsapp: 'https://wa.me/254746728328',
  location: 'Kenya',
}

const projects = [
  {
    number: '01',
    title: 'Health Check',
    category: 'Machine learning · Web application',
    description:
      'A nutritional assessment application that uses machine learning to turn user-provided information into practical health-related insights.',
    stack: ['React', 'Flask', 'Python', 'scikit-learn'],
    href: 'https://github.com/Weddy93/health-check',
    status: 'Available on GitHub',
    featured: true,
  },
  {
    number: '02',
    title: 'Used Car Price Prediction',
    category: 'Applied machine learning · Regression',
    description:
      'A regression project exploring how vehicle make and model, age, mileage, fuel type, transmission, and ownership relate to used-car selling prices.',
    stack: ['Python', 'pandas', 'scikit-learn', 'Random Forest'],
    href: 'https://github.com/Weddy93?tab=repositories',
    status: 'View GitHub repositories',
    featured: true,
  },
  {
    number: '03',
    title: 'Healthy Beans',
    category: 'Computer vision · In progress',
    description:
      'An image-classification experiment for distinguishing healthy bean leaves from selected disease categories using a PyTorch convolutional neural network.',
    stack: ['Python', 'PyTorch', 'CNN', 'Computer vision'],
    href: 'https://github.com/Weddy93?tab=repositories',
    status: 'Experiment in progress',
    featured: false,
  },
]

const skillGroups = [
  {
    title: 'Programming & data',
    skills: ['Python', 'SQL', 'JavaScript', 'pandas', 'NumPy', 'Power BI'],
  },
  {
    title: 'AI & machine learning',
    skills: ['scikit-learn', 'PyTorch', 'Model evaluation', 'Regression', 'Computer vision', 'Prompt engineering'],
  },
  {
    title: 'Software & tools',
    skills: ['React', 'Flask', 'FastAPI', 'Git & GitHub', 'REST APIs', 'AWS fundamentals'],
  },
]

const learning = [
  {
    title: 'BSc Software Engineering',
    place: 'Kirinyaga University',
    detail: 'Currently pursuing a degree with a focus on software development, algorithms, databases, and system design.',
  },
  {
    title: 'AI & Machine Learning',
    place: 'Power Learn Project Africa',
    detail: 'Practical learning in AI/ML workflows and applied machine learning.',
  },
  {
    title: 'AWS Cloud Infrastructure',
    place: 'ICT Kenya',
    detail: 'Foundational cloud infrastructure and deployment concepts.',
  },
  {
    title: 'Data Analytics & Artificial Intelligence',
    place: 'ICT Kenya',
    detail: 'Training in analytics, reporting, and applied AI.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState('')

  const navItems = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Learning', '#learning'],
    ['Contact', '#contact'],
  ]

  function submitMessage(event) {
    event.preventDefault()
    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setFeedback('Please complete all three fields.')
      return
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    setFeedback('Your email application should open with your message ready. You will still need to send it there.')
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Weddy home">WN<span>.</span></a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Get in touch <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="eyebrow"><span className="status-dot" /> {profile.location} · Software Engineering</p>
            <h1>I build useful software and explore <span>intelligent solutions.</span></h1>
            <p className="hero-description">
              I’m {profile.name}, a Software Engineering student interested in AI, machine learning, and data-driven products. I enjoy turning a problem into something people can actually use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            aria-label="Decorative code illustration"
          >
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card">
              <div className="art-card-top"><span>BUILD / LEARN / ITERATE</span><span className="art-live">● ACTIVE</span></div>
              <div className="code-window">
                <div className="code-dots"><i /><i /><i /></div>
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> focus = [</p>
                <p><span className="code-muted">02</span> &nbsp; <span className="code-green">'software'</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; <span className="code-green">'machine learning'</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; <span className="code-green">'data'</span></p>
                <p><span className="code-muted">05</span> ]</p>
                <div className="code-divider" />
                <p><span className="code-muted">06</span> <span className="code-purple">while</span> (curious) {'{'}</p>
                <p><span className="code-muted">07</span> &nbsp; buildSomethingUseful()</p>
                <p><span className="code-muted">08</span> {'}'}</p>
              </div>
              <div className="art-card-bottom"><BrainCircuit size={19} /><span>Curiosity, applied.</span><span className="art-arrow">↗</span></div>
            </div>
            <div className="floating-note note-top"><Code2 size={17} /><span>Engineering mindset</span></div>
            <div className="floating-note note-bottom"><BrainCircuit size={17} /><span>AI + practical impact</span></div>
          </motion.div>
        </section>

        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {['Software development', 'Machine learning', 'Data analytics', 'AI evaluation', 'Problem solving', 'Software development', 'Machine learning', 'Data analytics'].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<b>✳</b></span>
            ))}
          </div>
        </div>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <h2>Technical curiosity.<br /><span>Practical outcomes.</span></h2>
            <div className="about-copy">
              <p>I’m developing my skills at the intersection of software engineering, machine learning, and data analytics. I like understanding how a system works end to end—from preparing data and evaluating a model to building an interface around it.</p>
              <p>I value clear thinking, steady iteration, and honest evaluation. I’m looking for opportunities to contribute, learn from experienced teams, and build digital tools that solve real problems.</p>
              <a className="inline-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="principles-grid">
            <article><span>01</span><h3>Build with purpose</h3><p>Start with the problem and make the solution useful.</p></article>
            <article><span>02</span><h3>Measure the result</h3><p>Use evaluation and feedback to understand what works.</p></article>
            <article><span>03</span><h3>Keep learning</h3><p>Improve through practice, experimentation, and collaboration.</p></article>
          </div>
        </section>

        <section className="section-wrap section-block projects-section" id="projects">
          <div className="section-heading">
            <div><div className="section-label">02 / SELECTED WORK</div><h2>Projects with a purpose.</h2></div>
            <p>A selection of applications and machine-learning experiments I’ve worked on.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card ${project.featured ? 'project-featured' : ''}`}
                key={project.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="project-card-head">
                  <span className="project-number">{project.number}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View project <ExternalLink size={15} /></a>
              </motion.article>
            ))}
          </div>
          <p className="projects-note">Some work is still in progress. More code is available on my <a href={profile.github} target="_blank" rel="noreferrer">GitHub profile</a>.</p>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-label">03 / TOOLKIT</div>
          <div className="section-heading"><h2>Tools I’m learning and using.</h2><p>My toolkit grows through coursework, projects, and hands-on practice.</p></div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
                <div className="skill-card-index">0{index + 1}</div>
                <h3>{group.title}</h3>
                <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block learning-section" id="learning">
          <div className="section-label">04 / LEARNING JOURNEY</div>
          <div className="section-heading"><h2>Learning by doing.</h2><p>Education and training that shape how I approach technical problems.</p></div>
          <div className="learning-list">
            {learning.map((item, index) => (
              <article className="learning-item" key={item.title}>
                <span className="learning-index">0{index + 1}</span>
                <div><h3>{item.title}</h3><p className="learning-place">{item.place}</p></div>
                <p className="learning-detail">{item.detail}</p>
                <Check className="learning-check" size={18} />
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <div className="section-label">05 / CONTACT</div>
              <h2>Have a good problem to solve?</h2>
              <p>I’m happy to connect about software engineering, AI and data projects, internships, and collaboration opportunities.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowRight size={17} /></a>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitMessage}>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Name" required />
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="4" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="What would you like to work on?" required />
              <button className="button button-primary form-button" type="submit">Prepare email <ArrowRight size={17} /></button>
              {feedback && <p className="form-feedback" role="status">{feedback}</p>}
              <p className="form-hint">This form opens your email app; it does not send messages directly from this website.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">WN<span>.</span></a>
        <p>Designed with care. Built to keep learning.</p>
        <a href="#home" className="back-top">Back to top ↑</a>
        <span className="footer-copy">© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </div>
  )
}

export default App
