<template>
  <div class="essayDetail">
    <div class="back-button" @click="goback()">
      <i class="icon iconfont">&#xe632;</i>
    </div>
    <div class="essayDetail-content">
      <article></article>
      <div class="message-board">
        <span class="title">Message Board</span>
        <comments></comments>
        <board></board>
      </div>
    </div>
  </div>
</template>

<script>
import board from "../../components/board";
import comments from "../../components/comments";
export default {
  components: {
    board,
    comments
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/essayDetail";
</style>