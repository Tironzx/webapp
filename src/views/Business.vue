<template>
  <div class="business">
    <div class="bgcolor"></div>
    <!--商家入驻-->
    <div class="business-title">
      <a href="javascript:" onclick="history.back()"><img src="../assets/img/business_left.png" alt=""></a>
      商家入驻
    </div>
    <!--入驻信息-->
    <ul class="settled-info">
      <li>
        <label for="compony">公司简称</label>
        <input type="text" placeholder="请输入公司对外经营简称" id="compony">
      </li>
      <li>
        <label for="compony-name">公司全称</label>
        <input type="text" placeholder="请输入营业执照全称" id="compony-name">
      </li>
      <li>
        <label for="compony-addr">所在地址</label>
        <input type="text" placeholder="请输入公司所在地址" id="compony-addr">
      </li>
      <li>
        <label for="principal-name">负责人姓名</label>
        <input type="text" value="杨欢" id="principal-name">
      </li>
      <li>
        <label for="call">联系电话</label>
        <input type="number" value="18685847854" id="call">
      </li>
    </ul>
    <!--详细地址-->
    <div class="addr-detail">
      <textarea placeholder="请详细填写您的经营项目"></textarea>
      <span>0/100</span>
    </div>
    <!--提交-->
    <a href="#" @click="" class="submit">提交</a>
  </div>
</template>

<script>
  export default {
    name:'business',
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -8888;
  }
  /*商家入驻*/
  .business-title {
    position: relative;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .business-title>a {
    position: absolute;
    left: 10px;
    width: 20px;
  }
  /*入驻信息*/
  .settled-info {
    margin-bottom: 10px;
    background-color: #fff;
    padding-left: 10px;
  }
  .settled-info>li {
    height: 45px;
    line-height: 45px;
    font-size: 13px;
    border-bottom: 1px solid #ddd;
  }
  .settled-info>li:last-child {
    border-bottom: none;
  }
  .settled-info>li>label {
    display: inline-block;
    width: 30%;
  }
  .settled-info>li>input {
    display: inline-block;
    width: 65%;
    height: 35px;
    line-height: 35px;
    text-align: right;
  }
  /*详细地址*/
  .addr-detail {
    position: relative;
    width: 100%;
    height: 145px;
  }
  .addr-detail>textarea {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    outline: medium;
    padding: 20px 10px;
    box-sizing: border-box;
  }
  .addr-detail>span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #999;
  }
  input::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
  }
  textarea::-webkit-input-placeholder { /* WebKit browsers */
    color:    #999;
  }
  textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #999;
  }
  textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #999;
  }
  textarea:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    #999;
  }
  /*提交*/
  .submit {
    display: block;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    background-color: #ea562d;
    border-radius: 5px;
    margin:25px 15px 5px 15px;
  }
</style>
