import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import SocialMedia from './pages/SocialMedia';
import Resume from './pages/Resume';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
