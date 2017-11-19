<template>
  <div class="purchase">
    <div class="bgcolor"></div>
    <!--支付成功-->
    <div class="purchase-title">
      支付成功
      <a href="#">完成</a>
    </div>
    <!--购买成功-->
    <div class="purchase-success">
      <img src="../assets/img/succeed@2x.png" alt="">&nbsp;
      购买成功
    </div>
    <!--消费码-->
    <ul class="consumption">
      <li v-for="tmp in 4">
        <div class="consumption-code flex">
          <span>音乐培训一对一</span>
          <a href="#">发送给朋友</a>
        </div>
        <p>消费码&nbsp;&nbsp;<span>4578 7457 454</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -999;
  }
  /* 弹性布局样式 */
  .flex{
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flex;
    display: -o-flex;
    display: -moz-flex;
    justify-content: space-between;
    -webkit-justify-content:space-between;
    -ms-justify-content:space-between;
    -o-justify-content:space-between;
    -moz-justify-content:space-between;
  }

  /*支付成功*/
  .purchase-title {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #fff;
    font-size: 15px;
    color: #333;
    position: relative;
  }
  .purchase-title>a {
    position: absolute;
    font-size: 14px;
    color: #333;
    right: 20px;
  }
  /*购买成功*/
  .purchase-success {
    width: 100%;
    height: 110px;
    background-color: #fff;
    text-align: center;
    line-height: 110px;
    margin-top: 10px;
  }
  .purchase-success>img {
    width: 14px;
    height: 14px;
    vertical-align: text-top;
  }
  /*消费码*/
  .consumption {
    padding: 10px 15px 0 15px;
  }
  .consumption>li {
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .consumption-code {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding: 0 15px;
    color: #666;
    border-bottom: 1px solid #ddd;
  }
  .consumption-code>a {
    font-size: 11px;
    box-sizing: border-box;
    height: 25px;
    line-height: 25px;
    margin-top: 6px;
    color: #00af42;
    border: 1px solid #00af42;
    border-radius: 4px;
    padding: 0 5px;
  }
  .consumption>li>p {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .consumption>li>p>span {
    font-size: 20px;
    color: #ea562d;
    vertical-align: sub;
  }

</style>
