const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

function drawCircle() {
  context.fillStyle = "crimson"
  context.beginPath();
  context.arc(60, canvas.height / 2, 25, 0, 2* Math.PI);
  context.fill();
}
drawCircle();