const rotatingSquare = document.getElementById('web-animation');

rotatingSquare.animate(
  [
    { backgroundColor: "#000000", opacity: 1.0, transform: 'rotate(0deg) translate3d(0,0,0)' },
    { backgroundColor: "#440000", opacity: 0.3},
    { backgroundColor: "#000000", opacity: 1.0, transform: 'rotate(360deg) translate3d(0,0,0)' }
  ],
  {
    duration: 500,
    iterations: Infinity
  }
);