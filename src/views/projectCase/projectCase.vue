<template>
    <div class="projectCase">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
        <div class="projectCase-content">
            <nav>
                <ul>
                    <li>全部</li>
                </ul>
            </nav>
            <div class="projectCase-content-card">
                <caseCard></caseCard>
                <caseCard></caseCard>
                <caseCard></caseCard>
                <caseCard></caseCard>
            </div>
        </div>
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
    .projectCase-content{
      width: 80%;
      height: 80%;
      overflow: hidden;
      nav{
          width: 100%;
          height: 8%;
          margin-bottom: 3%;
          li{
              width: 6vw;
              height: 2vw;
              list-style: none;
              text-align: center;
              border: 1px solid black;
          }
      }
      .projectCase-content-card{
          display: grid;
          grid-template-columns: repeat(4,1fr);
          justify-items: center;
          align-items: center;
      }
    }
 }
</style>