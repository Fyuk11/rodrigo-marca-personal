import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { landingData } from '../data/landingData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full py-20 sm:py-28 px-4 sm:px-8 bg-[var(--bg)] transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <div className="space-y-3 text-center mb-12">
         
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[var(--text)] tracking-tight">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-4">
          {landingData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden transition-all shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--accent)] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[var(--muted)] text-xs sm:text-sm leading-relaxed border-t border-[var(--border)] pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}