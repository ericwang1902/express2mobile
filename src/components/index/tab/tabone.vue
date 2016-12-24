<template>
    <div class="weui_cells weui_cells_access">
        <receive-cell></receive-cell>
        <send-cell></send-cell>
    </div>
</template>

<script>
import ReceiveCell from '../receivecell/receivecell'
import SendCell from '../sendcell/sendcell'

export default {
  name: 'receiveform',
  data () {
    return {
      addressData:"AddressChinaData"
    }
  },
  components:{
       ReceiveCell,
       SendCell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        body {
            margin: auto;
            background-color: #f5f5f5
        }
       
</style>
