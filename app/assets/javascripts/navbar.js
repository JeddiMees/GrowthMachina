
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".nav-bar").css("background" , "#ffffff");

      $("li a").css("color", "#28242A");
      $(".growthmachina-logo").css("color", "#A26366");

      $(".btn-navbar").css('background', '#F0ECF4');
      $(".btn-navbar").css('border', '#A26366');
    }

    else{
      $(".nav-bar").css("background" , "transparent");
       $("li a").css('color', '#ffffff');
        $(".growthmachina-logo").css('color', '#ffffff');
         $(".btn-navbar").css('background', 'transparent');
    }
  })
})
