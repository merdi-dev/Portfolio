

/******************************************************** 
*   Menu au formant mobile (Gestion de la responsivité )
*
********************************************************/

document.addEventListener("DOMContentLoaded", () => {

  // - Date du footer
  document.getElementById("date").textContent = new Date().getFullYear();
  // - Version
  document.getElementById("auteur").textContent = "by merdi dev v1.0";

})

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector(".menu");
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  menu.addEventListener('click', () => {
    // toggle menu mobile
    navLinks.classList.toggle('mobile-menu');
    document.body.classList.toggle('no-scroll');
    navbar.classList.remove('scroller');

    /** Changer l'icône */
    if (navLinks.classList.contains('mobile-menu')) {
      // menu ouvert → croix
      menuIcon.classList.remove('fa-reorder');
      menuIcon.classList.add('fa-fa-solid');
    } else {
      // menu fermé → hamburger
      menuIcon.classList.remove('fa-solid');
      menuIcon.classList.add('fa-reorder');
    }

  }); //menuIcon.textContent = menuIcon.textContent === '✖' ? '☰' : '✖';
})

/* 
document.addEventListener("DOMContentLoaded", () => {

function menuBerger() {
  const menu = document.querySelector(".menu")
  const navLinks = document.querySelector(".nav-links")

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
    document.body.classList.toggle('no-scroll');
  })
}
 */