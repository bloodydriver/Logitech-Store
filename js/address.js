//编辑输入正确用localStorage接受数据
var addul=document.getElementsByClassName("w_address-ul")[0];
(function(){
    if(window.localStorage.vlue1.length>0){
        addul.innerHTML+=`  
        <li class="w_address-li">
            <div class="w_add-list1">
                <span class="w_addlist-sp1">${window.localStorage.vlue1}</span>
                <span class="w_addlist-sp2">${window.localStorage.vlue2}</span>
                <p class="w_addlist-p">${window.localStorage.value2}${window.localStorage.vlue3}</p>
            </div>
            <div class="w_add-list2">
            <a href="address-amend.html">
                <span class="w_addlist-span mui-icon mui-icon-compose"></span>
            </a>
            </div>
        </li>
        `
    }else{
        addul.innerHTML+=`
        <li></li>`
    }
    
})()

