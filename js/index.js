$(function(){
   $(".Content_section").css("height",($(window).height()-56)+'px');
   $(".Content_section1").css("height",($(window).height()-56)+'px');
   setTimeout(function(){
      $(".Content_section h1:nth-child(2)").css("color","white");
      $(".Content_section h1:nth-child(2)").attr("class","animate__animated animate__fadeInUp");
      },1400);
})
//初始高度  
var Initial_height = 0;
$(document).scroll(function(){
   //当前高度
   var Current_height = $(document).scrollTop();
   console.log(Current_height - Initial_height)
   if((Current_height - Initial_height) > 0){
      if((Current_height - Initial_height) >50){
         alert("下滑超过50")
      }
      // console.log($(".Content_section h1").scrollTop())
   }else{
      if((Current_height - Initial_height) >50){
         alert("上滑超过50")
      }
   }
   Initial_height = Current_height;  
});
