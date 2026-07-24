import Header from '../components/Header';
import Footer from '../components/Footer';
import Fade from '../js/Fade.jsx'; // ✅ เพิ่มบรรทัดนี้
import { useEffect, useState } from 'react';
import { SkeletonBlock } from '../components/Skeleton';

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 8-8M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const stack = ['React', 'PHP', 'TypeScript', 'Tailwind', 'Node.js'];

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      {/* ✅ ครอบส่วนนี้ด้วย <Fade> */}
      <Fade>
        <div className="mx-auto mt-6 w-full max-w-4xl px-4 sm:px-6" name="content-aboutme">
          <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/40 sm:p-8">
            {/* ambient accent glow, purely decorative */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-lime-500/5 blur-3xl" />

            {loading ? (
              <div className="relative space-y-6">
                <SkeletonBlock className="mx-auto h-10 w-56" />
                <SkeletonBlock className="mx-auto h-24 w-full max-w-lg" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SkeletonBlock className="h-36 w-full" />
                  <SkeletonBlock className="h-36 w-full" />
                </div>
              </div>
            ) : (
              <div className="relative">
                {/* terminal-style status line — signature element */}
                <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3.5 py-1.5 font-mono text-xs text-zinc-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
                  </span>
                  ~/chadayu <span className="text-sky-400">$</span> status --open-to-work
                </div>

                <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                  About Me
                </p>
                <h1 className="mt-2 text-center text-3xl font-extrabold tracking-tight text-zinc-100 sm:text-4xl">
                  Building{' '}
                  <span className="bg-gradient-to-r from-sky-400 to-lime-300 bg-clip-text text-transparent">
                    clean interfaces
                  </span>{' '}
                  and practical full-stack solutions
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
                  I&apos;m <span className="font-semibold text-sky-300">Chadayu Koetsantas</span>, a Computer Science student passionate about turning ideas into reliable products.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-[180px_1fr]">
                  <div
                    data-interactive="true"
                    className="group rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 transition hover:-translate-y-0.5 hover:border-sky-700/60"
                  >
                    <img
                      src="../me.jpg"
                      alt="Profile"
                      className="mx-auto h-36 w-36 rounded-full border border-zinc-700 object-cover transition group-hover:border-sky-500/50 sm:h-40 sm:w-40"
                    />
                    <p className="mt-3 flex items-center justify-center gap-1 text-center text-sm text-zinc-400">
                      <IconPin /> Bangkok, Thailand
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <article
                      data-interactive="true"
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 transition hover:-translate-y-0.5 hover:border-sky-700/60 hover:shadow-lg hover:shadow-sky-950/30"
                    >
                      <p className="flex items-center gap-1.5 text-sm uppercase tracking-wider text-sky-300">
                        <IconCode /> Focus
                      </p>
                      <p className="mt-2 text-zinc-200">
                        Frontend and Backend development with React, PHP, and more modern web tooling.
                      </p>
                    </article>
                    <article
                      data-interactive="true"
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 transition hover:-translate-y-0.5 hover:border-sky-700/60 hover:shadow-lg hover:shadow-sky-950/30"
                    >
                      <p className="flex items-center gap-1.5 text-sm uppercase tracking-wider text-sky-300">
                        <IconTrendUp /> Growth
                      </p>
                      <p className="mt-2 text-zinc-200">
                        Currently deepening TypeScript and architecture skills for production-ready apps.
                      </p>
                    </article>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-1.5">
                  {stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Home;