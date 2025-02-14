import "preline";
import { Logger } from "sass";

//back to top Start
var toTopButton = document.getElementById("to-top-button");

// Check if the button exists
if (toTopButton) {

    // On scroll event, toggle button visibility based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    };

    // Function to scroll to the top of the page smoothly
    window.goToTop = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}
//back to top End

// navbar Start
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100 && window.innerWidth >= 320) {
        navbar.classList.add('bg-black', 'text-white', 'transition-colors', 'duration-500');
    } else {
        navbar.classList.remove('bg-black', 'text-white', 'transition-colors', 'duration-500');
    }
});

// mean 
function toggleMenu(btn) {
    const el = btn.parentElement.querySelector('.subMenu')
    el.classList.toggle('hidden')
}

const btns = document.querySelectorAll('.hasSubMenu')
btns.forEach(btn => {
    btn.addEventListener('click', function () {
        toggleMenu(btn)
    })
})

// ltr to rtl
const button = document.getElementById('toggleButton');
const html = document.documentElement;

button.addEventListener('click', function () {
    if (html.getAttribute('dir') === 'ltr') {
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('dir', 'ltr');
    }
});