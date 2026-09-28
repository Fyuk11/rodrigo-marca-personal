import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Cpu } from 'lucide-react';

export default function BannerSlide() {
  const highlights = [
    {
      icon: <Zap className="w-5 h-5 text-[var(--accent)]" />,
      title: "Carga en < 1 segundo",
      desc: "Sin cargadores ni demoras que hagan perder visitas."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[var(--accent)]" />,
      title: "Código 100% a medida",
      desc: "Desarrollo limpio con React. Sin plugins ni constructores pesados."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />,
      title: "Dominio & Propiedad",
      desc: "El sitio y sus archivos son tuyos para siempre."
    }
  ];

  return (
    <section className="w-full relative bg-[var(--bg-alt)] text-[var(--text)] py-20 sm:py-24 border-y border-[var(--border)] overflow-hidden transition-colors duration-300">
      
      {/* Trama sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-4"
          >
            
            <h3 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight text-[var(--text)]">
              La diferencia entre una plantilla cargada y una <span className="text-[var(--accent)] italic font-normal">web optimizada.</span>
            </h3>
            <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
              No uso plantillas genéricas de WordPress o Wix que tardan en cargar. Maqueto cada componente en código puro para que la navegación sea instantánea en cualquier pantalla.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 flex flex-col justify-between space-y-3 hover:border-[var(--accent)] transition-all shadow-sm"
              >
                <div className="p-2.5 bg-[var(--accent)]/10 rounded-xl w-fit border border-[var(--accent)]/20">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[var(--text)]">{item.title}</h4>
                  <p className="text-[var(--muted)] text-xs mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}