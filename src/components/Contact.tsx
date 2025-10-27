import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/18299935726', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:swimmingfish030818@gmail.com';
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¡Comienza <span className="text-secondary">Hoy!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para inscribirte o solicitar más información sobre nuestros programas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Ubicación</h3>
              <p className="text-muted-foreground">
                Av. Abraham Lincoln No. 152 esq. Independencia
              </p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Teléfono</h3>
              <p className="text-muted-foreground mb-2">
                Tel / WhatsApp
              </p>
              <a href="tel:8299935726" className="text-primary hover:text-primary/80 font-semibold">
                829-993-5726
              </a>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-accent/50 flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <a 
                href="mailto:swimmingfish030818@gmail.com" 
                className="text-primary hover:text-primary/80 break-all"
              >
                swimmingfish030818@gmail.com
              </a>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary to-primary-light text-primary-foreground text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para sumergirte?
            </h3>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Contáctanos ahora y comienza tu viaje hacia el dominio del agua
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleWhatsApp}
                className="group"
              >
                <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={handleEmail}
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
              >
                <Mail className="mr-2" />
                Enviar Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
