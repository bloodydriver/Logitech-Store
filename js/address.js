//编辑输入正确用localStorage接受数据
var addul=document.getElementsByClassName("w_address-ul")[0];
(function(){
    addul.innerHTML+=`  
        <li class="w_address-li">
            <div class="w_add-list1">
                <span class="w_addlist-sp1">${window.localStorage.vlue1}</span>
                <span class="w_addlist-sp2">${window.localStorage.vlue2}</span>
                <p class="w_addlist-p">${window.localStorage.value2}</p>
            </div>
            <div class="w_add-list2">
                <span class="w_addlist-span mui-icon mui-icon-compose"></span>
            </div>
        </li>
        `
})()

