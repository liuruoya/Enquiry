import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PurchaserAgentWebsit from '../views/weblink/PurchaserAgentWebsit.vue'
import RegisterFirstWebsit from '../views/register/RegisterFirstWebsit.vue'
import RegisterTwoWebsit from '../views/register/RegisterTwoWebsit.vue'
import RegisterThreeWebsit from '../views/register/RegisterThreeWebsit.vue'
import PurchaserAgentManage from '../views/weblink/PurchaserAgentManage.vue'
import FindPasswordWebsit from '../views/findpass/FindPasswordWebsit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {name: 'Home'}
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/RegisterFirstWebsit',
      name: 'RegisterFirstWebsit',
      component: RegisterFirstWebsit
    },
    {
      path: '/RegisterTwoWebsit',
      name: 'RegisterTwoWebsit',
      component: RegisterTwoWebsit
    },
    {
      path: '/RegisterThreeWebsit',
      name: 'RegisterThreeWebsit',
      component: RegisterThreeWebsit
    },
    {
      path: '/PurchaserAgentWebsit',
      name: 'PurchaserAgentWebsit',
      component: PurchaserAgentWebsit,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/PurchaserAgentManage',
      name: 'PurchaserAgentManage',
      component: PurchaserAgentManage
    },
    {
      path: '/notificationOfAward',
      name: 'NotificationOfAward',
      component: () => import('../views/weblink/NotificationOfAward')
    },
    {
      path: '/changePwd',
      name: 'ChangePwd',
      component: () => import('../views/register/ChangePwd')
    },
    {
      path: '/changePwdComplete',
      name: 'ChangePwdComplete',
      component: () => import('../views/register/ChangePwdComplete')
    },
    {
      path: '/findPasswordWebsit',
      name: 'findPasswordWebsit',
      component: FindPasswordWebsit
    },
    {
      path: '/helpCenter',
      name: 'HelpCenter',
      component: () => import('../views/weblink/HelpCenter')
    },
    {
      path: '/helpDetails',
      name: 'HelpDetails',
      component: () => import('../views/weblink/HelpDetails')
    },
    {
      path: '/biddingDetails',
      name: 'BiddingDetails',
      component: () => import('../views/weblink/BiddingDetails')
    },
    {
      path: '/biddingDetails2',
      name: 'BiddingDetails2',
      component: () => import('../views/weblink/BiddingDetailsForSupplier')
    },
    {
      path: '/biddingNotice',
      name: 'BiddingNotice',
      component: () => import('../views/weblink/BiddingNotice')
    },
    {
      path: '/inquiryList',
      name: 'InquiryList',
      component: () => import('../views/weblink/InquiryList')
    },
    {
      path: '/inquiryDetails',
      name: 'InquiryDetails',
      component: () => import('../views/weblink/InquiryDetails')
    },
    {
      path: '/page',
      component: () => import('../components/PageModelTest')
    }
  ]
})
