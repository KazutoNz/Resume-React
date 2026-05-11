import Header from '../components/Header';
import Footer from '../components/Footer';

function Resume() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
       <Header />
      <main className="mx-auto mt-6 w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center shadow-lg shadow-black/40 sm:p-8" name="content-resume">
          <h1 className="mb-6 text-3xl font-bold text-sky-400 sm:text-4xl">My Resume</h1>
          <img
            src="./Chadayu Koetsantas_Resume.png"
            alt="Resume"
            className="mx-auto h-auto max-h-[60vh] w-full max-w-3xl rounded-lg border border-zinc-700 object-contain shadow-md shadow-black/50 transition hover:scale-[1.01] hover:shadow-sky-900/30 sm:max-h-[70vh]"
          />
        </div>
      </main>
        <Footer />
    </div>
  )
}

export default Resume
