<template>
  <div class="projectCase bottom-reveal">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <nav>
      <ul>
        <li
          :key="index"
          v-for="(item,index) in navItem"
          @click="changeNavLi(item.title,index)"
          :class="active==index?'liActive':''"
        >{{item.title}}</li>
      </ul>
    </nav>
    <div class="projectCase-content bottom-reveal">
      <loading :loading="loading" class="loading"></loading>
      <div class="projectCase-content-card">
        <caseCard :key="index" v-for="(item,index) in projectData" :data="item"></caseCard>
        <caseCard :key="index+'1'" v-for="(item,index) in projectData" :data="item"></caseCard>
        <caseCard :key="index+'2'" v-for="(item,index) in projectData" :data="item"></caseCard>
        <caseCard :key="index+'3'" v-for="(item,index) in projectData" :data="item"></caseCard>
      </div>
    </div>
  </div>
</template>

<script>
import caseCard from "./components/caseCard";
import areaHeader from "../../components/areaHeader";
import loading from "../../components/loading";
import { getAllProjectData } from "../../api/getData";

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
      navItem: [
        {
          title: "全部"
        },
        {
          title: "综合项目"
        },
        {
          title: "动画"
        },
        {
          title: "组件"
        },
        {
          title: "小程序"
        }
      ],
      projectData: [],
      active: 0,
      loading: false
    };
  },
  methods: {
    changeNavLi(title, index) {
      this.active = index;
      this.getData(title);
    },
    async getData(name) {
      this.loading = true;
      switch (name) {
        case "全部": {
          this.projectData = await getAllProjectData();
          break;
        }
        case "综合项目": {
          console.log("综合项目");
          break;
        }
        case "动画": {
          console.log("动画");
          break;
        }
        case "组件": {
          console.log("组件");
          break;
        }
        case "小程序": {
          console.log("小程序");
          break;
        }
        default:
          break;
      }
      console.log(this.projectData);
      this.loading = false;
    }
  },
  mounted() {
    this.getData("全部");
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