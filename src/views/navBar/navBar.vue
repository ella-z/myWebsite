<template>
  <div>
    <header :class="scrollTop > 0?'sticky':''">
      <div class="logo">
        <logo></logo>
      </div>
      <nav v-show="!isBurgerMenuShow">
        <div class="navList">
          <div
            :key="index"
            v-for="(item,index) in areaNav"
            @click="navClick(item.value,index)"
            class="nav-title"
            :class="{NavActive:isNavActive===index}"
          >{{item.title}}</div>
          <div class="nav-title" @click="toSignIn" v-show="!islogin">Sign In</div>
          <div class="nav-title" @click="toSignUp" v-show="!islogin">Sign Up</div>
          <div class="nav-nickname" v-if="islogin" @click="toUserPage">{{username}}</div>
        </div>
      </nav>
      <div v-show="isBurgerMenuShow">
        <div class="burgerMenu" @click="burgerMenuClick()">
          <i class="iconfont icon" v-show="isListShow">&#xe66b;</i>
          <i class="iconfont icon" v-show="!isListShow">&#xe62b;</i>
        </div>
        <transition name="list">
          <div class="menuList" v-show="isListShow">
            <div
              :key="index"
              v-for="(item,index) in areaNav"
              @click="navClick(item.value)"
              class="menu-title"
              :class="{NavActive:isNavActive===index}"
            >{{item.title}}</div>
            <div class="menu-title" @click="toSignIn" v-show="!islogin">Sign In</div>
            <div class="menu-title" @click="toSignUp" v-show="!islogin">Sign Up</div>
            <div class="menu-nickname" v-if="islogin" @click="toUserPage">{{username}}</div>
          </div>
        </transition>
      </div>
    </header>
  </div>
</template> 

<script>
import logo from "./components/logo";
export default {
  components: {
    logo
  },
  data() {
    return {
      areaNav: [
        {
          title: "Home",
          value: "Home"
        },
        {
          title: "About Me",
          value: "aboutMe"
        },
        {
          title: "Project Case",
          value: "projectCase"
        },
        {
          title: "Essay",
          value: "Essay"
        },
        {
          title: "Message Board",
          value: "messageBoard"
        }
      ],
      clientHeight: document.documentElement.clientHeight,
      clientWidth: document.documentElement.clientWidth,
      isListShow: false,
      isScroll: 0, //屏幕滚动的距离
      oldScrollTop: 0, //记录上一次滚动结束后的滚动距离
      scrollTop: 0, // 记录当前的滚动距离
      username: "" //已登录用户的用户名
    };
  },
  methods: {
    navClick(title, index) {
      //导航栏相关的操作
      this.$store.commit("changeNavId", title);
      this.$store.commit("changeSignState", false);
      let pageId = document.querySelector("#" + title);
      window.scrollTo({
        //滑动到指定位置
        top: pageId.offsetTop - 35,
        behavior: "smooth"
      });
      this.$store.commit("changeNavIndex", index);
      this.isListShow = !this.isListShow;
      this.isNavActive = index;
    },
    toSignIn() {
      this.$router.push({ name: "signIn" });
    },
    toSignUp() {
      this.$router.push({ name: "signUp" });
    },
    toUserPage() {
      this.$router.push({ name: "userPage" });
    },
    burgerMenuClick() {
      this.isListShow = !this.isListShow;
    },
    onscroll() {
      this.scrollTop = window.scrollY;

      //监控屏幕是否滑动到锚点元素
      //获取所有的锚点元素
      const navContent = this.$store.state.navContent;

      //将所有锚点元素的offsetTop存储在数组中
      const offsetTopArr = [];

      navContent.forEach(element => {
        offsetTopArr.push(element.offsetTop);
      });

      //获取当前文件流的的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      for (let i = 0; i < offsetTopArr.length; i++) {
        // 如果 scrollTop 大于等于第 i 个元素的 offsetTop 则说明 i-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 i 了
        if (scrollTop + 100 >= offsetTopArr[i]) {
          this.$store.commit("changeNavIndex", i);
        }
      }
    },
    getUserData() {
      //获取已登录用户信息
      this.username = this.$cookies.get("userInfo").nickname;
    }
  },
  mounted() {
    //屏幕滚动触法onscroll函数
    window.addEventListener("scroll", this.onscroll);
    window.onresize = () => {
      //监控屏幕的尺寸是否发生改变
      this.clientHeight = document.documentElement.clientHeight;
      this.clientWidth = document.documentElement.clientWidth;
    };
  },
  computed: {
    isBurgerMenuShow() {
      //判断屏幕的宽高，若高大于宽，则采取burger导航栏
      if (this.clientWidth > this.clientHeight) {
        return false;
      } else {
        return true;
      }
    },
    isNavActive: {
      //监控navIndex是否被改变
      get() {
        return this.$store.state.navIndex;
      },
      set() {}
    },
    islogin() {
      // 判断是否有登录
      if (this.$store.state.isLogin) {
        this.getUserData();
      }
      return this.$store.state.isLogin;
    }
  },
  destroy() {
    window.removeEventListener("scroll", onscroll());
  }
};
</script>

<style lang="scss" scoped>
.NavActive {
  color: #ff7b4d !important;
}
header {
  position: fixed;
  z-index: 9999;
  left: 0;
  height: 0;
  transition: 0.5s;
  display: flex;
  height: 40px;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0);
  padding: 0 30px;
  .logo {
    cursor: pointer;
    transition: 0.6s;
    font-size: 20px;
  }
  nav {
    .navList {
      list-style: none;
      display: flex;
      flex-direction: row;
      .nav-title {
        margin-left: 40px;
        cursor: pointer;
        transition: 0.6s;
        font-size: 12px;
      }
      .nav-title:hover {
        color: #ff7b4d;
      }
      .nav-nickname {
        cursor: pointer;
        transition: 0.6s;
        font-size: 12px;
        margin: 0 20px 0 40px;
        padding: 0 15px;
        border-radius: 15px;
        color: #fff;
        background-color: #ff7b4d;
      }
    }
  }
}
.burgerMenu {
  color: #454e93;
  cursor: pointer;
  .icon {
    font-size: 28px;
    background-clip: text;
    color: transparent;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
  }
}
.menuList {
  position: absolute;
  left: 0;
  top: 35px;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  background-color: #fff;
  margin: 0;
  padding: 0;
  .menu-title {
    list-style: none;
    cursor: pointer;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #fff;
    color: black;
    font-size: 15px;
  }
  .menu-title:hover {
    color: #ff7b4d;
    box-shadow: inset 0px -2px 2px 0px #ff7b4d;
  }
  .menu-nickname {
    list-style: none;
    cursor: pointer;
    width: 35%;
    height: 35px;
    margin: 0 auto;
    text-align: center;
    line-height: 35px;
    background-color: #ff7b4d;
    font-size: 15px;
    color: #fff;
    border-radius: 20px;
  }
  transform: scaleY(1);
  transition: transform 0.3s;
  transform-origin: 50% 0;
}
.list-enter-active {
  transform: scaleY(0);
}
.list-leave-active {
  transform: scaleY(0);
}
.sticky {
  //window滑动后显示的样式。
  padding: 10px 18px;
  height: 35px;
  background-color: #000;
  color: #fff;
}
</style>