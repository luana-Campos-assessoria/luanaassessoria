import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-foreground text-background/70">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Heart className="w-4 h-4 fill-primary text-primary" />
        <span className="font-serif text-sm text-background">Luana Campos Assessoria de Eventos</span>
      </div>
      <p className="text-xs">© {new Date().getFullYear()} Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
