<template>

    <a @click="choosecompany" class="weui-cells weui-cell_access weui-cell  weui-media-box weui-media-box_appmsg">
      <div class="weui-cell__hd"><label class="weui-label" style="width:5em">代收点</label></div>
      <div class="weui-cell__bd weui-cell_primary">
        <input class="weui-input" style="color:crimson;font-size: 12px;" placeholder="万科人信汇代收点" disabled="true">
      </div>
      <div class="weui-cell__ft">
      </div>
    </a>

</template>

<script>
export default {
  name: 'choosecompany',
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  methods:{
    choosecompany:function(){
      console.log("选择快递公司！");
    }
  }
}
</script>

<style>

</style>
