let input = document.querySelector("#name-input")
let span = document.querySelector("#name-output")

input.addEventListener("input", () => input.value !== "" ? span.innerHTML = input.value: span.innerHTML = "Annonymous")