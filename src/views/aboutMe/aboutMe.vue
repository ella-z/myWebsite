<template>
    <div class="aboutMe">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
        <div class="me-content">
           <div class="self-intro">
               <ul>
                    <li v-for="(item,index) in selfIntro" :key="index"> 
                        <span>{{item.title}}</span>
                        <p>{{item.article}}</p>
                    </li>
               </ul>
               <div>
                   <i class="iconfont self-icon" v-for='(item,index) in selfIcon' :key="index" v-html="item.icon">{{item.icon}}</i>
                </div>
            </div>
            <div class="self-photo">
                <div class="self-photo-outer"></div>
                <div class="self-photo-inner">
                    <img src="../../assets/m.jpg" alt="">
                </div>
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
            headerLogo:'&#xe68b;',
            selfIntro:[
                {
                    title:'学生',
                    article:'我是一名计算机专业的的学生我是一名计算机专业的学生我是一名计算机专业的学生我是一名计算机专业的学生',
                },
                {
                    title:'前端',
                    article:'前端'
                },
                {
                    title:'剪辑',
                    article:'剪辑jjjjjjjjjjjjjjjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj'
                },
                {
                    title:'游戏',
                    article:'游戏lllllllllllllllllllllllllllllllll'
                }
            ],
            selfIcon:[
                {
                    icon:`&#xe695;`,
                    img:''
                },
                {
                    icon:`&#xe627;`
                },
                {
                    icon:`&#xe600;`
                },
                {
                    icon:`&#xeac3;`
                },
            ]
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
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
       .skill-data{
            width: 30vw;
            height: 30vw;  
            span{
                 font-family: 'STKaiti';
                 font-size: 1.5vw;     
            }
        }
        .self-intro{
            width: 30vw;
            height: 30vw;
            li{
                list-style: none;
                margin-bottom: 6%;
                span{
                    display: block;
                    width: 6vw;
                    text-align: center;
                    color: #fff;
                    background-image: linear-gradient(to right,#454E93,#FF7B4D);
                    font-family: 'STKaiti';
                    font-size: 1.5vw;
                    border-radius: 10px; 
                }
                p{
                    margin-top: 2%;
                    width: 30vw;
                    font-size: 1vw;
                    word-wrap:break-word;
                    text-indent:2vw;//开头空两格
                }
            }
            .self-icon{
                display: inline-block;
                width: 2.5vw;
                height: 2.5vw;
                text-align: center;
                line-height: 2.5vw;
                font-size: 2vw;
                border-radius: 50%;
                margin:5% 10% 0 0;
                color: #fff;
                background-image: linear-gradient(to right,#454E93,#FF7B4D);
            }
        }
        .self-photo{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 20vw;
         .self-photo-outer{
            width: 20vw;
            height: 20vw;
            background-image: linear-gradient(90deg,#454E93,#CC62AB,#E8E5E0,#FF7B4D,#454E93);
            border-radius: 50%;
            animation: rotate 3s linear infinite;
        }
        @keyframes rotate {
            to{
                transform: rotate(360deg)
            }
        }
        .self-photo-inner{
            position:absolute;
            width: 19.3vw;
            height: 19.3vw;
            border-radius: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 18vw;
                height: 18vw;
                border-radius: 50%;
                
            }
        }           
        }
    }
}
</style>