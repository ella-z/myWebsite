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
        margin-top: 5%;
    }
    .start-button{
        width: 15vw;
        height: 3vw;
        outline:none;
        border:none;
        border-radius: 15px;
        background-image: linear-gradient(90deg,#454E93,#CC62AB,#FF7B4D,#454E93);
        //background-image: linear-gradient(90deg,#454E93,#FF7B4D,#454E93);
        background-size: 400%;
        margin-top: 12%;
        color: #fff; 
        animation: animate 10s linear infinite;
    }
    @keyframes animate {
        0%{
            background-position: 400%;
        }
        100%{
            background-position: 0%;
        }
    }

}


</style>    