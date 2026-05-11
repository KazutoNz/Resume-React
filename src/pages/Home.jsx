import Header from '../components/Header';
import Footer from '../components/Footer';
import Fade from '../js/Fade.jsx'; // ✅ เพิ่มบรรทัดนี้

function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />

      {/* ✅ ครอบส่วนนี้ด้วย <Fade> */}
      <Fade>
        <div className="mx-auto mt-6 w-full max-w-4xl px-4 sm:px-6" name="content-aboutme">
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-center shadow-lg shadow-black/40 sm:p-8">
          <h1 className="mb-6 text-3xl font-bold text-sky-400 sm:text-4xl">Chadayu Koetsantas</h1>
          <img
            src="../me.jpg"
            alt="Resume"
            className="mx-auto mb-6 h-auto w-44 rounded-full border border-zinc-700 object-cover shadow-lg shadow-black/50 sm:w-56"
          />
          <p className="text-base leading-relaxed text-zinc-200 sm:text-lg">
            I&apos;m a <mark className="rounded-md border border-sky-500/30 bg-zinc-800 px-2 py-0.5 text-sky-300">Computer Science student</mark> at <mark className="rounded-md border border-sky-500/30 bg-zinc-800 px-2 py-0.5 text-sky-300">Phetchaburi Rajabhat University</mark>, 22 years old.
            I am interested in coding for both <mark className="rounded-md border border-sky-500/30 bg-zinc-800 px-2 py-0.5 text-sky-300">Frontend and Backend.</mark> Currently, I use PHP, CSS, and JS at a basic level, and I am studying React in preparation for future development.
          </p>
          </section>
        </div>
      </Fade>

      <Footer />
    </div>
  );
}

export default Home;
