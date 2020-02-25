<template>
    <div class="aboutMe">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
        <div class="me-content">
            <article class="self-intro">
                    我是一名学生
            </article>
            <div class="self-photo-border">
                <div class="self-photo"></div>
            </div>
            <div class="skill-data">
                <span>我的技能</span>
            </div>
        </div>
    </div>
</template>

<script>
import areaHeader from '../../components/areaHeader'

export default {
    components:{
        areaHeader
    },
    data(){
        return{
            headerTitle:'About Me',
            headerLogo:'&#xe68b;'
        }
    }
}
</script>

<style lang="scss" scoped>
.aboutMe{
    width: 100%;
    height: 100vh;
    background-color: #fff; 
    padding: 3% 0;
    .me-content{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        .skill-data{
            width: 30vw;
            height: 30vw;        
        }
        .self-intro{
            width: 30vw;
            height: 30vw;
            border:2px solid;
            border-image: linear-gradient(to bottom,#454E93,#FF7B4D) 50 50; 
        }
        .self-photo{
            width: 15vw;
            height: 15vw;
            border-radius: 50%;
            background: url('../../assets/zzq.jpg');
            background-size: 100% 100%;
        }
        .self-photo-border{
         
        }
    }
    
}
</style>