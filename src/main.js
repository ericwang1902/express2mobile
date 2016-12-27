// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import store from './common/js/store'

import XIndex from 'components/index/tab/tabone'

import ReceiveForm from 'components/forms/addressform/receiveform'
import ChooseReceiver from 'components/forms/chooseaddress/choosereceiver'

import SenderForm from 'components/forms/addressform/senderform'
import ChooseSender from 'components/forms/chooseaddress/choosesender'

import AddressList from 'components/index/tab/tabaddressbook'
import ReceiverList from 'components/index/addressbook/receiverlist'

import Settings from 'components/index/tab/settings'

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
  {
    path: '/', component: App,
    children: [
      { path: 'index', component: XIndex }
    ]
  },
  {
    path: '/addressbook', component: App,
    children: [
      { path: 'receiverlist', component: ReceiverList,meta: {title: '收件人地址列表'}},
      { path: 'receiveform', component: ReceiveForm,meta: {title: '新增收件人地址'} },
      { path: 'senderlist', component: ChooseSender ,meta: {title: '寄件地址列表'}},
      { path: 'senderform', component: SenderForm ,meta: {title: '新增寄件地址'}},
      { path: 'addresslist', component: AddressList ,meta: {title: '地址簿'}}
    ]
  },
  {
    path: '/settings', component: App,
    children: [
      { path: 'center', component: Settings }
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

router.afterEach(route => {
	document.title = route.meta.title;
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store
}).$mount('#app')
