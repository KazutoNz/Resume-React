import Header from "../components/Header"
import Footer from "../components/Footer"
import { copyEmail } from '../js/copy.js'; // ✅ import ฟังก์ชัน copyEmail

import './SocialMedia.css'

function SocialMedia() {
  return (
    <div>
      <Header />
        <div name="content-social"> 
            <div className="facebook">
            <img src="./facebook.png" alt="Facebook" className="icon-facebook"/>
                <div className="contact-body">
                    <h1>Facebook</h1>
                    <p>Chadayu Koetsantas</p>
                </div>
                <div className="contact-actions">
                    <a href="https://www.facebook.com/keta.thaim?locale=th_TH" className="contact-link">เปิดโปรไฟล์</a>
                </div>
            </div>
            <div className="Github">
            <img src="./github-sign.png" alt="GitHub" className="icon-github"/>
                <div className="contact-body">
                    <h1>GitHub</h1>
                    <p>KazutoNz</p>
                </div>
                <div className="contact-actions">
                    <a className="contact-link" href="https://github.com/KazutoNz">เปิดโปรไฟล์</a>
                </div>
            </div>
            <div className="Email">
            <img src="./communication.png" alt="Email" className="icon-email"/>
                <div className="contact-body">
                    <h1>Email</h1>
                    <p>chadayu15@gmail.com</p>
                </div>
                <div className="contact-actions">
                    <input type="text" value="chadayu15@gmail.com" readOnly id="myInput" style={{ display: 'none' }} />
                    <button onClick={copyEmail}>คัดลอกอีเมล</button>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default SocialMedia
