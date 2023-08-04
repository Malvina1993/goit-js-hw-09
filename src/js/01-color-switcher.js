
const refs = {
    bodyEl: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
};

refs.btnStart.addEventListener('click', onChangeColorBodyClick);

refs.btnStop.addEventListener('click', onStopChangeColorBodyClick)

refs.btnStop.setAttribute("disabled", "disabled");

let intId = 0

function onChangeColorBodyClick(event) {
    refs.btnStart.setAttribute("disabled", "disabled");
    refs.btnStop.removeAttribute("disabled", "disabled");


    intId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);

}

function onStopChangeColorBodyClick(evn) {
    refs.btnStop.setAttribute("disabled", "disabled");
    refs.btnStart.removeAttribute("disabled", "disabled");

    clearInterval(intId);

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// console.log(refs.btnStop);