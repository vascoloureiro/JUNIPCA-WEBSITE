import ButtonCustom from "../Modules/Buttom";

import { FiArrowRight, FiPlay, FiCheck } from "react-icons/fi";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para transformar o seu{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              negócio?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 500 empresas que já usam o Mockup3D para
            criar mockups impressionantes e gerir encomendas de forma eficiente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <ButtonCustom
              btnTitle="  Começar Teste Grátis de 14 Dias"
              classBtn="free-test"
              iconBtn={<FiArrowRight size={16} />}
            />

            <ButtonCustom
              btnTitle="Agendar Demonsstração"
              classBtn="see-demo"
              iconBtn={<FiPlay size={18} />}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <FiCheck className="h-5 w-5 text-primary" />
              <span>14 dias grátis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <FiCheck className="h-5 w-5 text-primary" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <FiCheck className="h-5 w-5 text-primary" />
              <span>Suporte incluído</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;