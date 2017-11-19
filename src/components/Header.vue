<template>
  <div class="header flex">
    <!-- 页面头部 -->
      <!-- 用户位置定位 -->
      <div class="mylocation">
        <img src="../assets/img/home_location@3x.png" alt="">
        <span>蜀汉路</span>
        <img src="../assets/img/home_down@3x.png" alt="">
      </div>
      <!-- 附近产品搜索 -->
      <div class="search">
        <input type="text" placeholder="搜索附近的课程、商家名称">
      </div>
  </div>
</template>


<script>
  export default {

  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  /* 地理定位 */
  .header {
    padding: 10px 15px;
  }
  .mylocation {
    width: 21%;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
  }
  .mylocation>img:first-child {
    vertical-align: middle;
    width: 10px;
    height: 13px;
    margin-top: -0.1rem;
  }
  .mylocation>img:last-child {
    vertical-align: middle;
    width: 10px;
    height: 6px;
  }
  .mylocation>span {
    display: inline-block;
    font-size: 0.28rem;
    height: 0.7rem;
    line-height: 0.7rem;
  }

  /* 搜索附近信息 */
  .search {
    width: 78%;
    height: 30px;
    line-height: 30px;
    margin-left: 2%;
  }
  .search>input{
    width: 100%;
    box-sizing: border-box;
    height: 30px;
    padding-left: 35px;
    padding-top: 1px;
    padding-bottom: 1px;
    background: url(../assets/img/home_search@3x.png) no-repeat 0.3rem 0.2rem;
    background-size: 14px;
    background-color: #eee;
    border-radius: 20px;
    vertical-align: middle;
    margin-top: -1px;
    font-size: 12px;
    outline: medium;
  }
</style>
