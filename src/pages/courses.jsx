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
    videoUrl: 'http://youtube.com/watch?v=kUMe1FH4CHE',
  },
  {
    number: '02',
    category: 'WEB DEVELOPMENT',
    title: 'CSS',
    description:
      'Explore styling, layouts, and responsive design to make your web pages look great on every screen.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=OXGznpKZ_sA',
  },
  {
    number: '03',
    category: 'PROGRAMMING',
    title: 'React',
    description:
      'Learn to build interactive user interfaces from reusable components.',
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
  },
  {
    number: '04',
    category: 'DATABASES',
    title: 'MongoDB',
    description:
      'Get started with MongoDB and learn how to work with data in a document database.',
    level: 'Intermediate',
    videoUrl: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u',
  },
  {
    number: '05',
    category: 'BACKEND',
    title: 'Node.js',
    description:
      'Use JavaScript on the server to build the foundation of backend applications.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
  },
  {
    number: '06',
    category: 'DEVELOPER TOOLS',
    title: 'Git',
    description:
      'Learn the essentials of version control and how to track changes to your code.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
  },
  {
    number: '07',
    category: 'DEVELOPER TOOLS',
    title: 'GitHub',
    description:
      'Discover how to host repositories and collaborate on projects with GitHub.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
  },
  {
    number: '08',
    category: 'PROGRAMMING',
    title: 'JavaScript',
    description:
      'Build programming fundamentals and add behavior and interactivity to websites.',
    level: 'Beginner',
    videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
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