import Header from '../components/Header';
import Footer from '../components/Footer';
import Fade from '../js/Fade.jsx'; // ✅ เพิ่มบรรทัดนี้
import { useEffect, useState } from 'react';
import { SkeletonBlock } from '../components/Skeleton';

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
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/40 sm:p-8">
            {loading ? (
              <div className="space-y-6">
                <SkeletonBlock className="mx-auto h-10 w-56" />
                <SkeletonBlock className="mx-auto h-24 w-full max-w-lg" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <SkeletonBlock className="h-36 w-full" />
                  <SkeletonBlock className="h-36 w-full" />
                </div>
              </div>
            ) : (
              <>
                <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                  About Me
                </p>
                <h1 className="mt-2 text-center text-3xl font-extrabold text-zinc-100 sm:text-4xl">
                  Building clean interfaces and practical full-stack solutions
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-zinc-300 sm:text-lg">
                  I&apos;m <span className="font-semibold text-sky-300">Chadayu Koetsantas</span>, a Computer Science student passionate about turning ideas into reliable products.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-[180px_1fr]">
                  <div
                    data-interactive="true"
                    className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"
                  >
                    <img
                      src="../me.jpg"
                      alt="Profile"
                      className="mx-auto h-36 w-36 rounded-full border border-zinc-700 object-cover sm:h-40 sm:w-40"
                    />
                    <p className="mt-3 text-center text-sm text-zinc-400">Phetchaburi, Thailand</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <article
                      data-interactive="true"
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"
                    >
                      <p className="text-sm uppercase tracking-wider text-sky-300">Focus</p>
                      <p className="mt-2 text-zinc-200">
                        Frontend and Backend development with React, PHP, and more modern web tooling.
                      </p>
                    </article>
                    <article
                      data-interactive="true"
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"
                    >
                      <p className="text-sm uppercase tracking-wider text-sky-300">Growth</p>
                      <p className="mt-2 text-zinc-200">
                        Currently deepening TypeScript and architecture skills for production-ready apps.
                      </p>
                    </article>
                  </div>
                </div>
              </>
            )}
          </section>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Home;
