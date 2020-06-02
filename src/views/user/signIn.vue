<template>
    <transition name="signTransition">
        <div class="sign" v-show="isSignShow">
            <i class="iconfont icon" @click="closeSign()">&#xe602;</i>
            <div class="signForm">
                <h1>Sign In</h1>
                <div>
                    <div class="signForm-col1"> 
                        <input type="text"  required="required" autocomplete="off">
                        <span class="text">Username</span>
                    </div>
                    <div class="signForm-col2"> 
                        <input type="password" required="required" autocomplete="off">
                        <span class="text">Password</span>
                    </div>
                </div>
                <button>Sign In</button>
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
            return this.$store.state.isSignInShow;
        }
    },
    methods:{
        closeSign(){
            this.$store.commit('changeSignInState',false);

            //关闭signIn的时候改变navIndex为当前显示的区域的下标
            const navId = this.$store.state.navId;
            const navContent = this.$store.state.navContent;
            for(let i = 0 ; i < navContent.length;i++)
            {
                if(navContent[i].id === navId){
                    this.$store.commit('changeNavIndex',i);
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.sign{
    position: fixed;
    width: 100vw;
    height: calc(100vh - 35px);
    top: 35px;
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
        left: 5%;
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
        color:#454E93;        
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
             border-bottom: 1px solid #454E93;
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
            border: 1px solid #454E93;
            background-color: #fff;
            color:#454E93;
            padding: 8px 25px;
            border-radius: 15px;
            transition: .3s;
        }
        button:hover{
            background-color: #454E93;
            color: #fff;
        }
    }
}
.signTransition-enter-active{
     transform: translateX(100%);;
 }
.signTransition-leave-active{
     transform: translateX(100%);;
 }

</style>