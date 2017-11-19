<!--附近商家 -->
<template>
  <div class="nearby">
    <!-- 页面头部 -->
    <nearby-header></nearby-header>

    <!-- 页面主体 -->
    <section>
      <!-- 附近热销 -->
      <div class="nearhot swiper-containers">
        <p>-&nbsp;附近热销&nbsp;-</p>
        <ul class="swiper-wrapper">
          <li v-for="tmp in 3" class="swiper-slide">
            <img src="../assets/img/kelly.jpg" alt="">
            <p>xxx舞蹈培训班&nbsp;<i>￥</i><span>90</span></p>
            <span>环球中心&nbsp;|&nbsp;距您200米</span>
          </li>
        </ul>
      </div>
      <!--导航栏-->
      <div class="swiper-container navbar">
        <ul class="swiper-wrapper">
          <li v-for="(tmp,index) in navbars" :key="index" class="swiper-slide" :class="[index==0?'checked':'']" @click="changeStyle">{{tmp}}</li>
        </ul>
        <b></b>
      </div>
      <!-- 全部详情 -->
      <!--产品小种类-->
      <div class="productdetail swiper-container">
        <ul class="swiper-wrapper">
          <li v-for="(tmps,index) in details" :key="index" class="swiper-slide" :class="[index==0?'product-type':'']" @click="changeStyle" >{{tmps}}</li>
        </ul>
      </div>
      <!-- 商品展示 -->
      <div class="productshow">
        <ul class="packageList">
          <li v-for="num in pageShow">
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
                <li>环球中心|距您200m</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- 加载更多 -->
      <div class="loadmore" @click="loadMore">
        <img src="../assets/img/home_loading@3x.png" alt="">
        加载中...
      </div>
    </section>
    <!--页面底部-->
    <nearby-footer></nearby-footer>
  </div>
</template>


