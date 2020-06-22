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
import { getNavData } from "../api/getData";
import { getBoardComment } from "../api/comment";

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
      visable: false //监控backTop是否可见
    };
  },
  methods: {
    onscroll() {
      //监控页面是否向下滑动
      if (window.scrollY > 0) {
        this.visable = true;
      } else {
        this.visable = false;
      }
    },
    async getData() {
      try {
        let projectNavData = await getNavData("projectNav");
        let essayNavData = await getNavData("essayNav");
        let commentData = await getBoardComment();
        this.$store.commit("changeboardCommentData", commentData);
        this.$store.commit("projectNavData", projectNavData.types);
        this.$store.commit("essayNavData", essayNavData.types);
      } catch (error) {
        console.log(error);
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

    //判断用户是否登录
    if (this.$cookies.isKey("userInfo")) {
      this.$store.commit("changeloginState", true);
    }
    this.getData();
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
        transition: 0.5s;
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
