<template>
  <div class="myorder">
    <!--订单-->
    <div class="order-title">订单 <a href="tel:18875482512"><img src="../assets/img/customer@2x.png" /></a></div>
    <!--订单分类-->
    <ul class="order-classification flex">
      <li v-for="(tmp,index) in orderstatus" :data-num="index"  @click="change">{{tmp}}</li>
    </ul>
    <!--全部订单-->
    <div class="order-list-show">
      <!--订单一-->
      <ul class="order-list-show-unit">
        <!--全部订单-->
        <li v-for="statues in consumption" :data-num="statues">
          <a href="#/myorderdetail">
            <ul class="order-status flex">
              <li>团购套餐</li>
              <li>{{statues}}</li>
            </ul>
            <ul class="package">
              <!--套餐图-->
              <li><img src="../assets/img/kelly.jpg" alt=""></li>
              <!--音乐套餐一对一-->
              <li>
                <h3>音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐音乐一对一套餐</h3>
                <ul class="package-parameter">
                  <li>有效期至:&nbsp;&nbsp;2017-03-11</li>
                  <li>数量:&nbsp;&nbsp;1</li>
                  <li>总价:&nbsp;&nbsp;¥90</li>
                  <li class="flex"><span>抵用券:&nbsp;&nbsp;¥10</span><b>实付款:&nbsp;&nbsp;¥80</b></li>
                </ul>
              </li>
            </ul>
            <!--再来一单-->
            <p class="order-list-show-unit-again"><a href="#/productdetail">再来一单</a></p>
          </a>
        </li>

      </ul>


      <!--加载中-->
      <div class="loading">
        <img src="../assets/img/loading.gif" alt="">
        加载中...
      </div>

    </div>

    <!--页面底部-->
    <order-footer></order-footer>
  </div>
</template>

<script>
  import OrderFooter from '../components/Footer.vue'
  export default {
    name:'myorder',
    data(){
      return{
        orderstatus:['全部订单','待付款','待消费','已使用','退款'],
        consumption:['待付款','待消费','已使用','退款','待付款','待消费','已使用','待付款'],
        changeStatus:true
      }
    },
    components:{
      OrderFooter
    },
    methods:{
      change:function (event) {
        //遍历所有的li,先移除被选中状态属性的class
        var lis=document.querySelectorAll(".order-classification>li");
        for(var i=0;i<lis.length;i++){
          lis[i].classList.contains("activited")&& lis[i].classList.remove("activited");
        }
        //点击切换class
        event.target.classList.toggle("activited");
        //控制订单列表显示的内容
        var lis=document.querySelectorAll(".order-list-show-unit>li");
        switch (event.target.getAttribute("data-num")){
          case "0":
            for (var i=0;i<lis.length;i++){
              lis[i].style.display="block";
            }
            break;
          case "1":
            attr("待付款");
            break;
          case "2":
            attr("待消费");
            break;
          case "3":
            attr("已使用");
            break;
          case "4":
            attr("退款");
            break;
        };
        function attr(attr) {
          for(var i=0;i<lis.length;i++){
            lis[i].getAttribute("data-num")!=attr? lis[i].style.display="none":lis[i].style.display="block";
          }
        }
      }
    },
    mounted(){
      /*页面加载默认显示全部订单*/
      document.querySelector(".order-classification>li:first-child").classList.add("activited");
    }
  }
</script>

<style scoped>
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
  .myorder {
    padding-bottom: 47px;
  }
  /*订单*/
  .order-title {
    position: relative;
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    color: #333;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }
  .order-title>a {
    position: absolute;
    right: 15px;
  }
  .order-title>a>img {
    width: 18px;
    height: 16px;
  }
  /*订单分类*/
  .order-classification {
    padding-left: 10px;
  }
  .order-classification>li {
    height: 40px;
    line-height: 40px;
    width: 20%;
    text-align: center;
    font-size: 13px;
    color: #333;
    border-bottom: 2px solid transparent;
  }
  /*默认选中第一个li*/
  /*单击改变文本颜色*/
  .activited {
    color: #ea562d !important;
    border-bottom: 2px solid #ea562d !important;
  }
  /*全部订单展示*/
  .order-list-show-unit>li {
    border-top: 10px solid #ddd;
  }
  .order-status {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    color: #333;
    font-size: 13px;
  }
  .order-status>li:last-child {
    font-size: 12px;
    color: #666;
  }
  .package{
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 15px 10px;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;

  }
  .package>li:first-child {
    width: 30%;
  }
  @media (max-width: 320px) {
    .package>li:first-child {
      width: 40%;
    }
  }
  .package>li:last-child{
    width: 65%;
  }
  .package img {
    width: 100px;
    height: 75px;
  }
  .package>li:last-child>h3{
    font-size: 14px;
    color: #333;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .package>li>h3{
    height: 17px;
    line-height: 17px;
  }
  /*套餐参数详情*/
  .package-parameter {
    color: #666;
    font-size: 12px;
  }
  .package-parameter>li {
    height: 16px;
  }
  .package-parameter>li:last-child>b {
    font-weight: normal;
  }
  .order-list-show {
    overflow: hidden;
  }
  .order-list-show-unit>li>a {
    display: block;
  }
  /*再来一单*/
  .order-list-show-unit-again {
    height: 45px;
    text-align: right;
    padding-right: 15px;
  }
  .order-list-show-unit-again>a {
    display: inline-block;
    width: 65px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #00af42;
    color: #00af42;
    margin-top: 10px;
    border-radius: 4px;
  }
  /*加载中*/
  .loading {
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: #ddd;
  }
  .loading>img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
</style>
