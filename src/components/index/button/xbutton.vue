<template>
  <div class="button-sp-area">
    <a @click="submitOrder" class="weui-btn weui-btn_warn">提交</a>
  </div>
</template>

<script>
export default {
  name:'xbutton',
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  methods:{
    submitOrder:function(){
      console.log("提交订单！")
    }
  }
}
</script>

<style>
  .button-sp-area {
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 20px;
    }

</style>
