<template>
    <!-- 隐私协议 -->
    <div class="cssBox" @click="getService">
        <div class="borderRadius">
            <div class="lfRaidus">
                <div class="ctRaidus"></div>
            </div>
            <div class="rtRaidus">
                <div class="ctRaidus"></div>
                <div class="hfPoint"></div>
                <div class="rtPoint"></div>
            </div>
        </div>
        <div class="imageRadius">
            <img src="../assets/images/circle.png" width="100%" alt="">
        </div>
        <div class="waveRaidus">
            <img src="../assets/images/circle.png" width="100%" alt="">
        </div>
        <div class="pointRadius">
            <img src="../assets/images/chat_text.png" width="100%" alt="">
        </div>
    </div>
</template>

<script>
    import {
        qimoChatClick
    } from '../libs/common'
    export default {
        data() {
            return {

            }
        },
        methods: {
            getService() {
                qimoChatClick()
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    fieldset,
    img {
        border: 0;
    }

    /* .cssBox {
    z-index: 1000;
        width: 60px;
    height: 60px;
    margin: 100px auto;
    position: fixed;
    top: 30%;
    right: 0;
}
.cssBox .borderRadius {
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -30px 0 0 -30px;
    -webkit-animation: rotating 2s ease 0s infinite;
    animation: rotating 2s ease 0s infinite;
}
.cssBox .borderRadius .lfRaidus {
    width: 60px;
    height: 30px;
    border-radius: 30px 30px 0 0;
    position: relative;
    -webkit-animation: lfRaidus 2s ease 0s infinite;
    animation: lfRaidus 2s ease 0s infinite;
}
.cssBox .borderRadius .lfRaidus .ctRaidus {
    width: 56px;
    height: 28px;
    background-color: #fff;
    border-radius: 28px 28px 0 0;
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
}
.cssBox .borderRadius .rtRaidus {
    width: 60px;
    height: 30px;
    border-radius: 0 0 30px 30px;
    position: relative;
    -webkit-animation: rtRaidus 2s ease 0s infinite;
    animation: rtRaidus 2s ease 0s infinite;
}
.cssBox .borderRadius .rtRaidus .ctRaidus {
    width: 56px;
    height: 28px;
    background-color: #fff;
    border-radius: 0 0 28px 28px;
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
}
.cssBox .borderRadius .rtRaidus .hfPoint {
    width: 7px;
    height: 5px;
    position: absolute;
    left: 0px;
    top: -5px;
    border-radius: 5px 5px 0 0;
    background-color: #f9848f;
}
.cssBox .borderRadius .rtRaidus .rtPoint {
    width: 5px;
    height: 5px;
    position: absolute;
    left: 10px;
    top: -5px;
    border-radius: 5px;
    background-color: #f9848f;
}
.cssBox .imageRadius {
    margin-top: 2px;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-animation: imageRadius 2s ease 0s infinite;
    animation: imageRadius 2s ease 0s infinite;
}

.cssBox .waveRaidus {
    margin-top: 2px;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-animation: waveRaidus 2s ease-out 0s infinite;
    animation: waveRaidus 2s ease-out 0s infinite;
}
.cssBox .pointRadius {
    width: 45px;
    height: 45px;
    border-radius: 360px;
    background-color: #FFF;
    border: 2px solid #ef7a7a;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
} */

    .button {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        position: fixed;
        top: 45%;
        right: 0.1rem;
        opacity: .5;
        background-color: #ff3333;
        color: #fff;
    }

    /*img{display: block;}*/
    .cssBox {
        z-index: 100;
        width: 1.2rem;
        height: 1.2rem;
        margin: 2rem auto;
        position: relative;
        position: fixed;
        top: 30%;
        right: 0;
        -webkit-transform: translateZ(0);
    }

    .cssBox.translationRight {
        right: -1.2rem;
        animation: right .6s linear 0s;
    }

    .cssBox.translationLeft {
        right: 0px;
        animation: left .6s linear 0s;
    }

    @-webkit-keyframes right {
        0% {
            right: 0;
        }

        50% {
            right: -.6rem;
        }

        100% {
            right: -1.2rem;
        }
    }

    @-webkit-keyframes left {
        0% {
            right: -1.2rem;
        }

        50% {
            right: -.6rem;
        }

        100% {
            right: 0px;
        }
    }

    .cssBox .borderRadius {
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -.6rem 0 0 -.6rem;
        -webkit-animation: rotating 2s ease 0s infinite;
        animation: rotating 2s ease 0s infinite;
    }

    @-webkit-keyframes rotating {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            opacity: 1;
        }

        65% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            opacity: 1;
        }

        100% {
            -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
            opacity: 0;
        }
    }

    .cssBox .borderRadius .lfRaidus {
        width: 1.2rem;
        height: .6rem;
        border-radius: .6rem .6rem 0 0;
        position: relative;
        -webkit-animation: lfRaidus 2s ease 0s infinite;
        animation: lfRaidus 2s ease 0s infinite;
    }

    @-webkit-keyframes lfRaidus {
        0% {
            background: -moz-linear-gradient(right, red, black);
            background: -webkit-linear-gradient(right, #fa3131, #fff);
            background: -o-linear-gradient(right, red, black);
        }

        65% {
            background: -moz-linear-gradient(right, red, black);
            background: -webkit-linear-gradient(right, #fa3131, #fff);
            background: -o-linear-gradient(right, red, black);
        }

        100% {
            background: -moz-linear-gradient(right, red, black);
            background: -webkit-linear-gradient(right, #fa3131, #fff);
            background: -o-linear-gradient(right, red, black);
        }
    }

    .cssBox .borderRadius .lfRaidus .ctRaidus {
        width: 1.12rem;
        height: .56rem;
        background-color: #fff;
        border-radius: .56rem .56rem 0 0;
        position: absolute;
        left: 50%;
        bottom: 0;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }

    .cssBox .borderRadius .rtRaidus {
        width: 1.2rem;
        height: .6rem;
        border-radius: 0 0 .6rem .6rem;
        position: relative;
        -webkit-animation: rtRaidus 2s ease 0s infinite;
        animation: rtRaidus 2s ease 0s infinite;
    }

    @-webkit-keyframes rtRaidus {
        0% {
            background: -moz-linear-gradient(right, red, black);
            background: -webkit-linear-gradient(right, #fa3131, #f9848f);
            background: -o-linear-gradient(right, red, black);
        }

        65% {
            background: -moz-linear-gradient(right, red, black);
            background: -webkit-linear-gradient(right, #fa3131, #f9848f);
            background: -o-linear-gradient(right, red, black);
        }

        100% {
            background: -moz-linear-gradient(right, red, black);
            background: -webkit-linear-gradient(right, #fa3131, #f9848f);
            background: -o-linear-gradient(right, red, black);
        }
    }

    .cssBox .borderRadius .rtRaidus .ctRaidus {
        width: 1.12rem;
        height: .56rem;
        background-color: #fff;
        border-radius: 0 0 .56rem .56rem;
        position: absolute;
        left: 50%;
        top: 0;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }

    .cssBox .borderRadius .rtRaidus .hfPoint {
        width: .14rem;
        height: .1rem;
        position: absolute;
        left: 0px;
        top: -.1rem;
        border-radius: .1rem .1rem 0 0;
        background-color: #f9848f;
    }

    .cssBox .borderRadius .rtRaidus .rtPoint {
        width: .1rem;
        height: .1rem;
        position: absolute;
        left: .2rem;
        top: -.1rem;
        border-radius: .1rem;
        background-color: #f9848f;
    }

    .cssBox .imageRadius {
        margin-top: .04rem;
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-animation: imageRadius 2s ease 0s infinite;
        animation: imageRadius 2s ease 0s infinite;
    }

    @-webkit-keyframes imageRadius {
        0% {
            opacity: 0;
        }

        65% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    .cssBox .waveRaidus {
        margin-top: .04rem;
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-animation: waveRaidus 2s ease-out 0s infinite;
        animation: waveRaidus 2s ease-out 0s infinite;
    }

    @-webkit-keyframes waveRaidus {
        0% {
            width: 100%;
            height: 100%;
            opacity: 0;
        }

        65% {
            width: 100%;
            height: 100%;
            opacity: 0;
        }

        66% {
            width: 100%;
            height: 100%;
            opacity: 0.8;
        }

        100% {
            width: 130%;
            height: 130%;
            opacity: 0;
        }
    }

    .cssBox .pointRadius {
        width: .9rem;
        height: .9rem;
        border-radius: 7.2rem;
        background-color: #FFF;
        border: .04rem solid #ef7a7a;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);

    }
</style>