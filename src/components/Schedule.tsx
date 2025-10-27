import { Card } from "@/components/ui/card";
import { Calendar, Clock, DollarSign } from "lucide-react";
import scheduleImage from "@/assets/schedule.jpeg";

const Schedule = () => {
  return (
    <section id="horarios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Horarios y <span className="text-secondary">Precios</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Clases flexibles adaptadas a tu agenda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
          {/* Schedule Details */}
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Miércoles y Viernes</h3>
              </div>
              <div className="space-y-3 ml-9">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Niños (4-5 años)</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      5:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Adultos</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      6:00 PM - 7:00 PM / 7:00 PM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Sábados</h3>
              </div>
              <div className="space-y-3 ml-9">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Adultos</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      8:00 AM - 9:00 AM / 9:00 AM - 10:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Niños</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      10:00 AM - 11:00 AM / 11:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-accent-foreground" />
                <h3 className="text-2xl font-bold text-foreground">Domingos</h3>
              </div>
              <div className="space-y-3 ml-9">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Adultos</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      8:00 AM - 9:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">Niños</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      9:00 AM - 10:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Pricing */}
            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/30">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-foreground">Precios</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 ml-9">
                <div>
                  <p className="text-sm text-muted-foreground">Inscripción</p>
                  <p className="text-2xl font-bold text-foreground">1,000 <span className="text-base">pesos</span></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">1 día/semana</p>
                  <p className="text-2xl font-bold text-foreground">1,000 <span className="text-base">pesos</span></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">2 días/semana</p>
                  <p className="text-2xl font-bold text-foreground">1,500 <span className="text-base">pesos</span></p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">3 días/semana</p>
                  <p className="text-2xl font-bold text-foreground">2,000 <span className="text-base">pesos</span></p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm text-muted-foreground">4 días/semana</p>
                  <p className="text-2xl font-bold text-secondary">2,500 <span className="text-base">pesos</span></p>
                </div>
              </div>
            </Card>
          </div>

          {/* Schedule Image */}
          <div className="lg:order-first">
            <img 
              src={scheduleImage} 
              alt="Horarios Swimming Fish RD" 
              className="w-full rounded-2xl shadow-2xl hover:shadow-[0_20px_50px_rgba(245,166,35,0.3)] transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
