let ol = 0;
isPlaying = false;
const circle = document.getElementById('circle');
let circleInterval;
let size = 0;

function circleAnimation(time) {
  ol++;
  size++;
  circle.style.left = ol + 'px';
  circle.style.width = size + 'px';
  circle.style.height = size + 'px';
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