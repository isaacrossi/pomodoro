const short = document.querySelector(".buttons__short")
const focus = document.querySelector(".buttons__focus")
const long = document.querySelector(".buttons__long")
const countdown = document.querySelector(".countdown")
const start = document.querySelector(".start-button")

const buttons = document.querySelectorAll('div.buttons button')

let isPaused = true;

let duration = focus.dataset.time
let myInterval;
const audio = new Audio('alarm.mp3')

function startTimer() {

  isPaused = !isPaused;

  isPaused ? start.innerHTML = "start" : start.innerHTML = "pause"

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      clearInterval(myInterval)
      // alert("Are you sure you want to select another option? Doing so will stop the current timer.")
    })
  });

  clearInterval(myInterval)

  myInterval = setInterval( function () {

    if (!isPaused) duration --

    let minutes = Math.floor(duration / 60)
    let extraSeconds = duration % 60;
    extraSeconds < 10 ? extraSeconds = '0' + extraSeconds : extraSeconds
    countdown.innerHTML = minutes + ':' + extraSeconds

    if (duration <= 0 && short.classList.contains('active')) {
      isPaused = true;
      audio.play()
      clearInterval(myInterval)
      countdown.innerHTML = short.dataset.time / 60 + ':00'
      duration = short.dataset.time
      start.innerHTML = "Start"
    } else if (duration <= 0 && focus.classList.contains('active')) {
      isPaused = true;
      audio.play()
      clearInterval(myInterval)
      countdown.innerHTML = focus.dataset.time / 60 + ':00'
      duration = focus.dataset.time
      start.innerHTML = "Start"
    } else if (duration <= 0 && long.classList.contains('active')) {
      isPaused = true;
      audio.play()
      clearInterval(myInterval)
      countdown.innerHTML = long.dataset.time / 60 + ':00'
      duration = long.dataset.time
      start.innerHTML = "Start"
    }

    console.log(duration)
  }, 1000);

}


start.addEventListener("click", startTimer)

short.addEventListener("click", (e) => {
  duration = short.dataset.time
  countdown.innerHTML = duration / 60 + ':00'
  short.classList.add('active')
  focus.classList.remove('active')
  long.classList.remove('active')
  isPaused = true;
  start.innerHTML = "Start"
})


focus.addEventListener("click", (e) => {
  duration = focus.dataset.time
  countdown.innerHTML = duration / 60 + ':00'
  focus.classList.add('active')
  short.classList.remove('active')
  long.classList.remove('active')
  isPaused = true;
  start.innerHTML = "Start"
})

long.addEventListener("click", (e) => {
  duration = long.dataset.time
  countdown.innerHTML = duration / 60 + ':00'
  long.classList.add('active')
  focus.classList.remove('active')
  short.classList.remove('active')
  isPaused = true;
  start.innerHTML = "Start"
})

