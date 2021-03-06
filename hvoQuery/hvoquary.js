function $(selector){
  var elements;
  if(selector instanceof HTMLElement){
    elements = [selector];
  } else {
    elements = document.querySelectorAll(selector);
  }
   
  return new HvoQuery(elements);
}

function HvoQuery (elements){

  this.elements = elements;

  this.addClass = function(name){
    for(var i = 0; i < this.elements.length; i++){
      this.elements[i].classList.add(name);
    };
    return this;
  }
  this.removeClass = function(name){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].classList.remove(name);
    }
    
    return this;
  }

  this.on = function(eventname,f){
    for(var i = 0; i < this.elements.length; i++){
      this.elements[i].addEventListener(eventname, f);
    };
    return this;
  }
  this.html = function(html){
    if(typeof(html) === "undefined"){
        return this.elements[0].innerHTML;
    }
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].innerHTML = html;
    }
    return this;
  }
  this.fade = function (timer = 100){
    var op = 1;
    var es = this.elements;

    setInterval(function(){      
      for(var i = 0; i < es.length; i++){
        es[i].style.opacity = op;
      }
      op = op - 0.05;
    }, (timer));
  }
}
