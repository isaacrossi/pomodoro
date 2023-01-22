const short = document.querySelector(".buttons__short")
const countdown = document.querySelector(".countdown")

function startTimer () {
  let duration = this.dataset.time;
  const myInterval = setInterval( function () { //30
    duration --
    let minutes = Math.floor(duration / 60)
    let unflooredMinutes = duration / 60
    let extraSeconds = duration % 60;
    extraSeconds < 10 ? extraSeconds = '0' + extraSeconds : extraSeconds
    if (unflooredMinutes === 0) {
      myInterval(clearInterval)
    } 
    countdown.innerHTML = minutes + ':' + extraSeconds
  }, 10);
}

short.addEventListener("click", startTimer)

// total seconds in 5 minutes is 300 seconds
// divide 300 seconds by 60 gives us 5 minutes
// there are 60 seconds in every minute
// once 60 seconds has passed minus minutes by 1 
