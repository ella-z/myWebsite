<template>
  <div class="project bottom-reveal">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <nav>
      <ul>
        <li
          :key="index"
          v-for="(item,index) in projectNavData"
          @click="changeNavLi(item.type,index)"
          :class="active==index?'liActive':''"
        >{{item.type}}</li>
      </ul>
    </nav>
    <div class="project-content bottom-reveal">
      <loading :loading="loading" class="loading"></loading>
      <div class="project-content-card">
        <span v-show="projectData.length===0">暂无数据</span>
        <caseCard :key="index" v-for="(item,index) in projectData" :projectData="item"></caseCard>
      </div>
    </div>
  </div>
</template>

<script>
import caseCard from "./components/caseCard";
import areaHeader from "@/components/areaHeader";
import loading from "@/components/loading";
import { getAllProjectData, getProjectsData } from "@/api/project";
import { getNavData } from "@/api/getData";

export default {
  components: {
    caseCard,
    areaHeader,
    loading
  },
  data() {
    return {
      headerTitle: "Project",
      headerLogo: "&#xe691;",
      projectData: [], //project的数据
      active: 0, //当前被选中的导航下标
      loading: false,
      projectNavData: []
    };
  },
  methods: {
    changeNavLi(title, index) {
      this.active = index;
      this.getProjectData(title);
    },
    async getProjectData(name) {
      this.loading = true;
      if (name === "全部") {
        const projectDataResult = await getAllProjectData();
        this.projectData = projectDataResult;
      } else {
        const projectDataResult = await getProjectsData(name);
        this.projectData = projectDataResult.result.data;
      }
      this.loading = false;
    },
    async getData() {
      try {
        let projectNavData = await getNavData("projectNav");
        this.projectNavData = projectNavData.result.data.types;
        this.projectData = await getAllProjectData();
        console.log()
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.project {
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
  .project-content {
    width: 80%;
    height: 400px;
    overflow: scroll;
    scrollbar-width: none;
    position: relative;
    .project-content-card {
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
  .project-content::-webkit-scrollbar {
    display: none;
  }
}
</style>