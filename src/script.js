document.addEventListener("DOMContentLoaded", () => {
    const headerMenuElement = document.querySelector(".header__menu");

    headerMenuElement.addEventListener("click", () => {
        let menuItemElement = document.querySelector(".menu__item");

        if (menuItemElement) {
            menuItemElement.classList.toggle("hidden");
        }
    });
});
