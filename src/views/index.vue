<template>
  <div class="index">
    <navBar></navBar>
    <signIn id="signIn"></signIn>
    <signUp id="signUp"></signUp>
    <Home id="Home" class="navContent"></Home>
    <aboutMe id="aboutMe" class="navContent"></aboutMe>
    <projectCase id="projectCase" class="navContent"></projectCase>
    <essay id="Essay" class="navContent"></essay>
    <messageBoard id="messageBoard" class="navContent"></messageBoard>
    <backTop :visable="visable"></backTop>
    <footer></footer>
  </div>
</template>
<script>
import navBar from "./navBar/navBar";
import Home from "./Home";
import projectCase from "./projectCase/projectCase";
import aboutMe from "./aboutMe/aboutMe";
import essay from "./essay/essay";
import signIn from "./user/signIn";
import messageBoard from "./messageBoard/messageBoard";
import signUp from "./user/signUp";
import backTop from "../components/backTop";
import scrollReveal from "scrollreveal";

export default {
  components: {
    navBar,
    Home,
    projectCase,
    aboutMe,
    essay,
    signIn,
    signUp,
    backTop,
    messageBoard
  },
  data() {
    return {
      visable: false, //监控backTop是否可见
      scrollReveal: scrollReveal()
    };
  },
  methods: {
    addScrollReveal() {
      this.scrollReveal.reveal(".bottom-reveal", {
        distance: "100px",
        origin: "bottom",
        duration: 1000,
        easing: "ease-out"
      });
      this.scrollReveal.reveal(".delay-reveal", {
        delay: 500
      });
      this.scrollReveal.reveal(".delay-reveal-ones", {
        delay: 1000
      });
    },
    onscroll() {
      if (window.scrollY > 0) {
        this.visable = true;
      } else {
        this.visable = false;
      }
    }
  },
  mounted() {
    //获取所有的锚点元素
    const navContent = document.querySelectorAll(".navContent");
    this.$store.commit("changeNavContent", navContent);

    //页面刷新，显示区域回到顶部
    window.onload = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    //监控屏幕是否滚动
    window.addEventListener("scroll", this.onscroll);

    //根据滑动，来显示组件
    this.addScrollReveal();
  }
};
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
.navContent {
  padding: 3% 0;
}
footer {
  width: 100%;
  height: 100px;
  background-color: #000;
}
</style>
