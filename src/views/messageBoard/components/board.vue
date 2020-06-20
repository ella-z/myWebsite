<template>
  <div class="board">
    <error class="error" :errorText="errorText" v-show="iserror"></error>
    <textarea class="board-textarea" placeholder="请留言"></textarea>
    <button class="board-button" @click="submit">评论</button>
  </div>
</template>

<script>
import error from "../../../components/error";

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
    submit() {
      if (!this.$cookies.isKey("userInfo")) {
        //判断用户是否登录了
        this.$store.commit("changeerrorText", "请先登录");
        this.$store.commit("changeerrorState", true);
        this.timer = setInterval(()=>{
           clearInterval(this.timer);
           this.$store.commit("changeerrorState", false);
        },3000)
      } else {
         this.$store.commit("changeerrorState", false);
        console.log("已登录");
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
    transition: 0.3s all;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
  }
  .board-button:hover::before {
    transform: translateY(0);
  }
}
</style>