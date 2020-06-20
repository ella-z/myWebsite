<template>
  <div class="sign">
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
            <input type="text" name="userName" id="userName" required="required" autocomplete="off" />
            <span class="text">用户名</span>
          </div>
          <div class="signForm-col2">
            <input type="password" id="password" required="required" autocomplete="off" />
            <span class="text">请输入密码</span>
          </div>
          <div class="signForm-col3">
            <input type="password" id="passwordAgain" required="required" autocomplete="off" />
            <span class="text">再次输入密码</span>
          </div>
          <div class="signForm-button">
            <button @click="toNext()">下一页</button>
          </div>
        </div>
        <div class="signForm-content">
          <div class="signForm-col1">
            <input type="text" required="required" autocomplete="off" />
            <span class="text">手机号</span>
          </div>
          <div class="signForm-col2 code-box">
            <div>
              <input type="password" required="required" autocomplete="off" />
              <span class="text">验证码</span>
            </div>
            <button
              @click="getVerificationCode()"
              ref="vCode"
              :class="canClick?'':'button-click'"
            >获取验证码</button>
          </div>
          <div class="signForm-button">
            <button @click="toPrevious()">上一页</button>
            <button @click="toSignUp()">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canClick: true, //判断是否可以获取验证码
      timer: null //计时器
    };
  },
  computed: {
    isSignShow() {
      return this.$store.state.isSignShow;
    }
  },
  methods: {
    closeSign() {
      clearInterval(this.timer);
      this.$store.commit("changeNavIndex", 0);
      this.$router.go(-1);
    },
    getVerificationCode() {
      if (!this.canClick) return;
      this.canClick = false;
      let countDownTime = 60;
      this.timer = setInterval(() => {
        this.$refs.vCode.textContent = countDownTime + "s";
        if (countDownTime !== 0) {
          countDownTime--;
        } else {
          this.$refs.vCode.textContent = "获取验证码";
          countDownTime = 60;
          this.canClick = true;
          clearInterval(this.timer);
        }
      }, 1000);
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
@import "./styles/signUp.scss";
</style>