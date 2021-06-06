$(".menu li").mouseover(function(){
    $(this).children(".submenu").css("display","block")
    console.log("adsfasdf")
})
$(".menu li").mouseleave(function(){
    $(this).children(".submenu").css("display","none")
    console.log("adsfasdf")
})