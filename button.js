const button = document.querySelector('.button');
function timeStart(){
    const clickedClass = "clicked";
    if(button.classList.contains(clickedClass)){
        button.classList.remove(clickedClass);
        button.innerText = "START"
    }else {
        button.classList.add(clickedClass);
        
        button.innerText = "STOP";
    }
}
button.addEventListener("click",timeStart);