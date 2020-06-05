<template>
  <div class="essayCard">
    <div class="essayCard-content">
      <h1 class="essayCard-title">title</h1>
      <div class="essayCard-intro">
        12eqwewdwadawda往dasgdukwahdkwabdkuawbdukawdwabkdbwakdbkwadkawdbjawbdkwabdkadbjwadbjawk
        dwaudukwadukwahdkhwakudhawkudwdwadawdawdwadwadawdadawwddw就问你aqeqweqwewq3
      </div>
      <div class="essayCard-button">
        <button @click="toEssayDetail">
          more
          <span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    toEssayDetail(){
      this.$router.push('/essayDetail')
    }
  }
};
</script>

<style lang="scss" scoped>
.essayCard {
  width: 80%;
  height: 150px;
  position: relative;
  overflow: hidden;
  transition: 0.5s all;
  padding: 10px 0;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2);
  .essayCard-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: 0.5s;
    transition-delay: 0.1s;
    .essayCard-title {
      width: 90%;
      font-size: 30px;
    }
    .essayCard-intro {
      width: 95%;
      height: 55px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .essayCard-button {
      width: 90%;
      button {
        width: 70px;
        height: 25px;
        background: transparent;
        float: right;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        color: #454e93;
        span {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: transparent;
          border: 1px solid #454e93;
        }
        span:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8%;
          height: 500%;
          background-color: #e87656;
          z-index: 3;
          transform: translate(-50%, -50%) rotate(-45deg);
          transition: 0.3s all;
        }
      }
      button:hover {
        color: #fff;
        span:before {
          width: 100%;
          transform: translate(-50%, -50%) rotate(-90deg);
          background-color: #454e93;
        }
      }
    }
  }
}
.essayCard::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 1;
  background: linear-gradient(90deg, #454e93, #ff7b4d);
}
.essayCard:hover {
  transform: scale(1.1);
}
</style>