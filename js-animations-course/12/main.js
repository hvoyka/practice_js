let ol = 0;
const circle = document.getElementById('circle');
const circleInterval = setInterval(circleAnimation, 50);
function circleAnimation() {
  console.log(ol);
  if (ol >= (4000/50)) {
    circle.style.backgroundColor = 'dimgrey';
    clearInterval(circleInterval);
  } else {
    ol++;
    circle.style.left = ol + 'px';
  }

 
}
