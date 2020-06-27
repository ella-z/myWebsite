<template>
  <div class="resetPassword">
    <i class="iconfont icon" @click="close()">&#xe602;</i>
    <div class="resetPassword-form">
      <h1>Reset your password</h1>
      <div class="form-content">
        <div class="signForm-col1">
          <input type="text" required="required" autocomplete="off" />
          <span class="text">手机号</span>
        </div>
        <div class="signForm-col2 code-box">
          <div>
            <input type="text" required="required" autocomplete="off" />
            <span class="text">验证码</span>
          </div>
          <button
            @click="getVerificationCode()"
            ref="vCode"
            :class="canClick?'':'button-click'"
          >获取验证码</button>
        </div>
        <div class="signForm-col3">
          <input type="password" required="required" autocomplete="off" />
          <span class="text">请输入新密码</span>
        </div>
      </div>
      <button>提交</button>
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
  methods: {
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
    close(){
       clearInterval(this.timer);
      this.$store.commit("changeNavIndex", 0);
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  color: #000;
  font-size: 12px;
  font-weight: 700;
  position: absolute;
  right: 50px;
  top: 30px;
  cursor: pointer;
}
.resetPassword-form {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .form-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      background-color: transparent;
      padding: 5px;
      position: relative;
      z-index: 12;
      width: 100%;
      font-size: 15px;
      border-bottom: 1px solid #000;
    }
    .text {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      font-size: 16px;
      padding: 0 10px;
      transition: 0.5s;
      pointer-events: none;
    }
    [class^="signForm-col"] {
      position: relative;
      width: 250px;
      height: 35px;
      margin-bottom: 40px;
    }
    [class^="signForm-col"]:last-child {
      margin-bottom: 0;
    }
    .code-box {
      display: flex;
      flex-direction: row;
      button {
        width: 110px;
        padding: 5px 10px;
        margin-left: 10px;
      }
    }
    input:focus + .text,
    input:valid + .text {
      top: -20px;
      left: -10px;
    }
  }
  button {
    cursor: pointer;
    width: 110px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 15px;
  }
  button:hover {
    background-color: #000;
    color: #fff;
  }
}
</style>