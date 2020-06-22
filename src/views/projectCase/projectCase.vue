<template>
  <div class="projectCase bottom-reveal">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <nav>
      <ul>
        <li
          :key="index"
          v-for="(item,index) in navData"
          @click="changeNavLi(item.type,index)"
          :class="active==index?'liActive':''"
        >{{item.type}}</li>
      </ul>
    </nav>
    <div class="projectCase-content bottom-reveal">
      <loading :loading="loading" class="loading"></loading>
      <div class="projectCase-content-card">
        <span v-show="projectData.length===0">暂无数据</span>
        <caseCard :key="index" v-for="(item,index) in projectData" :projectData="item"></caseCard>
      </div>
    </div>
  </div>
</template>

<script>
import caseCard from "./components/caseCard";
import areaHeader from "../../components/areaHeader";
import loading from "../../components/loading";
import { getAllProjectData, getProjectsData } from "../../api/getData";

export default {
  components: {
    caseCard,
    areaHeader,
    loading
  },
  data() {
    return {
      headerTitle: "Project Case",
      headerLogo: "&#xe691;",
      projectData: [], //project的数据
      active: 0, //当前被选中的导航下标
      loading: false
    };
  },
  methods: {
    changeNavLi(title, index) {
      this.active = index;
      this.geAllData(title);
    },
    async geAllData(name) {
      this.loading = true;
      if (name === "全部") {
        const projectDataResult = await getAllProjectData();
        this.projectData = projectDataResult;
      } else {
        const projectDataResult = await getProjectsData(name);
        this.projectData = projectDataResult.data;
      }
      this.loading = false;
    }
  },
  computed: {
    navData() {
      return this.$store.state.projectNavData;
    }
  },
  mounted() {
    this.geAllData("全部");
  }
};
</script>

<style lang="scss" scoped>
.projectCase {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  nav {
    width: 100%;
    margin-bottom: 2%;
    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      li {
        width: 95px;
        height: 25px;
        padding: 0 5px;
        line-height: 25px;
        list-style: none;
        text-align: center;
        color: #fff;
        font-weight: 700;
        border-radius: 20px;
        margin: 0 2% 1% 0;
        background-color: #454e93;
        cursor: pointer;
        transition: 0.3s;
      }
      li:hover {
        background-color: #ff7b4d;
      }
      .liActive {
        background-color: #ff7b4d;
      }
    }
  }
  .projectCase-content {
    width: 80%;
    height: 400px;
    overflow: scroll;
    scrollbar-width: none;
    position: relative;
    .projectCase-content-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      justify-items: center;
      row-gap: 6%;
      padding: 2%;
    }
    .loading {
      width: 100%;
      height: 100%;
    }
  }
  .projectCase-content::-webkit-scrollbar {
    display: none;
  }
}
</style>