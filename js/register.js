var msg = document.getElementById("msg_txt");
msg.addEventListener("tap", btnCheck);
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
                if (li[0].children[1].value != "" && li[1].children[1].value != "") {
                    sub_btn.style.background = "red";
                } else {
                    sub_btn.style.background = "#e0e0e0";
                }
                close_icon.addEventListener("tap", function () {
                    e.target.value = "";
                    close_icon.style.display = "none";
                    if (li[0].children[1].value != "" && li[1].children[1].value != "") {
                        sub_btn.style.background = "red";
                    } else {
                        sub_btn.style.background = "#e0e0e0";
                    }
                })
            }, 0)
        }
    })
}