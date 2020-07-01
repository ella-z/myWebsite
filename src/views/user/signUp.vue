<template>
  <div class="sign">
    <i class="iconfont icon" @click="close()">&#xe602;</i>
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
              ref="username"
            />
            <span class="text">用户名</span>
          </div>
          <div class="signForm-col2">
            <input
              type="password"
              id="password"
              required="required"
              autocomplete="off"
              ref="password"
            />
            <span class="text">请输入密码</span>
          </div>
          <div class="signForm-col3">
            <input
              type="password"
              id="passwordAgain"
              required="required"
              autocomplete="off"
              ref="rePassword"
            />
            <span class="text">再次输入密码</span>
          </div>
          <div class="signForm-button">
            <button @click="toNext()">下一页</button>
          </div>
        </div>
        <div class="signForm-content">
          <div class="signForm-col1">
            <input type="text" required="required" autocomplete="off" ref="phoneNumber" />
            <span class="text">手机号</span>
          </div>
          <div class="signForm-col2 code-box">
            <div>
              <input type="text" ref="code" required="required" autocomplete="off" />
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
import { register } from "@/api/user";

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
    close() {
      clearInterval(this.timer);
      this.$router.go(-1);
    },
    getVerificationCode() {
      if (!this.canClick) return;
      let phoneNumber = this.$refs.phoneNumber.value.replace(
        /(^\s*)|(\s*$)/g,
        ""
      );
      const phoneRE = /^1[3456789]\d{9}$/;
      if (!phoneRE.test(phoneNumber)) {
        this.$message({
          type: "error",
          message: "请输入正确的手机号",
          center: true,
          offset: 80
        });
      } else {
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
      }
    },
    toNext() {
      let username = this.$refs.username.value.replace(/(^\s*)|(\s*$)/g, "");
      let password = this.$refs.password.value;
      let rePassword = this.$refs.rePassword.value;
      let passwordRE = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/;
      let usernameRE = /^[a-zA-Z0-9_-]{5,15}$/;
      if (!usernameRE.test(username)) {
        this.$message({
          type: "error",
          message: "用户名要由5~15位,由英文字母、数字、_组成",
          center: true,
          offset: 80
        });
      } else if (!passwordRE.test(password)) {
        this.$message({
          type: "error",
          message:
            "密码要由8~16个字符,不包含空格,必须包含数字,字母或字符至少两种",
          center: true,
          offset: 80
        });
      } else if (password !== rePassword) {
        this.$message({
          type: "error",
          message: "两次输入的密码不一致",
          center: true,
          offset: 80
        });
      } else {
        this.$refs.signForm.style.transform = "translateX(-50%)";
        const step = document.querySelectorAll(".step");
        step[0].classList.add("active");
      }
    },
    toPrevious() {
      const step = document.querySelectorAll(".step");
      step[0].classList.remove("active");
      step[1].classList.remove("active");
      this.$refs.signForm.style.transform = "translateX(0%)";
    },
    async toSignUp() {
      const step = document.querySelectorAll(".step");
      let code = this.$refs.code.value;
      let username = this.$refs.username.value.replace(/(^\s*)|(\s*$)/g, "");
      let password = this.$refs.password.value;
      let phoneNumber = this.$refs.phoneNumber.value.replace(
        /(^\s*)|(\s*$)/g,
        ""
      );

      if (/^\d{6}$/.test(code)) {
        let userInfo = {
          username,
          password,
          phoneNumber,
          code
        };
        let result = await register(userInfo);
        console.log(result);
        if (result.result.code === 1) { 
          step[1].classList.add("active");
          this.$message({
            type: "success",
            message: result.result.message,
            center: true,
            offset: 80
          });
          this.$router.push({ name: "index" });
        } else {
          this.$message({
            type: "error",
            message: result.result.message,
            center: true,
            offset: 80
          });
        }
      } else {
        this.$message({
          type: "error",
          message: "请输入正确的验证码",
          center: true,
          offset: 80
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/signUp.scss";
</style>