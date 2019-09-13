const openModal = document.querySelector(".open-modal-popup");
const popup = document.querySelector(".modal-popup");
const form = popup.querySelector("form");
const arrivalDate = form.querySelector("[name=arrival-date]")
const departureDate = form.querySelector("[name=departure-date]")
openModal.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");
    popup.classList.remove("modal-error");
    arrivalDate.focus();
});
form.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});
window.addEventListener("keydown", function(evt) {
    if ((evt.keyCode === 27) && (popup.classList.contains("modal-show"))) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
    }
});