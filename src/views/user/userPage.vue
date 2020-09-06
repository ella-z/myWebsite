<template>
  <div class="userPage">
    <loading :loading="loading"></loading>
    <upAvatar :userId="userData.id" @update="refresh"></upAvatar>
    <div class="user-data">
      <img :src="userData.image" />
      <span class="user-nickname">{{userData.nickname}}</span>
      <button @click="toChangeAvatar">更换头像</button>
      <button @click="backIndex()">返回</button>
      <button @click="signOut()">退出登录</button>
    </div>
  </div>
</template>

<script>
import upAvatar from "./components/upAvatar";
import { userDetails } from "@/api/user";
import loading from "@/components/loading";

export default {
  components: {
    upAvatar,
    loading
  },
  data() {
    return {
      userData: "", //用户数据
      loading:false
    };
  },
  methods: {
    backIndex() {
      this.$router.back();
    },
    signOut() {
      this.$cookies.remove("token");
      this.$store.commit("user/changeloginState", false);
      this.$router.back();
    },
    toChangeAvatar() {
      this.$store.commit("changeShowUpAvatar", true);
    },
    async getUserData() {
      try {
        this.loading = true;
        const result = await userDetails("token");
        this.userData = result.result;
        this.loading = false;
      } catch (error) {
         this.loading = false;
        console.log(error);
      }
    },
    refresh() {
      this.$router.go(0);
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style lang="scss" scoped>
.userPage {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .user-data {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .user-nickname {
      display: block;
      width: 100%;
      font-size: 25px;
      text-align: center;
      margin-top: 10px;
      padding: 10px 5px;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 30px;
    }
    button {
      cursor: pointer;
      width: 100px;
      height: 30px;
      border-radius: 15px;
      margin-bottom: 20px;
      color: #fff;
      background-image: linear-gradient(90deg, #454e93, #ff7b4d);
    }
  }
}
</style>
