import { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Zap } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div 
        className={`w-full transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-[var(--bg)]/90 backdrop-blur-md border-[var(--border)] shadow-sm py-3.5' 
            : 'bg-[var(--bg)]/50 backdrop-blur-sm border-[var(--border)]/40 py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
{/* Identidad / Logo */}
<a href="#" className="flex items-center gap-3 group">
  {/* Cuadro al 100% de la imagen */}
  <div className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors shadow-sm">
    <img 
      src="/public/logo-marca-personal.png" 
      alt="Logo Rodrigo Gómez" 
      className="w-full h-full object-cover"
    />
  </div>

  <div className="flex flex-col">
    <span className="font-bold text-sm tracking-wider text-[var(--text)] uppercase font-mono">
      RODRIGO GÓMEZ
    </span>
    <span className="text-[10px] font-mono text-[var(--muted)] flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
      Desarrollo & Branding
    </span>
  </div>
</a>

          {/* Acciones */}
          <div className="flex items-center gap-3">
            
            {/* Toggle Dark/Light */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] transition-all flex items-center gap-2 text-xs font-mono"
              aria-label="Cambiar tema"
            >
              {darkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline text-[var(--muted)]">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-500" />
                  <span className="hidden sm:inline text-[var(--muted)]">Dark</span>
                </>
              )}
            </button>

            {/* Botón CTA Hablemos */}
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono text-xs uppercase font-bold tracking-wider text-[var(--bg)] bg-[var(--text)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>HABLEMOS</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

          </div>

        </div>
      </div>
    </header>
  );
}