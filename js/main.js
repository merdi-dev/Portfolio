
/******************************************************** 
*  Evenement au préchargement de la page
*
********************************************************/

function prechargement() {

  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("prechargement");
    const content = document.querySelector(".content");

    // Masquer le préchargeur avec effet fondu
    preloader.classList.add("fade-out");

    // Quand l'animation du préchargeur est terminée
    preloader.addEventListener('transitionend', () => {
      preloader.style.display = 'none';
      // Afficher le contenu avec fondu
      content.classList.add("visible");
    });
  });
}

/******************************************************** 
*   Menu au formant mobile (Gestion de la responsivité )
*
********************************************************/
function menuBerger() {
  const menu = document.querySelector(".menu")
  const navLinks = document.querySelector(".nav-links")

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    document.body.classList.toggle('no-scroll');
  })
}

// - Date du footer
document.getElementById("date").textContent = new Date().getFullYear();

// - Version
document.getElementById("auteur").textContent = "by merdi dev v1.0.0";

prechargement()
menuBerger()
