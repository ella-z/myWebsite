<template>
  <div class="article">
    <areaHeader :headerTitle="headerTitle" :headerLogo="headerLogo"></areaHeader>
    <nav>
      <ul>
        <li>123</li>
        <li>123465</li>
        <li>11</li>
        <li>1</li>
        <li>1</li>
        <li>2</li>
      </ul>
    </nav>
    <div class="article-content">
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
      <articleCard></articleCard>
    </div>
  </div>
</template>

<script>
import areaHeader from "../../components/areaHeader";
import articleCard from "./components/articleCard";

export default {
  components: {
    areaHeader,
    articleCard
  },
  data() {
    return {
      headerTitle: "Note",
      headerLogo: "&#xe62e;"
    };
  }
};
</script>

<style lang="scss" scoped>
.article {
  width: 100%;
  min-height: 100vh;
  padding: 3% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  nav {
    width: 100%;
    margin-bottom: 25px;
    ul {
      width: 60%;
      margin: 0 auto;
      height: 30px;
      border-bottom: 2px solid #454e93;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      li {
        cursor:pointer;
        display: inline-block;
        color: #000;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .article-content {
    width: 80%;
    height: 400px;
    overflow: scroll;
    overflow: scroll;
    scrollbar-width: none;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 25px;
    row-gap: 35px;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    padding: 20px 0;
  }
  .article-content::-webkit-scrollbar {display:none}
}
</style>