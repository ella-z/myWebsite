<template>
    <div class="caseCard">
        <div class="caseCard-shade">
            <div class="caseCard-title">
                <span class="case-tiltle">M记app</span>
                <p class="case-describe">describebbbbbbbsssssssssssssssssssssssssssssss</p>
            </div>
            <div class="caseCard-button">
                <button>demo</button>
                <button>github</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.caseCard{
    width: 15vw;
    height: 20vw;
    border-radius: 10px;
    overflow: hidden;
    background-image: url('D:/myWebsite/qwebsite/src/views/projectCase/components/McDonald.jpg');
    background-repeat:no-repeat;
    background-position: center;
    background-size: 50% 40%;
    .caseCard-shade{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .caseCard-title{
            color:#fff;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .case-tiltle{
                font-size: 1.8vw;
                margin-bottom: 5%;
            }
            .case-describe{
                font-size: 1.2vw;
                width: 80%;
                word-wrap:break-word;
            }
        }
        .caseCard-button{
            width: 100%;
            height: 30%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            button{
                cursor: pointer;
                width: 60%;
                height: 40%;
                color:#fff;
                border: none;
                outline: none;     
                border-radius: 20px;
                margin-bottom: 5%;
                background-image: linear-gradient(90deg,#454E93,#FF7B4D);
            }
        }
    }
}
.caseCard:hover{
    box-shadow: 0px 0px 12px  rgb(61, 61, 61);
}
</style>