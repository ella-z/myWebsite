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
import navBar from './navBar';
import Home from './Home';
import projectCase from './projectCase/projectCase';
import aboutMe from './aboutMe/aboutMe';
import note from './note/note';
import signIn from './user/signIn';
import messageBoard from './messageBoard/messageBoard';
import signUp from './user/signUp';

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
    
}
</script>

<style lang="scss" scoped>
#projectCase #Note{
    margin-bottom: 50px;
}
footer{
    width: 100%;
    height: 100px;
    background-color: #000;
}
</style>
