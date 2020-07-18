let ol = 0;
const circle = document.getElementById('circle');
const circleInterval = setInterval(circleAnimation, 50);
function circleAnimation() {
  ol++;
  console.log(ol);
  if (ol === 250) {
    clearInterval(circleInterval);
  }

  circle.style.left = ol + 'px';
}
