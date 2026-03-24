import { Home, Building, Hammer, HardHat, Ruler, Paintbrush } from "lucide-react";

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
      <div className="text-center mb-16">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Serviços</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Soluções completas em construção civil
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-5 group-hover:bg-accent/25 transition-colors">
              <s.icon className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
