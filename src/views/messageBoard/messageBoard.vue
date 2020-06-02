<template>
    <div class="messageBoard">
        <areaHeader :headerTitle='messageBoard' :headerLogo='headerLogo'></areaHeader>
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
            messageBoard:'Message Board',
            headerLogo:'&#xe65e;'
        }
    }
}
</script>

<style lang="scss" scoped>
.messageBoard{
    width: 100%;
    min-height: 100vh;
}
</style>