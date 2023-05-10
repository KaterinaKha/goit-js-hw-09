import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  buttonEl: document.querySelector('button'),
};

refs.form.addEventListener('submit', onClickCreatePromises);

function onClickCreatePromises(e) {
  e.preventDefault();
  const timeDelay = Number(refs.form.elements['delay'].value);
  const step = Number(refs.form.elements['step'].value);
  const amount = Number(refs.form.elements['amount'].value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, timeDelay, step)
      .then(result => {
        Notify.success(result);
        console.log(result);
      })
      .catch(error => {
        Notify.failure(error);
        console.log(error);
      });
  }
}

function createPromise(position, timeDelay, step) {
  const shouldResolve = Math.random() > 0.3;
  const delay = timeDelay + (position - 1) * step;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
