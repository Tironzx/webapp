<template>
  <div class="cooperation">
    <!--bgcolor-->
    <div class="bgcolor"></div>
    <!--我要合作-->
    <div class="cooperation-title">
      <a href="javascript:" onclick="history.back()"><img src="../assets/img/business_left@2x.png" alt=""></a>
      我要合作
      <a href="#"><img src="../assets/img/business_more@2x.png" alt=""></a>
    </div>
    <!--地区选择-->
    <div class="selection-area">
      <!--意向省份-->
      <div class="province">
        <select>
          <option value="0">意向省份</option>
          <option value="1">四川省</option>
        </select>
        <img src="../assets/img/cooperation_pull-down@2x.png" alt="">
      </div>
      <!--意向城市-->
      <div class="city">
        <select>
          <option value="0">意向城市</option>
          <option value="1">成都市</option>
          <option value="2">绵阳市</option>
        </select>
        <img src="../assets/img/cooperation_pull-down@2x.png" alt="">
      </div>
      <!--意向区县-->
      <div class="county">
        <select>
          <option value="0">意向区县</option>
          <option value="1">高新区</option>
          <option value="2">锦江区</option>
        </select>
        <img src="../assets/img/cooperation_pull-down@2x.png" alt="">
      </div>
    </div>
    <group label-width="5.5em" label-margin-right="2em" >
      <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
    </group>
    <!--合作事项-->
    <div class="cooperation-matters">
      <p>合作事项</p>
      <ul>
        <li v-for="(tmps,index) in cooperation" @click="changeCooperation" v-bind:data-number="index+1" class="flex">{{tmps}}<b v-bind:data-number="11+index"></b></li>
      </ul>
    </div>
    <!--详细地址-->
    <div class="address-detailed">
      <textarea placeholder="请详细填写您的优势，有助我们达成合作意向" maxlength="500" v-model="userAddr"></textarea>
      <span>{{num}}/100</span>
    </div>
    <!--提交-->
    <a href="#" class="submit">提交</a>
  </div>
</template>

<script>
  import { GroupTitle, Group, Cell, XInput, Selector, PopupPicker, Datetime, XNumber, ChinaAddressData, XAddress, XTextarea, XSwitch } from 'vux'



    export default {
      name: 'cooperation',
      components: {
        Group,
//        GroupTitle,
//        Cell,
//        XInput,
//        Selector,
//        PopupPicker,
        XAddress,
//        Datetime,
//        XNumber,
//        XTextarea,
//        XSwitch
      },
      data(){
        return {
          userAddr:'',
          num:0,
          cooperation:['市场合作','活动合作','异业合作','代理加盟','其他合作'],
          addressValue: ['四川省', '成都市', '武侯区'],
          addressData: ChinaAddressData,
        }
      },
      methods:{
        changeCooperation:function (event) {
          var tar=event.target.getAttribute("data-number");
          if(tar==1||tar==11){
            document.querySelector("b[data-number='11']").classList.toggle("changed");
          }else if(tar==2||tar==12){
            document.querySelector("b[data-number='12']").classList.toggle("changed");
          }else if(tar==3||tar==13){
            document.querySelector("b[data-number='13']").classList.toggle("changed");
          }else if(tar==4||tar==14){
            document.querySelector("b[data-number='14']").classList.toggle("changed");
          }else {
            document.querySelector("b[data-number='15']").classList.toggle("changed");
          }
        }
      },
      watch:{
        //实时监听文本域的文本长度
        userAddr:function (newvalue,oldvalue) {
          this.num=newvalue.length;
          if(this.num>=100){
            alert("最多只允许输入100字");
          }
        }
      }
    }
</script>

<style scoped>
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
  .bgcolor {
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #eee;
    z-index: -999;
  }
  .cooperation {
    padding-bottom: 60px;
  }
  .cooperation-title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
    font-size: 15px;
    background-color: #fff;
  }
  .cooperation-title>a {
    display: inline-block;
  }
  .cooperation-title>a:first-child {
    position: absolute;
    left: 10px;
    width: 20px;
  }
  .cooperation-title>a:first-child>img {
    width: 8px;
    height: 14px;
  }
  .cooperation-title>a:last-child {
    position: absolute;
    right: 15px;
  }
  .cooperation-title>a:last-child>img {
    width: 18px;
    height: 5px;
  }
  /*地区选择*/
  .selection-area{
    padding: 10px 10px 0 10px;
  }
  .province,.city,.county {
    position: relative;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  select {
    /*很关键：将默认的select选择框样式清除*/
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    border: none;
    width: 100%;
    height: 40px;
    outline: medium;
    padding-left: 15px;
    padding-right: 20px;
  }
  /*下拉图图标*/
  .selection-area img {
    position: absolute;
    width: 11px;
    height: 7px;
    right: 10px;
    top: 20px;
  }
  /*合作事项*/
  .cooperation-matters {
    background-color: #fff;
    font-size: 13px;
  }
  .cooperation-matters>p {
    height: 45px;
    line-height: 45px;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    padding-left: 10px;
  }
  .cooperation-matters>ul {
    padding-left: 10px;
  }
  .cooperation-matters li {
    height: 45px;
    line-height: 45px;
    padding-left: 5px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
  .cooperation-matters li:last-child {
    border: none;
  }
  .cooperation-matters li b {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-sizing: border-box;
    margin-top: 15px;
    margin-right: 15px;
  }
  /*选择合作事项背景图*/
  .changed {
    background: url("../assets/img/cooperation_pitch on@2x.png") no-repeat 0 0;
    background-size: 15px;

  }
  /*详细地址*/
  .address-detailed {
    margin-top: 10px;
    height: 145px;
    position: relative;
  }
  .address-detailed>textarea {
    display: block;
    list-style: none;
    border: none;
    outline: medium;
    width: 100%;
    height: 100%;
    padding: 20px 15px;
    box-sizing: border-box;
  }
  .address-detailed>span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #666;
  }
  /*提交*/
  .submit {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: #ea562d;
  }
</style>
