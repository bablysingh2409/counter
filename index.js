let form = document.querySelector('.count-input');
let input = document.querySelector('input[type=number]');
let counter = document.querySelector('.counter');
let next = document.querySelector('.next');
let current = document.querySelector('.current');
let count = 0;

form.addEventListener('submit', updateCounter);

//on input submit
function updateCounter(e) {
  e.preventDefault();
  if (!input.value) {
    alert("input can't be empty");
    return;
  }

  let target = Number(input.value);
  let interval = setInterval(function () {
    countdown(interval, target);
  }, 1000);
}

//countdown function
function countdown(interval, target) {
  if (count === target) {
    clearInterval(interval);
    return;
  }
  count++;
  next.classList.add('animate');
  setTimeout(function () {
    next.classList.remove('animate');
  }, 500);
  next.innerText = count;
  current.innerText = count;
}
