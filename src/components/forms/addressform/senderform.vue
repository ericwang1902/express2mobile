<template>
    <div class="page panel js_show">
        <div class="weui-cells__title">新增寄件地址</div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd" style="width:50px"><label class="weui-label">省市区</label></div>
                <div class="weui-cell__bd">
                    <x-address @on-hide="logHide" :title="title" raw-value :value="value" :list="addressData" placeholder="请选择地址" ></x-address>
                </div>
            </div>
            <div class="weui-cell">
                 <div class="weui-cell__hd" ><label class="weui-label">街道</label></div>
                 <div class="weui-cell__bd">
                    <selector :title="title" :options="list" v-model="district"></selector>
                 </div>
            </div>
            <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">地址</label></div>
                    <div class="weui-cell__bd">
                        <textarea class="weui-textarea"  placeholder="请输入详细地址" rows="2"></textarea>  
                    </div>
            </div>
           
        </div>
        <div class="weui-cells">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">姓名</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" placeholder="请输入姓名"/>
                </div>
            </div>
            <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">电话</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号">
                    </div>
            </div>
            <div class="weui-cell">
                    <div class="weui-cell__hd"><label class="weui-label">邮编</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" placeholder="请输入邮编"/>
                    </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_checkbox">
            <label class="weui-cell weui-check__label" for="s11">
                <div class="weui-cell__hd">
                    <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
                    <i class="weui-icon-checked"></i>
                </div>
                <div class="weui-cell__bd">
                    <p>设为默认寄件地址</p>
                </div>
            </label>
        </div>
          <div class="button-sp-area">
                <a @click="submitOrder" class="weui-btn weui-btn_primary">保存</a>
          </div>
</template>

<script>
import {  XAddress, AddressChinaData,Selector} from 'vuxx/src/components'
import value2name from '../../../common/js/value2name'

export default {
  name: 'receiveform',
  data () {
    return {
      addressData:AddressChinaData,
      value:[],
      title:"",
      detail:"",
      list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
      district:""
    }
  },
  components:{
      XAddress,
      Selector
  },
  methods:{
      logHide:function(closeType,val) {
        console.log('on-hide', closeType)
        var region = value2name(val, AddressChinaData)
        console.log(region)
      },
      submitOrder:function(){
        console.log("增加寄件人")
       this.$router.push('/index');

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-sp-area {
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 20px;
    }

</style>
