<template>
        <div class="sign">
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
</template>
<script>
export default {
    methods:{
        closeSign(){
            //关闭signIn的时候改变navIndex为当前显示的区域的下标
            const navId = this.$store.state.navId;
            const navContent = this.$store.state.navContent;
            for(let i = 0 ; i < navContent.length;i++)
            {
                if(navContent[i].id === navId){
                    this.$store.commit('changeNavIndex',i);
                }
            }
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.sign{
    width: 100%;
    height: 100vh;
    top: 35px;
    left: 0;
    z-index: 11;
     background-color: #fff;
    .icon{
        color: #000;
        font-size: 12px;
        font-weight: 700;
        position: absolute;
        right: 50px;
        top: 30px;
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
            margin:0;
            font-size: 35px;
        }
        input{
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

</style>