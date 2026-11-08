import './home.css'
import Navbar from '../components/navbar.jsx'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM4 18.5A2.5 2.5 0 0 1 6.5 16H20M8 7h8m-8 4h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const benefits = [
  {
    icon: '⌘',
    title: 'Project-based learning',
    description:
      'Every track ships with real projects you build, break and fix — no passive theory marathons, just code you can show off.',
  },
  {
    icon: '▶',
    title: 'Free video tracks',
    description:
      'Curated, full-length video courses for every step of your journey — completely free, forever, on every device.',
  },
  {
    icon: '◎',
    title: 'Local community support',
    description:
      'Join study groups, hackathons and mentor sessions with young developers in your area who cheer you on.',
  },
]

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">🚀</span> Free for every young learner</p>
            <h1>
              Empowering the Next Generation of <span>Software Developers</span>
            </h1>
            <p className="hero-description">
              Learn to code by building real things. Five core courses, thousands of
              students and a community that has your back — from your first HTML tag
              to full-stack apps.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/courses">
                <BookIcon />
                Explore Courses
              </a>
              <a className="button button-secondary" href="/register">
                Join Now
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-image"
              src="/tech-hero.jpg"
              alt="Modern technology and computer coding"
            />
            <div className="learning-card">
              <span className="learning-icon" aria-hidden="true">&lt;/&gt;</span>
              <span>
                <strong>Learn by Doing</strong>
                <small>Build real-world projects</small>
              </span>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-heading">
            <p className="section-label">WHY CHOOSE US</p>
            <h2>Why Tech for Youth?</h2>
            <p>
              Built by developers who started exactly where you are — curious,
              ambitious and ready to build.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="join-section">
          <div className="join-content">
            <div className="join-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>Your coding journey starts today</h2>
            <p>
              Explore the learning tracks and get ready to build — your next step is
              one click away.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/register">
                Join Now
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href="/courses">Explore Courses</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        © 2026 Tech for Youth. All rights reserved.
      </footer>
    </div>
  )
}

export default Home