<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/><!--当前路由只有元素meta显示为true才显示底部tab -->
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components: {
   FooterGuide
  }
} 
</script>
<style>
#app {
 width:100%;
 height:100%;
 background:#f5f5f5
}
</style>
