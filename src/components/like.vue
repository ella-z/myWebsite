<template>
  <div class="like" @click="like()">
    <div class="heart heart-button">
      <svg
        t="1587483829379"
        class="icon-heart"
        :class="islike?'icon-heart-click':''"
        viewBox="-15 0 1200 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2955"
      >
        <path
          d="M1058.24 544A320 320 0 0 0 605.76 93.44 306.24 306.24 0 0 0 576 128a306.24 306.24 0 0 0-29.76-34.88A320 320 0 0 0 93.76 544l480 480z"
          p-id="2956"
        />
      </svg>
    </div>
    <span>like</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      islike: false
    };
  },
  methods: {
    like() {
      this.islike = !this.islike;
    }
  }
};
</script>

<style lang="scss" scoped>
.like {
  cursor: pointer;
  width: 40px;
  height: 20px;
  //  background-color: pink;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .icon-heart {
    width: 15px;
    height: 15px;
    path {
      fill: transparent;
      stroke-width: 50;
      stroke: black;
      stroke-dasharray: 3400;
      stroke-dashoffset: 0;
    }
  }
  .icon-heart-click path {
    stroke: rgb(247, 87, 43);
    animation: animate-heart 1s linear forwards;
  }
  @keyframes animate-heart {
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 3400;
    }
    80% {
      stroke-dashoffset: 6800;
      fill: transparent;
    }
    100% {
      stroke-dashoffset: 6800;
      fill: rgb(247, 87, 43);
    }
  }
  span {
    transform: translateY(-1px);
    font-size: 12px;
  }
}
</style>