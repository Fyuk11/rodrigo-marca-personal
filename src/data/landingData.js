const phone = '5491121652703';

export const landingData = {
  personalInfo: {
    name: "RODRIGO.GÓMEZ",
    phone: phone,
    whatsappUrl: `https://wa.me/${phone}?text=${encodeURIComponent('Hola Rodrigo, quiero hacerte una consulta por mi marca personal.')}`,
    socials: {
      instagram: "https://www.instagram.com/rodrigomezdigital/",
      tiktok: "#https://www.tiktok.com/@rodrigomezdigital",
      linkedin: "https://www.linkedin.com/in/rodrigo-gomez-digital/",
      github: "https://github.com",
    }
  },
  projects: [
    {
      id: "traduccion-creativa",
      title: "Traducción Creativa",
      category: "Web Corporativa",
      description: "Rediseño completo y desarrollo inmersivo para una agencia de traducción. Enfocado en rendimiento, SEO técnico y una interfaz fluida que transmite autoridad y profesionalismo.",
      image: "/traduccion-creativa.webp", // Actualizado a WebP
      link: "https://traduccioncreativa.com/",
      type: "featured"
    },
    {
      id: "portfolio-tc",
      title: "Portfolio Interactivo",
      category: "Galería & Casos",
      description: "Sistema de visualización de trabajos con filtrado dinámico y transiciones suaves para la misma agencia.",
      image: "/portfolio-916.webp", // Actualizado a WebP
      link: "https://portfolio-traduccion-creativa.netlify.app/",
      type: "secondary"
    }
  ],
  cvTemplates: [
    { 
      id: 1, 
      title: 'Corporativo & Legal', 
      desc: 'Autoridad, elegancia y sobriedad para abogados, médicos y ejecutivos.',
      tag: 'Ejecutivo',
      image: '/cv-abogad-corp-legal-916.webp', // Actualizado a WebP
      url: 'https://cv-web-plantilla-4.netlify.app/'
    },
    { 
      id: 2, 
      title: 'Editorial & Design', 
      desc: 'Diseño audaz de alto contraste para directores creativos y diseñadores.',
      tag: 'Creativo',
      image: '/cv-design-916.webp', // Actualizado a WebP
      url: 'https://cv-web-plantilla-design.netlify.app'
    },
    { 
      id: 3, 
      title: 'Creator & Community', 
      desc: 'Estructura orientada a métricas, cursos y comunidades para marcas personales.',
      tag: 'Marca Personal',
      image: '/cv-creator-916.webp', // Actualizado a WebP
      url: 'https://cv-web-plantilla-creator.netlify.app'
    }
  ],
  services: [
    {
      id: "cv-digital",
      title: "CV Digital",
      price: "Desde $40 USD",
      description: "Para profesionales que buscan trabajo y quieren destacar en las selecciones.",
      features: ["Copy persuasivo para reclutadores", "Branding simple y distinguido", "Optimizado para celulares", "Link listo para compartir"],
      deliveryTime: "2-4 días",
      isFeatured: false,
      whatsappMsg: `https://wa.me/${phone}?text=${encodeURIComponent('Hola Rodrigo, quiero consultar para armar mi CV Digital.')}`,
    },
    {
      id: "web-express",
      title: "Web Express",
      price: "Desde $150 USD",
      badge: "El más elegido",
      description: "Para profesionales y freelancers que necesitan una presencia completa en Google.",
      features: ["Hasta 5 secciones a medida", "Integración directa a tu WhatsApp", "Dominio propio configurado", "Carga en menos de 1 segundo"],
      deliveryTime: "5-7 días",
      isFeatured: true,
      whatsappMsg: `https://wa.me/${phone}?text=${encodeURIComponent('Hola Rodrigo, me interesa contratar la Web Express.')}`,
    },
    {
      id: "a-medida",
      title: "Proyecto a Medida",
      price: "A cotizar",
      description: "¿Tenés una idea específica, diseño propio o requerimientos particulares?",
      features: ["Desarrollo desde un diseño en Figma", "Integración con APIs o bases de datos", "Animaciones e interacciones avanzadas", "Asesoría técnica y alcance personalizado"],
      deliveryTime: "A definir según alcance",
      isFeatured: false,
      whatsappMsg: `https://wa.me/${phone}?text=${encodeURIComponent('Hola Rodrigo, quiero cotizar un proyecto a medida.')}`,
    }
  ],
  processSteps: [
    {
      number: "01",
      title: "Me contás tu experiencia",
      time: "Día 1",
      description: "Me mandás tu CV actual, tu LinkedIn o simplemente me contás qué hacés en una charla breve."
    },
    {
      number: "02",
      title: "Armo estructura, copy y branding",
      time: "Día 2-5",
      description: "Diseño la interfaz, redacto los textos persuasivos y programo la web en React."
    },
    {
      number: "03",
      title: "Te entrego tu link, listo para usar",
      time: "Día 5-7",
      description: "Desplegamos tu sitio en producción (Netlify/Vercel) con tu dominio o subdominio configurado."
    }
  ],
  faqs: [
    {
      question: "¿Necesito saber de código?",
      answer: "No, absolutamente nada. Yo me encargo de todo el proceso técnico, maquetación, despliegue y configuración del dominio."
    },
    {
      question: "¿Cuánto tarda la entrega?",
      answer: "Depende del plan elegido: entre 2 y 4 días para un CV Digital, y de 5 a 7 días para la Web Express."
    },
    {
      question: "¿Puedo pedir cambios después de la entrega?",
      answer: "Sí, todos los planes incluyen una ronda completa de ajustes menores posterior a la primera versión entregada."
    },
    {
      question: "¿Cómo es la forma de pago?",
      answer: "Aceptamos transferencia bancaria, Mercado Pago o Payoneer. Se abona el 50% al iniciar y el 50% restante al entregar la web."
    },
    {
      question: "¿Qué necesito mandarte para empezar?",
      answer: "Tu experiencia actual (un CV viejo, tu perfil de LinkedIn o unas notas con tu trayectoria). Con eso es suficiente."
    },
    {
      question: "¿Cómo empezamos?",
      answer: "Hablamos, completás el Onboarding, diseñamos tu página y entregamos el primer modelo. Hacemos los ajustes menores (imágenes, copy, movemos alguna sección de lugar) y entregamos el código y la página funcionando."
    }
  ]
};