<template>
  <div class="weui-cells ">
    <div class="weui-cell weui-cell_access">
      <div class="weui-cell__hd"><label class="weui-label" style="width:5em">物品描述</label></div>
      <div class="weui-cell__bd weui-cell_primary">
        <input class="weui-input font-size" id="goodsname" type="text" placeholder="必填" name="goodsname">
      </div>
    </div>
    <div class="weui-cell weui-cell_access">
      <div class="weui-cell__hd"><label class="weui-label" style="width:5em">备注</label></div>
      <div class="weui-cell__bd weui-cell_primary">
        <input class="weui-input font-size" placeholder="备注" name="goodsdes">
      </div>
    </div>
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
.font-size{
  font-size: 12px;
}
</style>
