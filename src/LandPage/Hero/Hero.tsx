import "./hero.css";
import ButtonCustom from "../Modules/Buttom";
import AnimationCursorBackground from "../Effects/AnimationCursorBackground";
import { LuPhone, LuUsers } from "react-icons/lu";
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
              <h1>
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
                Fazemos os seus projetos Acontecer
              </p>
            </div>

            <div className="hero-buttons">
              <ButtonCustom
                btnTitle="Contacto-nos"
                classBtn="free-test"
                iconBtn={<LuPhone />}
              />

              <ButtonCustom
                btnTitle="A Equipa"
                classBtn="see-demo"
                iconBtn={<LuUsers size={18} />}
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