const rotatingSquare = document.getElementById('web-animation').animate(
  [
    { backgroundColor: "#000000", opacity: 1.0, transform: 'rotate(0deg) translate3d(0,0,0)'/* , easing: 'ease-out' */ },
    { backgroundColor: "#440000", opacity: 0.3},
    { backgroundColor: "#000000", opacity: 1.0, transform: 'rotate(360deg) translate3d(0,0,0)'/* , easing: 'ease-in' */}
  ],
  {
    duration: 500,
    iterations: Infinity,
    easing: 'ease-in-out'
  }
);