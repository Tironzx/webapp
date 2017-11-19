<template>
  <div class="login">
    <p class="closed"><img src="../assets/img/close@2x.png" alt=""></p>
    <p class="logo"><img src="../assets/img/logo@2x.png" alt=""></p>
    <form>
      <ul class="verification">
        <li>
          <span>+86</span>
          <input type="tel" id="phone" placeholder="请输入电话号码" maxlength="11">
        </li>
        <li>
          <input type="text" id="code" placeholder="请输入验证码" maxlength="4">
          <span @click="phonecode">获取验证码</span>
        </li>
      </ul>
      <p class="codealert">输入的验证码有误</p>
      <button class="submit" @click="submit">登录</button>
    </form>
    <!--服务条款-->
    <div class="terms">
      <p>轻触上面的登录按钮,即表示你同意</p>
      <a href="#" @click.prevent="alert">《满老师服务条款》</a>
    </div>
    <!--服务条款内容设置遮罩层-->
    <div class="termscontent hide" @click="alert" data-close="closed">
      <div class="termscontent-text">
        <p class="termscontent-text-closed"><img src="../assets/img/close@2x.png" alt=""></p>
        <div class="server">
          服务条款
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda delectus dicta et iusto nostrum sapiente. Consequatur ea hic illo iste laborum natus nesciunt nihil nostrum provident, repellendus repudiandae sapiente voluptas.lorem
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, distinctio, dolorum eius esse et fugit id ipsum laboriosam laudantium magnam nam natus odit placeat porro quis similique sit tempora temporibus.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, adipisci beatae blanditiis cupiditate deserunt distinctio enim, eos, eveniet facere hic ipsa molestias mollitia nihil odio officia quas repellat sit veritatis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur blanditiis, commodi corporis eum magnam, neque nesciunt porro quaerat quibusdam quo ratione recusandae sapiente sed sit tempora ullam vel, voluptatum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur atque consequuntur, cum dignissimos eligendi error et eum impedit iure laboriosam necessitatibus quae quos suscipit, ullam velit veritatis voluptate voluptates.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus ad aperiam autem delectus dicta distinctio earum eos error maxime non, quae rem sapiente, sit tenetur ullam voluptatem voluptatibus voluptatum!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aliquam amet architecto at consequuntur eum eveniet exercitationem itaque odit officia, quibusdam sequi sit. Dolor eius eum quia quis vel.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto deserunt doloremque, doloribus eos ex fugiat illo illum impedit itaque labore natus nemo officia placeat possimus repudiandae sed totam ullam.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /*手机号验证*/
  var reg=/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/i;
  export default {
      name:'login',
      data(){
        return {

        }
      },
      methods:{
        alert:function (event) {
          //查找设置遮罩层的元素
            var termscontent=document.querySelector(".termscontent");
            var ele=event.target;
            if(ele.nodeName=="IMG"){
              //来回切换class,如果hide存在就删除，不存在就添加
              termscontent.classList.toggle("hide");
            }else if(ele.getAttribute("data-close")){
              termscontent.classList.toggle("hide");
            }else if(ele.nodeName=="A"){
              termscontent.classList.toggle("hide");
            }
        },
        //获取验证码
        phonecode:function (event) {
          var tar=event.target;
          //获取用户输入的手机号
          var phone=document.getElementById("phone").value;
          //如果号码正确，设置定时器，修改文本内容
          if(reg.test(phone)){
            var time=60;
            var timer=setInterval(function () {
              time--;
              tar.innerHTML=time+"S";
              //当时间为0，清除定时器
              if(time==0){
                tar.innerHTML="获取验证码";
                clearInterval(timer);
                timer=null;
              }
            },1000);
          }else {
            alert("手机格式不正确")
          }

        },
        submit:function () {
            var phone=document.getElementById("phone").value;
            var code=document.getElementById("code").value;
            console.log(phone,code);
            var reg=/^(13[0-9]|14[5|7]|15[0-9]|18[0-9])\d{8}$/i;
            if(!reg.test(phone)){
              alert("手机号码格式不正确");
            }
        }
      }
  }
</script>

<style scoped>
  /*设置input元素的placeholder颜色*/
  ::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
  }
  /*输入框的提示文字颜色*/
  .closed {
    height: 30px;
    line-height: 30px;
    padding-left: 15px;
    margin-top: 12px;
  }
  .closed>img {
    width: 13px;
    height: 13px;
  }
  .logo {
    text-align: center;
    width: 100%;
    height: auto;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .logo>img {
    width: 52px;
    height: 51px;
    margin: 0 auto;
  }
  /*用户账号密码验证*/
  form {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
  }
  .verification>li {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
  .verification>li:first-child>span {
    display: inline-block;
    width: 20%;
    height: 34px;
    line-height: 34px;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #ddd;
    margin-right: 5%;
  }
  .verification>li>input {
    height: 34px;
    line-height: 34px;
    font-size: 13px;
    width: 70%;
    color: #333;
  }
  .verification>li:last-child>input {
    width: 50%;
    margin-left: 26%;
  }
  .verification>li:last-child>span{
    display: inline-block;
    width: 66px;
    height: 23px;
    line-height: 23px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 11px;
    text-align: center;
  }
  /*验证码错误提示*/
  .codealert {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 95px;
    color: #ea652d;
    font-size: 12px;
  }
  /*登录*/
  .submit {
    width: 100%;
    height: 45px;
    background-color: #ea652d;
    border-radius: 5px;
    margin-top:50px;
  }
  /*服务条款*/
  .terms {
    position: fixed;
    bottom: 15px;
    left: 25%;
    font-size: 11px;
  }
  .terms>p {
    text-align: center;
    color: #666;
  }
  .terms>a {
    display: block;
    margin: 0 auto;
    text-align: center;
    color: #00af42;
  }
  /*服务条款遮罩层*/
  .termscontent {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    padding: 10px;
  }
  .termscontent-text{
    position: fixed;
    top:20%;
    left:10px;
    bottom: 20%;
    right: 10px;
    background-color: #fff;
    padding: 10px;
    overflow: hidden;
  }
  .termscontent-text-closed {
    text-align: right;
    /*padding-top: 10px;*/
    /*padding-right: 10px;*/
  }
  .termscontent-text-closed>img {
    width: 13px;
    height: 13px;
  }
  .server {
    width: 100%;
    height: 95%;
    overflow-y: scroll;
  }
  /*显示隐藏服务条款*/
  .hide {
    display: none;
  }
</style>
