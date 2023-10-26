// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong, make sure that ${selector} exists or is typed correctly.`);
};

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
};

window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon-btn');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(event.key == 'Escape') {
        searchFormContainer.classList.remove('activated');
    }
});
// Switch theme/add to local storage
const bodyElement = document.body; //Variable to store body element
const themeToggleBtn = selectElement('#theme-toggle-btn'); 
const currentTheme = localStorage.getItem('currentTheme'); // Get current item stored in local storage

// Check if there is a current theme. If there is the body element will get the class and trigger styles.
if(currentTheme) {
    bodyElement.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    // Add theme toggle to local storage so that it is saved when refreshed.
    if(bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});
// Swiper
const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   spaceBetween: 20,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
   },
   pagination: {
    el: '.swiper-pagination'
   },
   // Responsive breakpoints for how many slides to show.
   breakpoints: {
    // 700px+ shows 2
    700: {
        slidesPerView: 2
    },
    // 1200px+ shows 3
    1200: {
        slidesPerView: 3
    }
   }
});