import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import divepLogo from "@/assets/divep-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Piscina profesional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0 z-10 opacity-20">
        <svg className="w-full h-32 animate-pulse" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z" fill="hsl(var(--secondary))" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-4">
            <img src={divepLogo} alt="DIVEP" className="h-16 md:h-20" />
            <div className="h-12 w-px bg-secondary/50" />
            <div>
              <p className="text-secondary font-bold text-sm md:text-base">Presentado por</p>
              <h2 className="text-primary-foreground text-2xl md:text-3xl font-bold">Swimming Fish RD</h2>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Aprende a Nadar<br />
            <span className="text-secondary">Domina el Agua</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl">
            Clases profesionales de natación para niños, adolescentes y adultos. 
            Desarrolla técnica, confianza y obtén certificaciones profesionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="xl"
              onClick={scrollToContact}
              className="group"
            >
              Inscríbete Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('programas')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
            >
              <Waves className="mr-2" />
              Ver Programas
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">15+</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
              <div className="text-sm md:text-base text-primary-foreground/80">Certificados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
