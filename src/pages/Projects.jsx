import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  {
    year: '2025',
    items: [
      {
        title: 'Matcha Store',
        stack: ['TypeScript', 'Tailwind', 'Lovable AI'],
        github: 'https://github.com/KazutoNz/matcha-thai-order',
        demo: 'https://matcha-thai-order.lovable.app',
        video: null,
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'Hotel Booking System',
        stack: ['PHP', 'CSS', 'JS'],
        github: 'https://github.com/KazutoNz/Hotel-Booking-System-final-project-UN',
        demo: null,
        video: null,
      },
      {
        title: 'Car Booking System',
        stack: ['PHP', 'CSS', 'JS'],
        github: 'https://github.com/KazutoNz/Car-Booking-System-E-commerce',
        demo: null,
        video: null,
      },
    ],
  },
];

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.19-1.18 3.19-1.18.64 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectCard({ item, delay }) {
  return (
    <div
      className="group relative mb-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-4 opacity-0 transition-all duration-300 [animation-fill-mode:forwards] hover:-translate-y-0.5 hover:border-sky-700/60 hover:shadow-lg hover:shadow-sky-950/40 sm:p-5"
      style={{ animation: `fadeInUp 0.5s ease-out ${delay}ms forwards` }}
    >
      {/* subtle glow on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-500/0 blur-2xl transition-colors duration-500 group-hover:bg-sky-500/10" />

      <h3 className="text-xl font-semibold text-lime-300">{item.title}</h3>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {item.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-sky-600"
          onClick={() => window.open(item.github, '_blank')}
        >
          <IconGitHub /> GitHub
        </button>

        {item.demo ? (
          <button
            className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-sky-600"
            onClick={() => window.open(item.demo, '_blank')}
          >
            <IconExternal /> Demo
          </button>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md bg-zinc-800/60 px-4 py-2 text-sm font-medium text-zinc-500">
            <IconClock /> Demo coming soon
          </span>
        )}

        <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md bg-zinc-800/60 px-4 py-2 text-sm font-medium text-zinc-500">
          <IconClock /> Video coming soon
        </span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main className="mx-auto mt-6 w-full max-w-5xl px-4 pb-16 sm:px-6">
        <h1 className="mb-10 text-center text-3xl font-bold text-sky-400 sm:text-4xl">
          My Projects
        </h1>

        <div className="relative">
          {/* the connecting timeline line, spans the full stack of years */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/60 via-zinc-700 to-transparent sm:left-[11px]" />

          {projects.map((group, gi) => (
            <div key={group.year} className="relative mb-10 pl-6 sm:pl-10" data-year={group.year}>
              <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-zinc-950 bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.15)] sm:h-4 sm:w-4" />

              <h2 className="mb-4 text-2xl font-semibold tracking-wide text-zinc-300">
                {group.year} Projects
              </h2>

              {group.items.map((item, ii) => (
                <ProjectCard key={item.title} item={item} delay={(gi * 2 + ii) * 120} />
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}

export default Projects;