const btnSet = document.querySelector('.js-set');
const btnClear = document.querySelector('.js-clear');
const inputCounter = document.querySelector('.set-timeout input');
let counter = 0;

function handler() {
  btnClear.addEventListener(
    'click',
    () => {
      counter = 0;
      inputCounter.value = '';
    },
    { once: true },
  );
}
btnSet.addEventListener('click', () => {
  counter += 1;
  inputCounter.value = counter;
  handler();
});

const smallDiv = document.querySelector('.small-div');
function set() {
  setTimeout(() => smallDiv.classList.add('small-div-top-right'), 1000);
  setTimeout(() => smallDiv.classList.add('small-div-bottom-right'), 2000);
  setTimeout(() => smallDiv.classList.add('small-div-bottom-left'), 3000);
  setTimeout(
    () =>
      smallDiv.classList.remove(
        'small-div-top-right',
        'small-div-bottom-right',
        'small-div-bottom-left',
      ),
    4000,
  );
}
set();
setInterval(set, 4000);
