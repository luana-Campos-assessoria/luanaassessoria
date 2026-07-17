import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CalculadoraVolantes from "./pages/CalculadoraVolantes";
import LoadingScreen from "./components/LoadingScreen";
import heroBg from "./assets/hero-capa-luana.webp";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const image = new Image();

    const finishLoading = () => {
      if (!isMounted) return;
      setIsLoading(false);
    };

    image.onload = finishLoading;
    image.onerror = finishLoading;
    image.src = heroBg;

    const fallbackTimer = setTimeout(finishLoading, 3500);

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
      image.onload = null;
      image.onerror = null;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/calculadora-volantes" element={<CalculadoraVolantes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
