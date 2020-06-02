<template>
    <div class="projectCase">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
            <nav>
                <ul>
                    <li 
                    :key="index"
                    v-for="(item,index) in navItem"
                    @click="changeNavLi(index)"
                    :class="active==index?'liActive':''">{{item.title}}</li>
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
            </div>
        </div>
    </div>
</template>

<script>
import caseCard from './components/caseCard';
import areaHeader from '../../components/areaHeader'

export default {
    components:{
        caseCard,
        areaHeader
    },
    data(){
        return{
            headerTitle:'Project Case',
            headerLogo:'&#xe691;',
            navItem:[
                {
                    title:"全部"
                },
                {
                    title:"综合项目"
                },
                {
                    title:"动画"
                },
                {
                    title:"Canvas动画"
                },
                {
                    title:"小程序"
                }
            ],
            active:0
        }
    },
    methods:{
        changeNavLi(index){
            this.active = index;
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
    justify-content: center;
    nav{
          width: 100%;
          margin-bottom: 2%;
          ul{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            li{
                width: 75px;
                height: 25px;
                line-height: 25px;
                list-style: none;
                text-align: center;
                color:#fff;
                font-weight: 700;
                border-radius: 20px;
                margin: 0 2% 1% 0;
                background-color: #454E93;
                cursor: pointer;
                transition: .3s;
            }
            li:hover{
                background-color: #FF7B4D;
            }
            .liActive{
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
          grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
          justify-items: center;
          row-gap: 6%;
          padding: 2%;
      }
    }
     .projectCase-content::-webkit-scrollbar {display:none}
 }
</style>