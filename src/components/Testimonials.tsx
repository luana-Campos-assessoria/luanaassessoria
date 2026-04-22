import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "A Luana foi maravilhosa! Se aconteceu algum problema durante todo o processo de organização e no dia do casamento, nós nem ficamos sabendo, pois ela simplesmente resolvia tudo sem nos preocupar! Ela foi nossa melhor escolha! Escolheria ela mil vezes!",
    author: "Natália & Adriel",
    event: "Casamento • 27-04-2024",
  },
  {
    text: "Transformamos logística complexa em momentos leves e inesquecíveis. A Luana entendeu exatamente o que queríamos e entregou além.",
    author: "Camila & Bruno",
    event: "Casamento no Litoral Norte",
  },
  {
    text: "Do primeiro encontro ao último convidado ir embora, a Luana estava presente com profissionalismo e carinho. Nosso dia foi perfeito!",
    author: "Juliana & Pedro",
    event: "Casamento em São José dos Campos",
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
