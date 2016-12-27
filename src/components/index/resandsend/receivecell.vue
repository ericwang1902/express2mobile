<template>
        <a @click="ShowReceiveForm" class="weui-cell weui-cell_access weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
                <div class="sender_icon">收</div>
            </div>
            <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">收件人信息</h4>
                <div id="receiver_info">
                        <div class="desc_area">
                            <span class="desc_title">{{receiver.name}} {{receiver.phone}}</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">{{receiver.province}} {{receiver.city}} {{receiver.county}} {{receiver.district}}</span>
                        </div>
                        <div class="desc_area">
                            <span class="desc">{{receiver.detailAdd}}</span>
                        </div>
                </div>
            </div>
            <div class="weui-cell__ft">
            </div>
        </a>
</template>

<script>
export default {
  name: 'receivercell',
  data () {
    return {
      addressData:"AddressChinaData"
    }
  },
  computed:{
    receiver:function(){
        console.log(this.$store)
         return this.$store.getters.getReceiverData;
    }  
  },
  methods:{
      ShowReceiveForm:function(){
          console.log("弹出收件人的输入框")
          console.log(this)
          this.$router.push('/addressbook/receiverlist');
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
