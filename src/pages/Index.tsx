import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Requirements from "@/components/Requirements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Programs />
      <Schedule />
      <Requirements />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
