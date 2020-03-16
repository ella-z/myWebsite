<template>
    <div>
        <navBar></navBar>
        <login></login>
        <Home id="Home"></Home>
        <aboutMe id="aboutMe"></aboutMe>
        <projectCase id="projectCase"></projectCase>
        <note id="Note"></note>
        <messageBoard id="messageBoard"></messageBoard>
        <footer></footer>
    </div>
</template>
<script>
import navBar from '../views/navBar';
import Home from '../views/Home';
import projectCase from '../views/projectCase/projectCase';
import aboutMe from '../views/aboutMe/aboutMe';
import note from '../views/note/note';
import login from '../views/Login/Login';
import messageBoard from '../views/messageBoard'

export default {
    components:{
        navBar,
        Home,
        projectCase,
        aboutMe,
        note,
        login,
        messageBoard
    },
    data(){
        return{
          //  navId:this.$store.state.navId
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
