const LoginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
//STRING 만 할당하는 변수일 경우 대문자로
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function paintingGreeting(username){
    greeting.classList.remove("hidden");
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`;
}
function onLoginSubmit(event){
    event.preventDefault();
    const username  = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    LoginForm.classList.add("hidden");
    paintingGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    LoginForm.classList.remove("hidden");
    LoginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintingGreeting(savedUsername);
}

