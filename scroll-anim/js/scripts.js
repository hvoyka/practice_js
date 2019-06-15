window.onload = function(){
   // scroll to anchors
   var headerHeight = $(".menu").outerHeight();
   $(".menu__item").on("click", function(e){
      e.preventDefault();
      var $link = $(this).attr("href");
      
      var h = $($link).offset().top;

      $('html, body').animate({
         scrollTop: h - headerHeight
     }, 400);
   });
   //Back to top
   $(window).scroll(function(){
      if($(window).scrollTop() > 200){
         $("#backToTop").show();
      } else {
         $("#backToTop").hide();
      }
   });
   $("#backToTop").on("click", function(){
      $('html, body').animate({
         scrollTop: 0
     }, 400);
   });
}

