<template>
  <div class="voucher">
    <div class="bgcolor"></div>
    <div class="voucher-title">
      <a href="javascript:" onclick="history.back()"><img src="../assets/img/business_left@2x.png" alt=""></a>
      抵用券
    </div>
    <ul class="voucher-list">
      <li v-for="(tmp,index) in 3" @click="changeStatus" :data-num="index">
        <div class="voucher-list-discount flex" :data-num="index">
          <div class="voucher-list-discount-effective" :data-num="index">
            <h3 :data-num="index">抵用券·新用户专享</h3>
            <p :data-num="index">有效期至2017-03-25</p>
          </div>
          <div class="voucher-list-discount-num" :data-num="index">9.5<span>折</span></div>
        </div>
        <p :data-num="index">仅限购买订单使用，最高折扣8元</p>
        <img src="../assets/img/voucher_selected@2x.png" class="show" alt="">
      </li>
    </ul>
  </div>
</template>


<script>
  export default {
    name: 'voucher',
    data(){
      return {

      }
    },
    methods:{
      changeStatus:function (event) {
        //获取目标元素的自定义属性
        var num=event.target.getAttribute('data-num');
        // 获取所有的图片
        var imgs=document.querySelectorAll(".voucher-list>li img");
        //获取所有的li
        var lis=document.querySelectorAll(".voucher-list>li");
        //为li和img设置选中后的样式
        imgs[num].classList.toggle("show");
        lis[num].classList.toggle("voucher-list-checked");
      }
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

  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -999;
  }
  .voucher {
    color: #999;
  }
  /*抵用券标题*/
  .voucher-title {
    text-align: center;
    font-size: 15px;
    height: 45px;
    line-height: 45px;
    color: #333;
    position: relative;
    background-color: #fff;
  }
  .voucher-title>a {
    display: inline-block;
    position: absolute;
    left: 10px;
    width: 20px;
  }
  .voucher-title>a>img {
    width: 8px;
    height: 14px;
    /*vertical-align: middle;*/
  }
  /*所有抵用券*/
  .voucher-list{
    padding: 15px 15px 0 15px;
  }
  .voucher-list>li {
    background-color: #fff;
    padding: 15px 15px 10px 15px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 15px;
    border-bottom: 2px solid transparent;
  }
  .voucher-list>li:first-child>div,.voucher-list>li:nth-child(2)>div {
    color: #ea562d;
  }
  .voucher-list-discount {
    margin-bottom: 30px;
  }
  /*抵用券有效期内文本颜色*/
  .voucher-list-effective {
    color: #ea562d;
  }
  /*选中抵用券的样式*/
  .voucher-list-checked {
    border-bottom: 2px solid #ea562d !important;
  }
  .voucher-list-discount-effective>h3 {
    font-size: 18px;
    font-weight: 600;
  }
  /*折扣数量*/
  .voucher-list-discount-num {
    font-size: 43px;
    font-weight: 500;
    line-height: 43px;
  }
  .voucher-list-discount-num>span {
    font-size: 18px;
  }
  /*选中状态,默认隐藏*/
  .voucher-list>li>img {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 0;
    top:0;
  }
  .show {
    display: none;
  }
</style>
