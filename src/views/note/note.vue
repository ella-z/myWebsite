<template>
    <div class="article">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
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
}
</style>