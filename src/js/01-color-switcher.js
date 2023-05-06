const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.startBtn.style.fontSize = '25px';
refs.stopBtn.style.fontSize = '25px';

refs.startBtn.addEventListener('click', changeBackgroundColors);
refs.stopBtn.addEventListener('click', stopChangeBackgroundColors);

function changeBackgroundColors() {
  intervalId = setInterval(attachBackgroundColor, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function stopChangeBackgroundColors() {
  clearTimeout(intervalId);
  refs.startBtn.disabled = false;
  // refs.stopBtn.disabled = true;
}

function attachBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  console.log(document.body.style.backgroundColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
