const button = document.querySelector('.button');
const timer = document.querySelector('.time');
function handleButton(){
    const clickedClass = "clicked";
    if(button.classList.contains(clickedClass)){
        button.classList.remove(clickedClass);
        button.innerText = "START"
    }else {
        button.classList.add(clickedClass);
        button.innerText = "STOP";
        setInterval(startTimer,1000);
    }
}
function startTimer(){

}
button.addEventListener("click",handleButton);