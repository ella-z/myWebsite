<template>
    <div class="projectCase">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
                    <nav>
                <ul>
                    <li>全部</li>
                    <li>综合项目</li>
                    <li>Canvas动画</li>
                    <li>小程序</li>
                </ul>
            </nav>
        <div class="projectCase-content">

            <div class="projectCase-content-card">
                <caseCard></caseCard>
                <caseCard></caseCard>
                <caseCard></caseCard>
                <caseCard></caseCard>
                <caseCard></caseCard>
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
    nav{
          width: 100%;
          height: 8%;
          margin-bottom: 2%;
          ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            li{
                width: 8vw;
                height: 3vw;
                line-height: 3vw;
                list-style: none;
                text-align: center;
                color:#fff;
                font-weight: 700;
                border-radius: 20px;
                margin-right: 2%;
                background-color: #454E93;
                cursor: pointer;
            }
            li:hover{
                background-color: #FF7B4D;
            }
          }
      }
    .projectCase-content{
      width: 80%;
      height: 60%;
      overflow: scroll;
      scrollbar-width: none;    
      .projectCase-content-card{
          display: grid;
          grid-template-columns: repeat(4,1fr);
          justify-items: center;
          row-gap: 6%;
          margin-top: 2%;
      }
    }
     .projectCase-content::-webkit-scrollbar {display:none}
 }
</style>