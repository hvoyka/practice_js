let ol = 0;
isPlaying = false;
const circle = document.getElementById('circle');
let circleInterval;
let fromTop = 0;
let toUp = true;
circle.style.top = fromTop + 'px';

function circleAnimation(time) {
  ol++;
  circle.style.left = ol + 'px';
  if(fromTop >= 50) {
    toUp = false;
  } else if (fromTop <= 0) {
    toUp = true;
  }
  if (toUp) {
    console.log("down");
    fromTop++;    
  } else{
    console.log("up");
    fromTop--;
  }
  circle.style.top = fromTop + 'px';
  console.log(parseInt(circle.style.top));

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