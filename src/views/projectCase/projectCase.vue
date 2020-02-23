<template>
    <div class="projectCase">
        <caseCard></caseCard>
    </div>
</template>

<script>
import caseCard from '../projectCase/components/caseCard';

export default {
    components:{
        caseCard
    },
}
</script>

<style lang="scss" scoped>
 .projectCase{
     height: 300px;
     width: 100%;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
     background-color: pink;
 }
</style>