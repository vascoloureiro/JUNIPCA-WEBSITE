
// Style
import CardContent from "../Modules/CardContent";
import "./features.css";
import {
  LuSmartphone,
  LuDatabase,
  LuHeadphones,
  LuSettings2,
  LuCode,
  LuChartArea
} from "react-icons/lu";

export default function Features() {

  const features = [
    {
      icon: LuCode,
      title: "Desenvolvimento Web",
      description:
        "Criamos websites e aplicações web modernas, responsivas e otimizadas, garantindo uma experiência de utilizador fluida e adaptada às necessidades da sua empresa.",
      highlight: "Soluções web personalizadas"
    },
    {
      icon: LuSmartphone,
      title: "Aplicações Mobile",
      description:
        "Desenvolvemos aplicações móveis intuitivas e eficientes para Android e iOS, focadas em desempenho, design e integração perfeita com os seus serviços.",
      highlight: "Apps nativas e híbridas"
    },
    {
      icon: LuDatabase,
      title: "Base de Dados",
      description:
        "Projetamos, otimizamos e gerimos bases de dados seguras e escaláveis, assegurando desempenho, integridade e disponibilidade das informações da sua empresa.",
      highlight: "Gestão eficiente de dados"
    },
    {
      icon: LuChartArea,
      title: "Gestão de Dados",
      description:
        "Implementamos sistemas para recolha, tratamento e análise de dados, permitindo à sua empresa tomar decisões estratégicas baseadas em informação real.",
      highlight: "Decisões orientadas por dados"
    },
    {
      icon: LuHeadphones,
      title: "Suporte e Acompanhamento",
      description:
        "Garantimos acompanhamento técnico contínuo e manutenção preventiva para assegurar o funcionamento estável e seguro das suas soluções digitais.",
      highlight: "Assistência técnica contínua"
    },
    {
      icon: LuSettings2,
      title: "Serviços Personalizados",
      description:
        "Adaptamos os nossos serviços às necessidades específicas da sua empresa, incluindo consultoria, formação técnica e desenvolvimento sob medida.",
      highlight: "Soluções sob medida"
    }
  ];


  return (
    <section
      id="services"
      className="section-features">
      <div className="container-features">
        <div className="features-header">
          <h2 className="features-header-title">
            Nossos Serviços
          </h2>
          <p className="features-header-subtitle">
            Soluções de consultoria para a sua empresa
          </p>
        </div>

        <div className="features-container-cards">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <CardContent
                Icon={feature.icon}
                highlight={feature.highlight}
                title={feature.title}
                description={feature.description}
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};


