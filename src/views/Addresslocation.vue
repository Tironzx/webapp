<!--地址定位-->
<template>
  <div class="address">
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <!--切换地址-->
    <div class="addressswitch">
      <a href="#">
        <img src="../assets/img/close@2x.png" alt="">
      </a>
      切换地址
    </div>
    <!--地址输入框-->
    <div class="address-input">
      <input type="text" placeholder="请输入地址">
      <img src="../assets/img/location_close@2x.png" alt="">
    </div>
    <!--点击刷新当前位置-->
    <div class="location">
      <img src="../assets/img/location_refresh@2x.png" alt="">
      &nbsp;点击定位当前位置
    </div>
    <!--历史地址-->
    <p class="history-record">
      <img src="../assets/img/location_history@2x.png" alt="">&nbsp;
      历史地址
    </p>
    <ul class="history-record-list">
      <li>孵化园(地铁站)</li>
      <li>环球中心</li>
    </ul>
  </div>
</template>

<script>

</script>

<style scoped>
  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    z-index: -999;
  }
  /*地址切换*/
  .addressswitch {
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .addressswitch>a {
    display: inline-block;
    position: absolute;
    left: 15px;
  }
  .addressswitch>a>img {
    width: 13px;
    height: 13px;
  }
  /*地址输入框*/
  .address-input {
    position: relative;
    height: 45px;
    background-color: #fff;
    line-height: 45px;
    padding: 0 15px;
  }
  .address-input>input{
    display: inline-block;
    width: 100%;
    height: 26px;
    box-sizing: border-box;
    border-radius: 13px;
    padding-left: 45px;
    background: url("../assets/img/home_search.png") no-repeat 18px 6px;
    background-color: #eee;
  }
  /*清除图标*/
  .address-input>img {
    width: 10px;
    height: 10px;
    position: absolute;
    right: 30px;
    top:16px;
  }
  /*点击定位当前位置*/
  .location {
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    border-top: 10px solid #eee;
    border-bottom: 10px solid #eee;
  }
  .location>img {
    width: 13px;
    height: 12px;
  }
  /*历史记录*/
  .history-record {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    font-weight: 600;
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  .history-record>img {
    width: 13px;
    height: 13px;
  }
  /*历史地址列表*/
  .history-record-list {
    padding-left: 10px;
    font-size: 13px;
    background-color: #fff;
  }
  .history-record-list>li {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
  }
  .history-record-list>li:last-child {
    border-bottom: none;
  }
</style>
