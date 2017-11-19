<template>
  <div class="contents">
    <!--页面头部-->
    <div class="header">
      <ul class="flex">
        <li>
          <a href="javascript:history.go(-1)"><img src="../assets/img/business_left.png" alt=""></a>
        </li>
        <li>
          <a href="#"><img src="../assets/img/business_more.png" alt=""></a>
        </li>
      </ul>
      <!--满老师培训机构-->
      <p></p>
      <h3>满老师培训机构</h3>
      <div class="Introduction">
        <b>简介:</b>
        <span>
                满老师，是一站式互联网教育培训平台，由成都满老师科技有限公司注册商标持有，是涵盖美术、音乐、跆拳道、舞蹈、影视表演等多项业务培训和活动在内的教育平台。
            </span>
      </div>
    </div>
    <!--公司地址信息栏-->
    <div class="companyAddr flex">
      <div class="companyAddrName">
        <img src="../assets/img/home_location.png" alt="">高新区孵化园9号楼10号
        <span>孵化园</span>
      </div>
      <div class="companyAddrImg">
        <a href="tel:18684025912"><img src="../assets/img/business_phone@2x.png" alt=""></a>
      </div>
    </div>
    <!--页面主体-->
    <section class="container">
      <!--商家师资-->
      <div class="teacher">
        <h3>商家师资</h3>
        <div class="swiper-container course">
          <ul class="swiper-wrapper">
            <li class="swiper-slide"  v-for="n in len">
              <a href="#/teacherdetails">
                <div><img src="" alt=""></div>
                <h5>李老师{{n}}</h5>
                <p>舞蹈</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!--课程套餐-->
      <div class="package">
        <h3>课程套餐</h3>
        <ul class="packageList">
          <li v-for="temp in packages">
            <!--图片展示-->
            <div></div>
            <div class="productDesc">
              <ul>
                <li>XXX钢琴培训</li>
                <li>
                  <b>￥</b><i>90</i>
                  <span>团购价</span>&nbsp;<s>门市价 ￥1000</s>
                </li>
                <li>9:00-16:00 (周一不可用) |需预约</li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="packageAll">
          全部套餐&nbsp;&nbsp;<img src="../assets/img/business_down@3x.png" alt="">
        </div>
      </div>
      <!--商家详情-->
      <div class="businessmen">
        <div class="businessmenTitle">
          -
          <img src="../assets/img/business_picture@3x.png" alt="">
          <span>商家详情</span>
          -
        </div>
        <div class="imgShow">
          图片展示区域
        </div>
        <div class="businessmenFooter">
          <p>
            <span>已经到底了</span>
          </p>
        </div>
      </div>
    </section>
    <!--页面主体结束-->
  </div>
</template>

