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
var reg_form = document.getElementById("reg_form");
var verifyCode = new GVerify("code_img");
var sub_icon = document.getElementById("sub_icon");
var phone = document.getElementById("phone")
var psw = document.getElementById("psw")
var phoneNumReg = /^1[3|4|5|7|8]\d{9}$/
reg_form.addEventListener("submit",function(e) {
    var res = verifyCode.validate(document.getElementById("Code_input").value);
    if(!phoneNumReg.test(phone.value)) {
        mui.toast('请输入有效的手机号码');
        e.preventDefault()
    }else if(!res) {
        mui.toast('验证码错误');
        e.preventDefault()
    }else if(psw.value.length <= 6) {
        mui.toast('密码不小于6位');
        e.preventDefault()
    }else {
        return
    }
})