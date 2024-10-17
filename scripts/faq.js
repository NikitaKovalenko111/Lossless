const faqButtons = document.querySelectorAll(".faq__item-button");

faqButtons.forEach((el) => {
    el.addEventListener("click", (el) => {
        if (el.currentTarget.classList.contains("faq__item-button--plus")) {
            el.currentTarget.classList.remove("faq__item-button--plus");
            el.currentTarget.classList.add("faq__item-button--minus");
            el.currentTarget.parentElement.parentElement.children[1].classList.remove(
                "visually-hidden"
            );
        } else {
            el.currentTarget.classList.remove("faq__item-button--minus");
            el.currentTarget.classList.add("faq__item-button--plus");
            el.currentTarget.parentElement.parentElement.children[1].classList.add(
                "visually-hidden"
            );
        }
    });
});
