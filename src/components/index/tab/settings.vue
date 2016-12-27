<template>
  
  <div class="weui-cells">
      <router-link to="/addressbook/receiverlist" class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <h4 class="weui-media-box__title">默认快递代收点</h4>
                <div id="receiver_info">
                        <div class="desc_area">
                            <span class="desc_title">万科人信汇代收点</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">金克强</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">圆通速递</span>
                        </div>
                </div>
            </div>
            <div class="weui-cell__ft">进入设置</div>
      </router-link>
      <router-link to="/addressbook/senderlist" class="weui-cell weui-cell_access" href="javascript:;">
           <div class="weui-cell__bd">
                <h4 class="weui-media-box__title">默认寄件地址</h4>
                <div id="receiver_info">
                        <div class="desc_area">
                            <span class="desc_title">万科人信汇代收点</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">金克强</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">圆通速递</span>
                        </div>
                </div>
            </div>
            <div class="weui-cell__ft">进入设置</div>
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
        .desc_area{
            display: flex;
        }
        .desc_area .desc_title{
            flex:1;
            color: #000000;
            font-size: 14px;
            line-height: 1.2;
            overflow: hidden;
            text-overflow:ellipsis;
        }
        .desc_area .desc{
            flex:1;
            color: #999999;
            font-size: 13px;
            line-height: 1.2;
            overflow: hidden;
            text-overflow:ellipsis;
        }

</style>
