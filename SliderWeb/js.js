var stop=0;
var i=0;
var trackStop=1;

function slide(){
    var length = $(".trak div").width()
    if (i>=length){clearInterval(stop)} //인덱스 1회전뒤 que클리어
                                        //시간밀림 효과 없어지는듯함
    $(".track .box1").animate({left:"-=100"},function(){
        $(".track div").eq(0).appendTo(".track") //box1만 계속해서 밀어주고
    }) //첫번째만 떼서 뒤로 계속 붙임
    
    $(".modalTrack div").eq(0).appendTo(".modalTrack") //modal도 같이 이동
    stop = setInterval(slide,1000) //재귀 호출
    i++
}// 무한 슬라이드 

function modal(j){
    console.log(j)
    $(".track div").click(function(){
        if (j==0){
            var i =$(this).index() //track과 modalTrack내 인덱스가 같이움직여 동일함 
            $("#modal").stop().fadeIn("slow")
            $(".modalTrack div").eq(i).stop().fadeIn("fast").siblings().fadeOut("fast")      
        }
    })
    $("#modal .btn").click(function(){
        if(j==0){
            $("#modal").stop().fadeOut("fast")
        }    
    })
}//팝업창 

$(".button div").click(function(){
    var j =$(this).index() //버튼인덱스 0아니면1
    if (j==0){
        clearInterval(stop) //<-Slide stop
        $(".track div").css("cursor","pointer") //<-click가능하게 pointer로 변경
        modal(j) // stop됫을때만 modal함수 호출
    }else{
        slide() //slide 함수호출
        $(".track div").css("cursor","default") //<다시 cursor 변경 
    }

    $(this).stop().removeClass("on") //button hover효과
    $(this).stop().siblings().addClass("on")
})//버튼 play stop click event

$("nav li").mouseover(function(){
    $(this).stop().children(".submenu").slideDown(200)
})
$("nav li").mouseleave(function(){
    $(this).stop().children(".submenu").slideUp(200)
})//submenu slideDown효과
 
$("nav .all").click(function(){
    $("nav .submenu").stop().slideDown(200)
})//전체 서브메뉴 slideDown

slide()