const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
const time2 = document.querySelector('.time2');

let interval;
let minute = 60;
let second = 0;

const OENSECOND = 1000; 

function handleTimer(){
    const clickedClass = "clicked";
    if(button.classList.contains(clickedClass)){
        button.classList.remove(clickedClass);
        button.innerText = "START";
        clearInterval(interval);
    }else {
        button.classList.add(clickedClass);
        button.innerText = "STOP";
        interval = setInterval(startTimer,OENSECOND);
    }
}
function onReset(){
    const resetCheck = prompt("real? typing 'reset'");
    if(resetCheck == "reset"){
        minute = 60;
        second = 0;
        time.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
        time2.classList.add('hide');
        time.classList.remove('hide');
        clearInterval(interval);
        interval = setInterval(startTimer,OENSECOND);
    }
}
function startTimer(){
    if(second > 0){
        second--;
        time.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    }
    else if(minute > 0){
        minute--;
        second = 59;
        time.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    }else{
        time.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
        clearInterval(interval);
        time2.classList.remove('hide');
        time.classList.add('hide');
        minute = 5;
        interval = setInterval(startTimer2,OENSECOND);
    }
}
function startTimer2(){
    if(second > 0){
        second--;
        time2.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    }
    else if(minute > 0){
        minute--;
        second = 59;
        time2.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    }else{
        time2.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
        clearInterval(interval);
        time.classList.remove('hide');
        time2.classList.add('hide');
        minute = 60
        time2.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
        interval = setInterval(startTimer,OENSECOND);
    }
}
button.addEventListener("click",handleTimer);
reset.addEventListener("click",onReset);