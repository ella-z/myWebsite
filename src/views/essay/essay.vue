<template>
  <div class="essay">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <nav class="bottom-reveal">
      <div
        v-for="(item,index) in essayNavData"
        :key="index"
        :class="isactive===index?'active':''"
        class="nav-list"
        @click="getTypeEssay(item.type,index)"
      >
        <div class="nav-before">{{item.type}}</div>
        <div class="nav-after">{{item.type}}</div>
        <ul class="extra-nav" v-show="item.tags">
          <li
            :key="indexTag"
            v-for="(itemTag,indexTag) in item.tags"
            @click.stop="getTagEssay(item.type,itemTag.tag,index)"
          >{{itemTag.tag}}</li>
        </ul>
      </div>
    </nav>
    <div class="essay-content bottom-reveal">
      <loading :loading="loading" class="loading"></loading>
      <span v-show="essayData.length===0">暂无数据</span>
      <essayCard :key="index" v-for="(item,index) in essayData" :essayData="item"></essayCard>
    </div>
  </div>
</template>

<script>
import areaHeader from "@/components/areaHeader";
import essayCard from "./components/essayCard";
import loading from "@/components/loading";
import { getTypeEssayData, getTagEssayData } from "@/api/essay";

export default {
  props:['essayNavData'],
  components: {
    areaHeader,
    essayCard,
    loading
  },
  data() {
    return {
      headerTitle: "Essay",
      headerLogo: "&#xe62e;",
      isactive: 0,
      loading: false,
      essayData: [] //文章的数据
    };
  },
  methods: {
    async getTypeEssay(type, index) {
      this.isactive = index;
      this.loading = true;
      try {
        const typeEssayData = await getTypeEssayData(type);
        this.essayData = typeEssayData.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    async getTagEssay(type, tag, index) {
      this.isactive = index;
      this.loading = true;
      try {
        const tagEssayData = await getTagEssayData(type, tag);
        this.essayData = tagEssayData.data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/essay.scss";
</style>