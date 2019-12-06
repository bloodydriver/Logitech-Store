var msg = document.getElementById("msg_txt");
msg.addEventListener("tap", btnCheck);

function btnCheck(e) {
    e.target.setAttribute("class", "on");
    var time = 60;
    e.target.setAttribute("disabled", true);
    var timer = setInterval(function () {
        if (time == 0) {
            clearInterval(timer);
            e.target.setAttribute("disabled", false);
            e.target.innerText = "获得验证码";
            e.target.removeAttribute("class", "on");
        } else {
            e.target.innerText = time + "秒";
            time--;
        }
    }, 1000);
}


var list = document.getElementById("input_list");
var close = document.getElementsByClassName("mui-icon-close");

for (var i = 0; i < close.length; i++) {
    close[i].index = i;
}

// console.dir(close);
// list.addEventListener("keyup",function (e) {
//     e.target.nextElementSibling.style.visibility="visible";
//     if(!e.target.value) {
//         e.target.nextElementSibling.style.visibility="hidden";
//     }
// }) 

// list.addEventListener("tap",function (e) {
//     e.target.previousElementSibling.value="";
//     close.style.visibility="hidden";
//     console.log(close)
// }) 


var verifyCode = new GVerify("code_img");
// document.getElementById("code_img").onclick = function () {
//     var res = verifyCode.validate(document.getElementById("sub_icon").value);
//     if (res) {
//         alert("验证正确");
//     } else {
//         alert("验证码错误");
//     }
// }

