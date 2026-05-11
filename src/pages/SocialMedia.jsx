import Header from "../components/Header"
import Footer from "../components/Footer"
import { copyEmail } from '../js/copy.js'; // ✅ import ฟังก์ชัน copyEmail

function SocialMedia() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
        <main className="mx-auto mt-6 w-full max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2" name="content-social">
            <div className="grid w-full grid-cols-[40px_1fr] items-center gap-3 rounded-xl border-l-4 border-blue-400 bg-zinc-900 p-4 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-black/50 sm:grid-cols-[48px_1fr]">
            <img src="./facebook.png" alt="Facebook" className="w-10 sm:w-12"/>
                <div>
                    <h1 className="text-lg font-semibold text-zinc-100">Facebook</h1>
                    <p className="text-zinc-300">Chadayu Koetsantas</p>
                </div>
                <div className="col-span-2 flex flex-col gap-2 sm:flex-row">
                    <a href="https://www.facebook.com/keta.thaim?locale=th_TH" className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-center text-sm text-zinc-100 transition hover:bg-sky-700">เปิดโปรไฟล์</a>
                </div>
            </div>
            <div className="grid w-full grid-cols-[40px_1fr] items-center gap-3 rounded-xl border-l-4 border-zinc-500 bg-zinc-900 p-4 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-black/50 sm:grid-cols-[48px_1fr]">
            <img src="./github-sign.png" alt="GitHub" className="w-10 sm:w-12"/>
                <div>
                    <h1 className="text-lg font-semibold text-zinc-100">GitHub</h1>
                    <p className="text-zinc-300">KazutoNz</p>
                </div>
                <div className="col-span-2 flex flex-col gap-2 sm:flex-row">
                    <a className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-center text-sm text-zinc-100 transition hover:bg-sky-700" href="https://github.com/KazutoNz">เปิดโปรไฟล์</a>
                </div>
            </div>
            <div className="grid w-full grid-cols-[40px_1fr] items-center gap-3 rounded-xl border-l-4 border-rose-400 bg-zinc-900 p-4 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-black/50 sm:grid-cols-[48px_1fr] md:col-span-2">
            <img src="./communication.png" alt="Email" className="w-10 sm:w-12"/>
                <div>
                    <h1 className="text-lg font-semibold text-zinc-100">Email</h1>
                    <p className="text-zinc-300">chadayu15@gmail.com</p>
                </div>
                <div className="col-span-2 flex flex-col gap-2 sm:flex-row">
                    <input type="text" value="chadayu15@gmail.com" readOnly id="myInput" style={{ display: 'none' }} />
                    <button className="w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-100 transition hover:bg-sky-700 sm:w-auto" onClick={copyEmail}>คัดลอกอีเมล</button>
                </div>
            </div>
          </div>
        </main>

        <Footer />
    </div>
  )
}

export default SocialMedia
