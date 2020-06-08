<template>
  <div class="board">
    <textarea class="board-textarea"></textarea>
    <button class="board-button">submit</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.board {
  width: 60%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .board-textarea {
    width: 80%;
    height: 150px;
    outline: none;
    resize: none; //禁止拉伸
    font-size: 12px;
    border: 1px solid #000;
    padding: 10px;
  }
  .board-button {
    cursor: pointer;
    position: relative;
    width: 100px;
    height: 30px;
    font-size: 18px;
    color: transparent;
    background: linear-gradient(90deg, #454e93, #ff7b4d);
    background-clip: text;
    border-radius: 15px;
    background-color: transparent;
    overflow: hidden;
    transition-delay: 0.1s;
    border: 1px solid #000;
  }
  .board-button:hover {
    color: #fff;
    font-weight: 300;
  }
  .board-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    transition: 0.3s all;
    background-image: linear-gradient(90deg, #454e93, #ff7b4d);
  }
  .board-button:hover::before {
    transform: translateY(0);
  }
}
</style>