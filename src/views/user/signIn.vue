<template>
  <div class="sign">
    <loading :loading="loading"></loading>
    <error class="error" :errorText="errorText" v-show="iserror"></error>
    <i class="iconfont icon" @click="closeSign()">&#xe602;</i>
    <div class="signForm">
      <h1>Sign In</h1>
      <div class="signForm-content">
        <div class="signForm-col1">
          <input type="text" required="required" autocomplete="off" ref="phone" />
          <span class="text">手机号</span>
        </div>
        <div class="signForm-col2">
          <input
            type="password"
            required="required"
            autocomplete="off"
            ref="password"
            @keyup.enter="signIn"
          />
          <span class="text">密码</span>
        </div>
        <span class="forget-password" @click="toResetPaassword">忘记密码</span>
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
    toResetPaassword(){
      this.$router.push({name:'resetPassword'});
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
            this.$store.commit("changeloginState", true);
            this.$cookies.set("userInfo", loginResult.info, 60 * 60 * 24);
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
@import './styles/signIn.scss';
</style>