import { motion } from 'framer-motion';
import { landingData } from '../data/landingData';
import { Clock, ArrowRight } from 'lucide-react';

export default function Process() {
  const { processSteps } = landingData;

  return (
    <section id="proceso" className="py-24 bg-[var(--bg)] border-b border-[var(--border)] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mt-3 mb-4 tracking-tight">
            De cero a tu web en <br />
            <span className="text-[var(--accent)]">menos de una semana.</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            Sin formularios interminables ni procesos complejos. Un método ágil diseñado para profesionales ocupados.
          </p>
        </div>

        {/* Tarjetas de Pasos */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between relative group hover:border-[var(--accent)] transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Número y Badge de Tiempo */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-extrabold text-[var(--muted)]/40 group-hover:text-[var(--accent)] transition-colors">
                    {step.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--bg)] text-[var(--accent)] border border-[var(--border)]">
                    <Clock className="w-3 h-3" />
                    {step.time}
                  </span>
                </div>

                {/* Título y Descripción */}
                <h3 className="font-display font-bold text-xl text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Indicador de continuidad en desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[var(--muted)]/30">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}