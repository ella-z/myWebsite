<template>
    <div class="home">
        <img src="../assets/ZHANGZIQING.png" alt="">
        <button class="start-button">Start</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.home{
    height: 100vh;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 60%;
        margin-top: 10%;
    }
    button{
        width: 15vw;
        height: 3vw;
        outline:none;
        border:none;
        border-radius: 15px;
        background-image: linear-gradient(to right,#454E93,#FF7B4D);
        margin-top: 10%;
        color: #fff; 
    }
}


</style>    