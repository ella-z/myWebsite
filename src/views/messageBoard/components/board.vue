<template>
  <div class="board">
    <error class="error" :errorText="errorText" v-show="iserror"></error>
    <textarea class="board-textarea" placeholder="请留言" ref="textarea"></textarea>
    <button class="board-button" @click="submit">评论</button>
  </div>
</template>

<script>
import error from "../../../components/error";
import { addBoardComment } from "../../../api/comment";

export default {
  components: {
    error
  },
  data() {
    return {
      timer: null
    };
  },
  computed: {
    errorText() {
      return this.$store.state.errorText;
    },
    iserror() {
      return this.$store.state.iserror;
    }
  },
  methods: {
    async submit() {
      if (!this.$cookies.isKey("userInfo")) {
        //判断用户是否登录了
        this.$store.commit("changeerrorText", "请先登录");
        this.$store.commit("changeerrorState", true);
      } else {
        let commentContent = this.$refs.textarea.value.replace(/(^\s*)|(\s*$)/g, "");
        if (commentContent.length === 0) {
          this.$store.commit("changeerrorText", "请输入内容");
          this.$store.commit("changeerrorState", true);
        } else {
          let date = new Date();
          let time =
            date.getFullYear().toString() +
            "-" +
            (date.getMonth() + 1 < 10
              ? "0" + date.getMonth()
              : date.getMonth()
            ).toString() +
            "-" +
            (date.getDate() < 10
              ? "0" + date.getDate()
              : date.getDate()
            ).toString() +
            "   " +
            (date.getHours() < 10
              ? "0" + date.getHours()
              : date.getHours()
            ).toString() +
            ":" +
            (date.getMinutes() < 10
              ? "0" + date.getMinutes()
              : date.getMinutes()
            ).toString();
          const userInfo = this.$cookies.get("userInfo");
          let commentData = {
            userInfo,
            commentContent,
            time
          };
          this.$store.commit("changeerrorState", false);
          await addBoardComment(commentData);
          this.$refs.textarea.value = "";
          this.$store.commit('addboardCommentData',commentData);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  width: 60%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .error {
    position: absolute;
    left: 0;
    top: -15px;
  }
  .board-textarea {
    width: 80%;
    height: 150px;
    outline: none;
    resize: none; //禁止拉伸
    font-size: 12px;
    border: 1px solid #000;
    padding: 10px;
  }
  .board-button {
    cursor: pointer;
    position: relative;
    width: 100px;
    height: 30px;
    font-size: 18px;
    color: transparent;
    background: linear-gradient(90deg, #454e93, #ff7b4d);
    background-clip: text;
    border-radius: 15px;
    background-color: transparent;
    overflow: hidden;
    transition-delay: 0.1s;
    border: 1px solid #000;
  }
  .board-button:hover {
    color: #fff;
    font-weight: 300;
  }
  .board-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    transition: 0.3s ;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
  }
  .board-button:hover::before {
    transform: translateY(0);
  }
}
</style>