const form = document.querySelector(".login-form");


function handleSubmit(event) {
event.preventDefault();
const {
    elements: {email, password} 
} = event.currentTarget;
console.log(email.value)
if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const cridentials = {email: email.value, password: password.value }
  console.log(cridentials);
  event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit)