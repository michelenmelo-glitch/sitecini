// ================================
// MENU MOBILE
// ================================

function abrirMenu() {
    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("ativo");
}


// ================================
// BOTÃO DE EXPERIMENTAR
// ================================

function mostrarMensagem() {

    alert(
        "🥤 CINI!\n\n" +
        "Obrigado pelo interesse! " +
        "Agora é só escolher seu sabor favorito e aproveitar."
    );

}


// ================================
// FECHAR MENU AO CLICAR
// ================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("ativo");

    });

});


// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const elementos = document.querySelectorAll(
    ".card, .beneficio, .produto-imagem, .produto-texto"
);

const observador = new IntersectionObserver(
    function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "all 0.7s ease";

    observador.observe(elemento);

});
