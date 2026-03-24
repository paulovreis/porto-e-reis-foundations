import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fale conosco
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Seu nome"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Seu e-mail"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              type="tel"
              placeholder="Seu telefone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Textarea
              placeholder="Sua mensagem"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Enviar Mensagem
            </Button>
          </form>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Construtura Porto e Reis
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Somos especialistas em construção civil com mais de 15 anos de experiência.
                Entre em contato para um orçamento personalizado.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-muted-foreground text-sm">
                    [Endereço comercial completo conforme registro legal]
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <p className="text-muted-foreground text-sm">(XX) XXXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-muted-foreground text-sm">contato@construturaportoreis.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
