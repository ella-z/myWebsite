<template>
    <div class="me-header">
        <div class="me-logo">
            <i class="iconfont icon" v-html="headerLogo" >{{headerLogo}}</i>
        </div>
        <div class="me-title">{{headerTitle}}</div>
    </div>
</template>

<script>
export default {
  props: ['headerTitle', 'headerLogo']
}
</script>

<style lang="scss" scoped>
.me-header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 3%;
        .me-logo{
            width: 50px;
            height: 50px;
            border: 2px  solid #000;
            border-radius: 50%;
            margin-bottom: 1%;
            text-align: center;
            line-height: 50px;
            .icon{
                font-size: 35px;
                background-image: linear-gradient(to bottom,#454E93,#FF7B4D);
                background-clip: text;
                color: transparent;
            }
        }
        .me-title{
            font-size: 25px;
        }
        }
</style>
