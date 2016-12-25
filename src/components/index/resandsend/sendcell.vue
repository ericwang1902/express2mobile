<template>
        <a @click="ShowSendForm" class="weui-cell weui-cell_access weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <div class="reciver_icon">寄</div>
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">寄件人信息</h4>
                <div id="sender_info">
                        <div class="desc_area">
				            <span class="desc_title">测试 测试</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">北京市北京市市辖区东城区</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">测试</span>
                        </div>
                </div>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
</template>

<script>
export default {
  name: 'sendcell',
  data () {
    return {
      addressData:"AddressChinaData"
    }
  },
  methods:{
      ShowSendForm:function(){
          console.log("弹出寄件人地址输入框")
      }
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        .button_sp_area {
            margin-right: 30px;
            margin-left: 30px;
            margin-top: 20px;
        }
        .sender_icon {
            width: 60px;
            height: 60px;
            background-color: #ef4f4f;
            border-radius: 10px;
            color: #FFFFFF;
            font-size: 36px;
            text-align: center;
            line-height: 60px;
        }
        .reciver_icon {
            width: 60px;
            height: 60px;
            background-color: #04be02;
            border-radius: 10px;
            color: #FFFFFF;
            font-size: 36px;
            text-align: center;
            line-height: 60px;
        }
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
