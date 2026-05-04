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
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/d/132zdNpSZWFM94kXn71B60unk_y-02WBw)`,
          backgroundPosition: "center 20%",
        }}
      />
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#5B2A26] text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-bold drop-shadow-sm"
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
            src="/logo-branco.png" 
            alt="Luana Campos Assessoria de Eventos" 
            className="h-32 sm:h-40 md:h-48 w-auto object-contain filter-gold drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] contrast-110" 
          />
        </motion.div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary text-lg md:text-xl mb-10 font-bold italic max-w-2xl mx-auto drop-shadow-sm"
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
