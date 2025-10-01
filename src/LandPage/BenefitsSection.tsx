import { CheckCircle, TrendingUp, Clock, Shield } from "lucide-react";
import dashboardImage from "@/assets/dashboard-preview.jpg";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumente as Vendas",
    description: "Mockups profissionais aumentam a taxa de conversão em até 40%"
  },
  {
    icon: Clock,
    title: "Poupe Tempo",
    description: "Automatize processos e reduza o tempo de criação em 70%"
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Encriptação de ponta a ponta e backup automático na cloud"
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={dashboardImage}
                alt="Dashboard de gestão"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
            {/* Stats overlay */}
            <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">+150%</div>
              <div className="text-sm text-muted-foreground">Produtividade</div>
            </div>
            <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Transforme o seu{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  negócio de merchandising
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Com o Mockup3D, empresas de merchandising aumentam a eficiência 
                e impressionam clientes com apresentações profissionais.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Empresas Confiam</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">98%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;