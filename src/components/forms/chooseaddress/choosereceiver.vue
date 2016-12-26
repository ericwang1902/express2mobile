<template>
    <div style="height:100%">
        <search @on-submit="onSubmit" :auto-fixed="autoFixed"></search>
        <div class="box">
            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary" style="margin-left:10px">添加</a>
            <div class="weui-cells__title">收件人地址</div>
            <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_warn" style="margin-right:0px">确认</a>
        </div>
        <div class="weui-cells weui-cells_radio" style="height:100%">
                <divider>上拉刷新</divider>
                    <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig2"  @pullup:loading="load2">
                    <div class="box2">
                       
                    </div>
                </scroller>
        </div>
        
    </div>
    
</template>

<script>
import { Search,Scroller, Divider, Spinner } from 'vuxx/src/components'

export default {
  name: 'hello',
  data () {
    return {
      msg: '这是广告页面',
      results: [],
      autoFixed: false,
      pullupConfig2: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      },
      n2: 10,
      picked:""
    }
  },
  computed:{
      checkId:function(index){
          return "id"+index;
      }
  },
  components:{
      Search,
      Scroller, Divider, Spinner
  },
  methods: {
    resultClick (item) {
      alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
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
function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
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
  margin-top:10px;
  margin-right:10px;
}
.box2-wrap {
  height: 100%;
  overflow: hidden;
}
</style>
