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
              v-model="inputText.username"
            />
            <span class="text">用户名</span>
          </div>
          <div class="signForm-col2">
            <input
              type="password"
              id="password"
              required="required"
              autocomplete="off"
              v-model="inputText.password"
            />
            <span class="text">请输入密码</span>
          </div>
          <div class="signForm-col3">
            <input
              type="password"
              id="passwordAgain"
              required="required"
              autocomplete="off"
              v-model="inputText.rePassword"
            />
            <span class="text">再次输入密码</span>
          </div>
          <div class="signForm-button">
            <button @click="toNext()">下一页</button>
          </div>
        </div>
        <div class="signForm-content">
          <div class="signForm-col1">
            <input
              type="text"
              required="required"
              autocomplete="off"
              v-model="inputText.phoneNumber"
            />
            <span class="text">手机号</span>
          </div>
          <div class="signForm-col2 code-box">
            <div>
              <input type="text" required="required" autocomplete="off" v-model="inputText.vCode" />
              <span class="text">验证码</span>
            </div>
            <button
              @click="getVerificationCode()"
              ref="codeText"
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
import { register, getVCode } from "@/api/user";

export default {
  data() {
    return {
      canClick: true, //判断是否可以获取验证码
      timer: null, //计时器
      inputText: {
        username: "",
        password: "",
        rePassword: "",
        phoneNumber: "",
        vCode: ""
      }
    };
  },
  computed: {
    isSignShow() {
      return this.$store.state.isSignShow;
    }
  },
  methods: {
    close() {
      //返回上一个页面
      clearInterval(this.timer);
      this.$router.go(-1);
    },

    async getVerificationCode() {
      //获取验证码
      if (!this.canClick) return;
      const phoneRE = /^1[3456789]\d{9}$/;
      if (!phoneRE.test(this.inputText.phoneNumber.trim())) {
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
          this.$refs.codeText.textContent = countDownTime + "s";
          if (countDownTime !== 0) {
            countDownTime--;
          } else {
            this.$refs.codeText.textContent = "获取验证码";
            countDownTime = 60;
            this.canClick = true;
            clearInterval(this.timer);
          }
        }, 1000);

        let result = await getVCode(this.inputText.phoneNumber);
        if (result.code === "OK") {
          this.$message({
            type: "success",
            message: "验证码已成功发送",
            center: true,
            offset: 80
          });
        } else {
          this.$message({
            type: "error",
            message: result.message,
            center: true,
            offset: 80
          });
        }
      }
    },

    toNext() {
      // 验证用户名以及密码格式是否正确
      let passwordRE = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/;
      let usernameRE = /^[a-zA-Z0-9_-]{5,10}$/;
      if (!usernameRE.test(this.inputText.usernametrim())) {
        this.$message({
          type: "error",
          message: "用户名要由5~10位,由英文字母、数字、_组成",
          center: true,
          offset: 80
        });
      } else if (!passwordRE.test(this.inputText.password)) {
        this.$message({
          type: "error",
          message:
            "密码要由8~16个字符,不包含空格,必须包含数字,字母或字符至少两种",
          center: true,
          offset: 80
        });
      } else if (this.inputText.password !== this.inputText.rePassword) {
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
      //返回上一步，清除部分样式
      const step = document.querySelectorAll(".step");
      step[0].classList.remove("active");
      step[1].classList.remove("active");
      this.$refs.signForm.style.transform = "translateX(0%)";
    },

    async toSignUp() {
      // 注册
      const step = document.querySelectorAll(".step");
      const phoneRE = /^1[3456789]\d{9}$/;
      if (!phoneRE.test(this.inputText.phoneNumber)) {
        this.$message({
          type: "error",
          message: "请输入正确的手机号",
          center: true,
          offset: 80
        });
      } else if (/^\d{6}$/.test(this.inputText.vCode)) {
        let userInfo = {
          username: this.inputText.username,
          password: this.inputText.password,
          phoneNumber: this.inputText.phoneNumber,
          vCode: this.inputText.vCode
        };
        let result = await register(userInfo);
        if (result.result.code === 1) {
          step[1].classList.add("active");
          this.$message({
            type: "success",
            message: result.result.message,
            center: true,
            offset: 80
          });
          this.close();
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