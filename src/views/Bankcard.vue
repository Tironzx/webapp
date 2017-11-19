<template>
  <div class="bandcard">
    <!--设置页面灰色背景色-->
    <div class="layer"></div>
    <!--绑定银行卡-->
    <div class="cardbind">
      <a href="javascript:window.history.go(-1)"><img src="../assets/img/business_left@2x.png" alt=""></a>
      绑定银行卡
    </div>
    <!--友情提示-->
    <p class="prompt">此卡将作为您提现收款的唯一银行卡</p>
    <!--用户信息-->
    <form class="userinfo">
      <ul>
        <li>
          <label for="username">姓名</label>
          <input type="text" placeholder="请填写姓名" id="username">
        </li>
        <li>
          <label for="bank">开户行</label>
          <input type="text" placeholder="请输入开户行" id="bank">
        </li>
        <li>
          <label for="card">卡号</label>
          <input type="number" placeholder="请输入储蓄卡号" id="card" minlength="16">
        </li>
        <li>
          <label for="phone">手机号</label>
          <input type="number" placeholder="请输入手机号" maxlength="11" id="phone">
        </li>
        <li>
          <label for="code">验证码</label>
          <input type="number" placeholder="请输入验证码" id="code" maxlength="4">
          <span class="obtain-code" @click="verificationcode">获取验证码</span>
        </li>
        <p class="verificationerror">验证码错误</p>
      </ul>
      <a href="#" @click.prevent="" class="userinfo-determine">确定</a>
    </form>
  </div>
</template>

<script>
  /*手机号验证*/
  var reg=/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/i;
  export  default {
    name: 'bandcard',
    data (){
      return {

      }
    },
    methods:{
      verificationcode:function (event) {
        var tar=event.target;
        //获取用户输入的手机号
        var phone=document.getElementById("phone").value;
        if(reg.test(phone)){
          var time=60;
          var timer=setInterval(function () {
            time--;
            tar.innerHTML=time+"S";
            if(time==0){
              tar.innerHTML="获取验证码";
              clearInterval(timer);
              timer=null;
            }
          },1000)
        }else {
          alert("手机号位数错误")
        }

      }
    }
  }
</script>

<style scoped>
  /* 弹性布局样式 */
  .flex {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    justify-content: space-between;
    -webkit-justify-content:space-between;
    -moz-justify-content:space-between;
    -ms-justify-content:space-between;
    -o-justify-content:space-between;
  }
  /*设置整个页面的灰色背景*/
  .layer {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -999;
    background-color: #eee;
  }
  /*绑定银行卡*/
  .cardbind {
    /*padding-left: 15px;*/
    position: relative;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .cardbind>a {
    position: absolute;
    width: 20px;
    left: 10px;
  }
  .cardbind>a>img {
    width: 8px;
    height: 14px;
    vertical-align: middle;
  }
  /*友情提示*/
  .prompt {
    padding-left: 10px;
    color: #999;
    margin-top: 15px;
  }
  /*用户信息*/
  .userinfo {
    padding-left: 10px;
    padding-right: 10px;
  }
  .userinfo li {
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .userinfo li label {
    display: inline-block;
    font-size: 13px;
    color: #333;
    width: 20%;
  }
  .userinfo li input {
    display: inline-block;
    height: 25px;
    line-height: 25px;
    width: 52%;
  }
  /*获取验证码*/
  .obtain-code {
    display: inline-block;
    width: 22%;
    height: 25px;
    line-height: 25px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 12px;
  }
  /*验证信息错误提示*/
  .verificationerror {
    color: #ea652d;
    font-size: 10px;
    padding-left: 26%;
  }
  /*确定*/
  .userinfo-determine {
    display: inline-block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #ea652d;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    margin-top: 90px;
  }
</style>
