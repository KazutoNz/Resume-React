import Header from '../components/Header';
import Footer from '../components/Footer';
import Fade from '../js/Fade.jsx'; // ✅ เพิ่มบรรทัดนี้
import './Home.css';

function Home() {
  return (
    <div>
      <Header />

      {/* ✅ ครอบส่วนนี้ด้วย <Fade> */}
      <Fade>
        <div name="content-aboutme">
          <h1 className="hover-underline-animation center">Chadayu Koetsantas</h1>
          <img src="../me.jpg" alt="Resume" className="circular-image" />
          <p>
            I'm a <mark>Computer Science student</mark> at <mark>Phetchaburi Rajabhat University</mark>, 22 years old. 
            I am interested in coding for both <mark>Frontend and Backend.</mark> Currently, I use PHP, CSS, and JS at a basic level, and I am studying React in preparation for future development.
          </p>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Home;
