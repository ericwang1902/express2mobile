<template>
    <div style="height:100%">
        <div class= "weui-navbar">
            <div class="box1">
                <div class="weui-cells__title">如果使用新地址，请点添加按钮。</div>
            </div>
            <div class="box2">
                <div class="button-sp-area" style="margin:0px;">
                <router-link to="/addressbook/senderform" class="weui-btn weui-btn_mini weui-btn_primary" >添加</router-link>
                <a href="javascript:;" @click="ChangeShow" class="weui-btn weui-btn_mini weui-btn_warn" style="margin-right:10px">确认</a>
            </div>
        </div>
    
       
            <alert v-model="show" title="congratulations" @on-show="onShow" @on-hide="onHide">Message is sent successfully~</alert>
            
        </div>
        <div class="weui-cells weui-cells_radio" style="margin-top:80px;">
            
            <label v-for="item in items" class="weui-cell weui-check__label" :for="'id'+item">
             <img src="../../../assets/edit.png" style="height:20px;margin-right:20px;" alt="">
                <div class="weui-cell__bd">

                     <div id="receiver_info">
                            <div class="desc_area">
                                <span class="desc_title">张三 1111111</span>
                            </div>
                            <div class="desc_area">
                                <span class="desc">1111111</span>
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
import { Search, Divider, Spinner,Radio,Group,Alert } from 'vuxx/src/components'

export default {
  name: 'hello',
  data () {
    return {
      msg: '这是广告页面',
      items:[1,2,3,4,5,6,7],
      show:false

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
      Group,
      Alert
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
    },
    ChangeShow(){
        this.show=true;
        console.log(this.show)
    },
    onShow(){

    },
    onHide(){
       console.log(this.show)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box1 {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:right;
  margin-left:10px;
  width:100%;
}
.box2 {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-direction: row-reverse;
  justify-content:space-between;
  align-items:right;
  margin-right:10px;
  width:100%;
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
