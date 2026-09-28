import { ArrowUp, MessageCircle } from 'lucide-react';
import { landingData } from '../data/landingData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contacto" className="w-full bg-[var(--bg-alt)] text-[var(--text)] pt-20 pb-12 border-t border-[var(--border)] relative overflow-hidden transition-colors duration-300">
      
      {/* Imagen de fondo con overlay espejo del Hero */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <img 
        src="/footer.webp" 
        alt="" 
        aria-hidden="true"
        width="1920"
        height="1080"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-15 dark:opacity-40 mix-blend-luminosity"
      />
      {/* Degradado para integrar suavemente con el fondo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-alt)] via-[var(--bg-alt)]/80 to-[var(--bg-alt)]/40"></div>
    </div>

      {/* Luz verde/acento de fondo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-[var(--accent)]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-4 sm:px-8 relative z-10 space-y-16">
        
        {/* Call To Action principal del Footer */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-16 border-b border-[var(--border)]">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
              ¿Listo para empezar?
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight leading-tight text-[var(--text)]">
              Llevemos tu marca personal al siguiente nivel.
            </h2>
          </div>

          <a
            href={landingData.personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--accent)] hover:opacity-90 text-white px-8 py-5 rounded-full font-display font-bold text-sm uppercase tracking-wider transition-all shadow-md shrink-0"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Enviar mensaje</span>
          </a>
        </div>

        {/* Links y derechos */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[var(--muted)]">
          <div>
            © {new Date().getFullYear()} {landingData.personalInfo.name} · Desarrollo Web & Identidad Digital
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors font-mono uppercase"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}