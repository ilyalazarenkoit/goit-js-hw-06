let input = document.querySelector("#validation-input")

input.addEventListener("blur", () => {
if(input.value.length >= input.dataset.length) {
    input.classList.contains("invalid") ? input.classList.remove("invalid") : false;
    input.classList.add("valid");
}else{
    input.classList.contains("valid") ? input.classList.remove("valid") : false;
    input.classList.add("invalid");
}
})

