import Header from '../components/Header';
import Footer from '../components/Footer';

import './Resume.css'
function Resume() {
  return (
    <div>
       <Header />
      <div name="content-resume">
        <h1>My Resume</h1>
        <img src="./RESUME.png" alt="Resume" className="content-resume" />
      </div>
        <Footer />
    </div>
  )
}

export default Resume
