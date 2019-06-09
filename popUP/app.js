
function Popup(){
    this.modal = document.querySelector(".modal");
    this.overlay = document.querySelector(".overlay");
    var popup = this;

  this.open = function(content){
    popup.content = content;

    popup.modal.style.display = "flex";
    popup.overlay.style.display = "block";
    
    popup.modal.innerHTML = popup.content;

  };
  this.close = function(){
    popup.modal.style.display = "none";
    popup.overlay.style.display = "none";
  };
  this.overlay.onclick = popup.close;
}

window.onload = function(){
  var newPopup = new Popup();
  
  document.querySelector(".write").onclick = function(){
    newPopup.open("<h1>GREAT STORIES</h1>");
  };
  document.querySelector(".call").onclick = function(){
    var formCall = document.querySelector(".modal-callme");
    newPopup.open(formCall.innerHTML);
  };

};