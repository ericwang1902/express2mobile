import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

var receiverData={
    province:"江苏省",//省
    city:"南通市",//市
    county:"如皋市",//区、县
    district:"如城街道",//街道
    detailAdd:"海阳路195号",//详细地址
    phone:"17798885277",//电话
    name:"王海军"//姓名
}

var senderData={
    province:"江苏省",//省
    city:"南通市",//市
    county:"如皋市",//区、县
    district:"如城街道",//街道
    detailAdd:"海阳路195号",//详细地址
    phone:"17798885277",//电话
    name:"王海军"//姓名
}

var  orderData={
    receiver:receiverData,
    sender:senderData,
    des:"",
    note:""
}

// 创建一个对象来保存应用启动时的初始状态
const state = {
    order:orderData
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // TODO: 放置我们的状态变更函数
  receiverSelected:function(state,receiverInfo){
      this.state.receiver.province = receiverInfo.province
      this.state.receiver.city = receiverInfo.city
      this.state.receiver.county = receiverInfo.county
      this.state.receiver.detailAdd = receiverInfo.detailAdd
      this.state.receiver.phone = receiverInfo.phone
      this.state.receiver.name = receiverInfo.name
  }
}

const getters = {
  getReceiverData: state => { return state.order.receiver },
  getSenderData: state =>{return state.order.sender}
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  getters,
  mutations
})
