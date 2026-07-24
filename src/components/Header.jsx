import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SkeletonBlock } from './Skeleton';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingMenu, setLoadingMenu] = useState(true);
  const navItems = [
    { to: '/', label: 'About Me' },
    { to: '/projects', label: 'Projects' },
    { to: '/social-media', label: 'Social Media' },
    { to: '/resume', label: 'Resume' },
    { to: '/technical-skills', label: 'Technical Skills' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoadingMenu(false), 650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6">
      <nav className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-4 backdrop-blur">
        <div className="flex items-center justify-between sm:justify-center">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700 sm:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="text-xl leading-none">☰</span>
          </button>

          <h1 className="text-center text-2xl font-semibold text-zinc-100 sm:text-3xl">
            <Link to="/" className="transition-colors hover:text-sky-400">
              About Me
            </Link>
          </h1>

          <div className="h-10 w-10 sm:hidden" />
        </div>

        {loadingMenu ? (
          <div className="mt-4 hidden items-center justify-center gap-4 sm:flex">
            <SkeletonBlock className="h-5 w-20" />
            <SkeletonBlock className="h-5 w-20" />
            <SkeletonBlock className="h-5 w-28" />
            <SkeletonBlock className="h-5 w-20" />
            <SkeletonBlock className="h-5 w-32" />
          </div>
        ) : (
          <ul className="mt-4 hidden items-center gap-7 sm:flex sm:justify-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  className="text-base tracking-wide text-zinc-300 hover:text-sky-400"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity sm:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 border-r border-zinc-800 bg-zinc-950 p-5 shadow-xl transition-transform duration-300 sm:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold text-zinc-100">Menu</span>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 text-zinc-200 transition hover:bg-zinc-700"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="text-lg leading-none">✕</span>
          </button>
        </div>

        {loadingMenu ? (
          <div className="space-y-2">
            <SkeletonBlock className="h-9 w-full" />
            <SkeletonBlock className="h-9 w-full" />
            <SkeletonBlock className="h-9 w-full" />
            <SkeletonBlock className="h-9 w-full" />
          </div>
        ) : (
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-zinc-800 hover:text-sky-400"
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </header>
  );
}

export default Header;
