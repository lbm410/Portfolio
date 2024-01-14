const darkMode = document.querySelector(".dark-mode");

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkMode.querySelector("span:nth-child(1)").classList.toggle("active");
  darkMode.querySelector("span:nth-child(2)").classList.toggle("active");
});

const langs = document.querySelector(".langs"),
    links = document.querySelectorAll(".idioma-desplegable a"),
    linkedin = document.querySelector(".a #linkedin"),
    github = document.querySelector("#github"),
    inicio = document.querySelector("#inicio"),
    proyectos = document.querySelector("#proyectos"),
    sobre_mi = document.querySelector("#sobre_mi"),
    tecnologias_utilizadas = document.querySelector("#tecnologias_utilizadas"),
    tecnologias_manejo = document.querySelector("#tecnologias_manejo"),
    p1 = document.querySelector("#p1"),
    p2 = document.querySelector("#p2"),
    p3 = document.querySelector("#p3");

let data = {
    english: {
        linkedin: "Visit my LinkedIn",
        // Agrega otros textos en inglés aquí
    },
    spanish: {
        linkedin: "Visita mi LinkedIn",
        // Agrega otros textos en español aquí
    },
    // Puedes agregar más idiomas según sea necesario
};

links.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        langs.querySelector(".active").classList.remove("active");
        el.classList.add("active");

        const attr = el.dataset.lang

        linkedin.textContent = data[attr].linkedin;

    });
});


