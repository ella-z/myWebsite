<template>
  <div class="messageBoard">
    <areaHeader :headerTitle="messageBoard" :headerLogo="headerLogo"></areaHeader>
    <div class="comments bottom-reveal">
      <span v-show="commentArray.length === 0">暂无留言</span>
      <comment :key="index" v-for="(item,index) in commentArray" :commentDetails="item"></comment>
    </div>
    <board class="bottom-reveal"></board>
  </div>
</template>

<script>
import areaHeader from "@/components/areaHeader";
import comment from "./components/comment";
import board from "./components/board";

export default {
  components: {
    areaHeader,
    comment,
    board
  },
  data() {
    return {
      messageBoard: "Message Board",
      headerLogo: "&#xe65e;"
    };
  },

  computed: {
    commentArray() {
      return this.$store.state.boardCommentData;
    }
  }
};
</script>

<style lang="scss" scoped>
.messageBoard {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    display: block;
    text-align: center;
  }
  .comments {
    width: 60%;
    height: 400px;
    overflow: scroll;
    scrollbar-width: none;
  }
  .comments::-webkit-scrollbar {
    display: none;
  }
}
</style>