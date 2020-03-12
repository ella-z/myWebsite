<template>
    <div>
        <header>
            <div class="logo">LOGO</div>
            <nav v-show="!isNavBarsShow">
                <ul class="navList">
                    <li 
                    :key='index' 
                    v-for='(item,index) in areaNav'
                    @click="navClick(item.title)"
                    >{{item.title}}</li>
                </ul>
            </nav>
            <div v-show="isNavBarsShow">
                <div class="navBars" @click="navBarsClick()">
                    <i class="iconfont icon" v-html="listIcon">{{listIcon}}</i>
                </div>
                <ul class="barsList" v-show="isListShow">
                    <li  
                    :key='index' 
                    v-for='(item,index) in areaNav'
                     @click="navClick(item.title)"
                    >{{item.title}}</li>
                </ul>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    data(){
        return{
            areaNav:[
                {
                    title:'Home'
                },
                {
                    title:'About Me'
                },
                {
                    title:'Project Case'
                },
                {
                    title:'Note'
                },
                {
                    title:'Message Board'
                },
                {
                    title:'Login'
                },
                {
                    title:'Sign In'
                }
            ],
            clientHeight:document.documentElement.clientHeight,
            clientWidth:document.documentElement.clientWidth,   
            isListShow:false,
            listIcon:`&#xe62b;`
        }
    },
    methods:{
        navClick(title){
            if(title === 'Login'){
               this.$store.commit('changeLoginState',true);
            }
        },
        navBarsClick(){
            this.isListShow = !this.isListShow;
            this.listIcon = `&#xe66b;`;
        }
    },
    mounted(){
        window.addEventListener('scroll',function(){
             //监控window是否向Y轴正向滑动。若向Y轴正向滑动，改变nav的样式。
            let header = document.querySelector('header');
            header.classList.toggle('sticky',window.scrollY > 0);
        })
        window.onresize=()=>{
            //监控屏幕的尺寸是否发生改变
            this.clientHeight = document.documentElement.clientHeight;
            this.clientWidth = document.documentElement.clientWidth;
        }
    },
    computed:{
        isNavBarsShow(){
            if(this.clientWidth>this.clientHeight){
                return false;
            }else{
                return true;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
 header{
    position: fixed;
    z-index: 100;
    left: 0;
    height: 0;
    transition: 0.5s;
    display:flex;
    height: 4vw;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background:rgba(0,0,0,0);
    padding: 0 5vw;
    .logo{
        cursor: pointer;
        transition: 0.6s;
        font-size: 2vw;
    }
    nav{
        .navList{
            list-style: none;
            display: flex;
            flex-direction: row;
            li{
                margin-left: 4vw;
                cursor: pointer;
                transition: 0.6s;
                font-size: 1.2vw;
            }
            li:hover{
                color: #FF7B4D;
            }
        }
    }
 }
 .navBars{
    color:#454E93;
    cursor: pointer;
     .icon{
        font-size: 2.5vw;
        background-clip: text;
        color:transparent;
        background-image: linear-gradient(90deg,#454E93,#FF7B4D);
     }
 }
 .barsList{
     position: absolute;
     left: 0;
     top: 3vw;
     width: 100vw;
     height: 100vh;
     z-index:99999;
     transition: .6s;
     li{
         cursor: pointer;
         width: 100%;
         height: 8vw;
         text-align: center;
         line-height: 8vw;
         background-color: #fff;
         color:black;
         border-bottom: 0.5px solid #000;
         font-size: 2vw;
     }
     li:last-child{
         border: none;
     }
     li:hover{
          color:#FF7B4D;
     }
 }
 .sticky{
     //window滑动后显示的样式。
        padding: 1vw 2vw;
        height: 3.2vw;
        background-color: #000;
        color: #fff;
} 
</style>