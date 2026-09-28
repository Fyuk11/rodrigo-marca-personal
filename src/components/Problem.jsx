import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-[var(--bg)] border-b border-[var(--border)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
         
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-[var(--text)] mt-3 mb-4 tracking-tight">
            Un PDF se olvida. <br />
            <span className="text-[var(--accent)]">Un sitio web convierte.</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)]">
            El 92% de los clientes o reclutadores te van a buscar en la web antes de contratarte. ¿Qué experiencia querés proyectar?
          </p>
        </div>

        {/* Grilla Comparativa */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* OPCIÓN 1: PDF TRADICIONAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between transition-all shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--muted)]">
                  <XCircle className="w-4 h-4 text-red-500" />
                  El Formato Tradicional
                </div>
                <span className="px-2.5 py-1 rounded-md bg-red-500/10 text-red-500 text-[10px] font-mono font-bold">
                  PDF / Documento
                </span>
              </div>

              {/* Preview PDF (Imagen) */}
              <div className="relative aspect-video rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] overflow-hidden mb-6 group">
                <img 
                  src="/public/cv-imagenpdf.png" // Reemplazá con la ruta de tu imagen de CV en PDF
                  alt="CV plano en formato PDF" 
                  className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                  Documento Estático A4
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                Hoja de vida plana en PDF
              </h3>
              <ul className="space-y-2.5 text-xs text-[var(--muted)] mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" /> Sin métricas de visitas ni interacción.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" /> Difícil de leer adecuadamente en celulares.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" /> Queda traspapelado en la carpeta de descargas.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* OPCIÓN 2: ACTIVO DIGITAL / WEB */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border-2 border-[var(--accent)] flex flex-col justify-between transition-all shadow-md relative"
          >
            <div className="absolute top-0 right-0 bg-[var(--accent)] text-white text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl">
              Ventaja Competitiva
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[var(--accent)] font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                  Tu Activo Digital
                </div>
              </div>

              {/* Preview Web (Video cel scrolleando) */}
              <div className="relative aspect-video rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] overflow-hidden mb-6 group">
                <video 
                  src="/public/Recorrido cv-web PC.mp4" // Reemplazá con la ruta de tu video
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-[var(--accent)]/90 backdrop-blur-sm px-2.5 py-1 rounded font-bold shadow-sm">
                  Experiencia Mobile Fluida 24/7
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                Experiencia Web Interactiva
              </h3>
              <ul className="space-y-2.5 text-xs text-[var(--text)] mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" /> 100% responsivo y optimizado para móviles.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" /> Botón directo a WhatsApp y llamado a la acción.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" /> Diseño profesional que genera alto impacto.
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}