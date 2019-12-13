function getWidth() {
    var html = document.getElementsByTagName("html")[0];
    html.style.fontSize = (html.clientWidth / 320 * 100) + "px";
}
getWidth()

window.onresize = function () {
    getWidth();
}
var verifyCode = new GVerify("code_img");
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

var li = document.getElementById("input_list").children;
var sub_btn = document.getElementById("sub_icon")
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("keydown", function (e) {
        if (e.target.nodeName == "INPUT") {
            var close_icon = e.target.nextElementSibling;
            setTimeout(function () {
                if (e.target.value == "") {
                    close_icon.style.display = "none";
                } else {
                    close_icon.style.display = "block";
                }
                if (li[0].children[1].value != "") {
                    sub_btn.style.background = "red";
                } else {
                    sub_btn.style.background = "#e0e0e0";
                }
                close_icon.addEventListener("tap", function () {
                    e.target.value = "";
                    close_icon.style.display = "none";
                    if (li[0].children[1].value != "") {
                        sub_btn.style.background = "red";
                    } else {
                        sub_btn.style.background = "#e0e0e0";
                    }
                })
            }, 0)
        }
    })
}

var list = document.getElementById("input_list");
var close = document.getElementsByClassName("mui-icon-close");
var sub_form = document.getElementById("sub_form");
var sub_icon = document.getElementById("sub_icon");
var phone = document.getElementById("phone")
var psw = document.getElementById("psw")
var phoneNumReg = /^1[3|4|5|7|8]\d{9}$/
sub_form.addEventListener("submit", function (e) {
    var res = verifyCode.validate(document.getElementById("Code_input").value);
    if (!phoneNumReg.test(phone.value)) {
        mui.toast('请输入有效的手机号码');
        e.preventDefault()
    } 
    // else if (!res) {
    //     mui.toast('验证码错误');
    //     e.preventDefault()
    // } 
    else if (psw.value.length <= 6) {
        mui.toast('密码不小于6位');
        e.preventDefault()
    } else {
        return
    }
})