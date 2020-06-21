<template>
  <div class="essayDetail">
    <nav :class="scrollTop >0 ?'sticky':''">
      <div class="back-button" @click="goback()">
        <i class="icon iconfont">&#xe632;</i>
      </div>
      <ul class="navList">
        <li v-if="!islogin" @click="toSignIn()">Sign In</li>
        <li v-if="!islogin" @click="toSignUp()">Sign Up</li>
        <li v-if="islogin" @click="toUserPage">{{username}}</li>
      </ul>
    </nav>
    <div class="backTop-button" @click="backTop()" v-show="scrollTop">
      <i class="icon iconfont">&#xe630;</i>
    </div>
    <div class="essayDetail-content">
      <mavon-editor
        class="article"
        :value="mdContent" 
        :subfield="mavon.subfield"
        :defaultOpen="mavon.defaultOpen"
        :toolbarsFlag="mavon.toolbarsFlag"
        :editable="mavon.editable"
        :scrollStyle="mavon.scrollStyle"
      ></mavon-editor>
      <div class="message-board">
        <span class="title">Message Board</span>
        <comments></comments>
        <board></board>
      </div>
    </div>
  </div>
</template>

<script>
import board from "../messageBoard/components/board";
import comments from "../../components/comments";
import { getEssayDetails } from "../../api/essay";

export default {
  components: {
    board,
    comments
  },
  data() {
    return {
      mdContent: "",
      scrollTop: 0, //距离顶部的距离
      username: "", //已登录用户的用户名
    };
  },
  methods: {
    goback() {
      this.$router.back();
    },
    backTop() {
      window.scrollTo({
        //滑动回顶点
        top: 0,
        behavior: "smooth"
      });
    },
    toSignIn() {
      this.$router.push({ name: "signIn" });
    },
    toSignUp() {
      this.$router.push({ name: "signUp" });
    },
    onscroll() {
      this.scrollTop = window.scrollY;
    },
    async getEssayData(id) {
      let data = await getEssayDetails(id);
       this.mdContent = data.content;
    },
    toUserPage() {
      this.$router.push({ name: "userPage" });
    },
    getUserData() {
      //获取已登录用户信息
      this.username = this.$cookies.get("userInfo").nickname;
    }
  },
  computed: {
    mavon() {
      let data = {
        subfield: false, //单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false, //是否可编辑
        toolbarsFlag: false, //工具栏
        scrollStyle: true
      };
      return data;
    },
    islogin() {
      // 判断是否有登录
      if (this.$cookies.isKey('userInfo')) {
        this.getUserData();
        return true;
      }
      else{
        return false;
      }
    },
    essayId(){
      //获取当前文章的id
      return this.$store.state.essayId;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onscroll);
    this.getEssayData(this.essayId);
  },
  destroy() {
    window.removeEventListener("scroll", onscroll());
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/essayDetail";
</style>
