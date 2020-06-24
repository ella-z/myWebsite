<template>
  <div class="aboutMe">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <div class="me-content">
      <div class="self-intro bottom-reveal">
        <ul>
          <li v-for="(item,index) in myInformation.introduction" :key="index">
            <span
              :class="IntroIndex===index?'span-show':''"
              @click="selfIntroClick(index)"
            >{{item.name}}</span>
            <p v-show="IntroIndex===index">{{item.content}}</p>
          </li>
        </ul>
        <div class="self-icon">
          <span 
            :key="index"
            v-for="(item,index) in myInformation.iconData"
            class="iconfont self-icon-img"
            v-html="item.icon"
            :data-content="item.content"
          >{{item.icon}}</span>
        </div>
      </div>
      <div class="self-photo bottom-reveal delay-reveal">
        <div class="self-photo-outer"></div>
        <div class="self-photo-inner">
          <img :src="myInformation.img" alt />
        </div>
      </div>
      <div class="skill-data bottom-reveal delay-reveal-ones">
        <span>我的技能</span>
        <div class="skill-data-bar">
          <progressBar :skillBar="myInformation.skills"></progressBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import areaHeader from "@/components/areaHeader";
import progressBar from "@/components/progressBar";
export default {
  props:['myInformation'],
  components: {
    areaHeader,
    progressBar
  },
  data() {
    return {
      headerTitle: "About Me",
      headerLogo: "&#xe68b;",
      IntroIndex: 0,
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