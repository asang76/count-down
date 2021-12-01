const daysE1 =  document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondE1 = document.getElementById('seconds');

const newYears = "1 jan 2022";


function countDown (){
    const newYearsDate = new Date(newYears);
    const CurrentDate = new Date();

    const totalSeconds=(newYearsDate - CurrentDate ) /1000;
    

// console.log(totalSeconds)


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    

    daysE1.innerHTML = days;
    hoursE1.innerHTML= formatTime(hours)
    minsE1.innerHTML = formatTime(mins);
    secondE1.innerHTML = formatTime(seconds);
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown , 1000);
