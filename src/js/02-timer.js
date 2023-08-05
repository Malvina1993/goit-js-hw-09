import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    btnStart: document.querySelector('[data-start]'),
    inputEl: document.getElementById('datetime-picker',)
};

refs.btnStart.setAttribute("disabled", "disabled");

// flatpickr(refs.inputEl, {
//     enableTime: true,
//     time_24hr: true,
//     // defaultDate: new Date(),
//     minuteIncrement: 1,
//     onClose(selectedDates) {
//         console.log(selectedDates[0]);
//     },
// });









