<template>
  <div class="messageBoard ">
    <areaHeader :headerTitle="messageBoard" :headerLogo="headerLogo" ></areaHeader>
      <comments class="comments bottom-reveal" commentsArray='10'></comments>
      <board class="bottom-reveal"></board>
  </div>
</template>

<script>
import areaHeader from "../../components/areaHeader";
import comments from "../../components/comments";
import board from "../../components/board";

export default {
  components: {
    areaHeader,
    comments,
    board
  },
  data() {
    return {
      messageBoard: "Message Board",
      headerLogo: "&#xe65e;"
    };
  }
};
</script>

<style lang="scss" scoped>
.messageBoard {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .comments {
    width: 60%;
    height: 400px;
  }
}
</style>