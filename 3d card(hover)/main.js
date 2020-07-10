const cards = document.querySelectorAll('.card');
cards.forEach(function(item){
  item.addEventListener('mousemove', startRotate);
  item.addEventListener('mouseleave', stopRotate);
});


function startRotate (event) {
      const cardItem = this.querySelector('.card-item');
      const halfHeight = cardItem.offsetHeight / 2;
      const halfWidth = cardItem.offsetWidth / 2;
      cardItem.style.transform = `rotateX(${-(event.offsetY - halfHeight)/10 }deg) rotateY(${(event.offsetX - halfWidth)/5 }deg)`;
}
function stopRotate(event){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = "rotate(0)";
}