const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");


const originalHamburgerHTML = toggleButton.innerHTML;

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; 
    } else {
        toggleButton.innerHTML = originalHamburgerHTML; 
    }
});

const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        toggleButton.innerHTML = originalHamburgerHTML;
    });
});