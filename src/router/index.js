import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index' //首页
import Nearby from '@/views/Nearby' //附近
import Select from '@/views/Select' //下拉
import Orderpay from '@/views/Orderpay' //订单支付
import Login from '@/views/Login.vue'  //用户登录
import Myorderdetail from  '@/views/Myorderdetail.vue'  //我的订单详情
import Bankcard from '@/views/Bankcard.vue'  //绑定银行卡
import Productdetail from '@/views/Productdetail.vue'  //产品详情页
import Userorderlist from '@/views/Userorderlist.vue'  //用户订单页面(订单列表)
import Voucher from '@/views/Voucher.vue' //抵用券
import Purchasesuccess from '@/views/Purchasesuccess.vue' //支付成功页面
import Addresslocation from '@/views/Addresslocation.vue' //地址定位切换
import Cooperation from "@/views/Businesscooperation.vue" //我要合作
import Mywallet from '@/views/Mywallet.vue' //我的钱包
import Withdraw from '@/views/withdraw.vue' //提现
import Mylogin from '@/views/Mylogin.vue' //我的登录页面
import Business from '@/views/Business.vue' //商家入驻
import Teacherdetails from '@/views/Teacherdetails.vue' //师资详情
import Invite from '@/views/Invite.vue' //邀请有礼
import About from '@/views/About.vue'  //关于满老师



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/nearby',
      name: 'Nearby',
      component: Nearby
    },{
      path: '/select',
      name: 'Select',
      component: Select
    },{
      path: '/orderpay',
      name: 'Orderpay',
      component: Orderpay
    },{
      path:'/login',
      name: 'Login',
      component: Login
    },{
      path: '/myorderdetail',
      name: 'Myorderdetail',
      component: Myorderdetail
    },{
      path: '/bankcard',
      name: 'Bankcard',
      component: Bankcard
    },{
      path: '/productdetail',
      name: 'Productdetail',
      component: Productdetail
    },{
      path: '/userorderlist',
      name: 'Userorderlist',
      component:Userorderlist
    },{
      path: '/voucher',
      name: 'Voucher',
      component:Voucher
    },{
      path: '/purchasesuccess',
      name: 'Purchasesuccess',
      component:Purchasesuccess
    },{
      path: '/addresslocation',
      name: 'Addresslocation',
      component:Addresslocation
    },{
      path: '/cooperation',
      name: 'Cooperation',
      component:Cooperation
    },{
      path: '/mywallet',
      name: 'Mywallet',
      component:Mywallet
    },{
      path: '/withdraw',
      name: 'Withdraw',
      component:Withdraw
    },{
      path: '/mylogin',
      name: 'Mylogin',
      component: Mylogin
    },{
      path: '/business',
      name: 'Business',
      component:Business
    },{
      path: '/teacherdetails',
      name: 'Teacherdetails',
      component:Teacherdetails
    },{
      path: '/invite',
      name: 'Invite',
      component:Invite
    },{
      path: '/about',
      name: 'About',
      component:About
    }
  ]
})
