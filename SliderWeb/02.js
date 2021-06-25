$(".menu li").mouseover(function(){
    $(this).children(".submenu").stop().fadeIn(500)
})
$(".menu li").mouseleave(function(){
    $(this).children(".submenu").stop().fadeOut(500)
})