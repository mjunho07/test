const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${Minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);
//setTimeout(sayHello,5000); = 5000ms(5초)뒤에 최초 한 번만 실행