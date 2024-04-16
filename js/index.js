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

document.addEventListener("DOMContentLoaded", function () {
    const langs = document.querySelector(".langs");
    const links = document.querySelectorAll(".idioma-desplegable a");
    const linkedin = document.getElementById("linkedin");
    const github = document.getElementById("github");
    const proyectos = document.getElementById("proyectos");
    const proyectos_title = document.getElementById("proyectos_title");
    const inicio = document.getElementById("inicio");
    const sobre_mi_title = document.getElementById("sobre_mi_title");
    const sobre_mi = document.getElementById("sobre_mi");
    const sobre_mi_description = document.getElementById("sobre_mi_description");
    const sobre_mi_p2 = document.getElementById("sobre_mi_p2");
    const sobre_mi_p3 = document.getElementById("sobre_mi_p3");
    const tecnologias_utilizadas = document.querySelectorAll('.tecnologias_utilizadas');

    let data = {
        english: {
            linkedin: "Visit my LinkedIn",
            github: "Visit my GitHub",
            inicio: "Home",
            proyectos: "Projects",
            sobre_mi_title : "About me",
            proyectos_title: "Projects",
            tecnologias_utilizadas: "Technologies used in the project:",
            sobre_mi: "About me",
            sobre_mi_description: "Hi! I'm Lucas, a third-year student of <mark>Computer Engineering</mark> at the <strong>University of Almería</strong>. In these three years, I have built a solid foundation in <strong>programming</strong>, developing skills in languages such as <mark>Java</mark>, <mark>C#</mark>, <mark>JavaScript</mark>, and in the use of <mark>HTML</mark> and <mark>CSS</mark>, proficiently using tools like <mark>Visual Studio</mark> and <mark>Eclipse</mark>.",
            sobre_mi_p2: "And although I could tell you that I handle basic Assembly (and it's true), what I really want you to know about me is that I am a tireless learner and a technology enthusiast, always willing to grow and overcome new challenges. I am motivated by the idea of combining my passion for technology with a tangible impact on people and companies.",
            sobre_mi_p3: "If you are looking for someone who not only codes but also understands the meaning of their work, is open to learning, and always seeks ways to improve, I would love to connect with you and explore possible opportunities.",
        },
        spanish: {
            linkedin: "Visita mi LinkedIn",
            github: "Visita mi GitHub",
            inicio: "Inicio",
            proyectos: "Proyectos",
            sobre_mi_title : "Sobre mi",
            proyectos_title: "Proyectos",
            tecnologias_utilizadas: "Tecnologías utilizadas en el proyecto:",
            sobre_mi: "Sobre mi",
            sobre_mi_description: "¡Hola! Soy Lucas, un estudiante de tercer año de <mark>Ingeniería Informática</mark> en la <strong>Universidad de Almería</strong>. En estos tres años, he construido una sólida base en <strong>programación</strong>, desarrollando habilidades en lenguajes como <mark>Java</mark>, <mark>C#</mark>, <mark>JavaScript</mark> y en el uso de <mark>HTML</mark> y <mark>CSS</mark>, manejándome con soltura en herramientas como <mark>Visual Studio</mark> y <mark>Eclipse</mark>.",
            sobre_mi_p2: "Y aunque te podría decir que manejo Ensamblador básico (y es cierto), lo que realmente quiero que sepas de mí es que soy un aprendiz incansable y un entusiasta de la tecnología, siempre dispuesto a crecer y a superar nuevos retos. Me motiva la idea de combinar mi pasión por la tecnología con un impacto tangible en las personas y las empresas.",
            sobre_mi_p3: "Si estás buscando a alguien que no solo codifique, sino que comprenda el significado de su trabajo, esté abierto al aprendizaje y siempre busque formas de mejorar, me encantaría conectarme contigo y explorar posibles oportunidades.",
        },
    };

    links.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();            
            const activeElement = langs.querySelector(".active");
            if (activeElement) {
                activeElement.classList.remove("active");
            }
            
            el.classList.add("active");
    
            const attr = el.dataset.lang;
    
            linkedin.textContent = data[attr].linkedin;

            github.textContent = data[attr].github;

            proyectos.textContent = data[attr].proyectos;

            inicio.textContent = data[attr].inicio;

            sobre_mi_title.textContent = data[attr].sobre_mi_title;

            sobre_mi.textContent = data[attr].sobre_mi;

            sobre_mi_description.innerHTML = data[attr].sobre_mi_description;

            sobre_mi_p2.innerHTML = data[attr].sobre_mi_p2;

            sobre_mi_p3.innerHTML = data[attr].sobre_mi_p3;

            proyectos_title.textContent = data[attr].proyectos_title;

            tecnologias_utilizadas.forEach(element => {
                element.textContent = data[attr].tecnologias_utilizadas;
            });
        });
    });
    
});




