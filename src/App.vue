<template>
  <div id="app">
    <div class="top_nav">
      <div class="top_nav_content">
        <HeaderNav/>
      </div>
    </div>
    <div class="content_area">
      <div class="content_area_card">
        <router-view></router-view>
      </div>
    </div>


    <div class="footer_area">
      <div class="footer_area_content">
        <FooterInfo/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/Header'
import FooterInfo from '@/components/Footer'
export default {
  name: 'app',
  components: {
    HeaderNav,
    FooterInfo
  }
}
</script>


<style lang="less" scoped>
  @import url('./assets/less/app.less');
</style>

