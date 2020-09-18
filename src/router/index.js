import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PurchaserAgentWebsit from '../views/PurchaserAgentWebsit.vue'
import RegisterFirstWebsit from '../views/RegisterFirstWebsit.vue'
import RegisterTwoWebsit from '../views/RegisterTwoWebsit.vue'
import RegisterThreeWebsit from '../views/RegisterThreeWebsit.vue'
import PurchaserAgentManage from '../views/PurchaserAgentManage.vue'

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
      path: '/Home',
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
    }
  ]
})
