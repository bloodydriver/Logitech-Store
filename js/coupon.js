var list1=document.getElementsByClassName("w_coupon-sp1")[0];
var list2=document.getElementsByClassName("w_coupon-sp2")[0];
var list3=document.getElementsByClassName("w_coupon-sp3")[0];
var ul1=document.getElementsByClassName("w_coupon-ul1")[0];
var ul2=document.getElementsByClassName("w_coupon-ul2")[0];
var ul3=document.getElementsByClassName("w_coupon-ul3")[0];
list1.addEventListener("touchstart",function(){
    list2.classList.remove("addcolor");
    list3.classList.remove("addcolor");
    if(this.classList.contains("addcolor")){ 
        ul2.classList.add("displynone");
        ul3.classList.add("displynone");
    }else{
        this.classList.add("addcolor");
        ul1.classList.remove("displynone");
        ul2.classList.add("displynone");
        ul3.classList.add("displynone");
    }
})
list2.addEventListener("touchstart",function(){
    list1.classList.remove("addcolor");
    list3.classList.remove("addcolor");
    if(this.classList.contains("addcolor")){ 
        ul1.classList.add("displynone");
        ul3.classList.add("displynone");
    }else{
        this.classList.add("addcolor");
        ul2.classList.remove("displynone");
        ul1.classList.add("displynone");
        ul3.classList.add("displynone");
    }
})
list3.addEventListener("touchstart",function(){
    list1.classList.remove("addcolor");
    list2.classList.remove("addcolor");
    if(this.classList.contains("addcolor")){ 
        ul1.classList.add("displynone");
        ul2.classList.add("displynone");
    }else{
        this.classList.add("addcolor")
        ul3.classList.remove("displynone")
        ul1.classList.add("displynone");
        ul2.classList.add("displynone");
    }
})
var h1=document.getElementsByClassName("w_top")[0].offsetHeight;
var h2=document.getElementsByClassName("w_coupon-list")[0].offsetHeight;
var h3=document.getElementsByClassName("w_coupon-context")[0];
function heightchange(){
    var doheight=document.documentElement.clientHeight;
    h3.style.height=(doheight-h1-h2-10)+"px";
}
heightchange()
window.onresize=function(){
    console.log(22222);
    getWidth() 
    heightchange()
}