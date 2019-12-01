	// $(function(){
		mui(".right").on("tap",".ybottom span",function(){
			$(this).addClass("active").siblings().removeClass("active")
        })
        // mui(".btn-items2").tap(function(){
		// 	// $(".btn-items1").value++
		// 	console.log($(".btn-items1"))
		// 	console.log($(".btn-items1").text())
        // })
	// })
		mui(".right").on("tap",".right #detail",foo_1);
		mui(".right").on("tap",".right .parameter",foo_2);
		var detailList =document.getElementsByClassName("detail-list")[0]
		var parameter = document.getElementsByClassName("parameter-list")[0]
		function foo_1() {
			parameter.style.display="none"
			detailList.style.display="block"

		}
		function foo_2 (){
			detailList.style.display="none"
			parameter.style.display="block"
		}