<template>
    <transition name="signTransition">
        <div class="sign" v-show="isSignShow">
            <i class="iconfont icon" @click="closeSign()">&#xe602;</i>
            <div class="signForm">
                <h1>Sign Up</h1>
                <div>
                    <div class="signForm-col1"> 
                        <input type="text" name="userName" id="userName" required="required" autocomplete="off">
                        <span class="text">Username</span>
                    </div>
                    <div class="signForm-col2"> 
                        <input type="password" name="" id="password" required="required" autocomplete="off">
                        <span class="text">Password</span>
                    </div>
                </div>
                <button>Sign Up</button>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    computed:{
        isSignShow(){
            return this.$store.state.isSignShow;
        }
    },
    methods:{
        closeSign(){
            this.$store.commit('changeSignState',false);
        }
    }
}
</script>

<style lang="scss" scoped>
.sign{
    position: fixed;
    width: 100vw;
    height: calc(100vh - 3.2vw);
    top: 3.2vw;
    left: 0;
    z-index: 11;
    transform: translateX(0);
    transition: transform .3s;
     background-color: #fff;
    .icon{
        color: #000;
        font-size: 12px;
        font-weight: 700;
        position: absolute;
        right: 5%;
        top: 3%;
        cursor: pointer;
    }
    .signForm{        
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color:#FF7B4D;        
        h1{
            font-size: 35px;
            font-family: "Microsoft Yahei";
        }
        input{
            border: none;
            outline: none;
            background-color: transparent;
            padding: 5px;
            position: absolute;
            z-index: 12;
            width: 100%;
            font-size: 15px;
             border-bottom: 1px solid #FF7B4D;
        }
        .text{
            position: absolute;
            display: block;
            top:0;
            left: 0;
            font-size: 18px;
            padding: 0 10px;
            transition: .5s;
            pointer-events: none;
        }
        [class^='signForm-col']{
            position: relative;
            width: 250px;
            margin-bottom: 80px;
        }
        input:focus + .text,input:valid + .text{
            top:-20px;
            left: -10px;
        }
        button{
            outline: none;
            cursor: pointer;
            border: 1px solid #FF7B4D;
            background-color: #fff;
            color:#FF7B4D;
            padding: 8px 25px;
            border-radius: 15px;
            transition: .3s;
        }
        button:hover{
            background-color: #FF7B4D;
            color: #fff;
        }
    }
}
.signTransition-enter-active{
     transform: translateX(-100%);;
 }
.signTransition-leave-active{
     transform: translateX(-100%);;
 }

</style>