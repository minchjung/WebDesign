var l0=$(".track div").length
var stop2 = null
cop=[]
var j=0
function setting(){
    $(".track div").eq(j).animate({left:0},1000)
    cop[j]=$(".track div").eq(j).clone()
    cop[j].appendTo(".track")
    j++
    if(j==l0){
        clearInterval(stop)
        stop2 =setInterval(s,2000)
    }
    console.log(j)
}

function s(){
    $(".track div").eq(j).animate({left:0},1000)
    cop[j]=$(".track div").eq(j).clone()
    cop[j].appendTo(".track")
    j++
    $(".track div").eq(j-(l0+1)).remove()
    j--
}
var stop=setInterval(setting,2000)