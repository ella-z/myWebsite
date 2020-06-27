<template>
  <div class="messageBoard">
    <areaHeader :headerTitle="messageBoard" :headerLogo="headerLogo"></areaHeader>
    <div class="comments bottom-reveal">
      <loading :loading="loading"></loading>
      <span v-show="commentArray.length === 0">暂无留言</span>
      <comment
        :key="index"
        v-for="(item,index) in commentArray"
        :commentDetails="item"
        type="messageBoard"
      ></comment>
    </div>
    <board class="bottom-reveal" type="messageBoard"></board>
  </div>
</template>

<script>
import areaHeader from "@/components/areaHeader";
import comment from "./components/comment";
import board from "./components/board";
import loading from "@/components/loading"
import { getBoardComment } from "@/api/comment";

export default {
  components: {
    areaHeader,
    comment,
    board,
    loading
  },
  data() {
    return {
      messageBoard: "Message Board",
      headerLogo: "&#xe65e;",
      loading:false
    };
  },
  methods: {
    async getData() {
      try {
        this.loading = true;
        let commentData = await getBoardComment();
        this.$store.commit("changeboardCommentData", commentData);
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    }
  },
  computed: { 
    commentArray() {
      return this.$store.state.boardCommentData;
    }
  },
  mounted(){
    this.getData();
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
    position: relative;
  }
  .comments::-webkit-scrollbar {
    display: none;
  }
}
</style>