
var button = document.querySelector(".reservation__search-button");
var form = document.querySelector(".reservation-form");

form.classList.add("reservation-form-block");
button.addEventListener("click", function (evt) {
evt.preventDefault();
form.classList.toggle("reservation-form-block");
});
