<template>
    <div class="caseCard">
        <div class="narrate">
                <span class="case-tiltle">高仿麦当劳</span>
                <p class="case-describe">describebbbbbbbsssssssssssssssssssssssssssssss</p>
                <button>case</button>
                <button>github</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.caseCard{
    width: 20vw;
    height: 25vw;
    border-radius: 5px;
    overflow: hidden;
    background-image: url('D:/myWebsite/qwebsite/src/views/projectCase/components/McDonald.jpg');
    background-repeat:no-repeat;
    background-size: 100% 100%;
}
.narrate{
    width: 100%;
    height: 100%;
    color:#fff;
    background: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    .case-tiltle{
        font-size: 3vw;
    }
    .case-describe{
        font-size: 1.5vw;
        width: 18vw;
        text-align: center;
        word-wrap:break-word;
    }
    button{
        cursor: pointer;
        width: 40%;
        height: 10%;
        color:#fff;
        border: none;
        border-radius: 7px;
        outline: none;
        background-color: #8891D0;
    }
}
</style>