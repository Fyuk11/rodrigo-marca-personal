import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import BannerSlide from './components/BannerSlide';
import Cases from './components/Cases';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  // Forzar que siempre abra arriba de todo (en el Hero) al refrescar
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-white transition-colors duration-300">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <BannerSlide />
        <Cases />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}