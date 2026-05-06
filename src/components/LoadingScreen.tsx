import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 1, 0.4],
            scale: [0.95, 1, 0.95]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1jrxeUtjLnPteXzI22GSpEN33iFJzfETH" 
            alt="Luana Campos Logo" 
            className="h-24 md:h-32 w-auto object-contain opacity-80" 
          />
        </motion.div>
        
        <motion.div 
          className="mt-8 h-[2px] w-32 bg-primary/20 overflow-hidden rounded-full"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="h-full w-full bg-primary"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
