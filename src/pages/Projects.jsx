import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
        <Header />
        <main className="mx-auto mt-6 w-full max-w-5xl px-4 sm:px-6">
            <h1 className="mb-6 text-center text-3xl font-bold text-sky-400 sm:text-4xl">My Projects</h1>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/40 sm:p-8" name="content-projects">
                <div className="relative pl-6 sm:pl-10" data-year="2024">
                <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-zinc-300"></div>
                  <h2 className="mb-4 text-2xl font-semibold tracking-wide text-zinc-300">2025 Projects</h2>
                    <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-colors hover:bg-zinc-900 sm:p-5">
                        <h3 className="text-xl font-semibold text-lime-300">Matcha Store</h3>
                        <p className="mt-2 text-zinc-300">TypeScript, Tailwind, Lovable Ai</p>
                        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                          <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-sky-600" onClick={() => window.open('https://github.com/KazutoNz/matcha-thai-order')}>GitHub</button>
                          <button className="cursor-not-allowed rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300">Video coming soon</button>
                          <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-sky-600" onClick={() => window.open('https://matcha-thai-order.lovable.app')}>Demo</button>
                        </div>
                    </div>
                  </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg shadow-black/40 sm:p-8" name="content-projects">
                <div className="relative pl-6 sm:pl-10" data-year="2024">
                <div className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-zinc-300"></div>
                <h2 className="mb-4 text-2xl font-semibold tracking-wide text-zinc-300">2024 Projects</h2>
                <div className="mb-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-colors hover:bg-zinc-900 sm:p-5">
                    <h3 className="text-xl font-semibold text-lime-300">Hotel Booking System</h3>
                    <p className="mt-2 text-zinc-300">PHP, CSS, JS</p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-sky-600" onClick={() => window.open('https://github.com/KazutoNz/Hotel-Booking-System-final-project-UN')}>GitHub</button>
                      <button className="cursor-not-allowed rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300">Video coming soon</button>
                      <button className="cursor-not-allowed rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300">Demo coming soon</button>
                    </div>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-colors hover:bg-zinc-900 sm:p-5">
                    <h3 className="text-xl font-semibold text-lime-300">Car Booking System</h3>
                    <p className="mt-2 text-zinc-300">PHP, CSS, JS</p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <button className="rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-sky-600" onClick={() => window.open('https://github.com/KazutoNz/Car-Booking-System-E-commerce')}>GitHub</button>
                      <button className="cursor-not-allowed rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300">Video coming soon</button>
                      <button className="cursor-not-allowed rounded-md bg-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300">Demo coming soon</button>
                    </div>
                </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Projects
