<template>
  <div class="index">
    <navBar></navBar>
    <Home id="Home" class="navContent"></Home>
    <aboutMe id="aboutMe" class="navContent"></aboutMe>
    <projectCase id="projectCase" class="navContent"></projectCase>
    <essay id="Essay" class="navContent"></essay>
    <messageBoard id="messageBoard" class="navContent"></messageBoard>
    <backTop :visable="visable"></backTop>
    <footer>
      <div class="footer-content">
        <span class="content-what">W</span>
        <span class="content-why">W</span>
        <span class="content-how">H</span>
      </div>
      <div class="footer-info">
        <span>粤 ICP 备 19162536 号</span>
        <span>designed and developed by Ella Zhang</span>
      </div>
    </footer>
  </div>
</template>
<script>
import navBar from "./navBar/navBar";
import Home from "./Home";
import projectCase from "./projectCase/projectCase";
import aboutMe from "./aboutMe/aboutMe";
import essay from "./essay/essay";
import messageBoard from "./messageBoard/messageBoard";
import backTop from "../components/backTop";
import scrollReveal from "scrollreveal";

export default {
  components: {
    navBar,
    Home,
    projectCase,
    aboutMe,
    essay,
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
      //配置组件动态显示
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
      //监控页面是否向下滑动
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

    //判断用户是否登录
    if (this.$cookies.isKey("userInfo")) {
      this.$store.commit("changeloginState", true);
    }
  }
};
</script>


<style lang="scss" scoped>
.index {
  width: 100%;
  min-height: 100vh;

  .navContent {
    padding: 3% 0;
  }
  footer {
    width: 100%;
    height: 200px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    position: relative;
    display: grid;
    grid-template-rows: 8fr 2fr;
    .footer-content {
      cursor: pointer;
      justify-self: center;
      align-self: center;
      span {
        display: inline-block;
        font-size: 5vw;
        transition: 0.5s all;
      }
    }
    .footer-content:hover {
      .content-what {
        transform: translateX(-100px);
      }
      .content-how {
        transform: translateX(100px);
      }
      .content-why::after {
        content: "HY";
      }
      .content-what::after {
        content: "HAT";
      }
      .content-how::after {
        content: "OW";
      }
    }
    .footer-info {
      span {
        display: block;
        text-align: center;
        font-size: 12px;
      }
    }
  }
  footer::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
  }
}
</style>
