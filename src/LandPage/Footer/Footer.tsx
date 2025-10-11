
// Style
import "./footer.css";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { PiMapPinLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer id="contact" className="footer">
      <div className="footer__container">
        <div className="footer__grid">

          <div className="footer__company">
            <div className="footer__logo">
              <img
                src="./JUNIPCA_logo.png"
              />
            </div>

            <p className="footer__muted">
              Juníor Empresa do IPCA
            </p>

            <div className="footer__social">
              <button
                onClick={() => window.open("https://www.linkedin.com/in/junipca-j%C3%BAnior-iniciativa-ipca-7b6006387/", "_blank")}
              >
                <FaLinkedinIn size={22} className="footer__icon" />
              </button>

              <button
                onClick={() => window.open("https://www.instagram.com/junipca.je/", "_blank")}
              >
                <FaInstagram size={22} className="footer__icon" />
              </button>

            </div>
          </div>

          {/* PRODUTO */}
          <div className="footer__list">
            <h3 className="footer__title">A JUNIPCA</h3>
            <ul>
              <li><a onClick={() => navigate('/mission')}>Missão</a></li>
              <li><a onClick={() => navigate('/vision/values')}>Visão e Valores</a></li>
              <li><a onClick={() => navigate('/ipca')}>A Instituição</a></li>
            </ul>
          </div>

          {/* SUPORTE */}
          <div className="footer__list">
            <h3 className="footer__title">Suporte</h3>
            <ul>
              <li><a onClick={() => {navigate('/policys')}}>Politicas</a></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="footer__contact">
            <h3 className="footer__title">Contacto</h3>

            <div className="footer__contact-item">
              <GoMail size={22} className="footer__icon" />
              <span>junipca@outlook.pt</span>
            </div>

            <div className="footer__contact-item">
              <LuPhone className="footer__icon-small" />
              <span>+351 916 812 472</span>
            </div>

            <div className="footer__contact-item">
              <PiMapPinLight className="footer__icon-small" />
              <span>Barcelos, Portugal</span>
            </div>
          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div className="footer__bottom">
          <p className="footer__muted">© 2025 JUNIPCA. Todos os direitos reservados.</p>

          {/* <div className="footer__bottom-links">
           {/*  <a href="/aboutus">Sobre Nós</a>
            <a href="/privacy">Privacidade</a>
            <a href="/terms">Termos</a>
            <a href="/coockies">Cookies</a> 
          </div> */}
        </div>
      </div>
    </footer>
  );
}
