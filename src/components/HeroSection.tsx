import heroImg from "@/assets/hero-construction.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0">
      <motion.img
        src={heroImg}
        alt="Canteiro de obras moderno com edifício em construção ao pôr do sol"
        className="w-full h-full object-cover"
        width={1920}
        height={1080}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
      <div className="absolute inset-0 bg-primary/70" />
    </div>
    <div className="relative section-container py-20 md:py-32">
      <div className="max-w-2xl">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Construindo o futuro com <span className="text-accent">excelência</span> e confiança
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          A Construtura Porto e Reis é referência em construção civil, oferecendo
          soluções completas com qualidade, segurança e compromisso com prazos.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 transition-transform duration-200 hover:scale-105" asChild>
            <a href="#contato">Solicitar Orçamento</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 transition-transform duration-200 hover:scale-105" asChild>
            <a href="#servicos">Nossos Serviços</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
