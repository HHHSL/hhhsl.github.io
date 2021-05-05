$(function () {
    $("#subject .hi").css("height", ($(window).height() - 56) + 'px');
    $("#subject .introduce").css("height", ($(window).height() - 56) + 'px');
    setTimeout(function () {
        $(".hi span").css("opacity","1")
    }, 1500)
    setTimeout(function () {
        $(".hi").css("background-color","black");
        $(".hi").css("color","white");
    }, 2000)
})



