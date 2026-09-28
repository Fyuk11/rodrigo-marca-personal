import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { landingData } from '../data/landingData';

export default function Services() {
  return (
    <section id="servicios" className="w-full py-20 sm:py-28 px-4 sm:px-8 bg-[var(--bg)] transition-colors duration-300">
      <div className="max-w-container mx-auto">
        <div className="space-y-4 mb-12 sm:mb-16">
          
          <h2 className="font-display font-bold text-section-title text-[var(--text)]">Elige la solución que necesitas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {landingData.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative bg-[var(--surface)] rounded-2xl p-6 sm:p-8 border flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md ${
                service.isFeatured ? 'border-[var(--accent)] ring-1 ring-[var(--accent)]' : 'border-[var(--border)]'
              }`}
            >
              {service.badge && (
                <span className="absolute -top-3.5 right-6 bg-[var(--accent)] text-white font-sans text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {service.badge}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-[var(--text)]">{service.title}</h3>
                  <p className="text-[var(--muted)] text-xs sm:text-sm mt-1">{service.description}</p>
                </div>

                <div className="border-y border-[var(--border)] py-4">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-[var(--text)]">{service.price}</span>
                  <span className="block text-xs text-[var(--muted)] font-medium mt-1">Entrega estimada: {service.deliveryTime}</span>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text)]">
                      <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-auto">
                <a
                  href={service.whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-full font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    service.isFeatured
                      ? 'bg-[var(--accent)] text-white hover:opacity-90'
                      : 'bg-[var(--bg-alt)] hover:bg-[var(--text)] hover:text-[var(--bg)] text-[var(--text)] border border-[var(--border)]'
                  }`}
                >
                  <span>{service.price === 'A cotizar' ? 'Consultar' : 'Quiero este'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}