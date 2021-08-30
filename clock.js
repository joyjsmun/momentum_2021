const clockContainer = document.querySelector("#clock");
let clock = document.querySelector("#clock h1");


function handleClock(){
    const time = new Date();
    const hours = String(time.getHours()).padStart(2,'0');
    const mins = String(time.getMinutes()).padStart(2,'0');
    const sec = String(time.getSeconds()).padStart(2,'0');
    
    clock.innerText = `${hours}:${mins}:${sec}`
}

handleClock()

setInterval(handleClock,1000);