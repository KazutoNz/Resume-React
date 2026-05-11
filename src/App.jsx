import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Projects from './pages/Projects';
import SocialMedia from './pages/SocialMedia';
import Resume from './pages/Resume';
import TechnicalSkills from './pages/TechnicalSkills';

function App() {
  const withTransition = (element) => <PageTransition>{element}</PageTransition>;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={withTransition(<Home />)} />
          <Route path="/projects" element={withTransition(<Projects />)} />
          <Route path="/social-media" element={withTransition(<SocialMedia />)} />
          <Route path="/resume" element={withTransition(<Resume />)} />
          <Route path="/technical-skills" element={withTransition(<TechnicalSkills />)} />
        </Routes>
      </Router>
    </>
  )
}

export default App
