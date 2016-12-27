<template>
  
  <div class="weui-cells">
      <router-link to="/addressbook/receiverlist" class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
              <p>收件地址</p>
          </div>
          <div class="weui-cell__ft">查看列表</div>
      </router-link>
      <router-link to="/addressbook/senderlist" class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__bd">
              <p>寄件地址</p>
          </div>
          <div class="weui-cell__ft">查看列表</div>
      </router-link>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style>

</style>
