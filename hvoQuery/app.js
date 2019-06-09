window.onload = function(){
  
  var images = $("img");

  images.addClass("hehe").addClass("1111");

  images.on("click", function(e){
    console.log(e.target, "11111");
  })

  images.removeClass("hehe");
  
  $(".text").html("heyyaaa");
  };
