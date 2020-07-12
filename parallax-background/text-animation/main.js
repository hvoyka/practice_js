const textTag = document.querySelector('.anim-target-text');
const text = textTag.textContent;
const splitText = text.split("");

textTag.textContent = "";
splitText.forEach((letter)=>{
  textTag.innerHTML += `<span>${letter}</span>`;
})

let char = 0;
let timer  = setInterval(onTick, 50);

function onTick() {
  const span = textTag.querySelectorAll('span')[char];
  span.classList.add('fade-anim');
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}
function complete (){
  clearInterval(timer);
  timer = null;
}