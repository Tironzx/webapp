<!--页脚-->
<template>
  <div class="footer">
    <ul>
      <li @click="myIndex">
        <img v-if="index" src="../assets/img/home.png" alt="">
        <p>首页</p>
      </li>
      <li @click="myOrder">
        <img v-if="order" src="../assets/img/home_order@2x.png" alt="">
        <img v-else="order" src="../assets/img/activity.png" alt="">
        <p>订单</p>
      </li>
      <li @click="myLogin">
        <img src="../assets/img/home_mine@2x.png" alt="">
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>


<script>

  export default {
//    components: {
//    Group,
//    Cell
//    },
    data () {
      return {
        index:true,
        order:true
      }
    },
    methods:{
      myIndex:function () {
        document.querySelector(".footer ul>li:first-child").classList.toggle("checked-text");
        this.index=this.index==false?true:false;
        this.$router.push("/");
      },
      myOrder:function () {
        console.log(123);
        this.$router.push("/userorderlist");
        document.querySelector(".footer ul>li:nth-child(2)").classList.add("checked-text");
//        this.order=this.order==false?true:false;
        this.order=false;
      },
      myLogin:function () {
        this.$router.push("/mylogin")
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    font-size: 10px;
    width: 100%;
    padding-top: 5px;
    background-color: #fff;
  }
  ul>li {
    width: 33%;
    text-align: center;
    color: #666;
  }
  .checked-text {
    color: #EA652D;
  }
  ul>li>img {
    width: 18px;
    height: 18px;
  }

</style>
