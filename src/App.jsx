import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import BannerSlide from './components/BannerSlide';
import Cases from './components/Cases';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] text-white selection:bg-emerald-500 selection:text-black">
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