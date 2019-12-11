var bat=document.getElementsByClassName("w_user-button")[0];
bat.addEventListener("touchstart",function(){
  var user=document.getElementsByClassName("w_user-inval")[0];
  if(user.value.length>0){ 
      window.history.go(-1)
      window.localStorage.setItem("user",user.value)
      
  }else{
    mui.toast('请输入用户名',{ duration:'long(3500ms)', type:'div' }) 
  }
})