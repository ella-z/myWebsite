<template>
    <div>
        <navBar ></navBar>
        <login></login>
        <Home></Home>
        <aboutMe></aboutMe>
        <projectCase></projectCase>
        <note></note>
    </div>
</template>
<script>
import navBar from '../views/navBar';
import Home from '../views/Home';
import projectCase from '../views/projectCase/projectCase';
import aboutMe from '../views/aboutMe/aboutMe';
import note from '../views/note/note';
import login from '../views/Login/Login';

export default {
    components:{
        navBar,
        Home,
        projectCase,
        aboutMe,
        note,
        login
    },
}
</script>

