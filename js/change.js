var h1=document.getElementsByClassName("w_top")[0].offsetHeight;
var changhig=document.getElementsByClassName("w_change-cont")[0];
function heightchange(){
     var doheight=document.documentElement.clientHeight;
    changhig.style.height=(doheight-h1-10)+"px";
}
heightchange()
window.onresize=function(){
    heightchange()
}