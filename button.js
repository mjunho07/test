const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
const time2 = document.querySelector('.time2');
const countClass = document.querySelector('.count');
let count = 0;

let interval;
let minute = 0;
let second = 5;

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
        minute = 0;
        second = 5;
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
        clearInterval(interval);
        time2.classList.remove('hide');
        time.classList.add('hide');
        second = 5;
        time2.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
        interval = setInterval(startTimer2,OENSECOND);
        count++;
        countClass.innerText = count;
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
        clearInterval(interval);
        time.classList.remove('hide');
        time2.classList.add('hide');
        second = 5;
        time.innerText = `${String(minute).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
        interval = setInterval(startTimer,OENSECOND);
    }
}
button.addEventListener("click",handleTimer);
reset.addEventListener("click",onReset);