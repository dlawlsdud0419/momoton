const clock = document.querySelector(".js-clock .clock__text");
let nowhours;

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    clock.innerHTML = time;
    nowhours = hours;
    return;
  }

function init(){
    getTime();
    setInterval(getTime, 1000);  // getTime()함수 1초당 실행
    return;
}

init();