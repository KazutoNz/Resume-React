import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition';

import Home from './pages/Home';
import Projects from './pages/Projects';
import SocialMedia from './pages/SocialMedia';
import Resume from './pages/Resume';
import TechnicalSkills from './pages/TechnicalSkills';

const SITE_NAME = 'Chadayu Koetsantas';

// ตั้ง document.title ให้ตรงกับแต่ละหน้า โดยไม่ต้องไปแก้ไฟล์ page ทีละไฟล์
function PageTitle({ title, children }) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : SITE_NAME;
  }, [title]);

  return children;
}

function App() {
  const withPage = (element, title) => (
    <PageTransition>
      <PageTitle title={title}>{element}</PageTitle>
    </PageTransition>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={withPage(<Home />, 'Home')} />
        <Route path="/projects" element={withPage(<Projects />, 'Projects')} />
        <Route path="/social-media" element={withPage(<SocialMedia />, 'Social Media')} />
        <Route path="/resume" element={withPage(<Resume />, 'Resume')} />
        <Route path="/technical-skills" element={withPage(<TechnicalSkills />, 'Technical Skills')} />
      </Routes>
    </Router>
  );
}

export default App;