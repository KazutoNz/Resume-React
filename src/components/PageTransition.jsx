import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const id = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <div
      className={`transform transition-all duration-500 ease-out ${
        visible
          ? 'translate-y-0 scale-100 opacity-100 blur-0'
          : 'translate-y-4 scale-[0.99] opacity-0 blur-[2px]'
      }`}
    >
      {children}
    </div>
  );
}

export default PageTransition;
