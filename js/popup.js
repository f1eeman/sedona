const btnm = document.querySelector(".open-modal-popup");
const formn = document.querySelector(".appointment-form");
btnm.addEventListener("click", function(evt) {
    evt.preventDefault();
    formn.classList.toggle("modal-show");
});