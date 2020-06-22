<template>
  <div class="userPage">
    <div class="user-data" v-if="userData">
      <div class="user-info">
        <img :src="userData.image" />
        <span class="user-nickname">{{userData.nickname}}</span>
        <button>更换头像</button>
        <button @click="backIndex()">返回</button>
        <button @click="signOut()">退出登录</button>
      </div>
      <div class="user-like-essays">
        <span class="title">喜欢的文章</span>

      </div>
    </div>
  </div>
</template>

<script>
//import essayCard from "../essay/components/essayCard";

export default {
  /*components: {
    essayCard
  },*/
  data() {
    return {
      userData: null
    };
  },
  methods: {
    getUserData() {
      this.userData = this.$cookies.get("userInfo");
      console.log(this.userData);
    },
    backIndex() {
      this.$router.back();
    },
    signOut() {
      this.$cookies.remove("userInfo");
      this.$store.commit("changeloginState", false);
      this.$store.commit('changeNavIndex',0)
      this.$router.push({ name: "index" });
    }
  },
  mounted() {
    this.getUserData();
  }
};
</script>

<style lang="scss" scoped>
.userPage {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 0;
  .user-data {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .user-info {
      width: 250px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
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
    .user-like-essays {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-items: center;
      row-gap:25px;
      .title {
        display: block;
        padding: 5px 5px;
        border: 1px solid #000;
        border-image: linear-gradient(to right, #454e93, #ff7b4d) 1;
      }
    }
  }
}
</style>