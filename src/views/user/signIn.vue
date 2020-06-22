<template>
  <div class="sign">
    <loading :loading="loading"></loading>
    <error class="error" :errorText="errorText" v-show="iserror"></error>
    <i class="iconfont icon" @click="closeSign()">&#xe602;</i>
    <div class="signForm">
      <h1>Sign In</h1>
      <div>
        <div class="signForm-col1">
          <input type="text" required="required" autocomplete="off" ref="phone" />
          <span class="text">手机号</span>
        </div>
        <div class="signForm-col2">
          <input type="password" required="required" autocomplete="off" ref="password" @keyup.enter="signIn" />
          <span class="text">密码</span>
        </div>
      </div>
      <button @click="signIn">登 录</button>
    </div>
  </div>
</template>
<script>
import { login } from "../../api/user";
import loading from "../../components/loading";
import error from "../../components/error";

export default {
  components: {
    loading,
    error
  },
  data() {
    return {
      loading: false,
      errorText: "",
      iserror: false
    };
  },
  methods: {
    closeSign() {
      this.$store.commit("changeNavIndex", 0);
      this.$router.go(-1);
    },
    async signIn() {
      //登录
      this.loading = true;
      try {
        let phone = this.$refs.phone.value.replace(/\s+/g, "");
        let pwd = this.$refs.password.value;
        if (!/^1[3456789]\d{9}$/.test(phone)) {
          this.iserror = true;
          this.errorText = "请输入正确的手机号";
        } else {
          const loginResult = await login(phone, pwd);
          if (loginResult.code === 1) {
            this.iserror = false;
            this.$store.commit("changeloginState",true);
            this.$cookies.set("userInfo",loginResult.info,60*60*24);
            this.closeSign();
          } else {
            this.iserror = true;
            this.errorText = "手机号或者密码错误";
          } 
        }
        this.loading = false;
      } catch (err) {
        this.loading = false;
        console.log(err.data);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sign {
  width: 100%;
  height: 100vh;
  top: 35px;
  left: 0;
  z-index: 11;
  background-color: #fff;
  .error {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
  }
  .icon {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    right: 50px;
    top: 30px;
    cursor: pointer;
  }
  .signForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #454e93;
    h1 {
      margin: 0;
      font-size: 35px;
    }
    input {
      background-color: transparent;
      padding: 5px;
      position: absolute;
      z-index: 12;
      width: 100%;
      font-size: 15px;
      border-bottom: 1px solid #454e93;
    }
    .text {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      font-size: 18px;
      padding: 0 10px;
      transition: 0.5s;
      pointer-events: none;
    }
    [class^="signForm-col"] {
      position: relative;
      width: 250px;
      margin-bottom: 80px;
    }
    input:focus + .text,
    input:valid + .text {
      top: -20px;
      left: -10px;
    }
    button {
      cursor: pointer;
      border: 1px solid #454e93;
      background-color: #fff;
      color: #454e93;
      padding: 6px 25px;
      border-radius: 15px;
      transition: 0.3s;
      font-size: 16px;
    }
    button:hover {
      background-color: #454e93;
      color: #fff;
    }
  }
}
</style>