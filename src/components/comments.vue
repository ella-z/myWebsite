<template>
  <div class="comments">
    <div class="comment" :key="index" v-for="(item,index) in 10">
      <img src="../assets/m.jpg" alt />
      <div class="observer">
        <span class="observer-name">{{item}}:</span>
        <p class="observer-content">xssssdwsssssslllllllllllllllllllllllllllllsssssssssswsxxx</p>
        <br />
        <span class="comment-time">199-10-12</span>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  props: ["commentsArray"]
};
</script>

<style lang="scss" scoped>
.comments {
  width: 60%;
  height: 400px;
  margin-bottom: 20px;
  overflow: scroll;
  scrollbar-width: none;
  .comment {
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 8fr;
    justify-items: center;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #e1e1e2;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
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
      .comment-time {
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
.comments::-webkit-scrollbar {
  display: none;
}
</style>