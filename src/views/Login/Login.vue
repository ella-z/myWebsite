<template>
    <div class="Login" v-show="$store.state.isLoginShow">
        <h1>LOGIN</h1>
        <input type="text" placeholder="userName">
        <input type="password" name="" placeholder="password">
        <button>Login</button>
        <i class="iconfont icon" @click="close()">&#xe641;</i>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        close(){
            this.$store.commit('changeLoginState',false);
        }
    }
}
</script>

<style lang="scss">
.Login{
    position: fixed;
    top:calc(50vh - 12.5vw);
    left: calc(50vw - 17.5vw);
    z-index:10;
    width:35vw;
    height: 25vw;
    background-color: rgba($color: #000000, $alpha: 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: #fff;
        font-size: 3vw;
        font-weight: 500;
        margin:5% 0;
    }
    input,button{
        border:none;
        outline: none;
    }
    input{        
        width: 16vw;
        height: 3vw;
        background: none;
        border:1px solid #454e93;
        border-radius: 20px;
        margin-top:5%; 
        color: #fff;
        text-align: center;
        transition: 0.6s;
    }
    input:focus{
        width: 20vw;
        height: 3.5vw;
        border-color: #FF7B4D;
    }
    button{
        width: 10vw;
        height: 3vw;
        margin-top: 8%;
        background: none;
        color: #fff;
        border-radius: 20px;
        border:1px solid #FF7B4D;
        transition: 0.5s;
        cursor: pointer;
    }
    button:hover{
        background-color: #FF7B4D;
    }
    .icon{
        position: absolute;
        top:5%;
        left: 92%;
        font-size: 1vw;
        font-weight: 300;
        color: #fff;
        transition: 0.6s;
        cursor: pointer;
    }
    .icon:hover{
        transform: rotate(360deg);
    }
}
</style>