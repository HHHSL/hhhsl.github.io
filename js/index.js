$(function () {
   $(".Content_section").css("height", ($(window).height() - 56) + 'px');
   setTimeout(function () { Carousel_content("Hi"); }, 1000)
   setTimeout(function () { Carousel_content("别来无恙啊"); }, 3500)
   setTimeout(function () { Carousel_content("这里是HHHSL"); }, 5500)
   setTimeout(function () { Carousel_content("热爱生活"); }, 7500)
   setTimeout(function () { Carousel_content("喜欢一切"); }, 9500)
   setTimeout(function () { Carousel_content("外加亿点点帅"); }, 11500)
})

// 轮播内容
function Carousel_content(content) {
   $(".Content_section").html("<h1 class='animate__animated animate__fadeInUp'> " + content + "</h1>")
   setTimeout(function () {
      $(".Content_section h1").removeAttr("class");
      $(".Content_section").html("<h1 class='animate__animated animate__fadeOut animate__delay-0.8s'>" + content + "</h1>")
   }, 1000)
}

