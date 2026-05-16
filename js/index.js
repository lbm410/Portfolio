const lastScrollTop = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY || window.pageYOffset

  if (currentScroll <= 0) {
    document.querySelector(".header").classList.remove("hidden")
    document.querySelector(".header").classList.add("visible")
  } else {
    document.querySelector(".header").classList.add("hidden")
    document.querySelector(".header").classList.remove("visible")
  }
})

const darkMode = document.querySelector(".dark-mode")

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables")
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active")
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active")
})

// Textos en inglés y español
const data = {
  EN: {
    linkedin: "Visit my LinkedIn",
    github: "Visit my GitHub",
    inicio: "Home",
    proyectos: "Projects",
    sobre_mi_title: "About",
    proyectos_title: "Projects",
    experiencia_title: "Experience",
    hero_subtitle: "Tech Lead · Working across Europe",
    paylex_desc:
      "Co-Founder & CEO at Paylex — leading the vision, strategy, and product direction of a SaaS platform that simplifies invoicing and financial compliance for freelancers and small businesses in Spain. I focus on product design, business growth, partnerships, and ensuring our technology aligns with upcoming regulations like Verifactu and e-invoicing.",
    techlead_period: "Jan. 2026 - Present",
    techlead_location: "Europe · On-site",
    agsolution_desc:
      "Tech Lead for a fully custom MES/MOM system built for Cargill's cocoa and chocolate manufacturing plants across Europe. Leading a development team end-to-end: requirements, architecture decisions, development, validation, and client-facing delivery. Representing the company on-site at plant go-lives and FATs across Europe. Also involved in presales activities, internal training, and supporting teams across different projects.",
    sysengineer_period: "Jul. 2025 - Dec. 2025 · 6 months",
    sysengineer_desc:
      "System Engineer focused on MES/MOM solutions for one of the largest companies in the food industry. Designed, built, and maintained production-grade software—acting as a software engineer (not industrial)—bridging IT/OT to deliver reliable, scalable systems on the plant floor.",
    previous_role_tag: "Previous role",
    industrial_enterprise_title: "Industrial & Enterprise",
    web_product_title: "Web & Product",
    cargill_desc:
      "End-to-end development of a production-grade manufacturing execution system deployed across cocoa and chocolate plants in Europe. Built in C# and VB .NET. Covers work orders, traceability, batch execution, quality checks, and shop-floor data capture. Delivered on-site across multiple plant go-lives.",
    cargill_note: "Confidential client work",
    educacion_title: "Education",
    tecnologias_utilizadas: "Technologies used in the project:",
    sobre_mi: "About",
    sobre_mi_description:
      "I'm a Tech Lead leading development and delivery of complex software systems for global industrial clients across Europe.",
    sobre_mi_p2:
      "I focus on taking ownership of hard problems and earning trust — both within the team and with the clients we work with.",
    sobre_mi_p3:
      "My interest is in where technology and business strategy meet: making sure what we build actually moves the needle for the people who use it.",
    sobre_mi_p4:
      "Beyond the technical side, I'm involved in presales and internal training and knowledge-sharing across teams — because great technology only matters if you can communicate its value.",
    sobre_mi_p5: "Currently building toward a broader leadership role.",
    tecnologias_manejo: "<strong>Technologies</strong> I handle:",
  },
  ES: {
    linkedin: "Visita mi LinkedIn",
    github: "Visita mi GitHub",
    inicio: "Inicio",
    proyectos: "Proyectos",
    sobre_mi_title: "Sobre mi",
    proyectos_title: "Proyectos",
    experiencia_title: "Experiencia",
    hero_subtitle: "Tech Lead · Trabajando por Europa",
    paylex_desc:
      "Co-Founder & CEO at Paylex — liderando la visión, estrategia y dirección de producto de una plataforma SaaS que simplifica la facturación y el cumplimiento financiero para autónomos y pequeñas empresas en España. Me enfoco en el diseño de producto, crecimiento empresarial, asociaciones y asegurar que nuestra tecnología se alinea con las próximas regulaciones como Verifactu y e-facturación.",
    techlead_period: "Ene. 2026 - Actualidad",
    techlead_location: "Europa · Presencial",
    agsolution_desc:
      "Tech Lead de un sistema MES/MOM completamente a medida para las plantas de fabricación de cacao y chocolate de Cargill en Europa. Lidero un equipo de desarrollo de principio a fin: requisitos, decisiones de arquitectura, desarrollo, validación y entrega con cliente. Represento a la empresa in situ en arranques de planta y FATs en Europa. También participo en preventa, formación interna y soporte a equipos en distintos proyectos.",
    sysengineer_period: "Jul. 2025 - Dic. 2025 · 6 meses",
    sysengineer_desc:
      "Ingeniero de Sistemas enfocado en soluciones MES/MOM para una de las empresas más grandes de la industria alimentaria. Diseñé, construí y mantuve software de grado de producción—actuando como ingeniero de software (no industrial)—conectando IT/OT para entregar sistemas confiables y escalables en la planta de producción.",
    previous_role_tag: "Rol anterior",
    industrial_enterprise_title: "Industrial & Enterprise",
    web_product_title: "Web & Producto",
    cargill_desc:
      "Desarrollo de extremo a extremo de un sistema MES de grado productivo desplegado en plantas de cacao y chocolate en Europa. Construido en C# y VB .NET. Cubre órdenes de fabricación, trazabilidad, ejecución por lotes, controles de calidad y captura de datos en planta. Entregado in situ en múltiples arranques de planta.",
    cargill_note: "Trabajo confidencial de cliente",
    educacion_title: "Educación",
    tecnologias_utilizadas: "Tecnologías utilizadas en el proyecto:",
    sobre_mi: "Sobre mi",
    sobre_mi_description:
      "Soy Tech Lead, liderando el desarrollo y la entrega de sistemas de software complejos para clientes industriales globales en toda Europa.",
    sobre_mi_p2:
      "Me enfoco en asumir la responsabilidad de los problemas difíciles y ganarme la confianza — tanto dentro del equipo como con los clientes con los que trabajamos.",
    sobre_mi_p3:
      "Mi interés está donde se cruzan la tecnología y la estrategia de negocio: asegurarme de que lo que construimos mueve realmente la aguja para las personas que lo usan.",
    sobre_mi_p4:
      "Más allá del lado técnico, participo en preventa y en formación interna y compartición de conocimiento entre equipos — porque la gran tecnología solo importa si sabes comunicar su valor.",
    sobre_mi_p5: "Actualmente construyendo hacia un rol de liderazgo más amplio.",
    tecnologias_manejo: "<strong>Tecnologías</strong> que manejo:",
  },
}

const translatableIds = [
  "linkedin",
  "github",
  "inicio",
  "proyectos",
  "sobre_mi_title",
  "proyectos_title",
  "experiencia_title",
  "hero_subtitle",
  "paylex_desc",
  "techlead_period",
  "techlead_location",
  "agsolution_desc",
  "sysengineer_period",
  "sysengineer_desc",
  "previous_role_tag",
  "industrial_enterprise_title",
  "web_product_title",
  "cargill_desc",
  "cargill_note",
  "educacion_title",
  "sobre_mi",
  "sobre_mi_description",
  "sobre_mi_p2",
  "sobre_mi_p3",
  "sobre_mi_p4",
  "sobre_mi_p5",
  "tecnologias_manejo",
]

// Función para actualizar el contenido del sitio web según el idioma seleccionado
function updateLanguage(langCode) {
  translatableIds.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const value = data[langCode][id]
    if (value === undefined) return
    if (typeof value === "string" && value.includes("<")) {
      el.innerHTML = value
    } else {
      el.textContent = value
    }
  })

  // Actualiza múltiples elementos de tecnologías utilizadas
  document.querySelectorAll(".tecnologias_utilizadas").forEach((el) => {
    el.textContent = data[langCode].tecnologias_utilizadas
  })
}

// Evento para alternar el idioma cuando se cambia el estado del toggle button
document.getElementById("chk").addEventListener("change", (event) => {
  if (event.target.checked) {
    updateLanguage("EN") // Cambiar a inglés si el toggle está activado
  } else {
    updateLanguage("ES") // Cambiar a español si el toggle está desactivado
  }
})
