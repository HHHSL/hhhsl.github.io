$(function(){
   $(".Content_section").css("height",($(window).height()-56)+'px');
   $(".Content_section1").css("height",($(window).height()-56)+'px');
   setTimeout(function(){
      $(".Content_section h1:nth-child(2)").css("color","white");
      $(".Content_section h1:nth-child(2)").attr("class","animate__animated animate__fadeInUp");
      },1000);
})

