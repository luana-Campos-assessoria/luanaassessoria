import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A Luana foi maravilhosa! Se aconteceu algum problema durante todo o processo de organização e no dia do casamento, nós nem ficamos sabendo, pois ela simplesmente resolvia tudo sem nos preocupar! Ela foi nossa melhor escolha! Escolheria ela mil vezes!",
    author: "Natália & Adriel",
    event: "Casamento • 27-04-2024",
  },
  {
    text: "Desde o início, ela esteve lado a lado conosco, nos ajudando em cada etapa, tirando dúvidas e trazendo segurança em todos os momentos. Sempre muito atenciosa, organizada e presente, fez toda a diferença para que tudo acontecesse de forma leve e tranquila. Nos sentimos acolhidos e bem orientados do começo ao fim. Somos muito gratos por todo o apoio e dedicação!",
    author: "Debora & Marcus",
    event: "Casamento • 27-09-2025",
  },
  {
    text: "Temos muito a agradecer a Luana e toda a equipe, especialmente no dia do casamento, que todas elas foram muito solicitas, atenciosas e fizeram tudo para deixar o dia muito leve e mais tranquilo pra nós.",
    author: "Taiza & Giuseppe",
    event: "Casamento • 17-10-2025",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3 font-medium">
            Depoimentos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
            O que dizem nossos casais
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-left shadow-sm border border-border/50"
            >
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-serif text-foreground font-medium">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
