import { motion } from 'framer-motion';
import { ExternalLink, LayoutTemplate } from 'lucide-react';
import { landingData } from '../data/landingData';

export default function Cases() {
  const { projects, cvTemplates } = landingData;
  const featuredProject = projects.find(p => p.type === 'featured') || projects[0];
  const secondaryProject = projects.find(p => p.type === 'secondary') || projects[1];

  return (
    <section id="casos" className="py-24 sm:py-32 px-4 sm:px-8 relative bg-[var(--bg)] transition-colors duration-300 overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent)]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto space-y-16 sm:space-y-20 relative z-10">
        
        {/* Cabecera de sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-display font-bold text-4xl sm:text-6xl text-[var(--text)] leading-none tracking-tight">
              Proyectos <br/><span className="text-[var(--muted)]">Destacados.</span>
            </h2>
          </div>
          <p className="text-[var(--muted)] max-w-sm text-sm sm:text-base leading-relaxed">
            No muestro mockups ficticios. Estas son webs reales, funcionales y optimizadas que ya están generando resultados.
          </p>
        </div>

        {/* Grilla Principal de Casos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CASO ESTRELLA (8 cols) */}
          {featuredProject && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 group"
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden hover:border-[var(--accent)] transition-all duration-500 shadow-sm flex flex-col h-full">
                
                {/* Contenedor Imagen / Preview */}
                <div className="aspect-[16/9] bg-[var(--bg-alt)] relative overflow-hidden">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div>
                      <span className="text-[var(--accent)] font-mono text-xs font-bold uppercase tracking-widest mb-1 block">
                        {featuredProject.category}
                      </span>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">{featuredProject.title}</h3>
                    </div>
                    <a 
                      href={featuredProject.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver sitio web ${featuredProject.title}`}
                      className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-colors shadow-md shrink-0"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
                    {featuredProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* CASO SECUNDARIO (4 cols) */}
          {secondaryProject && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="lg:col-span-4 group"
            >
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden h-full flex flex-col hover:border-[var(--accent)] transition-all duration-500 shadow-sm">
                <div className="aspect-[4/3] sm:aspect-square bg-[var(--bg-alt)] relative overflow-hidden">
                  <img 
                    src={secondaryProject.image} 
                    alt={secondaryProject.title} 
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <a 
                    href={secondaryProject.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${secondaryProject.title}`}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center hover:bg-[var(--accent)] transition-colors shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[var(--accent)] font-mono text-xs font-bold uppercase tracking-widest mb-1 block">
                      {secondaryProject.category}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--text)] mb-2">{secondaryProject.title}</h3>
                    <p className="text-[var(--muted)] text-xs sm:text-sm leading-relaxed">
                      {secondaryProject.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>

        {/* APARTADO: Plantillas CV Web (3 columnas con capturas reales) */}
        <div className="pt-16 border-t border-[var(--border)]">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2.5 bg-[var(--accent)]/10 rounded-xl border border-[var(--accent)]/20">
              <LayoutTemplate className="text-[var(--accent)] w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--text)]">Estructuras CV Digital</h3>
              <p className="text-[var(--muted)] text-xs sm:text-sm">Modelos interactivos de alto impacto listos para personalizar</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {cvTemplates.map((item, idx) => (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: idx * 0.1 }} 
                className="group"
              >
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="aspect-[3/4] bg-[var(--bg-alt)] rounded-2xl border border-[var(--border)] overflow-hidden relative mb-4 shadow-sm group-hover:border-[var(--accent)] transition-all">
                    
                    {/* Imagen de vista previa de la plantilla */}
                    <img 
                      src={item.image} 
                      alt={`Vista previa de plantilla ${item.title}`} 
                      width="600"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Badge del estilo */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-md">
                        {item.tag}
                      </span>
                    </div>
                    
                    {/* Overlay al hacer Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="text-white font-display font-bold tracking-widest uppercase text-xs px-4 py-2.5 bg-[var(--accent)] rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Ver Demo Live ↗
                      </span>
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-lg text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[var(--muted)] text-xs mt-1 leading-relaxed">{item.desc}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}