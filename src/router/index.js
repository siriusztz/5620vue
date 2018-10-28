import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/login'
import Signup from '@/components/signup'

Vue.use(Router)

export default new Router({
  routes: [
    {   //登录页面
      path: '/login',
      name: 'login',
      hidden: true,
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      hidden: true,
      component: Signup
    },
    {
      path: '/',
      name: 'Analysis',
      component: Home,
      iconCls: 'el-icon-success',
      children: [
        { name: 'face', path: '/analysis/face', icon: 'el-icon-document', component: require('@/components/analysis').default },
        { name: 'manage', path: '/analysis/manage', icon: 'el-icon-location', component: require('@/components/management').default },
        { name: 'edit', path: '/analysis/edit/:id', component: require('@/components/form').default, hidden: true },
      ]
    },
  ]
})
