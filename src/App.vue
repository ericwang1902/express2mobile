<template>
  <div id="app">
    <x-index></x-index>
  </div>
</template>

<script>
import XIndex from 'components/index/index'

export default {
  name: 'app',
  components: {
    XIndex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;

}
</style>
