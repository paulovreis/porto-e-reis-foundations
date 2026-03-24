import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

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
        <ScrollReveal className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Fale conosco
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal variant="fadeLeft" delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Seu nome"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="transition-shadow duration-200 focus:shadow-md"
              />
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="transition-shadow duration-200 focus:shadow-md"
              />
              <Input
                type="tel"
                placeholder="Seu telefone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="transition-shadow duration-200 focus:shadow-md"
              />
              <Textarea
                placeholder="Sua mensagem"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="transition-shadow duration-200 focus:shadow-md"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Enviar Mensagem
                </Button>
              </motion.div>
            </form>
          </ScrollReveal>

          <ScrollReveal variant="fadeRight" delay={0.2}>
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
                {[
                  { icon: MapPin, label: "Endereço", value: "[Endereço comercial completo conforme registro legal]" },
                  { icon: Phone, label: "Telefone", value: "(XX) XXXX-XXXX" },
                  { icon: Mail, label: "E-mail", value: "contato@construturaportoreis.com.br" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <item.icon className="text-accent mt-1 shrink-0" size={20} />
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
