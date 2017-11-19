<template>
  <div class="orderdetail">
   <!--订单详情-->
      <div class="myorder">
        <a href="javascript:window.history.go(-1)">
          <img src="../assets/img/business_left@2x.png" alt="">
        </a>
        订单详情
        <a href="#">
          <img src="../assets/img/business_more@2x.png" alt="">
        </a>
      </div>
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <!--商品名称-->
    <ul class="productlist">
      <li>
        <div></div>
        <div class="productlist-description">
          <h4>XXX钢琴培训</h4>
          <p>
            <b>¥</b><i>90</i><span>团购价</span>&nbsp;<s>门市价¥1000</s>
          </p>
          <span>9:00-18:00 (周一不可用) |需预约</span>
        </div>
      </li>
    </ul>
    <!--不支持退款-->
    <p class="norefunds"><img src="../assets/img/refunds@2x.png" alt="">&nbsp;不支持退款</p>
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <!--消费码-->
    <div class="consumption flex">
      <b>消费码</b><span>有效期至:&nbsp;2017-03-10 18:00</span>
    </div>
    <ul class="consumptioncode">
      <li class="flex">
        <i>2323 3345 488</i>
        <span>未消费</span>
      </li>
      <li class="flex">
        <i>2323 4544 454</i>
        <span>已消费</span>
      </li>
    </ul>
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <!--商家店铺-->
    <div class="businessmen">
      <P>商家店铺</P>
      <!--一找轻松-->
      <div class="businessmen-location flex">
        <div class="findeasy">
          <h3>一找轻松</h3>
          <span>高新区孵化园9号楼10号</span>
          <p><img src="../assets/img/home_location@2x.png" alt="">&nbsp;<span>621米</span></p>
        </div>
        <div class="businessmen-phone">
          <a href="tel:18684025912">
            <img src="../assets/img/business_phone@2x.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <!--套餐内容-->
    <div class="package">
      <div class="package-content">
        <div class="package-content-title">∞&nbsp;套餐内容&nbsp;∞</div>
        <div class="package-content-choose">
          <h5>套餐内容</h5>
          <p>(4选3&nbsp;不可重复选)</p>
        </div>
        <div class="package-content-text">
          <ul>
            <li>音乐舞蹈一对一 &nbsp;60分钟 &nbsp;1节 &nbsp;100元</li>
            <li>音乐舞蹈一对一 &nbsp;60分钟 &nbsp;1节 &nbsp;100元</li>
            <li>音乐舞蹈一对一 &nbsp;60分钟 &nbsp;1节 &nbsp;100元</li>
            <li>音乐舞蹈一对一 &nbsp;60分钟 &nbsp;1节 &nbsp;100元</li>
          </ul>
        </div>
        <!--赠品-->
        <div class="package-content-gifts">
          <h4>赠品</h4>
          <p>无</p>
        </div>
      </div>
    </div>
    <!--灰色背景-->
    <div class="bgcolor"></div>
    <!--订单信息-->
    <div class="orderdetail-info">
      <p>订单信息</p>
      <ul>
        <li>订单编号: &nbsp;<span>484545454545</span></li>
        <li>付款时间: &nbsp;<span>2017-01-25 &nbsp;15:00</span></li>
        <li>手机号: &nbsp;<span>18875489586</span></li>
        <li>数量: &nbsp;<span>1份</span></li>
        <li>总价:&nbsp;<span>¥90</span></li>
        <li>抵用券:&nbsp;<span>¥10</span></li>
      </ul>
      <p class="orderdetail-payment">实付款:&nbsp;¥80</p>
    </div>
    <!--已经到底了-->
    <div class="order-end"><p><span>已经到底了</span></p></div>
    <!--再来一单-->
    <a href="#/productdetail" class="comeagain">再来一单</a>
    </div>
</template>

