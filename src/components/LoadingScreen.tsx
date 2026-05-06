import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#FAF9F6]"
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Wedding Rings Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Left Ring */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ 
              x: [-40, -15, -15],
              opacity: [0, 0.6, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute w-48 h-48 rounded-full border-[1.5px] border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          />
          {/* Right Ring */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ 
              x: [40, 15, 15],
              opacity: [0, 0.6, 0.6]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
            className="absolute w-48 h-48 rounded-full border-[1.5px] border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
          />
        </div>

        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1jrxeUtjLnPteXzI22GSpEN33iFJzfETH" 
            alt="Luana Campos Logo" 
            className="h-28 md:h-36 w-auto object-contain filter drop-shadow-sm" 
          />
        </motion.div>
        
        {/* Loading Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mt-12 text-center"
        >
          <p className="text-[#8B735B] font-serif italic text-lg tracking-wide">
            Preparando seu grande dia...
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
