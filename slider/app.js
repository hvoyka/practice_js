window.onload = function(){

  var sliderParams = {
    images: ".slider__image",
    nextBtn : ".next",
    prevBtn : ".prev",
    time : 1000,
    auto : true,
  };

  var slider = new Slider(sliderParams);

  
  function Slider (params){
    this.images =  document.querySelectorAll(params.images);
    this.nextBtn = document.querySelector(params.nextBtn);
    this.prevBtn = document.querySelector(params.prevBtn);
    this.time = params.time || 5000;
    this.auto = params.auto;
    var i = 0;
    var slider = this;

    this.next = function(){
      slider.images[i].classList.remove("slider__image-active");
        i++;
        if (i == slider.images.length){
          i = 0;
        }
        slider.images[i].classList.add("slider__image-active");
    };
    this.prev = function(){
      slider.images[i].classList.remove("slider__image-active");
        i--;
        if (i <0){
          i = slider.images.length -1;
        }
        slider.images[i].classList.add("slider__image-active");
    };
    slider.nextBtn.onclick = slider.next;
    slider.prevBtn.onclick = slider.prev;

    if (this.auto){
      setInterval(slider.next, slider.time);
    };

    }
  };
