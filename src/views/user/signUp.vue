<template>
  <transition name="signTransition">
    <div class="sign" v-show="isSignShow">
      <i class="iconfont icon" @click="closeSign()">&#xe602;</i>
      <h1>Sign Up</h1>
      <div class="progress-bar">
        <div class="step">
          <p>Infro</p>
          <div class="bullet">
            <span>1</span>
          </div>
          <div class="iconfont check">&#xe63f;</div>
        </div>
        <div class="step">
          <p>signUp</p>
          <div class="bullet">
            <span>2</span>
          </div>
          <div class="iconfont check">&#xe63f;</div>
        </div>
      </div>
      <div class="signForm-outer">
        <div class="signForm" ref="signForm">
          <div class="signForm-content">
            <div class="signForm-col1">
              <input
                type="text"
                name="userName"
                id="userName"
                required="required"
                autocomplete="off"
              />
              <span class="text">userName</span>
            </div>
            <div class="signForm-col2">
              <input type="password" id="password" required="required" autocomplete="off" />
              <span class="text">password</span>
            </div>
            <div class="signForm-button">
              <button @click="toNext()">NEXT</button>
            </div>
          </div>
          <div class="signForm-content">
            <div class="signForm-col1">
              <input type="text" required="required" autocomplete="off" />
              <span class="text">phoneNumber</span>
            </div>
            <div class="signForm-col2">
              <input type="password" required="required" autocomplete="off" />
              <span class="text">code</span>
            </div>
            <div class="signForm-button">
              <button @click="toPrevious()">PREVIOUS</button>
              <button @click="toSignUp()">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isSignShow() {
      return this.$store.state.isSignShow;
    }
  },
  methods: {
    closeSign() {
      this.$store.commit("changeSignState", false);

      //关闭signUp的时候改变navIndex为当前显示的区域的下标
      const navId = this.$store.state.navId;
      const navContent = this.$store.state.navContent;
      for (let i = 0; i < navContent.length; i++) {
        if (navContent[i].id === navId) {
          this.$store.commit("changeNavIndex", i);
        }
      }
    },
    toNext() {
      this.$refs.signForm.style.transform = "translateX(-50%)";
      const step = document.querySelectorAll(".step");
      step[0].classList.add("active");
    },
    toPrevious() {
      const step = document.querySelectorAll(".step");
      step[0].classList.remove("active");
      this.$refs.signForm.style.transform = "translateX(0%)";
    },
    toSignUp() {
      const step = document.querySelectorAll(".step");
      step[1].classList.add("active");
    }
  }
};
</script>

<style lang="scss" scoped>
@import './styles/signUp.scss';
</style>