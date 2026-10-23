import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react'

const profile = {
  name: 'Weddy Nkatha',
  email: 'gikundaweddy1@gmail.com',
  phone: '+254 115 842 214',
  github: 'https://github.com/Weddy93',
  linkedin: 'https://www.linkedin.com/in/weddy-nkatha-a84740358',
  location: 'Kenya',
  role: 'Junior Software Engineer',
}

const projects = [
  {
    number: '01',
    title: 'Health Check',
    category: 'Applied AI · Health technology',
    description:
      'A nutrition-assessment web app that combines a React interface with a Flask API and machine-learning models for malnutrition screening and health assessments.',
    detail:
      'Includes individual and batch prediction endpoints, confidence scoring, and personalized meal-planning features. Built as an educational project—not a substitute for professional medical advice.',
    stack: ['React', 'Flask', 'Python', 'scikit-learn', 'REST API'],
    href: 'https://github.com/Weddy93/health-check',
    status: 'Web app · ML API',
    featured: true,
  },
  {
    number: '02',
    title: 'Healthy Beans',
    category: 'Computer vision · Research project',
    description:
      'An ongoing computer-vision project classifying French bean leaves as healthy, Angular Leaf Spot, or Bean Rust using PyTorch CNNs.',
    detail:
      'The current best scheduled CNN records 89.41% test accuracy and 89.47% macro F1 on the project’s held-out test set. Results are dataset-specific; the project documents class confusions and next experiments.',
    stack: ['Python', 'PyTorch', 'CNN', 'Image classification'],
    href: 'https://github.com/Weddy93/healthy-beans',
    status: 'In progress · Evaluation',
    featured: true,
  },
  {
    number: '03',
    title: 'COMPAS Bias Analysis',
    category: 'Responsible AI · Data science',
    description:
      'An analysis of racial disparities in false-positive rates in the COMPAS recidivism dataset, using IBM’s AI Fairness 360 toolkit.',
    detail:
      'The project produces a disparity visualization and a concise report, then outlines data auditing, fairness-aware methods, and recurring evaluation as possible remediation steps.',
    stack: ['Python', 'AIF360', 'pandas', 'scikit-learn'],
    href: 'https://github.com/Weddy93/AI-ethics',
    status: 'Fairness analysis',
    featured: false,
  },
  {
    number: '04',
    title: 'Car Price Prediction',
    category: 'Machine learning · Regression',
    description:
      'A data-science project exploring used-car price prediction and the machine-learning workflow behind a practical estimation problem.',
    detail:
      'A hands-on project that connects data preparation, model building, and evaluation—an example of my interest in applying data science to everyday decisions.',
    stack: ['Python', 'Jupyter Notebook', 'Machine learning'],
    href: 'https://github.com/Weddy93/car-price-prediction',
    status: 'Data science project',
    featured: false,
  },
]

const focusAreas = [
  {
    number: '01',
    title: 'Software development',
    description:
      'Building scalable applications and useful digital products, with attention to readable code, user needs, and the problem behind the feature.',
    tools: ['Python', 'JavaScript', 'TypeScript', 'React', 'Node.js'],
    icon: Code2,
  },
  {
    number: '02',
    title: 'AI & machine learning',
    description:
      'Exploring machine learning, natural language processing, and responsible AI—from training and evaluating models to understanding their limitations.',
    tools: ['PyTorch', 'scikit-learn', 'TensorFlow', 'NLP', 'AI ethics'],
    icon: BrainCircuit,
  },
  {
    number: '03',
    title: 'Data-driven solutions',
    description:
      'Using data analysis and clear evaluation to surface useful patterns, communicate findings, and make better-informed product decisions.',
    tools: ['pandas', 'NumPy', 'SQL', 'Power BI', 'Model evaluation'],
    icon: Database,
  },
]

const approach = [
  ['Understand', 'Start with the people, context, and real problem.'],
  ['Explore', 'Investigate the data, constraints, and possible approaches.'],
  ['Build', 'Turn the strongest idea into a practical, usable solution.'],
  ['Evaluate', 'Check results, learn from limitations, and improve.'],
]

