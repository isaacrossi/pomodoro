const short = document.querySelector(".buttons__short")
const countdown = document.querySelector(".countdown")
const start = document.querySelector(".start-button")

let duration;

function startTimer() { 
  const myInterval = setInterval(function () { 
    duration --
    let minutes = Math.floor(duration / 60)
    let extraSeconds = duration % 60;
    extraSeconds < 10 ? extraSeconds = '0' + extraSeconds : extraSeconds
    countdown.innerHTML = minutes + ':' + extraSeconds
    if (duration == 0 && short.classList.contains('active')) {
      clearInterval(myInterval)
      countdown.innerHTML = short.dataset.time / 60 + ':00'
    }
  }, 10);
}

start.addEventListener("click", startTimer)

short.addEventListener("click", (e) => {
  duration = short.dataset.time
  countdown.innerHTML = duration / 60 + ':00'
  short.classList.add('active')
})




// total seconds in 5 minutes is 300 seconds
// divide 300 seconds by 60 gives us 5 minutes
// there are 60 seconds in every minute
// once 60 seconds has passed minus minutes by 1 
