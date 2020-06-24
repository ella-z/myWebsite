<template>
  <div class="essayCard">
    <div class="essayCard-content">
      <div class="essayCard-title">
        <h1>{{essayData.title}}</h1>
        <tag class="tag" :tagText="essayData.tag"></tag>
      </div>
      <div class="essayCard-intro">{{essayData.introdution}}</div>
      <div class="essayCard-button">
        <like @click.native="tolike()"></like>
        <button @click="toEssayDetail">
          more
          <span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import tag from "@/components/tag";
import like from "@/components/like";

export default {
  props: ["essayData"],
  components: {
    tag,
    like
  },
  methods: {
    toEssayDetail() {
      this.$store.commit("changeEssayId", this.essayData._id);
      this.$router.push("/essayDetail");
    },
    tolike() {
      if (this.$cookies.isKey("userInfo")) {
        let userInfo = this.$cookies.get("userInfo");
        userInfo.essayIDs.push(this.essayData._id);
        this.$cookies.remove("userInfo");
        this.$cookies.set("userInfo", userInfo);
        console.log(this.$cookies.get("userInfo"));
      }else{
        console.log('请先登录');
      }
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
  transition: 0.5s ;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 0 10px;
      h1 {
        font-size: 20px;
        margin: 0;
        margin-right: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      button {
        width: 70px;
        height: 25px;
        background: transparent;
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
          transition: 0.3s ;
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