
var button = document.querySelector(".search__button");
var form = document.querySelector(".search-form-block");

button.addEventListener("click", function (evt) {
evt.preventDefault();
form.classList.toggle("search-form");
});
