<template>
  <div class="aboutMe">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <div class="me-content">
      <div class="self-intro bottom-reveal">
        <ul>
          <li v-for="(item,index) in selfIntroData" :key="index">
            <span
              :class="IntroIndex===index?'span-show':''"
              @click="selfIntroClick(index)"
            >{{item.title}}</span>
            <p v-show="IntroIndex===index">{{item.article}}</p>
          </li>
        </ul>
        <div class="self-icon">
          <span
            :key="index"
            v-for="(item,index) in selfIconData"
            class="iconfont self-icon-img"
            v-html="item.icon"
            :data-content="item.content"
          >{{item.icon}}</span>
        </div>
      </div>
      <div class="self-photo bottom-reveal delay-reveal">
        <div class="self-photo-outer"></div>
        <div class="self-photo-inner">
          <img src="../../assets/m.jpg" alt />
        </div>
      </div>
      <div class="skill-data bottom-reveal delay-reveal-ones">
        <span>我的技能</span>
        <div class="skill-data-bar">
          <progressBar :skillBar="skillBar"></progressBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaHeader from "../../components/areaHeader";
import progressBar from "../../components/progressBar";
export default {
  components: {
    areaHeader,
    progressBar
  },
  data() {
    return {
      headerTitle: "About Me",
      headerLogo: "&#xe68b;",
      IntroIndex: 0,
      selfIntroData: [
        {
          title: "学生",
          article:
            "我是一名计算机专业的学生我是一名计算机专业的学生我是一名计算机专业的学生我是一名计算机专业的学生 我是一名计",
          isShow: true
        },
        {
          title: "前端",
          article: "前端",
          isShow: false
        },
        {
          title: "后台",
          article:
            "后台后台后台后台后台后台后台后台后台后台后台后台后台后台后台后台后台",
          isShow: false
        },
        {
          title: "剪辑",
          article:
            "剪辑jjjjjjjjjjjjjjjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj",
          isShow: false
        },
        {
          title: "游戏",
          article: "游戏lllllllllllllllllllllllllllllllll",
          isShow: false
        }
      ],
      selfIconData: [
        {
          icon: '&#xe695;',
          content: "WeChat:enhei_0"
        },
        {
          icon: '&#xe627;',
          content: "QQ:2151633944"
        },
        {
          icon: '&#xe600;',
          content: "GitHub:ella-z"
        }
      ],
      skillBar: [
        {
          title: "VUE",
          begin: 0,
          count: 30
        },
        {
          title: "JS",
          begin: 0,
          count: 60
        },
        {
          title: "HTML",
          begin: 0,
          count: 70
        },
        {
          title: "CSS",
          begin: 0,
          count: 50
        },
        {
          title: "CSS",
          begin: 0,
          count: 50
        },
        {
          title: "CSS",
          begin: 0,
          count: 50
        }
      ]
    };
  },
  methods: {
    selfIntroClick(index) {
     this.IntroIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/aboutMe.scss";
</style>