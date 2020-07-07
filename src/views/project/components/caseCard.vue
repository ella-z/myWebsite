<template>
  <div class="caseCard">
    <img :src="projectData.image"  />
    <div class="caseCard-shade">
      <div class="caseCard-title">
        <span class="case-tiltle">{{projectData.name}}</span>
        <p class="case-describe">{{projectData.intro}}</p>
      </div>
      <div class="caseCard-button">
        <a class="project-button" :href="projectData.introdution" target="_blank" >简介</a>
        <a class="project-button" :href="projectData.github" target="_blank">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['projectData']
}
</script>

<style lang="scss" scoped>
.caseCard {
  width: 210px;
  height: 300px;
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
      height: 120px;
      color: #fff;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      .case-tiltle {
        font-size: 28px;
        margin: 6% 5% 12%;
        height: 25px;
      }
      .case-describe {
        margin:0;
        font-size: 16px;
        width: 80%;
        overflow: hidden;
        word-break: break-word;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
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
      .project-button {
        cursor: pointer;
        width: 100px;
        height: 30px;
        border-radius: 20px;
        color: #fff;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        background-image: linear-gradient(90deg, #454e93, #ff7b4d);
        text-decoration:none;
        margin-top: 10px;
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
