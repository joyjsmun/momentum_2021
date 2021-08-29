const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const body = document.querySelector("body");
const HIDDEN_KEY = "hidden";
const USER_NAME = "username"


body.style.backgroundColor ="tomato"


function paintName(user){
    greeting.classList.toggle("greeting")
    greeting.innerText = `Good Day! ${user}`;
    
}


function handleSubmit(event){
    event.preventDefault();
    const user = loginInput.value;
    localStorage.setItem(USER_NAME,user)
    loginInput.value = "";
    loginForm.classList.add("login-form")
    paintName(user);
    
}

const savedUser = localStorage.getItem(USER_NAME);

if(savedUser){
    greeting.classList.remove(HIDDEN_KEY);
    paintName(savedUser);
}else{
    loginForm.classList.remove(HIDDEN_KEY);
    loginForm.addEventListener("submit",handleSubmit);  
}
