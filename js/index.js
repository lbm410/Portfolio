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
    sobre_mi_title: "About me",
    proyectos_title: "Projects",
    experiencia_title: "Experience",
    paylex_desc:
      "Co-Founder & CEO at Paylex — leading the vision, strategy, and product direction of a SaaS platform that simplifies invoicing and financial compliance for freelancers and small businesses in Spain. I focus on product design, business growth, partnerships, and ensuring our technology aligns with upcoming regulations like Verifactu and e-invoicing.",
    agsolution_desc:
      "System Engineer focused on MES/MOM solutions for one of the largest companies in the food industry. I design, build, and maintain production-grade software—acting as a software engineer (not industrial)—bridging IT/OT to deliver reliable, scalable systems on the plant floor.",
    educacion_title: "Education",
    tecnologias_utilizadas: "Technologies used in the project:",
    sobre_mi: "About me",
    sobre_mi_description:
      "I'm Lucas, a full-stack software engineer from the University of Almería who ships scalable, user-centric products. I focus on building systems that are cleanly designed, observable, and easy to evolve—balancing velocity with reliability so teams can deliver business impact without trading off quality.",
    core_stack:
      "<strong>Core stack:</strong> Angular, React, Next.js, Node.js, Express, Java (Spring Boot), PostgreSQL/SQL, JavaScript, HTML, Tailwind CSS.",
    design_architecture:
      "<strong>Design & Architecture:</strong> 2+ years in software design—requirements specification, standards, dependency modeling and scaling.",
    development: "<strong>Development:</strong> 3+ years hands-on across frontend, backend, and integrations.",
    devops:
      "<strong>DevOps</strong> (supporting role): 2+ years applying CI/CD and platform practices with Docker, Kubernetes, GitHub Actions, IaC (Terraform), container registries, and monitoring/logging (Prometheus/Grafana/ELK) to shorten lead time and raise deployment confidence.",
    sobre_mi_p2:
      "I care deeply about the intersection of product and engineering: customer-obsessed discovery, data-informed decisions, and fast feedback loops. I take ownership from problem framing to production, favor clear interfaces and testable modules, and optimize for maintainability and total cost of ownership. I earned honors in multiple courses during my Bachelor's degree in Software Engineering, concentrating in Software Engineering & Project Management—most notably Rapid Application Development, which sharpened my ability to iterate quickly, validate with users, and convert ambiguity into shippable software.",
    sobre_mi_p3:
      "If you're looking for someone who can move from requirements to reliable production, collaborate across functions, and continuously raise the bar—I'm ready to contribute. Let's connect.",
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
    paylex_desc:
      "Co-Founder & CEO at Paylex — liderando la visión, estrategia y dirección de producto de una plataforma SaaS que simplifica la facturación y el cumplimiento financiero para autónomos y pequeñas empresas en España. Me enfoco en el diseño de producto, crecimiento empresarial, asociaciones y asegurar que nuestra tecnología se alinea con las próximas regulaciones como Verifactu y e-facturación.",
    agsolution_desc:
      "Ingeniero de Sistemas enfocado en soluciones MES/MOM para una de las empresas más grandes de la industria alimentaria. Diseño, construyo y mantengo software de grado de producción—actuando como ingeniero de software (no industrial)—conectando IT/OT para entregar sistemas confiables y escalables en la planta de producción.",
    educacion_title: "Educación",
    tecnologias_utilizadas: "Tecnologías utilizadas en el proyecto:",
    sobre_mi: "Sobre mi",
    sobre_mi_description:
      "Soy Lucas, un ingeniero de software full-stack de la Universidad de Almería que construye productos escalables y centrados en el usuario. Me enfoco en construir sistemas que estén claramente diseñados, sean observables y fáciles de evolucionar—balanceando velocidad con confiabilidad para que los equipos puedan entregar impacto empresarial sin sacrificar calidad.",
    core_stack:
      "<strong>Stack principal:</strong> Angular, React, Next.js, Node.js, Express, Java (Spring Boot), PostgreSQL/SQL, JavaScript, HTML, Tailwind CSS.",
    design_architecture:
      "<strong>Diseño y Arquitectura:</strong> 2+ años en diseño de software—especificación de requisitos, estándares, modelado de dependencias y escalado.",
    development: "<strong>Desarrollo:</strong> 3+ años de experiencia práctica en frontend, backend e integraciones.",
    devops:
      "<strong>DevOps</strong> (rol de apoyo): 2+ años aplicando prácticas de CI/CD y plataforma con Docker, Kubernetes, GitHub Actions, IaC (Terraform), registros de contenedores y monitorización/logging (Prometheus/Grafana/ELK) para acortar el tiempo de entrega y aumentar la confianza en el despliegue.",
    sobre_mi_p2:
      "Me preocupo profundamente por la intersección de producto e ingeniería: descubrimiento obsesionado con el cliente, decisiones informadas por datos y ciclos de retroalimentación rápidos. Asumo la responsabilidad desde el planteamiento del problema hasta la producción, favorezco interfaces claras y módulos testeables, y optimizo para la mantenibilidad y el coste total de propiedad. Obtuve honores en múltiples cursos durante mi Grado en Ingeniería del Software, concentrándome en Ingeniería de Software y Gestión de Proyectos—especialmente Desarrollo Rápido de Aplicaciones, que afiló mi capacidad para iterar rápidamente, validar con usuarios y convertir la ambigüedad en software desplegable.",
    sobre_mi_p3:
      "Si estás buscando a alguien que pueda moverse desde los requisitos hasta la producción confiable, colaborar a través de funciones y elevar continuamente el listón—estoy listo para contribuir. Conectemos.",
    tecnologias_manejo: "<strong>Tecnologías</strong> que manejo:",
  },
}

// Función para actualizar el contenido del sitio web según el idioma seleccionado
function updateLanguage(langCode) {
  document.getElementById("linkedin").textContent = data[langCode].linkedin
  document.getElementById("github").textContent = data[langCode].github
  document.getElementById("inicio").textContent = data[langCode].inicio
  document.getElementById("proyectos").textContent = data[langCode].proyectos
  document.getElementById("sobre_mi_title").textContent = data[langCode].sobre_mi_title
  document.getElementById("proyectos_title").textContent = data[langCode].proyectos_title
  document.getElementById("experiencia_title").textContent = data[langCode].experiencia_title
  document.getElementById("paylex_desc").textContent = data[langCode].paylex_desc
  document.getElementById("agsolution_desc").textContent = data[langCode].agsolution_desc
  document.getElementById("educacion_title").textContent = data[langCode].educacion_title
  document.getElementById("sobre_mi").textContent = data[langCode].sobre_mi
  document.getElementById("sobre_mi_description").innerHTML = data[langCode].sobre_mi_description
  document.getElementById("core_stack").innerHTML = data[langCode].core_stack
  document.getElementById("design_architecture").innerHTML = data[langCode].design_architecture
  document.getElementById("development").innerHTML = data[langCode].development
  document.getElementById("devops").innerHTML = data[langCode].devops
  document.getElementById("sobre_mi_p2").innerHTML = data[langCode].sobre_mi_p2
  document.getElementById("sobre_mi_p3").innerHTML = data[langCode].sobre_mi_p3
  document.getElementById("tecnologias_manejo").innerHTML = data[langCode].tecnologias_manejo

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
