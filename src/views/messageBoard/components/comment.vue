<template>
  <div class="comment">
    <img :src="commentDetails.userInfo.image" alt />
    <div class="observer">
      <span class="observer-name">{{commentDetails.userInfo.nickname}}:</span>
      <p class="observer-content">{{commentDetails.commentContent}}</p>
      <br />
      <div class="observer-bottom">
        <span class="comment-time">{{commentDetails.time}}</span>
        <span class="delete" v-show="canDelete" @click="deleteComment()">删除</span>
      </div>
    </div>
  </div>
</template> 

<script>
import { deleteBoardComment } from "@/api/comment";

export default {
  props: ["commentDetails"],
  methods: {
    async deleteComment() {
      //删除评论
      let boardCommentData = this.$store.state.boardCommentData;
      for (let i = 0; i < boardCommentData.length; i++) {
        if (boardCommentData[i]._id === this.commentDetails._id) {
          this.$store.commit("deleteBoardComment", i);
        }
      }
      await deleteBoardComment(this.commentDetails._id);
    }
  },
  computed: {
    canDelete() {
      let currentID = this.commentDetails.userInfo.id;
      if (
        this.$cookies.isKey("userInfo") &&
        this.$cookies.get("userInfo").id === currentID
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 8fr;
  justify-items: center;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e1e1e2;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    align-self: start;
    margin-top: 15px;
  }
  .observer {
    width: 100%;
    text-align: left;
    padding-left: 10px;
    .observer-content {
      word-break: break-all;
      font-size: 16px;
      color: #000;
    }
    .observer-name {
      color: #454e93;
    }
    .observer-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .comment-time {
        font-size: 12px;
        color: #999999;
      }
      .delete {
        cursor: pointer;
        font-size: 10px;
        color: #454e93;
      }
    }
  }
}

.comments::-webkit-scrollbar {
  display: none;
}
</style>