import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import PurchaserAgentWebsit from '../views/weblink/PurchaserAgentWebsit.vue'
import RegisterFirstWebsit from '../views/register/RegisterFirstWebsit.vue'
import RegisterTwoWebsit from '../views/register/RegisterTwoWebsit.vue'
import RegisterThreeWebsit from '../views/register/RegisterThreeWebsit.vue'
import PurchaserAgentManage from '../views/weblink/PurchaserAgentManage.vue'
import FindPasswordWebsit from '../views/findpass/FindPasswordWebsit.vue'
import test from './comn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...test,
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
      path: '/biddingNotice',
      name: 'BiddingNotice',
      component: () => import('../views/weblink/BiddingNotice')
    },
    {
      path: '/biddingDetails',
      name: 'BiddingDetails',
      component: () => import('../views/weblink/BiddingDetails')
    },
    {
      path: '/biddingDetails2',
      name: 'BiddingDetailsForSupplier',
      component: () => import('../views/weblink/BiddingDetailsForSupplier')
    },
    {
      path: '/inquiryList',
      name: 'InquiryListForSupplier',
      component: () => import('../views/weblink/InquiryListForSupplier')
    },
    {
      path: '/inquiryList2',
      name: 'InquiryListForBuyer',
      component: () => import('../views/weblink/InquiryListForBuyer')
    },
    {
      path: '/inquiryDetails',
      name: 'InquiryDetails',
      component: () => import('../views/weblink/InquiryDetails')
    }
  ]
})
