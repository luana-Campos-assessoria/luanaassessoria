import { FileText } from "lucide-react";

const FloatingFormButton = () => (
  <a
    href="https://forms.gle/iAUwdQZxy1cLVG8N8"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Formulário de Contato"
    className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
  >
    <FileText className="w-6 h-6 transition-transform group-hover:rotate-12" />
    <span className="absolute right-16 bg-white text-primary px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm whitespace-nowrap pointer-events-none border border-primary/10">
      Solicitar Orçamento
    </span>
  </a>
);

export default FloatingFormButton;