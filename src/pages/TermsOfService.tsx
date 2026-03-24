import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => (
  <div className="min-h-screen bg-background">
    <div className="section-container py-12 md:py-20 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm mb-8">
        <ArrowLeft size={16} /> Voltar ao início
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Termos de Serviço</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
        <p>Ao utilizar o site da <strong className="text-foreground">Construtura Porto e Reis</strong>, você concorda com os seguintes termos e condições.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">1. Serviços</h2>
        <p>Oferecemos serviços de construção civil, incluindo construção residencial e comercial, reformas, gerenciamento de obras e projetos de engenharia.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">2. Orçamentos</h2>
        <p>Os orçamentos solicitados pelo site são estimativas iniciais e podem ser ajustados após avaliação técnica presencial.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">3. Responsabilidades</h2>
        <p>A Construtura Porto e Reis compromete-se a executar os serviços contratados com qualidade e dentro dos prazos acordados em contrato formal.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">4. Propriedade Intelectual</h2>
        <p>Todo o conteúdo deste site, incluindo textos e imagens, é propriedade da Construtura Porto e Reis e não pode ser reproduzido sem autorização.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">5. Contato</h2>
        <p>Para dúvidas sobre estes termos, entre em contato pelo e-mail: contato@helderporto.com.br</p>

        <p className="text-sm">Última atualização: Março de 2026</p>
      </div>
    </div>
  </div>
);

export default TermsOfService;
