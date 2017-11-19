<template>
  <div class="aboutUs">
    <div class="about-title">
      <a href="javascript:history.go(-1)"><img src="../assets/img/business_left.png" alt=""></a>
      详细规则
      <a href="#"><img src="../assets/img/business_more.png" alt=""></a>
    </div>
    <div class="about-description">
      <img src="../assets/img/invite.png" alt="">
    </div>
  </div>
</template>


<script>
  export default {
    name:'aboutUs'
  }
</script>

<style scoped>
  .about-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    position: relative;
  }
  .about-title>a {
    position: absolute;
    width: 25px;
  }
  .about-title>a:first-child {
    left: 5px;
  }
  .about-title>a:last-child {
    right: 5px;
  }
  .about-description {
    width: 100%;
    height: auto;
  }
  .about-description>img {
    width: 100%;
  }
</style>
