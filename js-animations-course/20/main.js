const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let canvasInterval = requestAnimationFrame(canvasAnimation);
let circleX = 60;
let velocity = 1;
let acceleration = 0.5;

function canvasAnimation() {
  circleX++;
  drawCircle(circleX, canvas.height / 2, 25);
  canvasInterval = requestAnimationFrame(canvasAnimation);
}

function drawCircle(x, y, s) {
  clearCanvas();
  context.fillStyle = "crimson"
  context.beginPath();
  context.arc(x, y, s, 0, 2 * Math.PI);
  context.fill();
  velocity += acceleration;
  circleX += velocity;
  if(circleX > canvas.width){
    circleX = 0;
    velocity = 0;
  }
}
drawCircle();

function clearCanvas() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.height);
}