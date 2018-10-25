// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'http'

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('userinfo');
  }
  console.log(to.path)
  //如果在sessionStorage里面没储存就要跳转login
  let user = sessionStorage.getItem('userinfo');
  if (user==null && !(to.path == '/login' || to.path == '/signup')) {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  axios,
  // 程序入口中显示的就是这个App.vue里面的内容
  render: h => h(App)
}).$mount('#app');