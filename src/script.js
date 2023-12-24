// top menu

const menuElement = document.querySelector(".fa-bars")

menuElement.addEventListener("click", () => {
    let menuItem = document.querySelector(".menu__item")

    if(menuItem && menuItem.classList.contains("hidden")){
        menuItem.classList.remove("hidden")
    } else {
        menuItem.classList.add("hidden")
    }

})
