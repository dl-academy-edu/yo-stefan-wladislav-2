const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn__js');
/* const pouring = document.querySelector('.pouring'); */
const closePopup = document.querySelector('.modal__close');
const formName = document.activeElement('.form__name');

btn.addEventListener('click', () => {
    popup.classList.add('open');
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('open');
});

/* closePopup.addEventListener('click', () => {
    popup.classList.remove('close');
}); */


/* window.addEventListener("keydown", function(e) {
    if (e.keyCode === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
        btn.focus();
    }
}); */