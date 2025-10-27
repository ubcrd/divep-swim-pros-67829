import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Trophy, Heart, Users } from "lucide-react";

const Programs = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programas" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-secondary">Programas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos dos modalidades de entrenamiento adaptadas a tus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Recreational Swimming */}
          <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary/50 bg-card">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Natación Recreativa</h3>
              <p className="text-lg text-muted-foreground">
                Aprende a nadar de forma segura y divertida, mejorando tu técnica y confianza en el agua
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Clases interactivas y dinámicas para todas las edades</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Desarrollo de los cuatro estilos: crol, espalda, pecho y mariposa</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Mejora la circulación y estilo de vida saludable</p>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Ambiente seguro y profesional</p>
              </div>
            </div>

            <div className="bg-accent/50 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Ideal para:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">Niños</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">Adolescentes</span>
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">Adultos</span>
              </div>
            </div>

            <Button 
              variant="default" 
              size="lg" 
              className="w-full"
              onClick={scrollToContact}
            >
              Comenzar Ahora
            </Button>
          </Card>

          {/* Lifeguard Training */}
          <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-secondary bg-gradient-to-br from-card to-secondary/5">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">Entrenamiento de Salvavidas</h3>
              <p className="text-lg text-muted-foreground">
                Conviértete en salvavidas profesional certificado y salva vidas
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Certificación profesional reconocida internacionalmente</p>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Entrenamiento RCP y primeros auxilios</p>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Técnicas avanzadas de rescate acuático</p>
              </div>
              <div className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-foreground">Oportunidades laborales en hoteles, playas y piscinas</p>
              </div>
            </div>

            <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Programa Profesional
              </p>
              <p className="text-sm text-muted-foreground">
                Preparación completa para certificación oficial de salvavidas
              </p>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              className="w-full"
              onClick={scrollToContact}
            >
              Certificarme como Salvavidas
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;
