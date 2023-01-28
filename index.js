const short = document.querySelector(".buttons__short")
const foc = document.querySelector(".buttons__focus")
const long = document.querySelector(".buttons__long")
const countdown = document.querySelector(".countdown")
const start = document.querySelector(".start-button")
const buttons = document.querySelectorAll('div.buttons button')
const audio = new Audio('alarm.mp3')

let isPaused = true;
let duration = foc.dataset.time;
let myInterval;


function startTimer() {

  audio.currentTime = 0;
  audio.pause()

  isPaused = !isPaused;
  isPaused ? start.innerHTML = "start" : start.innerHTML = "Pause"

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
    minutes < 10 ? minutes = '0' + minutes : extraSeconds
    countdown.innerHTML = minutes + ':' + extraSeconds

    if (duration <= 0 && short.classList.contains('active')) {
      isPaused = true;
      audio.play()
      clearInterval(myInterval)
      countdown.innerHTML = short.dataset.time / 60 + ':00'
      duration = short.dataset.time
      start.innerHTML = "Start"
    } else if (duration <= 0 && long.classList.contains('active')) {
      isPaused = true;
      audio.play()
      clearInterval(myInterval)
      countdown.innerHTML = long.dataset.time / 60 + ':00'
      duration = long.dataset.time
      start.innerHTML = "Start"
    } else if (duration <= 0 && foc.classList.contains('active')) {
      clearInterval(myInterval)
      isPaused = true;
      audio.play()
      countdown.innerHTML = foc.dataset.time / 60 + ':00'
      duration = foc.dataset.time
      start.innerHTML = "Start"
    }
    console.log(duration)
  }, 0.1);

}

start.addEventListener("click", startTimer)

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    document.querySelector('button.active').classList.remove('active');
    e.target.classList.add('active');
    duration = button.dataset.time
    countdown.innerHTML = duration / 60 + ':00'
    isPaused = true;
    start.innerHTML = "Start"
    audio.pause()
  })
})


