// JavaScript para controlar el comportamiento del encabezado en dispositivos móviles
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll <= 0) {
        // Estás arriba del todo
        document.querySelector('.header').classList.remove('hidden');
        document.querySelector('.header').classList.add('visible');
    } else {
        // Estás bajando
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
    const sobre_mi_description = document.getElementById("sobre_mi_description");

    let data = {
        english: {
            linkedin: "Visit my LinkedIn",
            sobre_mi_description: "Hello! I'm Lucas, a third-year student of <mark>Computer Engineering</mark> at the <strong>University of Almería</strong>. Over these three years, I have built a solid foundation in <strong>programming</strong>, developing skills in languages such as <mark>Java</mark>, <mark>C#</mark>, <mark>JavaScript</mark>, and in the use of <mark>HTML</mark> and <mark>CSS</mark>, adept at handling tools like <mark>Visual Studio</mark> and <mark>Eclipse</mark>.",
            // Agrega otros textos en inglés aquí
        },
        spanish: {
            linkedin: "Visita mi LinkedIn",
            sobre_mi_description: "¡Hola! Soy Lucas, un estudiante de tercer año de <mark>Ingeniería Informática</mark> en la <strong>Universidad de Almería</strong>. En estos tres años, he construido una sólida base en <strong>programación</strong>, desarrollando habilidades en lenguajes como <mark>Java</mark>, <mark>C#</mark>, <mark>JavaScript</mark> y en el uso de <mark>HTML</mark> y <mark>CSS</mark>, manejándome con soltura en herramientas como <mark>Visual Studio</mark> y <mark>Eclipse</mark>.",

            // Agrega otros textos en español aquí
        },
        // Puedes agregar más idiomas según sea necesario
    };

    links.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Verificar si el elemento con la clase 'active' existe
            const activeElement = langs.querySelector(".active");
            if (activeElement) {
                activeElement.classList.remove("active");
            }
            
            el.classList.add("active");
    
            const attr = el.dataset.lang;
    
            linkedin.textContent = data[attr].linkedin;
        });
    });
    
});




