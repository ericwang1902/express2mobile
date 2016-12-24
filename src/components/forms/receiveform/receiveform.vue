<template>
<div class="weui_cells weui_cells_access">
 
    </div>
</template>

<script>
export default {
  name: 'receiveform',
  data () {
    return {
      addressData:"AddressChinaData"
    }
  },
  components:{
       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        body {
            margin: auto;
            background-color: #f5f5f5
        }
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
