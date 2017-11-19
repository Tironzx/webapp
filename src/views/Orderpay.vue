<template>
  <div class="payorder">
    <!-- //订单支付 -->
    <div class="orderPay">
        <a href="javascript:window.history.go(-1)">
          <img src="../assets/img/business_left@3x.png" alt="">
        </a>
        支付订单
    </div>
    <!--10px灰色背景-->
    <div class="bgcolor"></div>
    <!-- 页面主体订单详情 -->
    <div class="orderDetail">
      <ul class="orderDetail-type">
        <li class="orderDetail-type-commodity">
          <div>
            <img src="" alt="">
          </div>
          <div>
            <h4>XXX钢琴培训</h4>
            <p>
              <b>￥</b><i>{{price}}</i><span>团购价</span>&nbsp;<s>门市价 ￥1000</s>
            </p>
            <span>9:00-16:00 (周一不可用) |需预约</span>
          </div>
        </li>
        <!--订单数量-->
        <li class="orderDetail-type-number flex">
          <span>数量</span>
          <div>
            <span @click="sum>1&&sum--">-</span>
            <i>{{sum}}</i>
            <span @click="sum++">+</span>
          </div>
        </li>
        <!--订单小计-->
        <li class="orderDetail-type-subtotal flex">
          <span>小计</span>
          <div>
            <b>￥</b>
            <span>{{price*sum}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!--背景色-->
    <div class="bgcolor"></div>
    <!-- 抵用券 -->
    <ul class="voucher flex">
      <li>抵用券</li>
      <li><span>暂无可用</span>&nbsp;&nbsp;
        <img src="../assets/img/business_ right3x.png" alt="">
      </li>
    </ul>
    <!--背景色-->
    <div class="bgcolor"></div>
    <!-- 微信支付或者支付宝支付 -->
    <ul class="payStyle">
      <li class="flex" @click.stop="paytype">
        <p>微信支付</p>
        <i></i>
      </li>
      <li class="flex" @click.stop="paytype">
        <p>支付宝支付</p>
        <i></i>
      </li>
    </ul>
    <!--背景色-->
    <div class="bgcolor"></div>
    <!-- 已绑定手机 -->
    <div class="bindphone flex">
      <span>手机号</span>
      <b>13550492385</b>
    </div>
    <!-- 不支持退款 -->
    <div class="refunds">
      <img src="../assets/img/business_a@3x.png" alt="">
      <span>不支持退款</span>
    </div>
    <!--模拟body，设置背景颜色-->
    <div class="layer"></div>
    <!-- 确定支付 -->
    <button class="payment" @click="payment"><span>￥{{price*sum}}</span>&nbsp;&nbsp;确定支付</button>
  </div>
</template>


<script language="JavaScript">
  export default {
    name: 'payorder',
    data () {
      return {
        //购买数量
        sum:1,
        //购买单价
        price:90,
      }
    },
    methods:{
      //用户单击选择支付方式
      paytype:function (event) {
        var tar=event.target;
        //找打列表中所有的i标签
        var i=document.querySelectorAll(".payStyle i");
        //遍历所有的i标签，删除class为paychange的元素的class名
        for(var n=0;n<i.length;n++){
          //短路逻辑
          i[n].classList.contains('paychange')&&i[n].classList.remove('paychange');
        };
        switch (tar.nodeName){
          //如果目标元素为P，就将其下一个兄弟元素添加/删除class=paychange
          case "P":
            tar.nextElementSibling.classList.toggle("paychange");
            break;
          case "I":
            //如果目标元素为i，就为自己添加/删除class=paychange
            tar.classList.toggle("paychange");
            break;
          default:
            //默认点击的是li
            tar.lastChild.classList.toggle("paychange");
        }
        //遍历所有的i标签，删除class为paychange的元素的class名
        for(var n=0;n<i.length;n++){
          //如果用户选择了支付方式，则将支付按钮背景色改为橘红色
          i[n].classList.contains('paychange')&&(document.querySelector(".payment").style.backgroundColor="#ea562d");
        };
      },
      //确认支付
      payment:function (e) {
        //如果未选择支付方式则不能支付
        var i=document.querySelectorAll(".payStyle i");
        var arr=[];
        //遍历支付方式下面的I标签，如果都为false，则未选择支付方式，否则跳转到支付页面
        for(var n=0;n<i.length;n++){
          i[n].classList.contains("paychange")==false?arr.push(false):arr.push(true);
        }
        if(arr.indexOf(true)==-1){
          console.log("请先选择支付方式");
        }else {
          //跳转到支付页面
        }
      }
    },
    mounted(){
      //如果没有选择支付方式，则将确定支付的背景颜色修改为灰色
      document.querySelector(".payment").style.backgroundColor="#999";
    }
  }
</script>

<style scoped>
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    border:none;
    font-family: Microsoft YaHei, "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    color: #333;
    background-color: #eee;
    overflow-x: hidden;
  }
  /*设置背景为灰色，模拟body*/
  .layer {
    position: fixed;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -111;
  }
  .bgcolor {
    width: 100%;
    height: 10px;
    background-color: #eee;
  }
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
  /* 自定义样式 */
  .orderPay{
    position: relative;
    background-color: #fff;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
  }
  .orderPay>a {
    position: absolute;
    width: 25px;
    left: 5px;
  }
  .orderPay>a>img  {
    width: 8px;
    height: 14px;
  }
  /* 订单支付详情 */
  .orderDetail {
    background-color: #fff;
    padding-top: 15px;
    padding-left: 4%;
    padding-right: 4%;
    font-size: 13px;
  }
  /* 订单商品 */
  .orderDetail-type-commodity {
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    padding-bottom: 15px;
  }
  .orderDetail-type-commodity>div:first-child {
    width: 100px;
    height: 75px;
    background-color: #EA652D;
  }
  .orderDetail-type-commodity>div:last-child{
    margin-left: 10px;
  }
  .orderDetail-type-commodity>div:last-child>h4 {
    font-size: 14px;
  }
  .orderDetail-type-commodity>div:last-child>p{
    margin-top: 5px;
    margin-bottom: 5px;
    color: #EA652D;
  }
  .orderDetail-type-commodity>div:last-child>p>b {
    font-size: 10px;
  }
  .orderDetail-type-commodity>div:last-child>p>i{
    font-style: normal;
    font-size: 18px;
  }
  .orderDetail-type-commodity>div:last-child>p>span {
    display: inline-block;
    font-size: 10px;
    border: 1px solid #EA652D;
    border-radius: 3px;
    margin-left: 6px;
    margin-right: 10px;
  }
  .orderDetail-type-commodity>div:last-child>p>s {
    font-size: 10px;
    color: #666;
  }
  .orderDetail-type-commodity>div:last-child>span {
    font-size: 12px;
    color: #666;
  }
  /* 订单数量 */
  .orderDetail-type-number {
    height: 45px;
    line-height: 45px;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  .orderDetail-type-number>div {
    width: 100px;
    height: 26px;
    line-height: 26px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 9px;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
  }
  .orderDetail-type-number>div>span {
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
  }
  .orderDetail-type-number>div>span:first-child{
    border-right: 1px solid #ddd;
  }
  .orderDetail-type-number>div>span:last-child{
    border-left: 1px solid #ddd;
  }
  .orderDetail-type-number>div>i {
    display: inline-block;
    font-style: normal;
    width: 47px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    outline: medium;
    box-sizing: border-box;
  }
  /* 订单小计 */
  .orderDetail-type-subtotal {
    height: 45px;
    line-height: 45px;
    padding-left: 5px;
    padding-right: 5px;
    box-sizing: border-box;
  }
  .orderDetail-type-subtotal>div>b {
    font-weight: normal;
    font-size: 10px;
    color: #EA652D;
  }
  .orderDetail-type-subtotal>div>span {
    font-size: 19px;
    color: #EA652D;
  }
  /* 抵用券 */
  .voucher {
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 13px;
  }
  .voucher>li:last-child {
    color: #ccc;
  }
  .voucher>li:last-child>img {
    width: 6px;
    height: 11px;
    vertical-align: middle;
  }
  /* 支付方式 */
  .payStyle {
    background-color: #fff;
    margin-top: 10px;
    padding-left: 4%;
    padding-right: 4%;
  }
  .payStyle>li {
    height: 45px;
    line-height: 45px;
    padding-left: 5px;
  }
  .payStyle>li:first-child {
    border-bottom: 1px solid #ddd;
  }
  .payStyle>li:first-child>p {
    padding-left: 30px;
    background: url("../assets/img/business_wechat@2x.png") no-repeat 0 13px;
    background-size: 18px;
  }
  .payStyle>li:last-child>p {
    padding-left: 30px;
    background: url("../assets/img/business_alipay@2x.png") no-repeat 0 13px;
    background-size: 18px;
  }
  /* 用户选中支付方式之后的样式 */
  .paychange {
    background: url('../assets/img/paystyle.png') no-repeat 0 0;
  }
  .payStyle>li img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
  .payStyle>li i {
    border: 1px solid #ddd;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin-top: 15px;
  }
  /* 已绑定手机号 */
  .bindphone {
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 13px;
    font-style: normal;
  }
  .bindphone>b {
    font-weight: normal;
  }
  /* 不支持退款 */
  .refunds {
    padding-left: 4%;
    height: 100px;
    color: #666;
    font-style: normal;
    background-color: #eee;
  }
  .refunds>img  {
    width: 10px;
    height: 10px;
  }
  /* 确定支付 */
  .payment {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #EA652D;
    color: #fff;
    font-size: 14px;
  }

</style>
