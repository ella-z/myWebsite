<template>
  <div class="board">
    <textarea class="board-textarea" placeholder="请留言" ref="textarea"></textarea>
    <button class="board-button" @click="submit">评论</button>
  </div>
</template>

<script>
import { addBoardComment } from "@/api/comment";
import { addEssayComment } from "@/api/essay";
export default {
  props: ["type", "userInfo"],
  methods: {
    async submit() {
      const commentContent = this.$refs.textarea.value.trim();
      if (!this.$cookies.isKey("token")) {
        // 判断用户是否登录了
        this.$message({
          type: "error",
          message: "请先登录",
          center: true,
          offset: 80
        });
      } else if (commentContent.length === 0) {
        this.$message({
          type: "error",
          message: "请输入内容",
          center: true,
          offset: 80
        });
      } else {
        try {
          const date = new Date();
          const time =
            date.getFullYear().toString() +
            "-" +
            (date.getMonth() + 1 < 10
              ? "0" + (date.getMonth() + 1)
              : date.getMonth() + 1
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

          const userInfo = this.userInfo;
          this.$refs.textarea.value = "";
          let thiss = this;
          if (this.type === "messageBoard") {
            const commentData = {
              userInfo,
              commentContent,
              time
            };
            this.$store
              .dispatch("comment/addComment", commentData)
              .then(response => {
                if (response.code === 1) {
                  thiss.$message({
                    type: "success",
                    message: response.message,
                    center: true,
                    offset: 80
                  });
                } else {
                  thiss.$message({
                    type: "error",
                    message: response.message,
                    center: true,
                    offset: 80
                  });
                }
              })
              .catch(error => {
                console.log(error);
              });
          } else if (this.type === "essay") {
            const essayCommentData = {
              userInfo,
              commentContent,
              time,
              essayId: window.localStorage.essayId
            };
            this.$store
              .dispatch("essay/addComment", essayCommentData)
              .then(response => {
                if (response.code === 1) {
                  thiss.$message({
                    type: "success",
                    message: response.message,
                    center: true,
                    offset: 80
                  });
                } else {
                  thiss.$message({
                    type: "error",
                    message: response.message,
                    center: true,
                    offset: 80
                  });
                }
              })
              .catch(error => {
                console.log(error);
              });
          }
        } catch (error) {
          console.log(error);
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
    transition: 0.3s;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
  }
  .board-button:hover::before {
    transform: translateY(0);
  }
}
</style>
