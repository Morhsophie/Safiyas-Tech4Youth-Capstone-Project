import Navbar from '../components/navbar.jsx'
import './routed-pages.css'

const courses = [
  {
    number: '01',
    category: 'WEB DEVELOPMENT',
    title: 'HTML',
    description:
      'Learn how to structure web pages with semantic HTML and build a strong foundation for the web.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=hu-q2zYwEYs&list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G',
  },
  {
    number: '02',
    category: 'WEB DEVELOPMENT',
    title: 'CSS',
    description:
      'Explore styling, layouts, and responsive design to make your web pages look great on every screen.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=I9XRrlOOazo&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT',
  },
  {
    number: '03',
    category: 'PROGRAMMING',
    title: 'React',
    description:
      'Learn to build interactive user interfaces from reusable components.',
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d',
  },
  {
    number: '04',
    category: 'DATABASES',
    title: 'JavaScript',
    description:
      'Build programming fundamentals and add behavior and interactivity to websites.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=qoSksQ4s_hg&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET',
  },
  {
    number: '05',
    category: 'DATABASES',
    title: 'MongoDB',
    description:
      'Get started with MongoDB and learn how to work with data in a document database.',
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA',
  },
  {
    number: '06',
    category: 'BACKEND',
    title: 'Node.js',
    description:
      'Use JavaScript on the server to build the foundation of backend applications.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU',
  },
  {
    number: '07',
    category: 'DEVELOPER TOOLS',
    title: 'Git',
    description:
      'Learn the essentials of version control and how to track changes to your code.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=4okmgMzPwZ8&list=PL4cUxeGkcC9j2pbmcA93DR1A3m7VEgSxK',
  },
  {
    number: '08',
    category: 'DEVELOPER TOOLS',
    title: 'GitHub',
    description:
      'Discover how to host repositories and collaborate on projects with GitHub.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR',
  },
]

function Courses() {
  return (
    <div className="routed-page">
      <Navbar />
      <main className="courses-content">
        <section className="courses-intro">
          <p className="route-eyebrow">LEARN BY BUILDING</p>
          <h1>Explore our courses</h1>
          <p className="route-description">
            Start with the fundamentals, then build your way toward creating
            complete projects.
          </p>
        </section>
        <div className="course-grid">
          {courses.map((course) => (
            <a
              aria-label={`Open ${course.title} course video on YouTube`}
              className="course-card"
              href={course.videoUrl}
              key={course.number}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="course-card-top">
                <span className="course-number">{course.number}</span>
                <span className="course-level">{course.level}</span>
              </div>
              <p className="course-category">{course.category}</p>
              <h2>{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <span className="course-video-link">
                Watch course video
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Courses