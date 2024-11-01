let startTime = 0;
let updatedTime = 0;
let difference = 0;
let isRunning = false;
let interval;
let lapCount = 0;
const timeDisplay = document.getElementById("time-display");
const lapContainer = document.getElementById("laps");

document.getElementById("start-btn").addEventListener("click", start);
document.getElementById("pause-btn").addEventListener("click", pause);
document.getElementById("reset-btn").addEventListener("click", reset);
document.getElementById("lap-btn").addEventListener("click", lap);

function start() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - difference;
    interval = setInterval(updateTime, 1000);
  }
}

function pause() {
  if (isRunning) {
    isRunning = false;
    difference = Date.now() - startTime;
    clearInterval(interval);
  }
}

function reset() {
  isRunning = false;
  clearInterval(interval);
  startTime = 0;
  updatedTime = 0;
  difference = 0;
  lapCount = 0;
  timeDisplay.innerHTML = "00:00:00";
  lapContainer.innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = timeDisplay.innerHTML;
    lapCount++;
    const lapElement = document.createElement("li");
    lapElement.innerText = `Lap ${lapCount}: ${lapTime}`;
    lapContainer.appendChild(lapElement);
  }
}

function updateTime() {
  updatedTime = Date.now() - startTime;
  const time = new Date(updatedTime);
  const hours = formatTime(time.getUTCHours());
  const minutes = formatTime(time.getUTCMinutes());
  const seconds = formatTime(time.getUTCSeconds());
  timeDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
