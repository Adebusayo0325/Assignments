let play = document.querySelector("#btn-play");

let reSet = document.querySelector("#btn-reset");

let Timer = document.getElementById("timer")


let seconds = 0;
let minutes = 0;
let hours = 0;



let timerStatus = "stopped";
let timerInterval = null;


let leadingSeconds = 0;

let leadingMinutes = 0;
let leadingHours = 0;


function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++

        if (minutes /60 === 1) {
            minutes = 0;
            hours++


        }
    }

    if (seconds > 0) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }


    if (minutes > 0) {

        leadingMinutes = "0" + minutes.toString();

    } else {
        leadingMinutes = minutes;
    }

    if (hours > 0) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingSeconds = seconds;
    }


    let TimerShow = document.querySelector('#timer').innerText = hours + ":" + minutes + ":" + seconds;

}

play.addEventListener("click", function() {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 10);
        document.getElementById("btn-play").innerHtml = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
        timerStatus = "started";

    } else {
        window.clearInterval(timerInterval);


        document.getElementById("btn-play").innerHtml = `<i class = "fa-solid fa-play" id = "play" ></i>`;

        timerStatus = "stopped";

    }



});


reSet.addEventListener("click", function() {
    window.clearInterval(timerInterval);

    seconds = 0;

    minutes = 0;

    hours = 0;


    document.getElementById("timer").innerHtml = "00:00:00";

});