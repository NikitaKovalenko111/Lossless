body = document.body;
mobileMenu = document.querySelector("#mobile-menu");
closeButton = document.querySelector("#close-button");
openButton = document.querySelector("#burger-menu");

openButton.addEventListener("click", (e) => {
    e.preventDefault();

    body.style.overflow = "hidden";
    mobileMenu.classList.toggle("mobile-menu--active");
});

closeButton.addEventListener("click", (e) => {
    e.preventDefault();

    body.style.overflow = "auto";
    mobileMenu.classList.toggle("mobile-menu--active");
});
