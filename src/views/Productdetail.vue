<template>
  <div class="productdetail">
    <!--1、产品详情-->
    <div class="productdetail-title">
      <a href="javascript:history.go(-1)"><img src="../assets/img/business_left@2x.png" alt=""></a>
      产品详情
      <a href="#"><img src="../assets/img/business_more@2x.png" alt=""></a>
    </div>
    <!--2、商品广告展示-->
    <div class="product-show"></div>
    <!--3、商品名称、价格-->
    <div class="product-category">
      <div class="product-category-title">
        <h3>舞蹈一对一基础课程</h3>
        <p><b>¥</b>&nbsp;<span>900</span>&nbsp;&nbsp;<i>团购价</i>&nbsp;<s>门市价 ¥1000</s></p>
      </div>
      <ul class="product-category-desc">
        <li>随时退</li>
        <li>过期退</li>
      </ul>
    </div>
    <!--4、商家店铺-->
    <div class="business-shop">商家店铺</div>
    <!--5、商家地址-->
    <div class="business-location flex">
      <div class="findeasy">
        <h3>一找轻松</h3>
        <span>高新区孵化园9号楼10号</span>
        <p><img src="../assets/img/home_location@2x.png" alt="">&nbsp;621米</p>
      </div>
      <div class="business-location-phone">
        <a href="tel:15848474875">
          <img src="../assets/img/business_phone@2x.png" alt="">
        </a>
      </div>
    </div>
    <!--6、课程师资-->
    <div class="course-teachers">
      <p class="course-teachers-title">课程师资</p>
      <div class="swiper-container course-teachers-team">
        <ul class="swiper-wrapper">
          <li class="swiper-slide course-teachers-list"  v-for="n in 8">
            <div><img src="../assets/img/kelly.jpg" alt=""></div>
            <h5>李老师{{n}}</h5>
            <p>舞蹈</p>
          </li>
        </ul>
      </div>
    </div>
    <!--7、套餐内容-->
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
    <!--8、购买须知-->
    <div class="purchase-notes">
      <h4>-&nbsp;购买须知&nbsp;-</h4>
      <ul class="purchase-notes-rules">
        <li>·&nbsp;有效期:&nbsp;&nbsp;<span>2017年08月23日至2017年09月20日 (周一不可用)</span></li>
        <li>·&nbsp;营业时间:&nbsp;&nbsp;<span>11：00-23：00</span></li>
        <li>·&nbsp;预约提示:&nbsp;&nbsp;<span>需提前一天预约</span></li>
        <li>·&nbsp;使用规则:&nbsp;&nbsp;<span>每次消费只有一人使用</span></li>
        <li>·&nbsp;温馨提示:&nbsp;&nbsp;<span>提供免费停车，免费WIFI</span></li>
      </ul>
    </div>
    <!--9、产品详情，图片展示-->
    <div class="product-img-show">
      <div class="product-img-show-title">
        -&nbsp;<img src="../assets/img/business_picture@2x.png" alt=""> 产品详情&nbsp;-
      </div>
      <ul>
        <li>
          <img src="../assets/img/kelly.jpg" alt="">
        </li>
        <li>
          <img src="../assets/img/kelly.jpg" alt="">
        </li>
      </ul>
    </div>
    <!--10、已经到底了-->
    <div class="order-end"><p><span>已经到底了</span></p></div>
    <!--11、立即抢购-->
    <a href="#/orderpay" class="buy-immediately">立即抢购</a>


  </div>
</template>

<script language="JavaScript">
  import Swiper from '../../static/swiper-3.4.2.min'
  export default {
    name:'productdetail',
    data(){
      return {

      }
    },
    mounted(){
      //添加左右滑动事件
      var mySwiper = new Swiper('.swiper-container', {
//        autoplay: 5000,
        slidesPerView : 4, //页面显示的数量
        spaceBetween : 15 //控制宽度
      })
    }
  }
</script>

