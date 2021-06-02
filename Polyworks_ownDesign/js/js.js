var scrollOffset=Array()
var diffOffset=0
var sum=0
var ds=1
for(var i=0;i<4;i++){
    scrollOffset[i] = $("section").eq(i).offset().top;
}

$(".box3").mouseover(function(){
    $(".navbar").stop().slideDown("fast")
})
$(".box3").mouseleave(function(){
    $(".navbar").stop().slideUp("fast")
})
$(".bottomWrap").mouseover(function(){
    $(".bottomWrap li").stop().fadeIn(500)
})
$(".bottomWrap").mouseleave(function(){
    $(".bottomWrap li").stop().fadeOut(500)
})

function srcollPosit(k){
    
    $("html, body").stop().animate({
        scrollTop:scrollOffset[k]
    },800,"easeOutBounce")
}
function decide(){
    curScr=$(window).scrollTop()
    console.log(curScr)
    if(ds==-1){
        if(curScr<scrollOffset[1]){
            srcollPosit(1)
        }else if(curScr<scrollOffset[2]){
            srcollPosit(2)
        }
    }else if(ds==1){
        if(curScr>=scrollOffset[1]){
            srcollPosit(1)
        }else if(curScr>=scrollOffset[0]){
            srcollPosit(0)
        }
    }
}
$("section").on("mousewheel",function(e,d){
    ds=d    
    setTimeout(decide,100)

})