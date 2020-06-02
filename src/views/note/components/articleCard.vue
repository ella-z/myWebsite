<template>
  <div class="articleCard">
    <div class="articleCard-content">
      <h1 class="articleCard-title">title</h1>
      <div class="articleCard-intro">12eqwewdwadawdawdwadawdawdadawwdaqeqweqwewq3</div>
      <div class="articleCard-button">
        <button>
          more
          <span></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.articleCard {
  width: 500px;
  height: 150px;
  position: relative;
  overflow: hidden;
  transition: 0.5s all;
  padding: 10px 0;
  box-shadow: 0 0 20px 1px rgba(0, 0,0,0.2);
  .articleCard-content {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    transition: .5s;
    transition-delay: .1s;
    .articleCard-title {
      width: 90%;
      font-size: 30px;
    }
    .articleCard-intro {
      width: 95%;
      height: 100px;
    }
    .articleCard-button {
      width: 90%;
      button {
        width: 70px;
        height: 25px;
        background: transparent;
        border: none;
        outline: none;
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
          background-color: #FF7B4D;
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
.articleCard::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #FF7B4D;
  transition: 0.5s all;
  transform: translateY(98%);
}
.articleCard:hover::before {
  transform: translateY(0);
} 
.articleCard:hover .articleCard-content{
  color: #fff;
}
</style>