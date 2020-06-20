<template>
  <div class="loading" v-show="loading" @touchmove.prevent @mousewheel.prevent>
    <div class="circle-wrap">
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading"],
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0; 
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .circle-wrap {
    width: 45px;
    height: 45px;
    background-image: linear-gradient(0deg, #454e93, #fff, #ff7b4d);
    border-radius: 50%;
    animation: rotate 1s linear infinite;
    .circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
}
@keyframes rotate {
    0%{
         transform:rotate(0deg);
    }
    100%{
         transform:rotate(360deg);
    }
}
</style>