import { Card } from "@/components/ui/card";
import { Award, Heart, Shield, BookOpen } from "lucide-react";
import cprImage from "@/assets/cpr-certification.jpg";

const Certifications = () => {
  const certifications = [
    {
      icon: Heart,
      title: "Certificación RCP",
      description: "Aprende Reanimación Cardiopulmonar (RCP) para adultos, niños e infantes. Técnicas que salvan vidas en emergencias cardíacas.",
      color: "text-red-500"
    },
    {
      icon: Shield,
      title: "Primeros Auxilios",
      description: "Domina el manejo de emergencias médicas básicas, heridas, fracturas y situaciones críticas en entornos acuáticos.",
      color: "text-blue-500"
    },
    {
      icon: Award,
      title: "Certificación de Salvavidas",
      description: "Certificación oficial reconocida internacionalmente que te habilita para trabajar como salvavidas profesional.",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Prevención de Emergencias",
      description: "Aprende a identificar y prevenir situaciones de riesgo antes de que se conviertan en emergencias reales.",
      color: "text-primary"
    }
  ];

  return (
    <section id="certificaciones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificaciones <span className="text-secondary">Profesionales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtén certificaciones reconocidas que te abrirán puertas en el ámbito profesional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center mb-16">
          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card"
              >
                <cert.icon className={`w-12 h-12 ${cert.color} mb-4`} />
                <h3 className="text-xl font-bold text-foreground mb-3">{cert.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div>
            <img 
              src={cprImage} 
              alt="Entrenamiento de certificación RCP" 
              className="w-full rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(0,58,93,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Beneficios de Ser Salvavidas Certificado
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">💼</div>
                <h4 className="text-xl font-bold mb-2">Oportunidades Laborales</h4>
                <p className="text-primary-foreground/90">
                  Trabaja en hoteles, resorts, playas, piscinas públicas y centros deportivos
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold mb-2">Ingresos Competitivos</h4>
                <p className="text-primary-foreground/90">
                  Los salvavidas certificados tienen salarios atractivos y beneficios adicionales
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-bold mb-2">Desarrollo Personal</h4>
                <p className="text-primary-foreground/90">
                  Desarrolla liderazgo, responsabilidad y la satisfacción de salvar vidas
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
