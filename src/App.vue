<template>
  <div id="app">
    <keep-alive include="index">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "App",

};
</script>

<style lang="scss">
@font-face {
  font-family: "iconfont"; /* project id 1652974 */
  src: url("//at.alicdn.com/t/font_1652974_u7q3ur2hpjh.eot");
  src: url("//at.alicdn.com/t/font_1652974_u7q3ur2hpjh.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1652974_u7q3ur2hpjh.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1652974_u7q3ur2hpjh.woff") format("woff"),
    url("//at.alicdn.com/t/font_1652974_u7q3ur2hpjh.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1652974_u7q3ur2hpjh.svg#iconfont") format("svg");
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
  box-sizing: border-box;
  font-family: "Times New Roman", "KaiTi";
  user-select: none; //取消双击选中文字
}
body {
  margin: 0;
}
.app {
  width: 100vw;
  min-height: 100vh;
}
button,
input {
  outline: none;
  border: none;
}

</style>
