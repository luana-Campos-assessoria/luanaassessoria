import { motion } from "framer-motion";

const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", label: "Casamento no Vale do Paraíba" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", label: "Cerimônia ao ar livre" },
  { src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80", label: "Detalhes românticos" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", label: "Cerimônia na praia" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", label: "Mesa decorada" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80", label: "Noivos felizes" },
  { src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80", label: "Casamento no campo" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80", label: "Decoração floral" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80", label: "Momentos especiais" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[hsl(var(--gold))] mb-3 font-medium">
            Portfólio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
            Alguns dos nossos trabalhos
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {photo.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