<script>
  import  Swiper from '../../static/swiper-3.4.2.min'
  import NearbyHeader from '../components/Header.vue'
  import NearbyFooter from '../components/Footer.vue'

  export default {
    name: 'nearby',
    data (){
      return {
        pageShow:4,
        navbars:['音乐培训','美术培训','舞蹈培训','运动健身','兴趣生活','其他爱好'],
        details:['全部','钢琴','吉他','古筝','架子鼓']
      }
    },
    components:{
      NearbyHeader,
      NearbyFooter
    },
    methods:{
      //点击改变样式
      changeStyle:function (event) {
        var tar=event.target; //获取目标元素
        //获取当前点击的元素的祖先元素，
        var parentNodes=tar.parentNode.parentNode;
        var lis=tar.parentNode.children; //获取当前点击的元素的所有兄弟元素
        //查找产品小分类里面的所有子类
        var productdetailAll=document.querySelectorAll(".productdetail>ul>li");
        //如果该元素中包含class为navbar,则为当前点击的元素添加class为checked,否则为当前元素添加class为product-type
        if(parentNodes.classList.contains('navbar')){
          //遍历所有的兄弟元素，如果该元素包含class为checked,就移除checked
          for(var i=0;i<lis.length;i++){
            if(lis[i].classList.contains('checked')){
              lis[i].classList.remove('checked');
            }
          }
          // 为当前元素添加class为checked
          tar.classList.add('checked');
          //遍历小分类中的所有子类，如果子元素中已经包含class为product-type的元素，先将其class移除
          for(var i=0;i<productdetailAll.length;i++){
            if(productdetailAll[i].classList.contains('product-type')){
              productdetailAll[i].classList.remove('product-type');
            }
          }
          //将子种类下的第一个元素添加一个class为product-type
          var productdetail=document.querySelector(".productdetail>ul>li:first-child");
          productdetail.classList.add('product-type');
        }else {
          for(var n=0;n<lis.length;n++){
            if(lis[n].classList.contains('product-type')){
              lis[n].classList.remove('product-type');
            }
          }
          tar.classList.add('product-type');
        }

      },
      loadMore:function (event) {
        console.log(this.pageShow);
        if(this.pageShow<=10){
          this.pageShow+=4;
        }else {
          event.target.innerText="没有更多数据了...";
        }
      }
    },
    mounted (){
      //   添加左右滑动事件
      var mySwipers = new Swiper('.swiper-containers', {
        slidesPerView : 2, //页面显示的数量
        spaceBetween : 10 //控制宽度
      });
      var mySwiper = new Swiper('.swiper-container', {
        slidesPerView : 4, //页面显示的数量
        spaceBetween : 10 //控制宽度
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../libs/css/swiper-3.4.2.min.css";

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
  .nearby {
    padding-bottom: 50px;
  }
  /* 页面主体 */
  section {
    position: relative;
  }
  /* 附近热销 */
  .nearhot {
    background-color: #eee;
    width: 100%;
    overflow: hidden;
  }
  .nearhot>p{
    text-align: center;
    font-size: 14px;
    color: #323232;
    margin-top:15px;
    margin-bottom: 15px;
  }
  .nearhot>ul {
    width: 15rem;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    padding: 0 0 15px 10px;
  }
  .nearhot>ul>li {
    width: 130px;
    background-color: #fff;
    border-radius: 4px;
    font-size: 13px;
    margin-right: 8px;
    color: #323232;
    padding-bottom: 5px;
  }
  .nearhot>ul>li>img {
    width: 100%;
    height: auto;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .nearhot>ul>li>p {
    padding-left: 5px;
  }
  .nearhot>ul>li>p i {
    font-size: 10px;
    color: #ea652d;
    font-style: normal;
  }
  .nearhot>ul>li>p span{
    font-size: 14px;
    color: #EA652D;
  }
  .nearhot>ul>li>span {
    color: #666;
    font-size: 10px;
    margin-left: 5px;
  }

  /* 导航条 */
  .navbar {
    position: relative;
    overflow: hidden;
    width: 100%;
    font-size: 13px;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .navbar>ul {
    color: #333;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -o-flex;
    display: -ms-flex;
    width: 20rem;
  }
  .navbar>ul>li {
    margin-right: 10px;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  /* 点击之后的文本颜色 */
  .checked {
    border-bottom: 2px solid #ea652d;
    color: #ea652d;
  }
  .navbar>b {
    width: 100%;
    height: 1px;
    border-top: 2px solid #ddd;
    position: absolute;
    top: 38px;
    left: 0;
    z-index: -1;
  }
  /* 全部种类 */
  .productdetail {
    width: 100%;
    font-size: 12px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 10px;
    overflow: hidden;
  }
  .productdetail>ul {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -o-flex;
    display: -ms-flex;
  }
  .productdetail>ul>li {
    width: 65px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  /*单击种类修改样式*/
  .product-type {
    color: #ea652d;
    border: 1px solid #ea652d !important;
  }
  /* 商品展示 */
  .productshow {
    padding-top: 10px;
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
    padding: 17px 0;
    margin-left: 10px;
  }
  .packageList>li>div:first-child {
    width: 100px;
    height: 75px;
    background-color: #EA652D;
  }
  div.productDesc {
    margin-left: 10px;
    font-size: 14px;
  }
  div.productDesc>ul>li:nth-child(1) {
    color: #333;
    font-weight: bold;
  }
  div.productDesc>ul>li:nth-child(2) {
    color: #ea652d;
    /*margin-top: 2px;*/
    /*margin-bottom: 2px;*/
  }
  div.productDesc>ul>li:nth-child(2)>b {
    font-weight: normal;
    font-size: 10px;
  }
  div.productDesc>ul>li:nth-child(2)>i {
    font-style: normal;
    font-size: 19px;
  }
  div.productDesc>ul>li:nth-child(2)>span {
    border: 1px solid #EA652D;
    font-size: 7px;
    border-radius: 3px;
  }
  div.productDesc>ul>li:nth-child(2)>s {
    color: #666;
    font-size: 7px;
  }
  div.productDesc>ul>li:nth-child(3) {
    color: #666;
    font-size: 8px;
    margin-top: 1px;
    margin-bottom: 1px;
  }
  div.productDesc>ul>li:last-child {
    color: #666;
    font-size: 8px;
  }
  .packageList>li:last-child {
    border-bottom: none;
  }
  /* 加载更多 */
  .loadmore {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #eee;
    font-size: 7px;
    color: #666;
  }
  .loadmore>img {
    width: 8px;
    height: 8px;
    vertical-align: middle;
  }
  /* 页面尾部 */
</style>

