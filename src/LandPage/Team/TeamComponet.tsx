import { useEffect, useRef, useState } from "react";
import "./team.css";
import { LuUsers } from "react-icons/lu";

export default function Team() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const profileContent = [
    {
      imgProfile: "/profileImage.jpeg",
      name: "Miguel Ângelo",
      role: "CEO",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Luís Carvalho",
      role: "Vice-Presidente",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Vasco Loureiro",
      role: "CTO",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Gajo",
      role: "Markting",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Luís Carvalho",
      role: "Vice-Presidente",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Vasco Loureiro",
      role: "CTO",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Gajo",
      role: "Markting",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Gajo",
      role: "Markting",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Gajo",
      role: "Markting",
    },
    {
      imgProfile: "/profileImage.jpeg",
      name: "Gajo",
      role: "Markting",
    },
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // true se a section está visível
      },
      { threshold: 0.5 } // dispara quando 50% da section estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className={`team-section ${isVisible ? "active" : ""}`}
    >
      <div className="pricing-header">
        <h2 className="pricing-title">Conheça a nossa Equipa</h2>
        <p className="pricing-subtitle">
          Escolha o plano ideal para a sua empresa. Todos os planos incluem 14
          dias de teste grátis sem compromisso.
        </p>
      </div>
      <div className="wrapper-profile-cards">
        {profileContent.map((content, index) => (
          <div key={index} className="profile-cards">
            <div className="container-image">
              <img src={content.imgProfile} alt={content.name} />
            </div>
            <div className="container-content">
              <p>{content.name}</p>
              <p>{content.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="team-footer">
        <button>
          <p>Conheça toda a Equipa</p>
          <LuUsers size={22} />
        </button>
      </div>
    </section>
  );
}
