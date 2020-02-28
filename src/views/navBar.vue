<template>
    <nav >
        <div class="logo">LOGO</div>
        <ul class="navList">
            <li :key='index' v-for='(item,index) in areaNav'>{{item.title}}</li>
        </ul>
    </nav>
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
            ]
        }
    },
    mounted(){
        //监控window是否向Y轴正向滑动。若向Y轴正向滑动，改变nav的样式。
        window.addEventListener('scroll',function(){
            let nav = document.querySelector('nav');
            nav.classList.toggle('sticky',window.scrollY > 0);
        })
    },
}
</script>

<style lang="scss" scoped>
 nav{
    position: fixed;
    z-index: 100;
    left: 0;
    height: 0;
    transition: 0.6s;
    display:flex;
    height: 4vw;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background:rgba(0,0,0,0);
    .logo{
        margin-left: 5vw;
        cursor: pointer;
        transition: 0.6s;
    }
    .navList{
        list-style: none;
        display: flex;
        flex-direction: row;
        li{
            margin-right: 5vw;
            cursor: pointer;
            transition: 0.6s;
        }
        li:hover{
            color: #FF7B4D;
        }
    }

 }
 .sticky{
     //window滑动后显示的样式。
        padding: 1vw 2vw;
        height: 3vw;
        background-color: #000;
        color: #fff;
} 
</style>