<style scoped>
  @import "../libs/css/swiper-3.4.2.min.css";

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
  /*产品详情*/
  .productdetail-title {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    position: relative;
  }
  .productdetail-title>a {
    position: absolute;
    width: 25px;
  }
  .productdetail-title>a:first-child {
    left: 5px;
  }
  .productdetail-title>a:last-child {
    right: 5px;
  }
  .productdetail-title>a:first-child>img {
    width: 8px;
    height: 14px;
  }
  .productdetail-title>a:last-child>img{
    width: 18px;
    height: 5px;
  }
  /*商品大图展示*/
  .product-show {
    height: 285px;
    width: 100%;
    background-color: #ddd;
  }
  /*商品价格，名称*/
  .product-category-title {
    padding: 15px 0;
  }
  .product-category-title>h3 {
    font-size: 16px;
    color: #323232;
    text-align: center;
  }
  .product-category-title>p {
    color: #ea562d;
    text-align: center;
  }
  .product-category-title>p>b {
    font-weight: normal;
    font-size: 14px;
    display: inline-block;
    vertical-align: sub;
  }
  .product-category-title>p>span {
    font-size: 25px;
    display: inline-block;
    vertical-align: middle;
  }
  .product-category-title>p>i {
    font-style: normal;
    display: inline-block;
    border: 1px solid #ea562d;
    font-size: 11px;
    border-radius: 3px;
    vertical-align: middle;
  }
  .product-category-title>p>s {
    color: #666;
    font-size: 12px;
    display: inline-block;
    vertical-align: sub;
  }
  /*随时退，过期退*/
  .product-category-desc{
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -o-flex;
    display: -ms-flex;
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ddd;
    border-bottom: 10px solid #ddd;
  }
  .product-category-desc>li {
    padding-left: 32px;
    background: url("../assets/img/refunds@2x.png") no-repeat 15px 15px;
    background-size: 11px;
  }
  /*商家店铺*/
  .business-shop {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    color: #666;
    padding-left: 10px;
    border-bottom: 1px solid #ddd;
  }
  /*商家地址*/
  .business-location {
    padding: 15px 0 15px 10px;
    border-bottom: 10px solid #ddd;
  }
  /*商家地址*/
  .findeasy>h3{
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
  .business-location-phone{
    box-sizing: border-box;
    padding-left: 15px;
    border-left: 1px solid #ddd;
    padding-top: 7px;
    margin-right: 25px;
    height: 35px;
    margin-top: 15px;
  }
  .business-location-phone>a {
    display: block;
  }
  .business-location-phone>a>img {
    width: 20px;
    height: 20px;
  }
  /*课程师资*/
  .course-teachers {
    border-bottom: 10px solid #ddd;
  }
  .course-teachers-title {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    font-size: 13px;
    padding-left: 10px;
  }
  .course-teachers-team{
    padding: 15px 0 15px 10px;
  }
  .course-teachers-list {
    text-align: center;
  }
  .course-teachers-list>div {
    width: 66px;
    height: 66px;
    border-radius: 50%;
    /*background-color: #ea562d;*/
    margin: 0 auto;
    overflow: hidden;
  }
  .course-teachers-list>div>img {
    width: 66px;
    height: 66px;
  }
  .course-teachers-list>h5{
    font-weight: normal;
    color: #333;
    font-size: 13px;
  }
  .course-teachers-list>p {
    font-size: 11px;
    color: #666;
  }
  /*套餐内容*/
  .package {
    padding: 20px 10px 15px 10px;
    border-bottom: 10px solid #ddd;
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
  /*购买须知*/
  .purchase-notes {
    padding: 10px;
  }
  .purchase-notes>h4 {
    text-align: center;
    font-size: 13px;
    color: #333;
    line-height: 25px;
  }
  .purchase-notes-rules {
    padding: 10px;
  }
  .purchase-notes-rules>li {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #333;
  }
  .purchase-notes-rules>li>span {
    color: #666;
  }
  /*产品详情*/
  .product-img-show-title {
    height: 45px;
    line-height: 45px;
    background-color: #ddd;
    text-align: center;
    font-size: 13px;
    color: #333;
  }
  .product-img-show-title>img {
    width: 14px;
    height: 11px;
  }
  .product-img-show>ul>li {
    height: 210px;
  }
  .product-img-show>ul img {
    width: 100%;
    height: 210px;
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
  /*立即抢购*/
  .buy-immediately {
    display: inline-block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    background-color: #ea562d;
    color: #fff;
    text-align: center;
  }
</style>


