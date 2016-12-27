<template>
    <div style="height:100%">
        <div class="box weui-navbar">
            <router-link to="/addressbook/senderform" class="weui-btn weui-btn_mini weui-btn_primary" style="margin-left:10px">添加</router-link>
            <div class="weui-cells__title">寄件人地址</div>
            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn" style="margin-right:0px">确认</a>
        </div>
        <div class="weui-cells weui-cells_radio" style="margin-top:50px;">
            
            <label v-for="item in items" class="weui-cell weui-check__label" :for="'id'+item">
                <div class="weui-cell__bd">

                     <div id="sender_info">
                            <div class="desc_area">
                                <span class="desc_title">张三 17798885277</span>
                            </div>
                            <div class="desc_area">
                                <span class="desc">江苏省南通市如皋市</span>
                            </div>
                            <div class="desc_area">
                                <span class="desc">如城镇海阳路195号</span>
                            </div>
                    </div>

                </div>
                <div class="weui-cell__ft">
                    <input type="radio" class="weui-check" name="radio1" :id="'id'+item">
                    <span class="weui-icon-checked"></span>
                </div>
            </label>
            

        </div>
        
    </div>
    
</template>

<script>
import { Search, Divider, Spinner,Radio,Group } from 'vuxx/src/components'

export default {
  name: 'hello',
  data () {
    return {
      msg: '这是广告页面',
      items:[1,2,3,4,5,6,7]

    }
  },
  computed:{
      checkId:function(index){
          return "id"+index;
      }
  },
  components:{
      Search, 
      Divider, 
      Spinner,
      Radio,
      Group
  },
  methods: {
    resultClick (item) {
      alert('you click the result item: ' + JSON.stringify(item))
    },
    onSubmit (val) {
      alert('on submit' + val)
    },
     load2 (that) {
      setTimeout(() => {
        if (this.n2 === 30) {
          // this.$broadcast('pullup:done', uuid)
          that.$emit('pullup:done', that.uuid)
        } else {
          this.n2 += 10
          setTimeout(() => {
            // this.$broadcast('pullup:reset', uuid)
            that.$emit('pullup:reset', that.uuid)
          }, 10)
        }
      }, 2000)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;
  margin-right:10px;
}
.box2-wrap {
  height: 100%;
  overflow: hidden;
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
