<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 1652974 */
  src: url('//at.alicdn.com/t/font_1652974_bt1fmixy3y5.eot');
  src: url('//at.alicdn.com/t/font_1652974_bt1fmixy3y5.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1652974_bt1fmixy3y5.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1652974_bt1fmixy3y5.woff') format('woff'),
  url('//at.alicdn.com/t/font_1652974_bt1fmixy3y5.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1652974_bt1fmixy3y5.svg#iconfont') format('svg');
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  color: #000;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
  font-size: 16px;
  box-sizing: border-box;
  font-family: "Times New Roman", "KaiTi";
  list-style: none;
  user-select: none; //取消双击选中文字
}
.app {
  width: 100vw;
  min-height: 100vh;
}
button,input {
  outline: none;
  border: none;
}
</style>
