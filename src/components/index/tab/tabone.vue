<template>
  <div>
    <re-and-send></re-and-send>
    <des-and-note></des-and-note>
    <choose-company></choose-company>
    <x-button></x-button>
  </div>
</template>

<script>
import ReAndSend from  '../resandsend/resandsend'
import DesAndNote from  '../desandnote/desandnote'
import ChooseCompany from '../choosecompany/choosecompany'
import XButton from '../button/xbutton'

export default {
  name: 'tabone',
  data () {
    return {
      addressData:"AddressChinaData"
    }
  },
  components:{
       ReAndSend,
       DesAndNote,
       ChooseCompany,
       XButton
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