<script language="JavaScript">
  import Swiper from '../../static/swiper-3.4.2.min'
  export default {
    name: 'content',
    data () {
      return {
        len:8,
        packages:4
      }
    },
    mounted(){
      //添加左右滑动事件
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView : 4, //页面显示的数量
        spaceBetween : 15 //控制宽度
      })
    }
  }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

  @import "../libs/css/swiper-3.4.2.min.css";
  /* 弹性布局样式 */
  .flex {
    display: flex;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -o-flex;
    justify-content:space-between;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
  }
  /*页面头部*/
  .header {
    width: 100%;
    box-sizing: border-box;
    background-color: #ddd;
    padding: 8px;
  }
  .header>ul{
    width: 100%;
  }
  .header>ul a {
    display: block;
    height: 40px;
    line-height: 40px;
  }
  .header>ul a>img {
    vertical-align: middle;
  }
  /*满老师培训机构*/
  .header>p {
    width: 80px;
    height: 80px;
    background-color: #EA652D;
    border-radius: 50%;
    margin: 25px auto 15px;
  }
  .header>h3 {
    text-align: center;
    color: #323232;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 22px;
  }
  /*简介*/
  .Introduction {
    display: flex;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -o-flex;
    color: #333;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .Introduction>b {
    display: inline-block;
    font-weight: normal;
    text-align: left;
    line-height: 20px;
    width: 10%;
  }
  .Introduction>span {
    display: inline-block;
    width: 88%;
    line-height: 20px;
  }
  /*单独设置平板下的样式*/
  @media (min-width: 768px) {
    .Introduction>b {
      width: 5%;
    }
    .Introduction>span{
      /*margin-left: 1%;*/
      width: 95%;

    }
  }
  /*页面头部结束*/
  /*公司地址*/
  .companyAddr {
    margin-left: 10px;
    margin-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  div.companyAddrName{
    height: 30px;
    line-height: 30px;
    width: 80%;
    border-right: 1px solid #ddd;
    font-size: 13px;
  }
  div.companyAddrName>img {
    vertical-align: middle;
    margin-right: 6px;
  }
  div.companyAddrName>span {
    padding: 1px;
    border: 1px solid #EA652D;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 10px;
    color: #EA652D;
  }
  .companyAddrImg {
    height:30px;
    line-height: 30px;
    width: 70px;
    text-align: center;
  }
  .companyAddrImg>a {
    display: block;
  }
  .companyAddrImg>a>img {
    vertical-align:middle;
    width:20px;
    height:20px;
  }
  /*公司地址结束*/
  /*页面主体*/


  .teacher {
    background-color: #fff;
  }
  .teacher>h3 {
    font-weight:500;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding-left: 10px;
    border-top: 10px solid #eee;
    border-bottom: 1px solid #eee;
    color: #666;
  }
  .course {
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 10px solid #eee;
    overflow: hidden;
  }
  .course>ul>li{
    text-align: center;
  }
  .course>ul>li>a>div {
    width: 66px;
    height: 66px;
    background-color: #EA652D;
    border-radius: 50%;
    margin: 0 auto;
  }
  .course>ul>li>a {
    display: inline-block;
  }
  .course>ul>li>a>h5 {
    color: #333;
    font-weight: normal;
    font-size: 13px;
  }
  .course>ul p {
    color: #666;
    font-size: 11px;
  }
  /*课程套餐*/
  .package>h3 {
    font-weight: normal;
    color: #666;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    padding-left: 10px;
    border-bottom: 1px solid #d8d8d8;
  }
  /*套餐列表*/
  .packageList>li {
    display: flex;
    display:-webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -o-flex;
    border-bottom: 1px solid #d8d8d8;
    padding: 15px 0;
    margin-left: 10px;
  }
  /*去掉最后一个li的下边框*/
  .packageList>li:last-child {
    border-bottom: none;
  }
  .packageList>li>div:first-child {
    width: 100px;
    height: 75px;
    background-color: #EA652D;
  }
  div.productDesc {
    margin-left: 10px;
  }
  div.productDesc>ul>li:nth-child(1) {
    color: #333;
    font-weight: bold;
    font-size: 14px;
  }
  div.productDesc>ul>li:nth-child(2) {
    color: #ea652d;
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  div.productDesc>ul>li:nth-child(2)>b {
    font-weight: normal;
    font-size: 10px;
  }
  div.productDesc>ul>li:nth-child(2)>i {
    font-style: normal;
    font-size: 18px;
  }
  div.productDesc>ul>li:nth-child(2)>span {
    border: 1px solid #EA652D;
    font-size: 10px;
    border-radius: 3px;
  }
  div.productDesc>ul>li:nth-child(2)>s {
    color: #666;
    font-size: 10px;
  }
  div.productDesc>ul>li:nth-child(3) {
    color: #666;
    font-size: 10px;
  }
  /*全部套餐*/
  .packageAll {
    border-top: 1px solid #ddd;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
  }
  .packageAll a {
    color: #333;
    text-decoration: none;
    font-size: 0.3rem;
  }
  .packageAll img {
    vertical-align: baseline;
    width: 10px;
    height: 10px;
  }
  /*商家详情*/
  .businessmenTitle {
    text-align: center;
    background-color: #eee;
    height: 40px;
    line-height: 40px;
    font-size: 13px;
  }
  .businessmenTitle>img {
    vertical-align: middle;
    width: 15px;
    height: 10px;
  }
  .businessmenTitle>span {
    color: #333;
    font-weight: 500;
  }
  /*中间大图展示*/
  .imgShow {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  /*已经到底了*/
  .businessmenFooter{
    text-align: center;
    background-color: #eee;
    height: 40px;
    box-sizing: border-box;
    padding-top: 20px;
  }
  .businessmenFooter>p {
    margin: 0 auto;
    width: 50%;
    border-top: 1px solid #666;
  }
  .businessmenFooter>p>span {
    display: block;
    width: 60%;
    height: 20px;
    background-color: #eee;
    margin-top: -5.15%;
    margin-left: 20%;
    color: #666;
    font-size: 10px;
  }


</style>
