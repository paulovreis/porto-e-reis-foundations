import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background">
    <div className="section-container py-12 md:py-20 max-w-3xl">
      <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 text-sm mb-8">
        <ArrowLeft size={16} /> Voltar ao início
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>

      <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
        <p>A <strong className="text-foreground">Construtura Porto e Reis</strong> está comprometida com a proteção da privacidade dos dados pessoais de seus clientes e visitantes do site.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">1. Coleta de Dados</h2>
        <p>Coletamos dados pessoais fornecidos voluntariamente por meio de nosso formulário de contato, incluindo nome, e-mail, telefone e mensagem.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">2. Uso dos Dados</h2>
        <p>Os dados coletados são utilizados exclusivamente para responder solicitações, fornecer orçamentos e melhorar nossos serviços.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">3. Compartilhamento</h2>
        <p>Não compartilhamos, vendemos ou alugamos dados pessoais a terceiros, exceto quando exigido por lei.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">4. Segurança</h2>
        <p>Adotamos medidas de segurança adequadas para proteger os dados pessoais contra acesso não autorizado, alteração ou destruição.</p>

        <h2 className="text-xl font-display font-semibold text-foreground">5. Contato</h2>
        <p>Para dúvidas sobre esta política, entre em contato pelo e-mail: contato@helderporto.com.br</p>

        <p className="text-sm">Última atualização: Março de 2026</p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
