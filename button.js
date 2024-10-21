const button = document.querySelector('.button');
const reset = document.querySelector('.reset');
function timeStart(){
    const clickedClass = "clicked";
    if(button.classList.contains(clickedClass)){
        button.classList.remove(clickedClass);
        button.innerText = "START"
        console.log("타이머 정지");
    }else {
        button.classList.add(clickedClass);
        button.innerText = "STOP";
        console.log("타이머 시작,재개");
    }
}
function onReset(){
    const resetCheck = prompt("real?typing the 'reset'")
    if(resetCheck == "reset"){
        console.log("초기화");
    }
}
button.addEventListener("click",timeStart);
reset.addEventListener("click",onReset);