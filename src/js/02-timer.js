import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    btnStart: document.querySelector('[data-start]'),
    inputEl: document.getElementById('datetime-picker'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
};

refs.btnStart.setAttribute("disabled", "disabled");


const chooseDate = flatpickr(refs.inputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);

        if ((selectedDates[0] - new Date()) <= 0) {
            Notify.failure('Please choose a date in the future');
        } else {
            refs.btnStart.removeAttribute("disabled", "disabled");
            
        };

    },
});


refs.btnStart.addEventListener('click', onBtnStartTimerClick);

function onBtnStartTimerClick(evn) {
    let allTime = chooseDate.selectedDates[0] - new Date;

    const intervId = setInterval(() => {
        const { days, hours, minutes, seconds } = convertMs(allTime);
        refs.daysEl.textContent = addLeadingZero(days);
        refs.hoursEl.textContent = addLeadingZero(hours);
        refs.minutesEl.textContent = addLeadingZero(minutes);
        refs.secondsEl.textContent = addLeadingZero(seconds);
        allTime -= 1000;
        if (allTime <= 0) {
            clearInterval(intervId);
            Notify.success('The time has come!!!')
        }
    
    }, 1000);
    
    
};

function addLeadingZero(value) {
    if (String(value).length = 1) {
        return String(value).padStart(2, "0");  
    }
    
    
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log('працює');









