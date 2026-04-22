import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/d/132zdNpSZWFM94kXn71B60unk_y-02WBw)`,
        }}
      />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/20" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-foreground/80 text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium"
        >
          Assessora de Eventos e Cerimonialista
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <img 
            src="/logo-preto.png" 
            alt="Luana Campos Assessoria de Eventos" 
            className="h-32 sm:h-40 md:h-48 w-auto object-contain" 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-foreground/90 text-lg md:text-xl mb-4 font-medium max-w-2xl mx-auto"
        >
          Será um prazer conduzir vocês nesse momento tão especial.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary text-base md:text-lg mb-10 font-medium italic max-w-2xl mx-auto"
        >
          "O seu sonho, perfeitamente orquestrado com amor!"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
