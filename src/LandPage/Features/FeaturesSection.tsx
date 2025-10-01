
// Style
import CardContent from "../Modules/CardContent";
import "./features.css";
import { LuFileText, LuDatabase, LuPalette, LuUsers, LuClock, LuBookOpen } from "react-icons/lu";

export default function Features() {
  const features = [
    {
      icon: LuUsers,
      title: "Consultoria Tecnológica",
      description: "Analisamos e implementamos soluções tecnológicas adaptadas às necessidades da sua empresa, incluindo sistemas, software e infraestrutura.",
      highlight: "Soluções personalizadas"
    },
    {
      icon: LuPalette,
      title: "Marketing Digital",
      description: "Desenvolvemos estratégias de marketing digital para aumentar a visibilidade, presença online e interação com o público-alvo.",
      highlight: "Estratégias eficazes"
    },
    {
      icon: LuDatabase,
      title: "Gestão de Dados",
      description: "Oferecemos serviços de análise de dados, gestão de bases de dados e relatórios para decisões mais informadas.",
      highlight: "Insights precisos"
    },
    {
      icon: LuFileText,
      title: "Criação de Conteúdos",
      description: "Produzimos conteúdos de qualidade, incluindo artigos, posts, newsletters e materiais multimédia para comunicação da sua marca.",
      highlight: "Conteúdo envolvente"
    },
    {
      icon: LuClock,
      title: "Suporte e Acompanhamento",
      description: "Monitorizamos projetos e fornecemos suporte contínuo para garantir que todas as soluções implementadas funcionem eficientemente.",
      highlight: "Acompanhamento contínuo"
    },
    {
      icon: LuBookOpen,
      title: "Formação e Capacitação",
      description: "Oferecemos workshops, treinamentos e capacitação para equipas, potenciando habilidades técnicas e digitais.",
      highlight: "Aprendizado prático"
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


