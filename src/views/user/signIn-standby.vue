<template>
  <transition name="signInTransition">
    <div class="signIn">
      <h1>Sign In</h1>
      <input type="text" placeholder="Username" />
      <input type="password" name placeholder="Password" />
      <button>Sign In</button>
      <i class="iconfont icon">&#xe641;</i>
    </div>
  </transition>
</template>


<style lang="scss">
.signIn {
  position: fixed;
  top: calc(50vh - 12.5vw);
  left: calc(50vw - 17.5vw);
  z-index: 10;
  width: 35vw;
  height: 25vw;
  background-color: rgba($color: #000000, $alpha: 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fff;
    font-size: 3vw;
    font-weight: 500;
    margin: 5% 0;
  }
  input {
    width: 16vw;
    height: 3vw;
    background: none;
    border: 1px solid #454e93;
    border-radius: 20px;
    margin-top: 5%;
    color: #fff;
    text-align: center;
    transition: 0.6s;
  }
  input:focus {
    width: 20vw;
    height: 3.5vw;
    border-color: #ff7b4d;
  }
  button {
    width: 10vw;
    height: 3vw;
    margin-top: 8%;
    background: none;
    color: #ff7b4d;
    border-radius: 20px;
    border: 1px solid #ff7b4d;
    transition: 0.5s;
    cursor: pointer;
  }
  button:hover {
    background-color: #ff7b4d;
    color: #fff;
  }
  .icon {
    position: absolute;
    top: 5%;
    left: 92%;
    font-size: 1vw;
    font-weight: 300;
    color: #fff;
    transition: 0.6s;
    cursor: pointer;
  }
  .icon:hover {
    transform: rotate(360deg);
  }
}
.signInTransition-enter-active {
  animation: signIn 0.5s;
}
.signInTransition-leave-active {
  animation: signIn 0.5s reverse;
}
@keyframes signIn {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>