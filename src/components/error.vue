<template>
  <div class="error">
    <i class="iconfont">&#xe621;</i>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
    props:['errorText'],
    computed:{
        text(){
            return this.errorText;
        }
    }
}
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #fef0f0;
  color: red;
  i {
    color: red;
    margin-right: 5px;
  }
}
</style>