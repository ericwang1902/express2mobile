<template>
  <div class="weui-cells weui-cell_access">
    <receive-cell></receive-cell>
    <send-cell></send-cell>
  </div>
</template>

<script>
import ReceiveCell from './receivecell'
import SendCell from './sendcell'

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components:{
    ReceiveCell,
    SendCell
  }
}
</script>

<style>

</style>
