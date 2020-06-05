<template>
  <div class="article">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <nav>
      <div
        v-for="(item,index) in navData"
        :key="index"
        :class="isactive===index?'active':''"
        @click="changeActive(index)"
        class="nav-list"
      >
        <div class="nav-before">{{item.name}}</div>
        <div class="nav-after">{{item.name}}</div>
        <ul class="extra-nav" v-show="item.tags">
          <li :key="index" v-for="(item,index) in item.tags">{{item.name}}</li>
        </ul>
      </div>
    </nav>
    <div class="article-content">
      <essayCard></essayCard>
      <essayCard></essayCard>
      <essayCard></essayCard>
      <essayCard></essayCard>
      <essayCard></essayCard>
      <essayCard></essayCard>
      <essayCard></essayCard>
      <essayCard></essayCard>
    </div>
  </div>
</template>

<script>
import areaHeader from "../../components/areaHeader";
import essayCard from "./components/essayCard";

export default {
  components: {
    areaHeader,
    essayCard
  },
  data() {
    return {
      headerTitle: "Essay",
      headerLogo: "&#xe62e;",
      isactive: 0,
      navData: [
        {
          name: "项目问题"
        },
        {
          name: "小程序问题"
        },
        {
          name: "小知识点"
        },
        {
          name: "学习笔记",
          tags: [
            {
              name: "JS"
            },
            {
              name: "ES6"
            },
            {
              name: "ES6"
            },
            {
              name: "ES6"
            }
          ]
        }
      ]
    };
  },
  methods: {
    changeActive(index) {
      this.isactive = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/essay.scss";
</style>