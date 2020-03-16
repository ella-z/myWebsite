<template>
    <div class="article">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
        <nav>
            <ul>
                <li>123</li>
                <li>123465</li>
                <li>11</li>
                <li>1</li>
                <li>2</li>
                <li class=".animation"></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import areaHeader from '../../components/areaHeader';

export default {
    components:{
        areaHeader
    },
    data(){
        return{
            headerTitle:'Note',
            headerLogo:'&#xe62e;'            
        }
    }
}
</script>

<style lang="scss" scoped>
.article{
    width: 100%;
    height: 100vh;
    padding: 3% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    nav{
        //height: 9%;
        ul{
           // height: 100%;
            border-radius: 5px;
            overflow: hidden;
            background-color: pink;
            text-align: center;
            li{
                display: inline-block;
                position: relative;
                z-index: 1;
                padding: 1.5vw 3vw;
                color:#fff;
            }
            .animation{
                position: absolute;
                height: 100%;
                background-color: #000;
                top:0;
                left: 0;
                z-index: 0;
            }
        }
    }
}
</style>