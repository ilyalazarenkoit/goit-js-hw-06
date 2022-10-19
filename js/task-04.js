let counterValue = 0;
let value = document.querySelector("#value")
let button1 = document.querySelector('button[data-action="decrement"]')
let button2 = document.querySelector('button[data-action="increment"]')

button1.addEventListener("click",() => {
counterValue -= 1
value.innerHTML = counterValue;
});

button2.addEventListener("click", () => { 
counterValue += 1
value.innerHTML = counterValue;
});


