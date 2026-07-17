import { motion } from "framer-motion";
import heroBg from "@/assets/hero-capa-luana.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center 20%",
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(91, 42, 38, 0.45)" }} />


      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-bold drop-shadow-md"
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
            src="https://lh3.googleusercontent.com/d/1jrxeUtjLnPteXzI22GSpEN33iFJzfETH" 
            alt="Luana Campos Assessoria de Eventos" 
            className="h-32 sm:h-40 md:h-48 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] brightness-0 invert" 
          />
        </motion.div>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white text-lg md:text-xl mb-10 font-bold italic max-w-2xl mx-auto drop-shadow-sm"
        >
          O seu sonho, perfeitamente orquestrado com amor!
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
