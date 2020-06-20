<template>
    <div class="home">
        <img src="../assets/ZHANGZIQING.png" alt="" class="bottom-reveal">
        <button class="start-button bottom-reveal delay-reveal" @click="toAboutMe()">Start</button>
    </div>
</template>

<script>
export default {
    methods:{
        toAboutMe(){
            let pageId = document.querySelector('#aboutMe');
                window.scrollTo({
                    //滑动到指定位置
                    'top': pageId.offsetTop - 35,
                    'behavior': 'smooth'
                });
        }
    }
}
</script>
 
<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100vh;
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
        cursor: pointer;
        width: 150px;
        height: 30px;
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