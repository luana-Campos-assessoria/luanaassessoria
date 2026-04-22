import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, MapPin, FileText } from "lucide-react";

const Contact = () => {
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
            elegância e propósito? Clique no botão abaixo para preencher nosso formulário de contato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center p-8 bg-background/50 rounded-2xl border border-primary/10 shadow-sm"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-4 text-center">Planeje seu Evento</h3>
            <p className="text-muted-foreground text-center mb-8">
              Clique no botão abaixo para iniciarmos o planejamento do seu grande dia através do nosso formulário exclusivo.
            </p>
            <Button 
              asChild
              className="w-full sm:w-auto px-10 py-6 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <a 
                href="https://forms.gle/iAUwdQZxy1cLVG8N8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg"
              >
                Começar agora
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-8 md:pl-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                <Instagram className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider">Instagram</p>
                <a href="https://instagram.com/cerimonialistaluanacampos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  @cerimonialistaluanacampos
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider">Email</p>
                <a href="mailto:contato@luanacamposassessoria.com.br" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                  contato@luanacamposassessoria.com.br
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm uppercase tracking-wider">Localização</p>
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
