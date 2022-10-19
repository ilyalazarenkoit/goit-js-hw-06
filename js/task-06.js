let input = document.querySelector("#validation-input")

input.addEventListener("blur", () => input.value.length >= input.dataset.length ? input.classList.toggle("valid") : input.classList.toggle("invalid"))