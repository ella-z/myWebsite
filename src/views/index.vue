<template>
    <div>
        <navBar class="navBar"></navBar>
        <Home></Home>
        <aboutMe></aboutMe>
        <projectCase></projectCase>
    </div>
</template>
<script>
import navBar from '../views/navBar';
import Home from '../views/Home';
import projectCase from '../views/projectCase/projectCase';
import aboutMe from '../views/aboutMe/aboutMe';

export default {
    components:{
        navBar,
        Home,
        projectCase,
        aboutMe
    },
}
</script>

<style lang="scss">
    .navBar{
        position: absolute;
        z-index: 2;
    }
</style>