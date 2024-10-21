const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
let interval;
let minute = 60;
let second = 0;

function handleTimer(){
    const clickedClass = "clicked";
    if(button.classList.contains(clickedClass)){
        button.classList.remove(clickedClass);
        button.innerText = "START";
        clearInterval(interval);
    }else {
        button.classList.add(clickedClass);
        button.innerText = "STOP";
        interval = setInterval(startTimer,1000);
    }
}
function onReset(){
    const resetCheck = prompt("real? typing 'reset'")
    if(resetCheck == "reset"){
        minute = 60;
        second = 0;
        time.innerText = `${minute}:${second}`;
    }
}
function startTimer(){
    if(second > 0){
        second--;
        time.innerText = `${minute}:${second}`;
    }
    else if(minute > 0){
        minute--;
        second = 59;
        time.innerText = `${minute}:${second}`;
    }else{
        time.innerText = `${minute}:${second}`;
    }
}
button.addEventListener("click",handleTimer);
reset.addEventListener("click",onReset);