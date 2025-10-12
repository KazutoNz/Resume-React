import { Link } from 'react-router-dom';
import './Header.css' // CSS ปกติ ไม่ต้องใช้ styles

function Header() {
  return (
    <div>
      <nav className="nav">
        <h1><Link to="/">Kazuto</Link></h1>
        <ul className="ul">
          <li><Link to="/">AboutMe</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/social-media">Social Media</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
