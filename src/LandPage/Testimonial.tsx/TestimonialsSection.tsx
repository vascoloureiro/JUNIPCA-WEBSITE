// components/TestimonialsSection.tsx

import TestimonialCard from "../Modules/TestimonalCards";
import "./testimonial.css"; // Estilos do section

const testimonials = [
  {
    name: "Ana Silva",
    role: "Diretora de Marketing",
    company: "PrintPro",
    content: "O Mockup3D revolucionou a nossa forma de apresentar produtos aos clientes. As vendas aumentaram 35% desde que começámos a usar.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "CEO",
    company: "MerchandisingPlus",
    content: "Finalmente uma ferramenta que combina criação e gestão numa só plataforma. A nossa equipa economiza horas todos os dias.",
    rating: 5,
  },
  {
    name: "Maria Costa",
    role: "Designer",
    company: "Creative Brands",
    content: "A qualidade dos renderizações é impressionante. Os clientes ficam sempre admirados com a apresentação profissional.",
    rating: 5,
  }
];

export default function TestimonialsSection () {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="title">
            O que dizem os nossos <span className="gradient">clientes</span>
          </h2>
          <p className="subtitle">
            Mais de 500 empresas confiam no Mockup3D para transformar 
            o seu negócio de merchandising.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

