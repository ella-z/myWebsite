<template>
  <div class="caseCard">
    <img src="./McDonald.jpg"  />
    <div class="caseCard-shade">
      <div class="caseCard-title">
        <span class="case-tiltle">{{projectData.name}}</span>
        <p class="case-describe">{{projectData.intro}}</p>
      </div>
      <div class="caseCard-button">
        <button @click="toEssayDetail()">简介</button>
        <button class="github-button" @click="toGitHub()">GitHub</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectData"],
  methods: {
    toEssayDetail() {
      this.$router.push("/essayDetail");
    },
    toGitHub() {
      window.location.href = this.projectData.github;
    }
  }
};
</script>

<style lang="scss" scoped>
.caseCard {
  width: 150px;
  height: 200px;
  border-radius: 10px;
  transition: 0.2s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
  }
  .caseCard-shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .caseCard-title {
      width: 100%;
      height: 50%;
      color: #fff;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      .case-tiltle {
        font-size: 20px;
        margin: 5%;
      }
      .case-describe {
        font-size: 14px;
        width: 80%;
        height: 50%;
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .caseCard-button {
      width: 100%;
      height: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      button {
        cursor: pointer;
        width: 80px;
        height: 25px;
        border-radius: 20px;
        color: #fff;
        background-image: linear-gradient(90deg, #454e93, #ff7b4d);
      }
    }
  }
}
.caseCard:hover {
  box-shadow: 25px 25px 30px -17px rgba(0, 0, 0, 0.64);
  position: relative;
  transform: translateY(-10px);
}
</style>