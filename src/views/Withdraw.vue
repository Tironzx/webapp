<template>
  <div class="withdraw">
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <div class="withdraw-title">
      <a href="javascript:window.history.go(-1)"><img src="../assets/img/business_left.png" alt=""></a>
      提现
    </div>
    <!--银行卡/修改-->
    <div class="withdraw-bank">
      <ul>
        <li>银行卡</li>
        <li>
          <p>建设银行储蓄卡(1234)</p>
          <span>提现到建设银行</span>
        </li>
        <li>
          <a href="#/bankcard">修改</a>
        </li>
      </ul>
    </div>
    <!--提现金额-->
    <div class="withdraw-money">
      <ul>
        <li>
          提现金额&nbsp;&nbsp;<span>(满¥100即可提现)</span>
        </li>
        <li>
          <span>¥</span>
          <input type="number" v-model="money" placeholder="请输入提现金额">
        </li>
      </ul>
      <p v-show="alertText" style="color: #ea562d">您输入的金额有误</p>
    </div>
    <!--提现按钮-->
    <div class="withdraw-btn">
      <p>2个工作日内到账</p>
      <a href="#" @click.prevent="getMoney">提现</a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'withdraw',
    data(){
      return {
        money:'',
        alertText:false
      }
    },
    methods:{
      //提现金额小于一百元出现提示文字
      getMoney:function () {
        this.alertText=this.money<100?true:false;
      }
    }
  }
</script>


<style scoped>
  input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
  }
  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -999;
  }
  /*提现*/
  .withdraw-title {
    position: relative;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    text-align: center;
  }
  .withdraw-title>a {
    position: absolute;
    width: 20px;
    left: 10px;
  }
  /*银行卡*/
  .withdraw-bank {
    padding: 10px 10px 0 10px;
  }
  .withdraw-bank>ul {
    background-color: #fafafa;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -o-flex;
    display: -ms-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    -moz-justify-content:space-between;
    -ms-justify-content:space-between;
    -o-justify-content:space-between;
  }
  .withdraw-bank>ul>li {
    height: 60px;
    padding-top: 15px;
    box-sizing: border-box;
  }
  .withdraw-bank>ul>li:first-child {
    width: 20%;
    font-size: 12px;
    padding-left: 10px;
  }
  .withdraw-bank li:nth-child(2) {
    width: 50%;
  }
  .withdraw-bank li:nth-child(2) p{
    color: #01d79f;
    font-size: 13px;
    margin-bottom: 5px;
  }
  .withdraw-bank li:nth-child(2) span {
    color: #666;
  }
  .withdraw-bank li:last-child {
    width: 25%;
    text-align: right;
    padding-right: 20px;
  }
  .withdraw-bank li:last-child a{
    color: #01d79f;
    font-size: 13px;
  }
  /*提现金额*/
  .withdraw-money {
    padding-left: 10px;
    padding-right: 10px;
    height: 100px;
  }
  .withdraw-money>ul {
    background-color: #fff;
    height: 100px;
    padding-left: 10px;
    padding-top: 15px;
    box-sizing: border-box;
  }
  .withdraw-money li:first-child {
    font-size: 12px;
  }
  .withdraw-money li:first-child>span {
    color: #666;
  }
  .withdraw-money li:last-child {
    margin-top: 15px;
  }
  .withdraw-money li:last-child>span {
    font-size: 25px;
  }
  .withdraw-money li:last-child>input {
    display: inline-block;
    height: 30px;
    margin-left: 15px;
    font-size: 14px;
  }
  /*提现按钮*/
  .withdraw-btn {
    margin-top: 80px;
    padding: 0 10px;
  }
  .withdraw-btn>p {
    text-align: center;
    color: #999;
    font-size: 11px;
  }
  .withdraw-btn>a {
    display: block;
    height: 45px;
    line-height: 45px;
    color: #fff;
    text-align: center;
    font-size: 14px;
    background-color: #ea562d;
    border-radius: 5px;
  }
</style>
