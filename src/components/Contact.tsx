import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Instagram, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", eventType: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Mensagem enviada com sucesso! Entraremos em contato por e-mail em breve.");
    setForm({ name: "", email: "", eventType: "", date: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3 font-medium">
            Contato
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Vamos conversar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sejam bem-vindos! Vamos transformar seu sonho em realidade com
            elegância e propósito?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Seu nome completo" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="seu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="eventType">Tipo de Evento</Label>
              <Input id="eventType" placeholder="Casamento, Debutante, etc." value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="date">Data Aproximada</Label>
              <Input id="date" placeholder="Ex: Março 2026" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" placeholder="Conte um pouco sobre o que vocês sonham para esse dia..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6">
              <Send className="w-4 h-4 mr-2" />
              Enviar mensagem
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="flex items-start gap-4">
              <Instagram className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">Instagram</p>
                <a href="https://instagram.com/cerimonialistaluanacampos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  @cerimonialistaluanacampos
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">Email</p>
                <a href="mailto:contato@luanacamposassessoria.com.br" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  contato@luanacamposassessoria.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-medium text-foreground text-sm">Localização</p>
                <p className="text-muted-foreground text-sm">Vale do Paraíba / SP</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
