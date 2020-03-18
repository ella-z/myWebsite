<template>
    <div>
        <navBar></navBar>
        <signIn id="signIn"></signIn>
        <signUp id="signUp"></signUp>
        <Home id="Home" class="navContent"></Home>
        <aboutMe id="aboutMe" class="navContent"></aboutMe>
        <projectCase id="projectCase" class="navContent"></projectCase>
        <note id="Note" class="navContent"></note>
        <messageBoard id="messageBoard" class="navContent"></messageBoard>
        <footer></footer>
    </div>
</template>
<script>
import navBar from '../views/navBar';
import Home from '../views/Home';
import projectCase from '../views/projectCase/projectCase';
import aboutMe from '../views/aboutMe/aboutMe';
import note from '../views/note/note';
import signIn from '../views/signIn/signIn';
import messageBoard from '../views/messageBoard';
import signUp from '../views/signUp';

export default {
    components:{
        navBar,
        Home,
        projectCase,
        aboutMe,
        note,
        signIn,
        signUp,
        messageBoard
    },
    data(){
        return{
          
        }
    },
    mounted(){
        //获取所有的锚点元素
        const navContent = document.querySelectorAll('.navContent');
        this.$store.commit('changeNavContent',navContent);

        //页面刷新，显示区域回到顶部
        window.onload = ()=>{
            window.scrollTo({
                'top': 0,
                'behavior': 'smooth'
            });
        }
    },
    computed:{
        navId(){
            return this.$store.state.navId;
        }
    },
    watch:{
        navId(n){
            let pageId = document.querySelector('#' + n);
            window.scrollTo({
                //滑动到指定位置
                'top': pageId.offsetTop - 35,
                'behavior': 'smooth'
            })
        }
    },
    
}
</script>

<style lang="scss" scoped>
footer{
    width: 100%;
    height: 100px;
    background-color: #000;
}
</style>
