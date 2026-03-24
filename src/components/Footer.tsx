import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";

const Footer = () => (
  <ScrollReveal variant="fadeUp" duration={0.8}>
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h4 className="font-display text-xl font-bold mb-4">
              Construtura Porto e Reis
            </h4>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empresa de construção civil especializada em projetos residenciais, comerciais e industriais.
              Compromisso com qualidade, segurança e prazos.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contato</h4>
            <address className="not-italic text-primary-foreground/70 text-sm space-y-2">
              <p>Rua Vincente de Paula, 148, Paraíso, Guanambi-BA, 46.430-000</p>
              <p>Telefone: (77) 98129-9005</p>
              <p>E-mail: contato@helderporto.com.br</p>
            </address>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link to="/politica-de-privacidade" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-servico" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Termos de Serviço
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-6 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Construtura Porto e Reis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </ScrollReveal>
);

export default Footer;
