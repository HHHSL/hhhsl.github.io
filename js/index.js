$(function () {
    setTimeout(function () {
        $(".hi span").css("opacity", 1)
    }, 1500);
    setTimeout(function () {
        $(".hi").css("background-color", "black");
        $(".hi").css("color", "white");
        $("#navigation_bar .navbar ").css("opacity", 1)
        $(".hi p:nth-child(1)").removeAttr("class");
    }, 1800)
    //跳转
    $(window).scrollTop(0)
})

// 滑动触发
$(window).scroll(function () {
    if (Eslide("hi", 0.35)) {
        $(".hi p:nth-child(1)").css("opacity", Evalue("hi"));
        $(".hi p:nth-child(2)").css("opacity", 1 - Evalue("hi"));
    }
    if (Eslide("hi", 0.7)) {
        $(".hi p:nth-child(2)").attr("class", "animate__animated animate__slideInLeft");
        $(".hi p:nth-child(2)").css("font-size", "50px");
        $(".hi p:nth-child(2)").css("opacity", 1 - Evalue("hi"));
    }


    if (slide() > Eposition("hi1") && slide() < Eposition("hi1") + Eheight("hi1")) {
        $(".hi1 p").css("opacity", 1);
        if (Eslide("hi1", 0.2)) {
            $(".hi1 p").css("font-size", (1-Evalue("hi1")) * 300 + 'px');
        }

    }



})

// 元素透明数值
function Evalue(Element) {
    return Math.abs((1 - (Math.abs(slide() - Eposition(Element)) * 0.0036)).toFixed(3))
}
// 元素滑动至mun处 (建议0.3~0.5)
function Eslide(Element, num) {
    if (Math.abs(slide() - Eposition(Element)) <= (Eheight(Element) * num)) {
        return true
    } else {
        return false
    }
}
//检测滑动高度
function slide() {
    return Math.round($(window).scrollTop())
}

//窗口高度
var winheight = $(window).height()

//获取元素位置
function Eposition(Element) {
    return Math.round($('.' + Element).offset().top)
}
//获取元素高度
function Eheight(Element) {
    return Math.round($('.' + Element).height())
}