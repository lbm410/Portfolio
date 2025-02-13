let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || window.pageYOffset;

    if (currentScroll <= 0) {
        document.querySelector('.header').classList.remove('hidden');
        document.querySelector('.header').classList.add('visible');
    } else {
        document.querySelector('.header').classList.add('hidden');
        document.querySelector('.header').classList.remove('visible');
    }
});

const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode-variables");
    darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
    darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Textos en inglés y español
const data = {
    EN: {
        linkedin: "Visit my LinkedIn",
        github: "Visit my GitHub",
        inicio: "Home",
        proyectos: "Projects",
        sobre_mi_title: "About me",
        proyectos_title: "Projects",
        tecnologias_utilizadas: "Technologies used in the project:",
        sobre_mi: "About me",
        sobre_mi_description: "Hi! I'm Lucas, a fourth-year student of <mark>Computer Engineering</mark> at the <strong>University of Almería</strong>. In these four years, I have built a solid foundation in <strong>programming</strong>, developing skills in languages such as <mark>Java</mark>, <mark>JavaScript</mark>, <mark>React</mark>, and in the use of <mark>NodeJS</mark> and <mark>Express</mark>, proficiently using tools like <mark>Visual Studio</mark> and <mark>IntelliJ</mark>.",
        sobre_mi_p2: "And although I could tell you that I handle Assembly Language (and it's true), what I really want you to know about me is that I am a tireless learner and a technology enthusiast, always willing to grow and overcome new challenges. I am motivated by the idea of combining my passion for technology with a tangible impact on people and companies.",
        sobre_mi_p3: "If you are looking for someone who not only codes but also understands the meaning of their work, is open to learning, and always seeks ways to improve, I would love to connect with you and explore possible opportunities.",
        tecnologias_manejo: "<mark>Technologies</mark> I handle:"
    },
    ES: {
        linkedin: "Visita mi LinkedIn",
        github: "Visita mi GitHub",
        inicio: "Inicio",
        proyectos: "Proyectos",
        sobre_mi_title: "Sobre mi",
        proyectos_title: "Proyectos",
        tecnologias_utilizadas: "Tecnologías utilizadas en el proyecto:",
        sobre_mi: "Sobre mi",
        sobre_mi_description: "¡Hola! Soy Lucas, un estudiante de cuarto año de <mark>Ingeniería Informática</mark> en la <strong>Universidad de Almería</strong>. En estos cuatro años, he construido una sólida base en <strong>programación</strong>, desarrollando habilidades en lenguajes como <mark>Java</mark>, <mark>JavaScript</mark>, <mark>React</mark> y en el uso de <mark>NodeJS</mark> y <mark>Express</mark>, manejándome con soltura en herramientas como <mark>Visual Studio</mark> e <mark>IntelliJ</mark>.",
        sobre_mi_p2: "Y aunque te podría decir que manejo Ensamblador (y es cierto), lo que realmente quiero que sepas de mí es que soy un aprendiz incansable y un entusiasta de la tecnología, siempre dispuesto a crecer y a superar nuevos retos. Me motiva la idea de combinar mi pasión por la tecnología con un impacto tangible en las personas y las empresas.",
        sobre_mi_p3: "Si estás buscando a alguien que no solo codifique, sino que comprenda el significado de su trabajo, esté abierto al aprendizaje y siempre busque formas de mejorar, me encantaría conectarme contigo y explorar posibles oportunidades.",
        tecnologias_manejo: "<mark>Tecnologías</mark> que manejo:"
    }
};

// Función para actualizar el contenido del sitio web según el idioma seleccionado
function updateLanguage(langCode) {
    document.getElementById("linkedin").textContent = data[langCode].linkedin;
    document.getElementById("github").textContent = data[langCode].github;
    document.getElementById("inicio").textContent = data[langCode].inicio;
    document.getElementById("proyectos").textContent = data[langCode].proyectos;
    document.getElementById("sobre_mi_title").textContent = data[langCode].sobre_mi_title;
    document.getElementById("proyectos_title").textContent = data[langCode].proyectos_title;
    document.getElementById("sobre_mi").textContent = data[langCode].sobre_mi;
    document.getElementById("sobre_mi_description").innerHTML = data[langCode].sobre_mi_description;
    document.getElementById("sobre_mi_p2").innerHTML = data[langCode].sobre_mi_p2;
    document.getElementById("sobre_mi_p3").innerHTML = data[langCode].sobre_mi_p3;
    document.getElementById("tecnologias_manejo").innerHTML = data[langCode].tecnologias_manejo;

    // Actualiza múltiples elementos de tecnologías utilizadas
    document.querySelectorAll('.tecnologias_utilizadas').forEach(el => {
        el.textContent = data[langCode].tecnologias_utilizadas;
    });
}

// Evento para alternar el idioma cuando se cambia el estado del toggle button
document.getElementById('chk').addEventListener('change', (event) => {
    if (event.target.checked) {
        updateLanguage('EN'); // Cambiar a inglés si el toggle está activado
    } else {
        updateLanguage('ES'); // Cambiar a español si el toggle está desactivado
    }
});

