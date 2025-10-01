import { Check, Star } from "lucide-react";
import PricingCard from "./Modules/PricingCard";
import './pricing.css'
const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfeito para pequenas empresas",
    features: [
      "Editor 3D básico",
      "5 projetos por mês",
      "Biblioteca básica de materiais",
      "Exportação em HD",
      "Suporte por email"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "79",
    description: "Para equipas em crescimento",
    features: [
      "Editor 3D avançado",
      "Projetos ilimitados",
      "Biblioteca completa de materiais",
      "Gestão de encomendas",
      "Colaboração em equipa",
      "Relatórios detalhados",
      "Suporte prioritário"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contactar",
    description: "Soluções personalizadas",
    features: [
      "Todas as funcionalidades Pro",
      "API personalizada",
      "Integração com sistemas existentes",
      "Suporte dedicado",
      "Formação personalizada",
      "SLA garantido"
    ],
    popular: false
  }
];

export default function PricingSection () {
 return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">
            Planos que <span className="highlighted-text">se adaptam ao seu negócio</span>
          </h2>
          <p className="pricing-subtitle">
            Escolha o plano ideal para a sua empresa. Todos os planos incluem 14 dias de teste grátis sem compromisso.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p className="pricing-footer-note">Todas as subscrições incluem 14 dias de teste grátis</p>
          <div className="pricing-footer-benefits">
            <div className="benefit-item">
              <Check className="benefit-icon" />
              <span>Sem permanência</span>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="benefit-item">
              <Check className="benefit-icon" />
              <span>Suporte incluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};