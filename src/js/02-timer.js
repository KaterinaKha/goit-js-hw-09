import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  inputDatetime: document.getElementById('datetime-picker'),
  daysSpan: document.querySelector('span[data-days]'),
  hoursSpan: document.querySelector('span[data-hours]'),
  minutesSpan: document.querySelector('span[data-minutes]'),
  secondsSpan: document.querySelector('span[data-seconds]'),
};

let pickedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    pickedDate = selectedDates[0];
    const differenceWithCurrentTime = pickedDate - Date.now();
    if (differenceWithCurrentTime >= 0) {
      refs.startBtn.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
      // return null;
    }
  },
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', startTimer);

flatpickr(refs.inputDatetime, options);

function startTimer() {
  refs.startBtn.disabled = true;
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  const deltaTime = pickedDate - Date.now();
  const { days, hours, minutes, seconds } = convertMs(deltaTime);

  if (deltaTime < 0) {
    clearInterval();
    return;
  }

  refs.daysSpan.textContent = days;
  refs.hoursSpan.textContent = hours;
  refs.minutesSpan.textContent = minutes;
  refs.secondsSpan.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(time) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(time / day));
  const hours = addLeadingZero(Math.floor((time % day) / hour));
  const minutes = addLeadingZero(Math.floor(((time % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((time % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
