function getWidth() {
    var html = document.getElementsByTagName("html")[0]
    html.style.fontSize=(html.clientWidth/320*100)+"px"
}
getWidth()
window.onresize=function () {
   getWidth()
}


