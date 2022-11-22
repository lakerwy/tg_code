<template>
    <div>
        <div :class="showFlag?'tip_box':'tip_box hide'" >
            {{message}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            timeout:0,
            showFlag:true
        }
    },
    props:{
        message:String
    },
    methods:{
        init(){
            this.showFlag = true;
            this.timeout = setTimeout(() => {
                this.showFlag =false;
            }, 2500);
        }
    },
    mounted(){
        console.log("mounted");
        this.init()
    },
    beforeDestroy() {
    }
}
</script>

<style lang="less" scoped>
    .tip_box {
        position: fixed;
        top:40%;
        left: 50%;
        transform: translate(-50%);
        font-size: .28rem;
        color: #fff;
        background-color: rgba(0,0,0,.7);
        // opacity: .7;

        border-radius: .1rem;
        line-height: .72rem;
        z-index: 999;
        padding: 0 .2rem;
        transition: opacity .5s linear;
        &.hide {
            opacity: 0;
        }
    }
</style>

