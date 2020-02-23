<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name:'App'
}
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1652974 */
  src: url('//at.alicdn.com/t/font_1652974_jt9wnkari88.eot');
  src: url('//at.alicdn.com/t/font_1652974_jt9wnkari88.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1652974_jt9wnkari88.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1652974_jt9wnkari88.woff') format('woff'),
  url('//at.alicdn.com/t/font_1652974_jt9wnkari88.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1652974_jt9wnkari88.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    font-size: 4vw;
    color: #000;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
*{
  padding:0;
  margin:0;
  font-size: 1.2vw;
  box-sizing:border-box;
  font-family:"Times New Roman",Georgia,Serif;
}
</style>
