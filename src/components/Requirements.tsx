import { Card } from "@/components/ui/card";
import { CheckCircle2, AlertCircle } from "lucide-react";
import lifeguardImage from "@/assets/lifeguard-training.jpg";

const Requirements = () => {
  return (
    <section id="requisitos" className="py-20 bg-gradient-to-b from-accent to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Requisitos para <span className="text-secondary">Salvavidas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Para obtener la certificación de salvavidas, debes cumplir con estos requisitos físicos esenciales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Requirements List */}
          <div>
            <Card className="p-8 bg-card shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <AlertCircle className="w-8 h-8 text-secondary" />
                <h3 className="text-3xl font-bold text-foreground">Evaluación Física</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 p-5 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Nadar 150 Yardas</h4>
                    <p className="text-muted-foreground">
                      Completar 150 yardas continuas utilizando los estilos crol (freestyle) y pecho (breaststroke). 
                      Demuestra resistencia y técnica nadando de forma continua sin detenerse.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Flotar 2 Minutos</h4>
                    <p className="text-muted-foreground">
                      Mantener flotación durante 2 minutos sin usar las manos, solo moviendo las piernas. 
                      Esta prueba evalúa tu control corporal y capacidad de conservar energía en el agua.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Recuperar Ladrillo (10 pies)</h4>
                    <p className="text-muted-foreground">
                      Sumergirte hasta el fondo de la piscina (10 pies de profundidad) y recuperar un ladrillo de 10 libras. 
                      Demuestra tu capacidad de realizar rescates en aguas profundas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 border-l-4 border-secondary rounded-lg">
                <p className="text-sm font-semibold text-foreground mb-2">💪 Preparación Importante</p>
                <p className="text-muted-foreground">
                  Nuestros instructores te prepararán completamente para superar cada una de estas pruebas 
                  con confianza y técnica profesional.
                </p>
              </div>
            </Card>
          </div>

          {/* Image */}
          <div className="lg:order-first">
            <div className="relative">
              <img 
                src={lifeguardImage} 
                alt="Entrenamiento de salvavidas profesional" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl flex items-end">
                <div className="p-8 text-primary-foreground">
                  <h4 className="text-2xl font-bold mb-2">Conviértete en Salvavidas</h4>
                  <p className="text-lg">Entrenamiento profesional certificado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
