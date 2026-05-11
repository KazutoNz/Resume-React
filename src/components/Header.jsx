import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mx-auto w-full max-w-6xl px-4 pt-5 sm:px-6">
      <nav className="rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-4 backdrop-blur">
        <h1 className="text-center text-2xl font-semibold text-zinc-100 sm:text-3xl">
          <Link to="/" className="transition-colors hover:text-sky-400">
            Kazuto
          </Link>
        </h1>
        <ul className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-7">
          <li><Link className="text-sm tracking-wide text-zinc-300 transition-colors hover:text-sky-400 sm:text-base" to="/">AboutMe</Link></li>
          <li><Link className="text-sm tracking-wide text-zinc-300 transition-colors hover:text-sky-400 sm:text-base" to="/projects">Projects</Link></li>
          <li><Link className="text-sm tracking-wide text-zinc-300 transition-colors hover:text-sky-400 sm:text-base" to="/social-media">Social Media</Link></li>
          <li><Link className="text-sm tracking-wide text-zinc-300 transition-colors hover:text-sky-400 sm:text-base" to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
