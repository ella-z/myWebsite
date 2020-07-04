<template>
  <div class="tag">{{tagText}}</div>
</template>

<script>
export default {
  props: ['tagText']
}
</script>

<style lang="scss">
.tag {
  padding: 1px 5px;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-image: linear-gradient(90deg, #454e93, #e87656);
}
</style>
