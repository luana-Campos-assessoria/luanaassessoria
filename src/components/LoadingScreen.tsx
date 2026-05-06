import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1jrxeUtjLnPteXzI22GSpEN33iFJzfETH" 
            alt="Luana Campos Assessoria de Eventos" 
            className="h-24 md:h-32 w-auto object-contain" 
          />
        </motion.div>
        <motion.div
          className="h-1 w-48 bg-gray-100 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-primary"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;