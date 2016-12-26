// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import XIndex from 'components/index/tab/tabone'

import ReceiveForm from 'components/forms/receiveform/receiveform'
import ChooseReceiver from 'components/forms/chooseaddress/choosereceiver'

Vue.use(VueRouter)

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: App,
    children:[
      { path: 'index', component: XIndex },
      { path: 'receiveform', component: ReceiveForm},
    ]
  },
  {
    path:'/addressbook',component:App,
    children:[
      {path:'addresslist',component:ChooseReceiver}
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
