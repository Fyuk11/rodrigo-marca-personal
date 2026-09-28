import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { landingData } from '../data/landingData';

export default function Hero() {
  const marqueeItems = ["REACT", "IA", "UI/UX", "GSAP", "IDENTIDAD DIGITAL", "SITIOS WEB", "CV DIGITAL"];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 bg-[var(--bg)] transition-colors duration-300">
      {/* Imagen de fondo con overlay dinámico */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/public/hero-16-9.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-50 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/40 via-[var(--bg)]/80 to-[var(--bg)]"></div>
        {/* Glow verde sutil */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/15 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-8 max-w-container mx-auto w-full">
        <div className="flex flex-col items-start space-y-8 max-w-5xl">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] px-4 py-2 rounded-full text-xs font-semibold text-[var(--text)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
            <span className="tracking-wide uppercase font-sans">Disponibilidad Limitada</span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-2">
            <span className="block font-display font-bold text-3xl sm:text-5xl text-[var(--muted)] tracking-tight">
              No eres un PDF.
            </span>
            <h1 className="font-display font-extrabold text-[clamp(3rem,8vw,7.5rem)] leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--text)] via-[var(--text)] to-[var(--text)]/60">
              Eres una <span className="text-[var(--accent)] drop-shadow-[0_0_30px_rgba(14,159,110,0.3)]">Experiencia.</span>
            </h1>
          </motion.div>

          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-[var(--muted)] text-lg sm:text-2xl font-normal max-w-2xl leading-relaxed">
            Diseño y desarrollo código real para profesionales que no se conforman con plantillas. Transformo tu trayectoria en un activo digital impecable.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
            <a href="#casos" className="relative group overflow-hidden bg-[var(--text)] text-[var(--bg)] px-10 py-5 rounded-full font-display font-bold text-sm tracking-widest uppercase transition-all shadow-md hover:shadow-lg">
              <span className="relative z-10">Explorar Casos</span>
              <div className="absolute inset-0 bg-[var(--accent)] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">Explorar Casos</span>
            </a>
            <a href={landingData.personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-[var(--text)] hover:text-[var(--accent)] font-sans text-sm font-semibold transition-colors">
              <span>Hablar directo</span>
              <div className="bg-[var(--surface)] border border-[var(--border)] p-2 rounded-full group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
                <ArrowUpRight className="w-4 h-4 group-hover:text-white" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee Flotante */}
      <div className="relative z-10 mt-24 border-y border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-md py-4">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-8 font-display font-bold text-sm tracking-[0.2em] text-[var(--muted)]">
              <span>{item}</span>
              <span className="ml-16 text-[var(--accent)]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}