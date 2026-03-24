import { Building2, Shield, Clock, Users } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const stats = [
  { icon: Building2, label: "Projetos Entregues", value: "150+" },
  { icon: Users, label: "Clientes Satisfeitos", value: "120+" },
  { icon: Clock, label: "Anos de Experiência", value: "2+" },
  { icon: Shield, label: "Garantia de Qualidade", value: "100%" },
];

const AboutSection = () => (
  <section id="sobre" className="py-20 md:py-28 bg-card">
    <div className="section-container">
      <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Sobre Nós</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          Tradição e inovação na construção civil
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A <strong className="text-foreground">Construtura Porto e Reis</strong> atua no mercado da construção civil
          há mais de 2 anos, oferecendo serviços de engenharia, reforma e construção residencial,
          comercial e industrial. Nossa missão é transformar projetos em realidade com transparência,
          qualidade e respeito aos prazos, construindo relações de confiança duradouras com nossos clientes.
        </p>
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.12}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <motion.div
              className="text-center p-6 rounded-lg bg-secondary"
              whileHover={{ y: -4, boxShadow: "0 10px 30px -10px hsl(var(--accent) / 0.2)" }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className="mx-auto mb-3 text-accent" size={32} />
              <p className="text-2xl md:text-3xl font-bold font-display text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default AboutSection;
