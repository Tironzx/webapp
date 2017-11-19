<template>
  <div class="mylogin">
    <div class="bgcolor"></div>
    <!--我的-->
    <div class="my-title">我的</div>
    <!--登录-->
    <div class="mylogin-status">
      <a href="#/login" @click.prevent="jumpLogin">登录</a>
    </div>
    <!--我的钱包-->
    <ul class="my-wallet">
      <li><a href="#/mywallet"><img src="../assets/img/my_wallet.png" alt="">我的钱包</a></li>
      <li><a href="#/invite"><img src="../assets/img/my_recommend.png" alt="">推荐有奖</a></li>
      <li><a href="#/voucher"><img src="../assets/img/my_voucher.png" alt="">抵用券</a></li>
    </ul>
    <!--商家入驻-->
    <ul class="businessmen">
      <li><a href="#/business"><img src="../assets/img/my_merchant.png" alt="">商家入驻</a></li>
      <li><a href="#/cooperation"><img src="../assets/img/my_cooperation.png" alt="">我要合作</a></li>
      <li><a href="#/about"><img src="../assets/img/my_set.png" alt="">关于满老师</a></li>
    </ul>
    <!--客服热线-->
    <div class="service-hotline">客服热线:&nbsp;028-67873758</div>
    <mylogin-footer></mylogin-footer>
  </div>
</template>

<script>
  import MyloginFooter from '../components/Footer.vue'

  export default {
    name: 'mylogin',
    components:{
      MyloginFooter
    },
    methods:{
      //跳转到登录页面
      jumpLogin:function () {
        this.$router.push('/login');
      }
    }
  }



</script>

<style scoped>
  /*整个页面的灰色背景*/
  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -9999;
  }
  .mylogin {
    padding-bottom: 50px;
  }
  .my-title {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  /*登录*/
  .mylogin-status {
    position: relative;
    width: 100%;
    height: 200px;
    /*background-color: #ddd;*/
    margin: 0 auto;
  }
  .mylogin-status>a {
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 125px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-radius: 5px;
    color: #00af42;
    border:1px solid #00af42;
  }
  /*我的钱包*/
  .my-wallet {
    margin-bottom: 10px;
  }
  .my-wallet,.businessmen{
    background-color: #fff;
    padding-left: 10px;
  }
  /*商家入驻*/
  .my-wallet>li,.businessmen>li {
    height: 45px;
    line-height: 45px;
    font-size: 13px;
    padding-left: 5px;
  }
  .my-wallet>li>a,.businessmen>li>a {
    display: block;
    color: #333;
  }
  .my-wallet>li>a>img,.businessmen>li>a>img {
    vertical-align: text-top;
    margin-right: 10px;
  }
  .my-wallet>li:nth-child(2),.businessmen>li:nth-child(2) {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  /*客服热线*/
  .service-hotline {
    text-align: center;
    color: #999;
    padding-top: 30px;
    padding-bottom: 50px;
  }
</style>

