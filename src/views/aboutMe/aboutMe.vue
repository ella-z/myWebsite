<template>
    <div class="aboutMe">
        <div class="me-header">
            <div class="me-logo">
                <i class="iconfont icon">&#xe68b;</i>
            </div>
            <div class="me-title">About Me</div>
        </div>
        <div class="me-content">
            <div class="self-intro"></div>
            <div class="self-photo-border">
                <div class="self-photo"></div>
            </div>
            <div class="skill-data"></div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.aboutMe{
    width: 100%;
    height: 100vh;
    background-color: #fff; 
    padding: 3% 0;
    .me-header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10%;
        .me-logo{
            width: 5vw;
            height: 5vw;
            border: 1px  solid #000;
            border-radius: 50%;
            margin-bottom: 1%;

        }
        .me-title{
            font-size: 3vw;
        }
    }   
    
    .me-content{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        .self-intro,.self-photo,.skill-data{
            background-color: pink;
            width: 20vw;
            height: 20vw;
        }
        .self-photo{
            border-radius: 50%;
        }
        .self-photo-border{
         
        }
    }
    
}
</style>