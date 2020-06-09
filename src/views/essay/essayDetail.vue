<template>
  <div class="essayDetail">
    <nav :class="scrollTop >0 ?'sticky':''">
      <div class="back-button" @click="goback()">
        <i class="icon iconfont">&#xe632;</i>
      </div>
      <ul class="navList">
        <li @click="toSignIn()">Sign In</li>
        <li @click="toSignUp()">Sign Up</li>
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
import board from "../../components/board";
import comments from "../../components/comments";
import { getData } from "../../api/essayDetail";

export default {
  components: {
    board,
    comments
  },
  data() {
    return {
      mdContent: "",
      scrollTop: 0 //距离顶部的距离
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    backTop() {
      window.scrollTo({
        //滑动回顶点
        top: 0,
        behavior: "smooth"
      });
    },
    toSignIn(){
      this.$router.push({name:'signIn'});
    },
    toSignUp(){
      this.$router.push({name:'signUp'});
    },
    onscroll() {
      this.scrollTop = window.scrollY;
    },
    async getEssayData() {
      let data = await getData();
      this.mdContent = data.body;
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
    }
  },
  created() {
    window.addEventListener("scroll", this.onscroll);
    this.getEssayData();
  },
  destroy() {
    window.removeEventListener("scroll", onscroll());
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/essayDetail";
</style>
