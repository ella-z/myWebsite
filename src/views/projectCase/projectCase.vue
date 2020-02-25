<template>
    <div class="projectCase">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
        <caseCard></caseCard>
    </div>
</template>

<script>
import caseCard from '../projectCase/components/caseCard';
import areaHeader from '../../components/areaHeader'

export default {
    components:{
        caseCard,
        areaHeader
    },
    data(){
        return{
            headerTitle:'Project Case',
            headerLogo:'&#xe691;'
        }
    }
}
</script>

<style lang="scss" scoped>
 .projectCase{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3% 0;
    
 }
</style>