<template>
  <div class="caseCard">
    <div class="caseCard-shade">
      <div class="caseCard-title">
        <span class="case-tiltle">M记app</span>
        <p class="case-describe">describebbbbbbbsssssssssssssssssssssssssssssss</p>
      </div>
      <div class="caseCard-button">
        <button @click="toEssayDetail()">intro</button>
        <button class="github-button">github</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toEssayDetail(){
      this.$router.push('/essayDetail');
    }
  }
};
</script>

<style lang="scss" scoped>
.caseCard {
  width: 150px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  background-image: url("D:/myWebsite/qwebsite/src/views/projectCase/components/McDonald.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50% 40%;
  transition: 0.2s;
  .caseCard-shade {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .caseCard-title {
      color: #fff;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .case-tiltle {
        font-size: 20px;
        margin-bottom: 5%;
      }
      .case-describe {
        font-size: 14px;
        width: 80%;
        word-wrap: break-word;
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
        color:#fff;
         background-image: linear-gradient(90deg,#454e93, #ff7b4d);
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