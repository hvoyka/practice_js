let ol = 0;
isPlaying = false;
const circle = document.getElementById('circle');
let circleInterval;

function circleAnimation(time) {
  ol++;
  circle.style.left = ol + 'px';
  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked() {
  if (isPlaying) {
    isPlaying = false;
    circle.style.backgroundColor = 'dimgrey';
    cancelAnimationFrame(circleInterval);
  } else {
    isPlaying = true;
    circle.style.backgroundColor = 'crimson';
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}
circle.addEventListener('click', mouseClicked);
circle.style.backgroundColor = 'dimgrey';