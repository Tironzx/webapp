<template>
  <div class="teacher">
    <div class="teacher-power">
      <p>
        <a href="javascript:history.go(-1)"><img src="../assets/img/left.png" alt=""></a>
      </p>
      <div class="teacher-power-info">
        <div class="avatar">
          <img src="../assets/img/kelly.jpg" alt="">
        </div>
        <ul>
          <li>张元云&nbsp; <img src="../assets/img/man.png" alt=""></li>
          <li>舞蹈老师 从业1年</li>
          <li>个人简介:&nbsp;专业理财二十年</li>
        </ul>
      </div>
    </div>
    <!--老师图片-->
    <div class="teacher-show">
      <img src="../assets/img/kelly.jpg" alt="">
    </div>

    <!--已经到底了-->
    <div class="businessmenFooter">
      <p>
        <span>已经到底了</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'teacher'
  }
</script>

<style scoped>
  .teacher-power {
    background-color: #393A3F;
  }
  .teacher-power>p{
    height: 45px;
    line-height: 45px;
    padding-left: 15px;
  }
  .teacher-power>p>a {
    display: block;
    width: 25px;
  }
  .teacher-power-info {
    height: 102px;
    display: table;
    padding-left: 20px;
  }
  .avatar>img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
  .avatar {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    overflow: hidden;
    vertical-align: middle;
    display: table-cell;
  }
  .teacher-power-info>ul {
    display: table-cell;
    overflow: hidden;
    vertical-align: middle;
    padding-left: 15px;
  }
  .teacher-power-info>ul>li:first-child {
    font-size: 14px;
    color: #f0f0f2;
  }
  .teacher-power-info>ul>li:nth-child(2) {
    color: #ddd;
    font-size: 11px;
  }
  .teacher-power-info>ul>li:last-child {
    color: #ddd;
    font-size: 10px;
  }
  /*老师图片展示*/
  .teacher-show{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  .teacher-show>img {
    width: 100%;
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




