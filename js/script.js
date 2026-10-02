const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    const isOpen =
        navMenu.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* ==========================================
   FECHAR MENU AO CLICAR EM UM LINK
========================================== */

const navLinks =
    document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* ==========================================
   HEADER AO ROLAR A PÁGINA
========================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   ANIMAÇÃO DOS ELEMENTOS
========================================== */

const elementsToAnimate = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".stat-card, " +
    ".skill-card, " +
    ".project-card, " +
    ".timeline-item, " +
    ".contact-box"
);


elementsToAnimate.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


elementsToAnimate.forEach(element => {

    observer.observe(element);

});


/* ==========================================
   ANO AUTOMÁTICO
========================================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}