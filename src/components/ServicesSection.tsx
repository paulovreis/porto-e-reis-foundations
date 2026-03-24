import { Home, Building, Hammer, HardHat, Ruler, Paintbrush } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const services = [
  { icon: Home, title: "Construção Residencial", desc: "Casas e edifícios residenciais com acabamento de alto padrão e projetos personalizados." },
  { icon: Building, title: "Construção Comercial", desc: "Escritórios, lojas e espaços comerciais modernos, funcionais e entregues no prazo." },
  { icon: Hammer, title: "Reformas e Ampliações", desc: "Reformas completas e ampliações com planejamento detalhado e execução impecável." },
  { icon: HardHat, title: "Gerenciamento de Obras", desc: "Gestão profissional de todas as etapas da obra com controle de qualidade e custos." },
  { icon: Ruler, title: "Projetos de Engenharia", desc: "Projetos estruturais, hidráulicos e elétricos desenvolvidos por engenheiros qualificados." },
  { icon: Paintbrush, title: "Acabamento e Interiores", desc: "Acabamentos refinados e design de interiores que valorizam cada espaço." },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 md:py-28">
    <div className="section-container">
      <ScrollReveal className="text-center mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Serviços</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Soluções completas em construção civil
        </h2>
      </ScrollReveal>

      <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
        {services.map((s) => (
          <StaggerItem key={s.title}>
            <motion.div
              className="group p-8 rounded-xl border bg-card h-full"
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px hsl(var(--foreground) / 0.1)" }}
              transition={{ duration: 0.25 }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-5"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--accent) / 0.25)" }}
              >
                <s.icon className="text-accent" size={24} />
              </motion.div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default ServicesSection;
