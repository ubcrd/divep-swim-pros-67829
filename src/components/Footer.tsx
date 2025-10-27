import divepLogo from "@/assets/divep-logo.png";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={divepLogo} alt="DIVEP" className="h-12 mb-4" />
            <p className="text-primary-foreground/80 text-sm mb-4">
              Clases profesionales de natación a través de Swimming Fish RD. 
              Desarrolla técnica, confianza y certificaciones profesionales.
            </p>
            <p className="text-secondary font-semibold text-sm">
              An exchange of experiences
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#programas" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Nuestros Programas
                </a>
              </li>
              <li>
                <a href="#horarios" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Horarios y Precios
                </a>
              </li>
              <li>
                <a href="#requisitos" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Requisitos Salvavidas
                </a>
              </li>
              <li>
                <a href="#certificaciones" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Certificaciones
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">Tel / WhatsApp:</p>
                  <a href="tel:8299935726" className="text-primary-foreground hover:text-secondary transition-colors">
                    829-993-5726
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:swimmingfish030818@gmail.com" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors break-all"
                  >
                    swimmingfish030818@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} DIVEP - Swimming Fish RD. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
