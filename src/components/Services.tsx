import { motion } from "framer-motion";
import { CalendarHeart, Clock, Users, Palmtree, Sparkles } from "lucide-react";

const services = [
  {
    icon: CalendarHeart,
    title: "Assessoria Completa",
    desc: "Planejamento do sim ao altar. Acompanhamento em todas as etapas para que cada detalhe reflita vocês.",
  },
  {
    icon: Clock,
    title: "Cerimonial no Dia D",
    desc: "Coordenação, timing e tranquilidade para os noivos. Vocês vivem o momento, eu cuido de tudo.",
  },
  {
    icon: Users,
    title: "Curadoria de Fornecedores",
    desc: "Gestão de orçamento com transparência e indicação dos melhores profissionais da região.",
  },
  {
    icon: Palmtree,
    title: "Casamentos Únicos",
    desc: "Na praia, no campo, na capital ou luxo discreto — cada cenário planejado com propósito.",
  },
  {
    icon: Sparkles,
    title: "Organização com Propósito",
    desc: "Planejamento leve, funcional e com a identidade de vocês em cada escolha.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3 font-medium">
            Serviços
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
            Como posso ajudar vocês
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-left shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
