import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router'
import App from './App.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'styles/index.scss'

Vue.use(VueRouter)
Vue.use(ElementUI)

// 进度条
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
