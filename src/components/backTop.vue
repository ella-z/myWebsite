<template>
  <div>
    <div class="backTop-button" @click="backTop()" v-show="visable">
      <i class="icon iconfont">&#xe630;</i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['visable'],
  methods: {
    backTop() {
      window.scrollTo({
        //滑动回顶点
        top: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.backTop-button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  line-height: 35px;
  position: fixed;
  z-index: 99999;
  bottom: 30px;
  right: 20px;
  background-color: transparent;
  overflow: hidden;
  .icon {
    display: inline-block;
    font-size: 25px;
    transform: translateY(20%);
    transition: 0.3s ease-in-out;
  }
}
.backTop-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, #454e93, #cc62ab, #ff7b4d, #454e93);
  background-size: 400%;
  animation: animate 2s linear infinite;
  transform: translateY(-100%);
  transition: 0.3s;
}
@keyframes animate {
  0% {
    background-position: 400%;
  }
  100% {
    background-position: 0%;
  }
}
.backTop-button:hover {
  .icon {
    transform: translateY(0);
    color: #fff;
  }
}
.backTop-button:hover::before {
  transform: translateY(0);
}
</style>