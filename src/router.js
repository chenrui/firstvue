import VueRouter from 'vue-router'

import Layout from './views/layout/layout.vue'

const routes = [
  { path: '/', component: Layout }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;