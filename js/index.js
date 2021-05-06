$(function () {
    // 设置内容高度
    $("#subject .hi").css("height", ($(window).height() - 56) + 'px');
    $("#subject .introduce").css("height", ($(window).height() - 56) + 'px');
    $("#subject .introduce1").css("height", ($(window).height() - 56) + 'px');

    $(window).scroll(function () {
        if(position("hi") <= 1){
            console.log("第一个元素滑倒中间了")
        }
        if(position("introduce") <= 100){
            console.log("第二个元素怒滑倒中间了")
        }
        if(position("introduce1") <= 1){
            console.log("第三个元素怒滑倒中间了")
        }

    })
    setTimeout(function() {
        $(".hi span").css("opacity", "1")
    }, 1500);
    setTimeout(function() {
        $(".hi").css("background-color", "black");
        $(".hi").css("color", "white");
    }, 2000)
})
function position(Select_element){
    var Element_position = document.getElementById(Select_element).getBoundingClientRect().top+$('.'+Select_element).height()/2-28
    var Middle_position = $(window).height()/2
    return Math.abs(Element_position - Middle_position)
}