<script>
  export default {
    name:'orderdetail'
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
  .myorder {
    position: relative;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  .myorder>a {
    position: absolute;
    width: 25px;
  }
  .myorder>a:first-child {
    left: 5px;
  }
  .myorder>a:last-child {
    right: 5px;
  }
  .myorder>a:first-child>img {
    width: 8px;
    height: 14px;
  }
  .myorder>a:last-child>img{
    width:18px;
    height: 5px;
  }
  /*灰色背景*/
  .bgcolor {
    width: 100%;
    height: 10px;
    background-color: #eee;
  }
  /*商品名称列表*/
  .productlist>li{
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    border-bottom: 1px solid #ddd;
  }
  .productlist>li>div:first-child {
    width: 100px;
    height: 74px;
    background-color: #ea652d;
    margin-right: 10px;
  }
  .productlist-description>h4 {
    font-size: 14px;
    color: #333;
  }
  .productlist-description>p {
    color: #ea562d;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .productlist-description>p>b{
    font-weight: normal;
    font-size: 10px;
  }
  .productlist-description>p>i{
    font-style: normal;
    font-size: 19px;
  }
  .productlist-description>p>span {
    display: inline-block;
    font-size: 10px;
    border: 1px solid #ea652d;
    border-radius: 3px;
    margin-left: 6px;
    margin-right: 10px;
  }
  .productlist-description>p>s {
    color: #666;
    font-size: 10px;
  }
  .productlist-description>span {
    font-size: 12px;
    color: #666;
  }
  /*不支持退款*/
  .norefunds {
    height: 40px;
    line-height: 40px;
    font-size: 11px;
    color: #666;
    padding-left: 10px;
  }
  .norefunds>img {
    width: 10px;
    height: 10px;
  }
  /*消费码*/
  .consumption {
    height: 40px;
    line-height:40px;
    border-bottom: 1px solid #ddd;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
  }
  .consumption>b {
    font-weight: normal;
  }
  .consumption>span {
    color: #666;
  }
  .consumptioncode{
    padding-left: 10px;
    font-size: 13px;
  }
  .consumptioncode>li {
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    padding-right: 10px;
    border-bottom: 1px solid #ddd;
  }
  .consumptioncode>li:last-child {
    border-bottom: none;
  }
  .consumptioncode>li>i {
    font-style: normal;
    color: #ea562d;
  }
  .consumptioncode>li>span{
    color: #333;
  }
  /*商家店铺*/
  .businessmen>p {
    height: 40px;
    line-height:40px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    font-size: 13px;
    color: #666;
    padding-left: 10px;
  }
  .businessmen-location {
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  /*一找轻松*/
  .findeasy>h3 {
    color: #333;
    font-size: 15px;
    height: 25px;
    line-height: 25px;
  }
  .findeasy>span {
    font-size: 12px;
    color: #666;
  }
  .findeasy>p {
    height: 25px;
    line-height: 25px;
  }
  .findeasy>p>img {
    width: 8px;
    height: 11px;
  }
  .businessmen-phone {
    padding-left: 15px;
    border-left: 1px solid #ddd;
    padding-top: 7px;
    margin-right: 25px;
    height: 35px;
    margin-top: 15px;
    box-sizing: border-box;
  }
  .businessmen-phone>a {
    display: block;
  }
  .businessmen-phone>a>img {
    width: 20px;
    height: 20px;
  }
  /*套餐内容*/
  .package {
    padding: 20px 10px 15px 10px;
  }
  .package-content {
    border: 1px solid #323232;
    padding: 10px;
    box-sizing: border-box;
  }
  .package-content-title {
    background-color: #fff;
    height: 25px;
    line-height: 25px;
    width: 150px;
    font-size: 13px;
    color: #333;
    text-align: center;
    margin-top: -24px;
    margin-left: 27%;
  }
  @media (min-width:768px) {
    .package-content-title {
      margin-left: 38%;
    }
  }
  /*套餐选择4选3*/
  .package-content-choose {
    margin-top:20px;
    text-align: center;
  }
  .package-content-choose>h5{
    font-size: 12px;
  }
  .package-content-choose>p {
    color: #666;
  }
  .package-content-text {
    text-align: center;
    color: #666;
    margin-top: 10px;
  }
  .package-content-text li {
    height: 22px;
    line-height: 22px;
  }
  /*赠品*/
  .package-content-gifts {
    margin-top:20px;
    text-align: center;
    margin-bottom: 10px;
  }
  .package-content-gifts>h4 {
    margin-bottom: 15px;
  }
  /*订单详情*/
  .orderdetail-info {
    color: #333;
  }
  .orderdetail-info>p {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .orderdetail-info>p:first-child {
    border-bottom: 1px solid #ddd;
  }
  .orderdetail-info>ul {
    padding: 10px;
  }
  .orderdetail-info>ul>li{
    height: 22px;
    line-height: 22px;
  }
  .orderdetail-info>ul>li>span {
    color: #666;
  }
  /*实付款*/
  .orderdetail-payment {
    border-top: 1px solid #ddd;
    border-bottom: none;
    text-align: right;
    padding-right: 10px;
  }
  /*已经到底了*/
  .order-end {
    height: 40px;
    background-color: #eee;
    padding-top: 20px;
    text-align: center;
    box-sizing: border-box;
  }
  .order-end>p {
    width: 50%;
    border-top: 1px solid #666;
    margin: 0 auto;
  }
  .order-end span {
    display: block;
    width: 60%;
    height: 20px;
    background-color: #eee;
    color: #666;
    margin-top: -6%;
    margin-left: 17%;
  }
  /*再来一单*/
  .comeagain {
    display: block;
    height: 40px;
    line-height: 40px;
    background-color: #ea652d;
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
</style>
