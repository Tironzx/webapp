<template>
  <div class="wallet">
    <!--钱包-->
    <div class="wallet-title">
      <a href="javascript:" onclick="history.back()"><img src="../assets/img/business_left@2x.png" alt=""></a>
      钱包
    </div>
    <!--余额-->
    <div class="wallet-balance">
      <p>余额</p>
      <h2>¥&nbsp;5000.00</h2>
      <ul>
        <li>
          <a href="#/withdraw">提现</a>
        </li>
        <li>
          <a href="#">邀请</a>
        </li>
      </ul>
    </div>
    <!--奖励明细/提现记录-->
    <ul class="reward-withdraw">
      <li @click="modify" class="checked" data-num="1">奖励明细</li>
      <li @click="modify" data-num="2">提现记录</li>
    </ul>
    <div class="flow-log">
      <ul>
        <li v-for="tmp in 3">
          <p>· 2017-05-04</p>
          <div class="recording"><b>心***</b>消费¥50<span>奖励</span><i>¥5</i></div>
        </li>
      </ul>

      <ul class="hide">
        <li v-for="tmp in 5">
          <p>· 2017-05-04</p>
          <div class="recording"><b>心***</b>消费¥50<span>奖励</span><i>¥5</i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'wallet',
    data(){
      return {

      }
    },
    methods:{
      modify:function (event) {
        var lis=document.querySelectorAll(".reward-withdraw li");
        for(var i=0;i<lis.length;i++){
          lis[i].classList.contains("checked")&&lis[i].classList.remove("checked");
        };
        event.target.classList.toggle("checked");
        var num=event.target.getAttribute("data-num");
        if(num==1){
          document.querySelector(".flow-log ul:last-child").style.display="none";
          document.querySelector(".flow-log ul:first-child").style.display="block";
        }else if(num==2){
          document.querySelector(".flow-log ul:first-child").style.display="none";
          document.querySelector(".flow-log ul:last-child").style.display="block";
        }
      }
    }
  }
</script>
<style scoped>
  /*钱包*/
  .wallet-title {
    position: relative;
    height: 45px;
    line-height: 45px;
    border-bottom: 10px solid #eee;
    font-size: 15px;
    text-align: center;
  }
  .wallet-title>a {
    position: absolute;
    left: 10px;
    width: 20px;
  }
  .wallet-title>a>img {
    width: 8px;
    height: 14px;
  }
  /*余额*/
  .wallet-balance {
    height: 185px;
    font-size: 15px;
    border-bottom: 10px solid #eee;
  }
  .wallet-balance>p {
    margin-top: 25px;
    margin-bottom: 10px;
    text-align: center;
  }
  .wallet-balance>h2 {
    text-align: center;
    font-size: 30px;
    font-weight: normal;
  }
  .wallet-balance>ul {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    margin-top: 20px;
  }
  .wallet-balance>ul>li {
    width: 30%;
    margin-left: 13%;
  }
  .wallet-balance>ul a{
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #00af42;
    border: 1px solid #00af42;
    border-radius: 5px;
  }
  /*奖励明细/提现记录*/
  .reward-withdraw {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    background-color: #eee;
  }
  .reward-withdraw>li {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 13px;
    width: 50%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: #999;
  }
  .checked {
    background-color: #fff;
    color: #333;
  }
  /*流水日志*/
  .flow-log {
    padding-top: 10px;
    overflow: hidden;
  }
  .flow-log li{
    padding-left: 10px;
    color: #666;
  }
  .recording {
    text-align: center;
    position: relative;
  }
  .recording>b {
    font-weight: normal;
    position: absolute;
    left: 5px;
  }
  .recording>span {
    position: absolute;
    left: 80%;
  }
  .recording>i {
    font-style: normal;
    position: absolute;
    left: 88%;
    color: #ea562d;
  }

  .hide {
    display: none;
  }
</style>