const skillGroups = [
  {
    title: 'Languages & foundations',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'PHP', 'SQL'],
  },
  {
    title: 'Web & application development',
    skills: ['React', 'Node.js', 'Express', 'Flask', 'Django', 'FastAPI', 'HTML', 'CSS'],
  },
  {
    title: 'AI, data & platforms',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'pandas', 'NumPy', 'Power BI', 'AWS', 'Azure'],
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
]
const certifications = [
  {
    title: "AI AND MACHINE LEARNING",
    issuer: "Power Learn Project Africa",
    year: "2025",
    preview: "details",
    image: "/certs/plp-ai-machine-learning.pdf",
    url: "https://academy.powerlearnprojectafrica.org/certificates?scholarship=76a52676-d442-41af-b6bd-69e1c3efca2b&certId=080260cc-1c78-4e64-a4ae-f40d0cbd66f8",
  },
  {
    title: "DATA ANALYTICS",
    image: "/certs/ict-data-analytics.pdf",
    issuer: "ICT Authority — Smart Academy",
    year: "2026",
    preview: "verification",
    url: "https://training.smartacademy.go.ke/certificate-verification/?certificate_id=ICTA-1773654922-6084-38451",
  },
  {
    title: "CLOUD INFRASTRUCTURE",
    image: "/certs/ict-cloud-infrastructure.pdf",
    issuer: "ICT Authority — Smart Academy",
    year: "2026",
    preview: "verification",
    url: "https://training.smartacademy.go.ke/certificate-verification/?certificate_id=ICTA-1773654922-6084-38451",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    ['About', '#about'],
    ['Focus', '#focus'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Certifications', '#certifications'],
    ['Learning', '#learning'],
    ['Contact', '#contact'],
  ]

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
            <p className="eyebrow"><span className="status-dot" /> {profile.role} · {profile.location}</p>
            <h1>Building useful software. Exploring <span>what AI can make possible.</span></h1>
            <p className="hero-description">
              I’m {profile.name}—a software engineer, data-science enthusiast, and AI learner. I’m interested in scalable applications, machine learning, NLP, and data-driven solutions that address real-world problems. I’m open to opportunities to learn, collaborate, and contribute.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="text-link" href="#about">A little about me <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-socials">
              <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn</a>
              <a href={`mailto:${profile.email}`}><Mail size={17} /> Email</a>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={16} /> Phone</a>
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
              <div className="art-card-top"><span>SOFTWARE / AI / DATA</span><span className="art-live">● OPEN TO WORK</span></div>
              <div className="code-window">
                <div className="code-dots"><i /><i /><i /></div>
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> focus = [</p>
                <p><span className="code-muted">02</span> &nbsp; <span className="code-blue">'software'</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; <span className="code-blue">'AI + machine learning'</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; <span className="code-blue">'data for impact'</span></p>
                <p><span className="code-muted">05</span> ]</p>
                <div className="code-divider" />
                <p><span className="code-muted">06</span> <span className="code-purple">while</span> (curious) {'{'}</p>
                <p><span className="code-muted">07</span> &nbsp; buildSomethingUseful()</p>
                <p><span className="code-muted">08</span> {'}'}</p>
              </div>
              <div className="art-card-bottom"><BrainCircuit size={19} /><span>Learn. Build. Make it useful.</span><span className="art-arrow">↗</span></div>
            </div>
            <div className="floating-note note-top"><BriefcaseBusiness size={17} /><span>Open to opportunities</span></div>
            <div className="floating-note note-bottom"><BrainCircuit size={17} /><span>Learning by building</span></div>
          </motion.div>
        </section>

        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {['Scalable applications', 'Machine learning', 'Natural language processing', 'Responsible AI', 'Data-driven solutions', 'Scalable applications', 'Machine learning', 'Natural language processing'].map((item, index) => (
              <span key={`${item}-${index}`}>{item}<b>✳</b></span>
            ))}
          </div>
        </div>

        <section className="section-wrap section-block about-section" id="about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-grid">
            <h2>Technical curiosity.<br /><span>Practical outcomes.</span></h2>
            <div className="about-copy">
              <p>I’m a junior software engineer growing at the intersection of application development, data science, and AI. My GitHub reflects that mix: full-stack health-assessment software, computer-vision experiments, predictive modelling, and a fairness analysis.</p>
              <p>I’m especially curious about machine learning, natural language processing, and how to build scalable applications around real needs. I value clean code, problem solving, teamwork, and continuous learning—and I want to contribute to systems with meaningful real-world impact.</p>
              <a className="inline-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="principles-grid">
            <article><span>01</span><h3>Clean code</h3><p>Keep solutions understandable, maintainable, and grounded in good engineering habits.</p></article>
            <article><span>02</span><h3>Team player</h3><p>Listen, communicate, and work with others to turn ideas into useful products.</p></article>
            <article><span>03</span><h3>Continuous learner</h3><p>Stay curious, test ideas, and improve through practice and feedback.</p></article>
          </div>
        </section>

        <section className="section-wrap section-block focus-section" id="focus">
          <div className="section-heading">
            <div><div className="section-label">02 / WHAT I’M BUILDING TOWARD</div><h2>Three connected areas of focus.</h2></div>
            <p>My interests bring software engineering, AI, and data together around practical problems.</p>
          </div>
          <div className="focus-grid">
            {focusAreas.map(({ number, title, description, tools, icon: Icon }) => (
              <article className="focus-card" key={number}>
                <div className="focus-card-head"><span>{number}</span><Icon size={21} aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tag-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block projects-section" id="projects">
          <div className="section-heading">
            <div><div className="section-label">03 / SELECTED WORK</div><h2>Projects, experiments, and lessons.</h2></div>
            <p>A closer look at the real problems, tools, and learnings behind work on my GitHub.</p>
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
                <p className="project-detail">{project.detail}</p>
                <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View project <ExternalLink size={15} /></a>
              </motion.article>
            ))}
          </div>
          <p className="projects-note">Healthy Beans is an ongoing experiment; results are specific to its current dataset and setup. Explore more code and learning projects on my <a href={profile.github} target="_blank" rel="noreferrer">GitHub profile</a>.</p>
        </section>

        <section className="section-wrap section-block approach-section">
          <div className="section-label">04 / HOW I WORK</div>
          <div className="section-heading"><h2>From a real problem to a better solution.</h2><p>A practical learning loop I bring to projects—understand the need, build thoughtfully, and improve from evidence.</p></div>
          <ol className="approach-list">
            {approach.map(([title, description], index) => (
              <li className="approach-item" key={title}>
                <span className="approach-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section-wrap section-block skills-section" id="skills">
          <div className="section-label">05 / TOOLKIT</div>
          <div className="section-heading"><h2>Tools I’m learning and using.</h2><p>A snapshot of technologies from my GitHub profile and hands-on projects—not a claim that I’ve mastered every tool.</p></div>
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

        <section className="section-wrap section-block certifications-section" id="certifications">
          <div className="section-label">06 / CERTIFICATIONS</div>
          <div className="section-heading"><h2>Certifications.</h2><p>Credentials from training programs I’ve completed.</p></div>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <article className="cert-card" key={cert.title}>
                {cert.image ? (
                  <iframe
                    className="cert-preview cert-file-preview"
                    src={cert.image}
                    title={`Certificate preview: ${cert.title}`}
                    loading="lazy"
                  />
                ) : cert.preview === "verification" ? (
                  <iframe
                    className="cert-preview cert-verification-preview"
                    src={cert.url}
                    title={`Official certificate verification preview — ${cert.title}`}
                    loading="lazy"
                  />
                ) : (
                  <div className="cert-preview cert-details-preview" aria-label={`Certificate details for ${cert.title}`}>
                    <span className="cert-preview-label">Certificate preview</span>
                    <strong>{cert.title}</strong>
                    <span>Awarded to {profile.name}</span>
                    <span>{cert.issuer} · {cert.year}</span>
                    <span className="cert-preview-note">Open the issuer’s portal to view the certificate</span>
                  </div>
                )}
                <div>
                  <h3>{cert.title}</h3>
                  <div className="cert-meta"><span>{cert.issuer}</span><span>{cert.year}</span></div>
                </div>
                <a className="cert-link" href={cert.url} target="_blank" rel="noreferrer">View certificate <ExternalLink size={14} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap section-block learning-section" id="learning">
          <div className="section-label">07 / LEARNING JOURNEY</div>
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
              <div className="section-label">08 / CONTACT</div>
              <h2>Let’s connect.</h2>
              <p>I’m open to opportunities to grow as a junior software engineer and contribute to software, AI, machine-learning, and data projects. I’d be glad to connect about internships, collaboration, or interesting problems to solve.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="contact-socials">
                <a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn</a>
                <a href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={16} /> {profile.phone}</a>
              </div>
            </div>
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
