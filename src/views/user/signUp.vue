<template>
  <transition name="signTransition">
    <div class="sign" v-show="isSignShow">
      <i class="iconfont icon" @click="closeSign()">&#xe602;</i>
      <div class="signForm">
        <h1>Sign Up</h1>
        <div class="signForm-c">
          <div class="signForm-col1">
            <input type="text" name="userName" id="userName" required="required" autocomplete="off" />
            <span class="text">userName</span>
          </div>
          <div class="signForm-col2">
            <input type="password" id="password" required="required" autocomplete="off" />
            <span class="text">Password</span>
          </div>
          <div class="signForm-col3">
            <input type="password" id="passwordConfirm" required="required" autocomplete="off" />
            <span class="text">Password</span>
          </div>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isSignShow() {
      return this.$store.state.isSignShow;
    }
  },
  methods: {
    closeSign() {
      this.$store.commit("changeSignState", false);

      //关闭signUp的时候改变navIndex为当前显示的区域的下标
      const navId = this.$store.state.navId;
      const navContent = this.$store.state.navContent;
      for (let i = 0; i < navContent.length; i++) {
        if (navContent[i].id === navId) {
          this.$store.commit("changeNavIndex", i);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sign {
  position: fixed;
  width: 100vw;
  height: calc(100vh - 35px);
  top: 35px;
  left: 0;
  z-index: 11;
  transform: translateX(0);
  transition: transform 0.3s;
  background-color: #fff;
  .icon {
    color: #000;
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    right: 5%;
    top: 3%;
    cursor: pointer;
  }
  .signForm {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #ff7b4d;
    h1 {
      font-size: 35px;
      font-family: "Microsoft Yahei";
    }
    .signForm-c {
       
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input {
        border: none;
        outline: none;
        background-color: transparent;
        padding: 5px;
        position: absolute;
        z-index: 12;
        width: 100%;
        font-size: 15px;
        border-bottom: 1px solid #ff7b4d;
      }
      .text {
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        font-size: 17px;
        padding: 0 10px;
        transition: 0.5s;
        pointer-events: none;
      }
    }

    [class^="signForm-col"] {
      position: relative;
      width: 250px;
      margin-bottom: 70px;
    }
    [class^="signForm-col"]:last-child{
        margin-bottom: 20px;
    }

    input:focus + .text,
    input:valid + .text {
      top: -20px;
      left: -10px;
    }
    button {
      outline: none;
      cursor: pointer;
      border: 1px solid #ff7b4d;
      background-color: #fff;
      color: #ff7b4d;
      padding: 8px 25px;
      border-radius: 15px;
      transition: 0.3s;
    }
    button:hover {
      background-color: #ff7b4d;
      color: #fff;
    }
  }
}
.signTransition-enter-active {
  transform: translateX(-100%);
}
.signTransition-leave-active {
  transform: translateX(-100%);
}
</style>