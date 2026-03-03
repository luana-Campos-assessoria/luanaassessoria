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
    <section id="sobre" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={perfilLuana}
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
            <p className="text-sm uppercase tracking-[0.25em] text-[hsl(var(--gold))] mb-3 font-medium">
              Sobre mim
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-snug">
              Cada casamento é único
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nada aqui é "apenas mais um evento", mas uma experiência pensada
              para refletir quem vocês são, com a elegância e a excelência que
              esse dia merece.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Atuação no Vale do Paraíba e região — Taubaté, Pindamonhangaba,
              São José dos Campos, litoral, campo ou capital. Especialista em
              cerimônias católicas, evangélicas e simbólicas.
            </p>
            <p className="text-foreground font-serif italic text-lg mb-8">
              "Confiança é a base do luxo."
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50"
                >
                  <Icon className="w-5 h-5 text-[hsl(var(--gold))]" />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
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
