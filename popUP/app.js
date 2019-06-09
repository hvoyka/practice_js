window.onload = function(){
  var newPopup = new Popup();
  newPopup.open("<h1>GREAT STORIES</h1>");
    document.querySelector(".popup-bg").onclick = function(){
      newPopup.close();
    }
  
};
function Popup(){
    var popup = document.querySelector(".popup");
    var popupBg = document.querySelector(".popup-bg");

  this.open = function(content){
    popup.style.display = "flex";
    this.content = content;
    popup.innerHTML = this.content;

  };
  this.close = function(){
    popup.style.display = "none";
    popupBg.style.display = "none";
    
  };
  /* popupBg.onclick = function(){
    this.close();
  } */
}
