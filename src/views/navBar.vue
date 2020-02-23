<template>
    <nav>
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
                    title:'Article'
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
}
</script>

<style lang="scss" scoped>
 nav{
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
    }
    .navList{
        list-style: none;
        display: flex;
        flex-direction: row;
        li{
            margin-right: 5vw;
            cursor: pointer;
        }
        li:hover{
            color: #FF7B4D;
        }
    }
 }
</style>