const layers = document.querySelectorAll('.layer');
function parallax(event) {
  layers.forEach(layer => {
    const parallaxSpeed = layer.getAttribute('data-parallax');

    console.log(layer.getAttribute('data-parallax'))
    layer.style.transform = `translateX(${event.clientX * parallaxSpeed / 1000}px)`;
  });;
}
document.addEventListener('mousemove', parallax);