$(function () {
    // 设置内容高度
    $("#subject .hi").css("height", (winheight - 56) + 'px');
    $("#subject .introduce").css("height", (winheight - 56) + 'px');
    $("#subject .introduce1").css("height", (winheight - 56) + 'px');
    var initial_hi = 0
    $(window).scroll(function () {
        var new_hi = position("hi")
        if (new_hi > 0 && new_hi < (winheight-56)*0.35) {
            //透明值
            var Transparency_value = 1-(new_hi*3.8*0.001)
            console.log()
            $(".hi p:nth-child(1)").css("opacity", Transparency_value)
            $(".hi sanp").css("opacity", Transparency_value)
        }
       

    })
    setTimeout(function () {
        $(".hi span").css("opacity", 1)
    }, 1500);
    setTimeout(function () {
        $(".hi").css("background-color", "black");
        $(".hi").css("color", "white");
        $(".hi p:nth-child(1)").removeAttr("class");
    }, 2000)
})
// 返回元素位置
function position(Select_element) {
    var Element_position = document.getElementById(Select_element).getBoundingClientRect().top + $('.' + Select_element).height() / 2 - 28
    var Middle_position = winheight / 2
    return Math.abs(Math.ceil(Element_position - Middle_position))
}
//窗口高度
var winheight = $(window).height()
