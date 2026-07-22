import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { SkeletonBlock, SkeletonText } from '../components/Skeleton';

const RESUME_IMAGE = './Chadayu Koetsantas_Resume.png';

function IconZoom() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Resume() {
  const [loading, setLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 750);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape + lock background scroll while lightbox is open.
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main className="mx-auto mt-6 w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div
          className="animate-[fadeInUp_0.5s_ease-out_forwards] rounded-2xl border border-zinc-800 bg-zinc-900 p-5 opacity-0 shadow-lg shadow-black/40 sm:p-8"
          name="content-resume"
        >
          <h1 className="mb-6 text-center text-3xl font-bold text-sky-400 sm:text-4xl">My Resume</h1>

          {loading ? (
            <div className="mb-6 grid gap-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 sm:grid-cols-[120px_1fr] sm:items-center">
              <SkeletonBlock className="mx-auto h-24 w-24 rounded-full" />
              <SkeletonText lines={3} />
            </div>
          ) : (
            <div className="mb-6 grid animate-[fadeInUp_0.4s_ease-out_forwards] gap-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 opacity-0 sm:grid-cols-[120px_1fr] sm:items-center">
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
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                    <IconZoom className="h-3.5 w-3.5" /> Click resume image to view full size
                  </span>
                  <a
                    href={RESUME_IMAGE}
                    download
                    className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-100 transition hover:bg-sky-600"
                  >
                    <IconDownload />
                    Download
                  </a>
                </div>
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
                className="group relative w-full animate-[fadeInUp_0.4s_ease-out_0.1s_forwards] rounded-md opacity-0"
              >
                <img
                  src={RESUME_IMAGE}
                  alt="Resume"
                  data-interactive="true"
                  className="mx-auto h-auto max-h-[68vh] w-full rounded-md object-contain shadow-md shadow-black/50 transition group-hover:brightness-90 sm:max-h-[78vh]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-zinc-100 backdrop-blur-sm">
                    <IconZoom />
                    View full size
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </main>
      <Footer />

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex animate-[fadeIn_0.2s_ease-out_forwards] items-center justify-center bg-black/70 p-4 opacity-0 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 transition hover:bg-zinc-800"
            onClick={() => setIsLightboxOpen(false)}
          >
            ✕
          </button>
          {/* Show the same resume asset in full size. */}
          <img
            src={RESUME_IMAGE}
            alt="Full resume"
            className="max-h-[90vh] w-auto max-w-[95vw] animate-[scaleIn_0.25s_ease-out_forwards] rounded-2xl border border-zinc-700 opacity-0 shadow-2xl shadow-black/70"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          *[class*="animate-"] { animation: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}

export default Resume;