import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('form');

formEl.addEventListener('submit', onBtnSudmitClick);


function onBtnSudmitClick(evn) {
  evn.preventDefault();

  let delay = Number(formEl.elements.delay.value);
  const step = Number(formEl.elements.step.value);
  const amount = formEl.elements.amount.value;
  formEl.reset();
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  };
}


function createPromise(position, delay) {
    
  return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
        resolve({ position: `${position}`, delay: `${delay}` });
      } else {
        reject({ position: `${position}`, delay: `${delay}` });
      }
      }, delay);
    
  });
  
}
