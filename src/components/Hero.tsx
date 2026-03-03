import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-light"
        >
          Assessora de Eventos e Cerimonialista
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl text-white font-semibold leading-tight mb-6"
        >
          Luana Campos
          <span className="block text-2xl sm:text-3xl md:text-4xl font-light mt-2 italic">
            Assessoria de Eventos
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl mb-4 font-light max-w-2xl mx-auto"
        >
          Será um prazer conduzir vocês nesse momento tão especial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/80 text-base md:text-lg mb-10 font-light italic max-w-2xl mx-auto"
        >
          "Cada casamento é uma nova criação — e o de vocês será planejado com
          propósito, identidade e harmonia em cada detalhe."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--gold))] hover:bg-[hsl(var(--gold))]/90 text-white text-base px-8 py-6 rounded-full shadow-lg"
          >
            <a
              href="https://wa.me/5512999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Fale comigo no WhatsApp
            </a>
          </Button>

          <p className="text-white/70 text-sm md:text-base font-light tracking-wide">
            O luxo de viver o agora (quando tudo já foi cuidado). 🌙✨
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
