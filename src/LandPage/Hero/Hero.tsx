import "./hero.css";
import ButtonCustom from "../Modules/Buttom";
import AnimationCursorBackground from "../Effects/AnimationCursorBackground";
import { LuMail, LuMessageCircle, LuPhone, LuUsers } from "react-icons/lu";
import SplitTextComponent from "../Effects/SplitText/SplitText";

export default function HeroSection() {
  return (<>

    <section
      id='home'
      className="hero-section"
    >
      <div className="animated-background">
        <AnimationCursorBackground />
      </div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">

            <div className="hero-text">
              <h1 className="hero-title" translate="no">
                <SplitTextComponent
                  text="JUNIPCA"
                  delay={60}
                  duration={1}
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="center"
                />
              </h1>
              <p className="hero-subtitle">
                Damos vida aos seus projetos
              </p>
            </div>

            <div className="hero-buttons">
              <ButtonCustom
                btnTitle="Contacto-nos"
                classBtn="free-test"
                iconBtn={<LuMail />}
                onClickBtn={() =>
                  window.location.href = "mailto:junipca@outlook.pt"
                }
              />

              <ButtonCustom
                btnTitle="WhatsApp"
                classBtn="see-demo"
                iconBtn={<LuMessageCircle size={18} />}
                onClickBtn={() =>
                  window.open("https://wa.me/351916812472?text=Olá!%20Quero%20mais%20informações%20sobre%20a%20JUNIPCA!.", "_blank")
                }
              />
            </div>

            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-dot green" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>);
};