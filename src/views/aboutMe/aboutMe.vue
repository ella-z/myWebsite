<template>
    <div class="aboutMe">
        <areaHeader :headerTitle='headerTitle' :headerLogo='headerLogo'></areaHeader>
        <div class="me-content">
           <div class="self-intro">
                <ul>
                    <li v-for="(item,index) in selfIntroData" :key="index"> 
                        <span :class="{'span-show':item.isShow}" @click="selfIntroClick(item,index)">{{item.title}}</span>
                        <p :class="{'p-show':item.isShow}">{{item.article}}</p>
                    </li>
                </ul>
                <div class="self-icon">
                    <div class="self-icon-outer" v-for='(item,index) in selfIconData' :key="index">
                        <i class="iconfont self-icon-img"  v-html="item.icon" @mouseenter="mouseEnter(item)" @mouseleave="mouseLeave(item)">{{item.icon}}</i>
                        <span class="self-icon-content"   :class="{'show':item.isShow}">
                            {{item.content}}
                        </span>
                    </div>
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
                <div class="skill-data-bar">
                    <ul>
                        <li class="js">JS</li>
                        <li 
                        v-for="(item,index) in skillBar" 
                        :key='index' 
                        
                        >{{item.title}}</li>
                    </ul>
                </div>
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
            enterIndex:0,
            selfIntroData:[
                {
                    title:'学生',
                    article:`我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生
                             我是一名计算机专业的学生我是一名计算机专业的学生`,
                    isShow:true
                },
                {
                    title:'前端',
                    article:'前端',
                    isShow:false
                },
                {
                    title:'后台',
                    article:'后台后台后台后台后台后台后台后台后台后台后台后台后台后台后台后台后台',
                    isShow:false
                },
                {
                    title:'剪辑',
                    article:'剪辑jjjjjjjjjjjjjjjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj剪辑jjjjjj',
                    isShow:false 
                },
                {
                    title:'游戏',
                    article:'游戏lllllllllllllllllllllllllllllllll',
                    isShow:false
                }
            ],
            selfIconData:[
                {
                    icon:`&#xe695;`,
                    content:'WeChat:enhei_0',
                    isShow:false
                },
                {
                    icon:`&#xe627;`,
                    content:'QQ:2151633944',
                    isShow:false
                },
                {
                    icon:`&#xe600;`,
                    content:'GitHub:ella-z',
                    isShow:false
                },
                {
                    icon:`&#xeac3;`,
                    content:'Steam:柠檬奶盖',
                    isShow:false
                },
            ],
            skillBar:[
                {
                    title:'VUE'
                },
                {
                    title:'HTML'
                },
                {
                    title:'CSS'
                }
            ]
        }
    },
    methods:{
        mouseEnter(item){
            item.isShow = true;
        },                          //鼠标移入移出self-icon时，改变item的状态
        mouseLeave(item){              
            item.isShow = false;
        },
        selfIntroClick(item,index){
            this.selfIntroData[index].isShow = !this.selfIntroData[index].isShow;
            this.selfIntroData.forEach(element => {
                if(this.selfIntroData[index].title !== element.title){
                    element.isShow = false;
                }
            });
        },
        changeKeyframe(){
            this.skillBar.forEach(element =>{
                const keyframe = `@keyframes ${element.title}{
                    from{
                        width:0%;
                    }
                    to{
                        width:50%
                    }
                }`;
                console.log(keyframe);
            });
        }
    },
    mounted(){
        this.changeKeyframe();
    }
}
</script>

<style lang="scss" scoped>
@import 'styles/aboutMe.scss';
</style>