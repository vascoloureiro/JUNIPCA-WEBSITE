import React from "react";
import { Check, Star } from "lucide-react";
// import { ButtonCustom } from "@/components/ui/button"; // Se quiser botão custom

import "./pricingCards.css";
import ButtonCustom from "../../Modules/Buttom";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  popular,
}) => {
  return (
    <>
      {popular && (
        <div className="pricing-badge">
          <div className="badge-content">
            <Star className="badge-icon" />
            <span>Mais Popular</span>
          </div>
        </div>
      )}

      <div className="pricing-card-header">
        <div className="pricing-card-title">{name}</div>
        <div className="pricing-price-wrapper">
          <div className="pricing-price">
            {price !== "Contactar" && "€"}
            {price}
            {price !== "Contactar" && (
              <span className="pricing-per-month">/mês</span>
            )}
          </div>
          <p className="pricing-description">{description}</p>
        </div>
      </div>

      <div>
        <div className="pricing-features">
          {features.map((feature, featureIndex) => (
            <div key={featureIndex} className="pricing-feature-item">
              <Check className="pricing-feature-icon" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="pricing-button">
          <ButtonCustom
            classBtn={popular ? "hero" : "outline"}
            btnTitle={price === "Contactar" ? "Contactar Vendas" : "Começar Teste"}
          />
        </div>
      </div>
    </>
  );
};

export default PricingCard;
