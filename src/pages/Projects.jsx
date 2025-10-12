import Header from '../components/Header';
import Footer from '../components/Footer';
import './Project.css';

function Projects() {
  return (
    <div>
        <Header />
        <h1>My Projects</h1>
            <div name="content-projects">
                <div className="year-indicator" data-year="2024">
                <div className="dot"></div>
                <h2>2024 Projects</h2>
                <div className="project"> 
                    <h3>Hotel Booking System</h3>
                    <p>ระบบจองโรงแรม PHP CSS JS</p>
                    <button className="project-btn-github" onClick={() => window.open('https://github.com/KazutoNz/Hotel-Booking-System-final-project-UN')}>GitHub</button>
                    <button className="project-btn disabled">Video coming soon</button>
                    <button className="project-btn disabled">Demo coming soon</button>
                </div>
                <div className="project">
                    <h3>Car Booking System</h3>
                    <p>ระบบจองรถยนต์ PHP CSS JS</p>
                    <button className="project-btn-github" onClick={() => window.open('https://github.com/KazutoNz/Car-Booking-System-E-commerce')}>GitHub</button>
                    <button className="project-btn disabled">Video coming soon</button>
                    <button className="project-btn disabled">Demo coming soon</button>
                </div>
                </div>
            </div>
        <Footer />
    </div>
  )
}

export default Projects
