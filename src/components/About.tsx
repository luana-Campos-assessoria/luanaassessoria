import { motion } from "framer-motion";
import perfilLuana from "@/assets/perfil_luana.png";
import { Shield, Eye, Handshake, Heart } from "lucide-react";

const pillars = [
  { icon: Shield, label: "Integridade" },
  { icon: Eye, label: "Transparência" },
  { icon: Handshake, label: "Confiança" },
  { icon: Heart, label: "Ética" },
];

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3 font-bold">
            Sobre mim
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/d/1048Ys1aLpEcOV9oAQk7fK9L3IZSY_NrZ"
                alt="Luana Campos - Assessora de Eventos"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug font-bold">
              Transformando Sonhos em Memórias Reais
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Acredito que a verdadeira felicidade está em servir e transformar grandes sonhos em realidade. É essa paixão que me motiva, todos os dias, honrar a confiança de cada casal que escolhe caminhar ao meu lado. Para mim, planejar um casamento vai além da logística; é uma busca constante por aprendizado e novas experiências que me permitem criar momentos únicos e inesquecíveis.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Minha entrega é pautada pela excelência em cada detalhe, unindo um planejamento de alta qualidade à autenticidade que cada celebração merece. Mais do que organizar eventos, auxilio vocês a viverem o dia mais importante de suas vidas com a tranquilidade de quem tem ao lado alguém que valoriza a ética, a transparência e, acima de tudo, a família.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa atuação é pautada por valores que considero inegociáveis: a fé em Deus, a importância da família, e uma conduta baseada na honestidade, transparência e ética. Acreditamos no trabalho em equipe e no respeito mútuo para que, juntos, possamos inovar e superar todas as expectativas.
            </p>
            <p className="text-foreground font-serif italic text-lg mb-8 font-semibold">
              "Confiança é a base do luxo!"
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
