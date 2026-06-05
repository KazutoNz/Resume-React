import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { SkeletonBlock, SkeletonText } from '../components/Skeleton';

function Resume() {
  const [loading, setLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main className="mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6">
        <div
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/40 sm:p-8"
          name="content-resume"
        >
          <h1 className="mb-6 text-center text-3xl font-bold text-sky-400 sm:text-4xl">My Resume</h1>
          {loading ? (
            <div className="mb-6 grid gap-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 sm:grid-cols-[120px_1fr] sm:items-center">
              <SkeletonBlock className="mx-auto h-24 w-24 rounded-full" />
              <SkeletonText lines={3} />
            </div>
          ) : (
            <div className="mb-6 grid gap-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 sm:grid-cols-[120px_1fr] sm:items-center">
              <div className="mx-auto w-fit rounded-full">
                <img
                  src="../me.jpg"
                  alt="Profile"
                  className="h-24 w-24 rounded-full border-2 border-sky-500/40 object-cover shadow-lg shadow-black/50 sm:h-28 sm:w-28"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-zinc-100">Chadayu Koetsantas</p>
                <p className="text-sm text-zinc-300 sm:text-base">
                  Computer Science Student | Frontend & Backend Developer
                </p>
                <p className="text-sm text-zinc-400">Click resume image to view full size</p>
              </div>
            </div>
          )}

          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/70 p-2 sm:p-3">
            {loading ? (
              <SkeletonBlock className="h-[55vh] w-full rounded-md sm:h-[68vh]" />
            ) : (
              // Open lightbox from resume preview image.
              <button
                type="button"
                aria-label="Open full-size resume image"
                onClick={() => setIsLightboxOpen(true)}
                className="w-full rounded-md"
              >
                <img
                  src="./Chadayu Koetsantas_Resume-1.png"
                  alt="Resume"
                  data-interactive="true"
                  className="mx-auto h-auto max-h-[68vh] w-full rounded-md object-contain shadow-md shadow-black/50 sm:max-h-[78vh]"
                />
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 hover:bg-zinc-800"
            onClick={() => setIsLightboxOpen(false)}
          >
            ✕
          </button>
          {/* Show the same resume asset in full size. */}
          <img
            src="./Chadayu Koetsantas_Resume-1.png"
            alt="Full resume"
            className="max-h-[90vh] w-auto max-w-[95vw] rounded-2xl border border-zinc-700 shadow-2xl shadow-black/70"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default Resume
