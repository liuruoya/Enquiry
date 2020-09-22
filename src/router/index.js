import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PurchaserAgentWebsit from '../views/weblink/PurchaserAgentWebsit.vue'
import RegisterFirstWebsit from '../views/register/RegisterFirstWebsit.vue'
import RegisterTwoWebsit from '../views/register/RegisterTwoWebsit.vue'
import RegisterThreeWebsit from '../views/register/RegisterThreeWebsit.vue'
import PurchaserAgentManage from '../views/weblink/PurchaserAgentManage.vue'

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
      path: '/login',
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
    }
  ]
})
