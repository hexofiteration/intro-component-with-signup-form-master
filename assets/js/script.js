let form = document.querySelector(".form");
let inputList = Array.from(document.querySelectorAll("input"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isInputValid();
});
function isInputValid() {
  inputList.forEach((input) => {
    if (!input.validity.valid) {
      input.nextElementSibling.classList.remove("hide");
    } else {
      input.nextElementSibling.classList.add("hide");
    }
  });
}
