<template>
  <div id="progressBar">
    <ul>
      <li v-for="(item,index) in skillBar" :key="index" :class="item.title">
        {{item.title}}
        <span>{{item.begin}}%</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['skillBar'],
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addKeyframe () {
      // 给进度条添加动画样式
      const style = document.createElement('style') // 创建<style></style>标签
      this.skillBar.forEach(element => {
        const keyframe = `@keyframes ${element.title}{
                    from{
                        width:0%;
                    }
                    to{
                        width:${element.count}%;
                    }
                }`
        const text = document.createTextNode(`
                .${element.title}::after{ animation-name:${element.title};} 
                ${keyframe}`) // 添加伪类样式
        style.appendChild(text) // 把伪类样式添加样式表
      })
      document.body.appendChild(style)
      this.$store.commit('changeKeyframeState', true)
    },
    addCount () {
      // 实现进度条动画加载的效果
      this.skillBar.forEach(element => {
        const timer = setInterval(() => {
          if (element.begin < element.count) {
            element.begin++
          } else {
            clearInterval(timer)
          }
        }, 4800 / element.count)
      })
    }
  },
  watch: {
    skillBar (val) {
      if (val.length !== 0) {
        this.addCount()
        if (this.$store.state.isAddKeyframe === false) {
          this.addKeyframe()
        }
      }
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
#progressBar {
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      position: relative;
      z-index: 1;
      font-size: 18px;
      margin-bottom: 50px;
      span {
        font-size: 18px;
        font-weight: 700;
        background: linear-gradient(135deg, #454e93, #ff7b4d);
        background-clip: text;
        color: transparent;
      }
    }
  }
  li::before,
  li::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 20px;
    border-radius: 15px;
    background: linear-gradient(90deg, #454e93, #ff7b4d);
    opacity: 0.5;
    bottom: -25px;
  }
  /* li::before{
    height: 1.7vw;
    bottom:-2vw;
    left: -0.15vw;
    filter: blur(0.2vw);                                   //way1：使用高斯模糊做阴影
    background: linear-gradient(90deg,#454E93,#FF7B4D);
    opacity: 0.8;
    box-shadow: 0 0 1vw #454E93;  //way2：直接使用box-shadow
}*/
  li::after {
    opacity: 1;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }
}
</style>
