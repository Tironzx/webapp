<template>
  <div class="invite">
    <div class="invite-rule">
      <a href="javascript:history.go(-1)">
        <img src="../assets/img/business_left.png" alt="">
      </a>
      详细规则
      <a href="#"><img src="../assets/img/business_more.png" alt=""></a>
    </div>
    <div class="invite-info">
      <img src="../assets/img/invite.png" alt="">
    </div>
  </div>
</template>

<script>

</script>
<style scoped>
  .invite-rule {
    position: relative;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
  }
  .invite-rule>a {
    position: absolute;
  }
  .invite-rule>a:first-child {
    width: 25px;
    left: 5px;
  }
  .invite-rule>a:last-child {
    right: 15px;
  }
  .invite-info {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .invite-info>img {
    width: 100%;
  }

</style>

