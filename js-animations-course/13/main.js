let ol = 0;
const circle = document.getElementById('circle');
let circleInterval;
function circleAnimation(time) {
  ol++;

  circle.style.left = ol + 'px';
  console.log(time);
  if (time < 4000) {
    circleInterval = requestAnimationFrame(circleAnimation);
  } else {
    circle.style.backgroundColor = 'dimgrey';
    cancelAnimationFrame(circleInterval);
  }
}
circleInterval = requestAnimationFrame(circleAnimation);