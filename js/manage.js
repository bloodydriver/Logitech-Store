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
