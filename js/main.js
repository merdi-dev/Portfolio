
//Menu au formant mobile
const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")

menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})

//Date du footer
document.getElementById("date").textContent = new Date().getFullYear();

