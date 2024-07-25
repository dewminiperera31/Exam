document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.navbar-toggler');
    const navMenu = document.querySelector('.navbar-collapse');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    const languageSwitcher = document.querySelector('.language-switcher select');
    languageSwitcher.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        alert(`Language switched to ${selectedLanguage}`);
    });
});
