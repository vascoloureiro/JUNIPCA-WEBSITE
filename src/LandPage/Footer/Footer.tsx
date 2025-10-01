
// Style
import "./footer.css";
import { FaInstagram, FaTwitter  } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { PiMapPinLight } from "react-icons/pi";


export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__container">
        <div className="footer__grid">
         
          <div className="footer__company">
            <div className="footer__logo">
              <img 
                src="./JUNIPCA_logo.png"
                className="footer-logo-image"
              />
            </div>

            <p className="footer__muted">
                Juníor Empresa do IPCA
            </p>

            <div className="footer__social">
              <FaTwitter size={22} className="footer__icon" />
              <FaLinkedinIn size={22} className="footer__icon" />
              <FaInstagram size={22} className="footer__icon" />
            </div>
          </div>

          {/* PRODUTO */}
          <div className="footer__list">
            <h3 className="footer__title">Produto</h3>
            <ul>
              <li><a href="#">Funcionalidades</a></li>
              <li><a href="#">Preços</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Integrações</a></li>
            </ul>
          </div>

          {/* SUPORTE */}
           <div className="footer__list">
            <h3 className="footer__title">Suporte</h3>
            <ul>
              <li><a href="#">Centro de Ajuda</a></li>
              <li><a href="#">Documentação</a></li>
              <li><a href="#">Tutoriais</a></li>
              <li><a href="#">Contacto</a></li>
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
              <span>+351 123 456 789</span>
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

          <div className="footer__bottom-links">
            <a href="/aboutus">Sobre Nós</a>
            <a href="/privacy">Privacidade</a>
            <a href="/terms">Termos</a>
            <a href="/coockies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
