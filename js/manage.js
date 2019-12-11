document.getElementById('datebox03').addEventListener("touchstart",function(){
    //可自定每一项，比如自定义时、分
    var dtpicker = new mui.DtPicker({ 
	    "type": "date",
	    "customData": {
	    } 
	});
	dtpicker.show(function(e) { 
	    // console.log(e.i.text);//结果为当前设置的多少分
	    // console.log(e.text);//结果为 2016-10-10 上午:10
        document.getElementById('w_mange-time').innerHTML=e.text
	});
})
var val=document.getElementsByClassName("w_getvalue-view")[0];
var popover=document.getElementById("popover")
 mui('.mui-table-view').on("tap",'li',function(){
	val.innerHTML=this.innerHTML
	popover.style.display="none";  
	var no=document.getElementsByClassName("mui-backdrop")[0]
	no.style.position="inherit";
})
//拿到更改的用户名进行更改
var userval=document.getElementsByClassName("w_mange-val")[0];
(function(){
if(window.localStorage.user.length>0){
	userval.innerHTML=window.localStorage.user
    window.localStorage.removeItem(user)
}
})()
