let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let paused = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

startBtn.addEventListener('click', startWatch);
pauseBtn.addEventListener('click', pauseWatch);
stopBtn.addEventListener('click', stopWatch);
resetBtn.addEventListener('click', resetWatch);

function startWatch() {
    if (!running) {
        if (paused) {
            startTime = new Date().getTime() - difference;
        } else {
            startTime = new Date().getTime();
        }
        tInterval = setInterval(getShowTime, 1);
        running = true;
        paused = false;
        startBtn.textContent = "Resume";
        startBtn.style.backgroundColor = "#28a745";
    }
}

function pauseWatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        paused = true;
        startBtn.textContent = "Resume";
        startBtn.style.backgroundColor = "#28a745";
    }
}

function stopWatch() {
    clearInterval(tInterval);
    running = false;
    paused = false;
    startBtn.textContent = "Start";
    startBtn.style.backgroundColor = "#007bff";
    difference = 0;
    display.textContent = "00:00:00.000";
}

function resetWatch() {
    clearInterval(tInterval);
    running = false;
    paused = false;
    difference = 0;
    display.textContent = "00:00:00.000";
    startBtn.textContent = "Start";
    startBtn.style.backgroundColor = "#007bff";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.textContent = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
