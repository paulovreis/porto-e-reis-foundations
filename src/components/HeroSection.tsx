import heroImg from "@/assets/hero-construction.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Canteiro de obras moderno com edifício em construção ao pôr do sol"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/70" />
    </div>
    <div className="relative section-container py-20 md:py-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Construindo o futuro com <span className="text-accent">excelência</span> e confiança
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body leading-relaxed">
          A Construtura Porto e Reis é referência em construção civil, oferecendo
          soluções completas com qualidade, segurança e compromisso com prazos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8" asChild>
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8" asChild>
            <a href="#servicos">Nossos Serviços</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
