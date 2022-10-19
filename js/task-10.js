function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let boxSize = 30
const input = document.querySelector(".input")
const buttonCreate = document.querySelector(".button-create")
const buttonDestroy = document.querySelector(".button-destroy")
const divBoxes = document.querySelector("#boxes")




function createBoxes () {
  buttonCreate.addEventListener("click", () => {
    for(let i = 1; i <= input.value ; i++) {
     const box = document.createElement("div")
     box.style.width = `${boxSize}px`
     box.style.height = `${boxSize}px`
     divBoxes.append(box)
     box.style.backgroundColor = `${getRandomHexColor()}`
     boxSize += 10
   }
   })
   
  
}
function destroyBoxes() {
  buttonDestroy.addEventListener("click", () => {
    divBoxes.innerHTML = "";
    input.value = "";
    boxSize = 30
  })
}
createBoxes();
destroyBoxes()
