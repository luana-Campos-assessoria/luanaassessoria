import { motion } from "framer-motion";
import { UserCheck, PiggyBank, Briefcase, Plane, Sparkles, Smartphone } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Assessoria Personalizada",
    desc: "Desenvolvida de acordo com a necessidade e o momento do casal.",
  },
  {
    icon: PiggyBank,
    title: "Alinhamento de Budget",
    desc: "Orientação de budget de acordo com o perfil e expectativa do casal.",
  },
  {
    icon: Briefcase,
    title: "Curadoria de fornecedores",
    desc: "Fornecedores selecionados e de acordo com o perfil e budget do casamento.",
  },
  {
    icon: Plane,
    title: "Destination Wedding",
    desc: "Planejamentos únicos que represente a personalidade do casal.",
  },
  {
    icon: Sparkles,
    title: "Organização com proposito",
    desc: "Planejamento leve, funcional e com a identidade de vocês em cada escolha.",
  },
  {
    icon: Smartphone,
    title: "Plataforma do casamento",
    desc: "O casal consegue acompanhar todo o planejamento na palma da mão, sempre com transparência e clareza em cada etapa.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-20 bg-card">
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
