import refs from './refs.js';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = false;
let intervalId = null;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStopClick() {
  clearInterval(intervalId);
  isActive = false;
  refs.startBtn.disabled = false;
  refs.body.style.backgroundColor = '#FFFFFF';
}

function onStartClick() {
  if (isActive) {
    return;
  }
  isActive = true;
  refs.startBtn.disabled = true;
  intervalId = setInterval(() => {
    const currentColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[currentColor];
  }, 1000);
}
