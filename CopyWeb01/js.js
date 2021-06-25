var stop=null
var stop2=null
var n=0
//  slide effect //
function slide(){
    var len=$(".track .item").length
    n=n%len
    $(".track .item").eq(0).appendTo(".track")
    n++  
}
// function clear(){
//     clearInterval(stop)
// }
// function start(){
//     stop =setInterval(slide,4000)
// }
$(".track .item").mouseover(function(){
    $(".slideWrap button").stop().show().addClass("on")
})
$(".track .item").mouseleave(function(){
    $(".slideWrap button").hide().removeClass("on")
})
$(".slideWrap button").mouseover(function(){
    clearInterval(stop)
    $(".slideWrap button").show().fadeIn("fast")
    console.log("adsf")
})
$(".slideWrap button").mouseleave(function(){
    $(".slideWrap button").show().fadeIn("fast")
    stop =setInterval(slide,2000)
})


$(".slideWrap .nxt").click(function(){
    $(".track .item").eq(0).appendTo(".track")
})
$(".slideWrap .prv").click(function(){
    $(".track .item").eq(3).prependTo(".track")
})

//slide effect //

$(".menu li").mouseover(function(){
    $(this).children(".sub").stop().slideDown("fast")
    $(this).siblings().children(".sub").stop().slideUp("fast")

})
$(".menu li").mouseleave(function(){
    $(this).children(".sub").stop().slideUp("fast")
    $(this).siblings().children(".sub").hide().slideUp("fast")
})

$("#addslide .nxt").click(function(){
    $(".addTrack .item").eq(0).appendTo(".addTrack")
})
$("#addslide .prv").click(function(){
    $(".addTrack .item").eq(7).prependTo(".addTrack")
})

function slide2(){
    var len=$(".addTrack .item").length
    n=n%len
    $(".addTrack .item").eq(0).appendTo(".addTrack")
}
function clear2(){
    clearInterval(stop2)
}
function start2(){
    stop2 =setInterval(slide2,3000)
}

$("#addslide button").mouseover(function(){
    clear2()
})
$("#addslide button").mouseleave(function(){
    start2()
})


$(".top").click(function(){
    $(".body,html").animate({scrollTop:0},"fast")
})
$(".popup .close").click(function(){
    $(".popup").stop().css("display","none")
})
slide()
slide2()
