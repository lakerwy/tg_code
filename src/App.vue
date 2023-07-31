<!--
 * @Author: 付柏磊
 * @Date: 2022-12-13 08:47:08
 * @LastEditors: 付柏磊
 * @LastEditTime: 2022-12-13 08:47:44
 * @Description: desc
 -->

<style lang="less">
  @import "./app.less";
</style>

<template>
  <div id="app">
    <!-- 滑动校验弹窗 -->
    <!--<div class="drop_box slideCol" v-show="captchaFlag">
      <div class="drop_slide">
        <h4>安全验证</h4>
        <h4>安全验证<span></span></h4>
        <div id="captcha"></div>
      </div>
    </div>-->

    <agreement v-show="agreeFlag" @closeAgree="closeAgree" />
    <message :message="mes" v-if="messageFlag" :key="key" />
    <chat-button />
    <div class="container" :class="agreeFlag?'unSliding':''">
      <div class="header cl">
        <a class="pl" href="javascript:;">
          <img src="https://cdn.chinabidding.cn/public/2020/img/sy_cont_logo.png?t=20210225a" alt="元博采购与招标网">
        </a>
        <div class="pr">
          <!-- <h1>招投标行业领头军</h1>
          <p>400-006-6655</p> -->
        </div>
      </div>
      <div class="module module1">
        <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img src="./assets/images/banner1.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="./assets/images/banner4.png" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="module module2">
        <div class="form">
          <p class="form_title">
            <span class="fl">免费注册查询</span>
            <span class="fr">全行业优质招标采购项目信息</span>
          </p>
          <div class="input_item">
            <input type="number" class="phone" v-model="formData.phone" placeholder="请输入手机号" @blur="regPhone">
            <p v-show="formData.phoneTxt">{{ formData.phoneTxt }}</p>
          </div>
          <div class="input_item">
            <div id="captcha"></div>
            <p v-show="formData.panelTxt">{{ formData.panelTxt }}</p>
          </div>
          <div class="input_item" v-if="formData.codeflag" @blur="regCode">
            <input class="code" v-model="formData.code" placeholder="请输入手机验证码">
            <span @click="getCode" class="codebtn">{{ codeText }}</span>
            <p v-show="formData.codeTxt">{{ formData.codeTxt }}</p>
          </div>
          <div class="input_item" v-if="formData.codeflag" @blur="regName">
            <input type="text" class="name" v-model="formData.name" placeholder="请输入联系人姓名">
            <p v-show="formData.nameTxt">{{ formData.nameTxt }}</p>
          </div>
          <div class="input_item" v-if="formData.codeflag" @blur="regCompany">
            <input type="text" class="company" v-model="formData.company" placeholder="请输入公司名称">
            <p v-show="formData.companyTxt">{{ formData.companyTxt }}</p>
          </div>
          <p class="tip">注册代表您同意本网站 <span @click="open"> 隐私政策和用户服务协议</span></p>
          <div class="button primary" @click="register">立即注册</div>
          <p class="tolog">已有账号？<span @click="tologin">马上登录</span></p>
          <div class="single"></div>
        </div>
        <h1 class="subtitle">注册即享受</h1>
        <div class="keyword">
          <span @click="goRegister">项目<br>精准搜索</span>
          <span @click="goRegister">100个<br>项目推送</span>
          <span @click="goRegister">免费<br>查看信息</span>
          <span @click="goRegister">开启<br>微信订阅</span>
          <span></span>
          <span @click="goRegister">专属<br>项目推荐</span>
          <span @click="goRegister">发布<br>采招信息</span>
          <span></span>
        </div>
        <a class="button warning" href="tel:010-82743196">
          <span class="ignore">拨打热线 </span><span class="important"> 免注册</span> 010-82743196
        </a>
      </div>
      <div class="module module3">
        <div class="keyword">
          <span @click="goRegister">招标公告</span>
          <span @click="goRegister">招标预告</span>
          <span @click="goRegister">政府采购</span>
          <span @click="goRegister">企业采购</span>
          <span @click="goRegister">中标业绩</span>
        </div>
        <div class="keyword">
          <span @click="goRegister">项目信息</span>
          <span @click="goRegister">信用查询</span>
          <span @click="goRegister">评标专家</span>
          <span @click="goRegister">对手监控</span>
          <span @click="goRegister">数据监测</span>

        </div>
        <div class="button default" @click="goRegister">了解更多服务</div>
      </div>
      <div class="module module4">
        <h1 class="subtitle large">
          招标采购信息 全行业覆盖
        </h1>
        <div class="keyword">
          <p>
            <span style="color:#fff;">工程建筑</span>
            <span>发电输电</span>
            <span>交通运输</span>
            <span style="color:#fff;">冶金矿山</span>
          </p>
          <p>
            <span>市政通信</span>
            <span style="color:#fff;">机电弱电</span>
            <span>石油化工</span>
          </p>
          <p>
            <span>医疗卫生</span>
            <span>安防科教</span>
          </p>
        </div>
        <div class="button default" @click="goRegister">
          了解更多行业
        </div>
      </div>
      <div class="module module5">
        <h1 class="subtitle large">
          专注业务 成就客户
        </h1>
        <ul>
          <li class="cl">
            <div class="fl">
              <div class="text">
                <h2><span>二十二年</span>行业经验</h2>
                <p>二十二年招投标行业服务经验。</p>
              </div>
            </div>
            <div class="fr">
              <img class="icon" src="./assets/images/icon1.png">
            </div>
          </li>
          <li class="cl">
            <div class="fl">
              <img class="icon" src="./assets/images/icon2.png">
            </div>
            <div class="fr">
              <div class="text">
                <h2>招投标领域<span>行业先行者</span></h2>
                <p>专注招标信息领域，招投标行业先行者，现有合作代理机构和业主总计5万多家。</p>
              </div>
            </div>
          </li>
          <li class="cl">
            <div class="fl">
              <div class="text">
                <h2><span>近千万</span>项目信息&nbsp;&nbsp;保质保量</h2>
                <p>确保信息的质量与品质，年发布近千万个项目招标采购一手信息。</p>
              </div>
            </div>
            <div class="fr">
              <img class="icon" src="./assets/images/icon3.png">
            </div>
          </li>
          <li class="cl">
            <div class="fl">
              <img class="icon" src="./assets/images/icon4.png">
            </div>
            <div class="fr">
              <div class="text">
                <h2>信息<span>全面和及时</span></h2>
                <p>体现信息的全面性和及时性，涉及项目金额高达15万亿。</p>
              </div>
            </div>
          </li>
          <li class="cl">
            <div class="fl">
              <div class="text">
                <h2>行业优选&nbsp;&nbsp;<span>一对一专属</span>客服</h2>
                <p>行业优选品牌一对一的专属金牌客服。</p>
              </div>
            </div>
            <div class="fr">
              <img class="icon" src="./assets/images/icon5.png">
            </div>
          </li>
          <li class="cl">
            <div class="fl">
              <img class="icon" src="./assets/images/icon6.png">
            </div>
            <div class="fr">
              <div class="text">
                <h2><span>多渠道推送</span>&nbsp;&nbsp;投标更从容</h2>
                <p>多渠道推送及时准确的招标信息，让投标更从容。</p>
              </div>
            </div>
          </li>
        </ul>
        <!-- 点击打开在线咨询 -->
        <div class="button primary" @click="goRegister">立即注册</div>
      </div>
      <div class="footer">
        <p>Copyright©2001-2022 采购与招标网</p>
      </div>
      <a class="onlineService" href="tel:010-82743196">
        <img src="./assets/images/phone.png">
        热线直拨：
        <span>010-82743196</span>
      </a>
    </div>

    <div v-if="showMask" class="mask"></div>
    <div v-if="showMask" class="containerPopup">
      <img src="./assets/images/SEMxryl_tc_img1.png" alt="" class="popup">
      <span class="content" @click="toRegister">马上领取</span>
      <img src="./assets/images/icon_close.png" alt="" class="closePopup" @click="showMask=false">
    </div>
  </div>

</template>

<script>
  // const validateMobile = (rule, value, callback) => {
  //   var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  //   if (!reg.test(value)) {
  //     callback(new Error('手机号格式错误'));
  //   } else {
  //     callback();
  //   }
  // };
  // const baseURL = "http://47.94.116.164:8081"

  const baseURL = "https://www.chinabidding.cn"

  const mobileRule = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;

  // const url = 'https://cstaticdun.126.net/load.min.js' + '?t=' + getTimestamp(1 * 60 * 1000) // 时长1分钟，建议时长分钟级别
  let CAPTCHA_OBJ;
  import axios from 'axios';
  import qs from 'qs';
  import message from './components/message.vue';
  import agreement from './components/agreement.vue';
  import chatButton from './components/chatButton.vue';
  import {
    convert1,
    getRoute,
    qimoChatClick
  } from './libs/common'

  export default {
    name: 'App',
    components: {
      message,
      agreement,
      chatButton,
    },
    data: () => {
      return {
        showMask: true,
        codeText: "获取验证码",
        url: "",
        mes: "",
        messageFlag: false,
        index: 60,
        timeout: 0,
        interver: 0,
        sendFlag: true,
        formData: {
          phone: "",
          code: "",
          name: "",
          company: "",
          panel: false,   //验证码是否滑动
          phoneTxt: "",
          codeTxt: "",
          nameTxt: "",
          companyTxt: "",
          panelTxt: "",
          codeflag: false
        },
        captchaFlag: false,
        sflag: false, //滑块是否校验成功
        codeData: {}, //验证成功后，传回来的数据
        registerParmas: {},
        agreeFlag: false,
        ggw_id: "defaut",
        utm_term: "defaut",
        utm_source: "default",
        utm_campaign: "default",
        utm_content: "default",
        utm_keyid: "default",
        bd_vid: "default",
        qhclickid: "default",
      }
    },
    methods: {
      init() {
        this.ggw_id = this.setGgwId();
        this.utm_term = this.setUtm();
        this.utm_source = this.getUtmSource();
        this.utm_campaign =this.getUtmType("utm_campaign");
        this.utm_content =this.getUtmType("utm_content");
        this.utm_keyid =this.getUtmType("utm_keyid");
        this.bd_vid = this.getUtmType("bd_vid");
        this.qhclickid = this.getUtmType("qhclickid");
        let locationUrl = location.href;
        if (locationUrl.indexOf("utm_term") !== -1 || locationUrl.indexOf("bd_vid") !== -1) {
          localStorage.setItem("logidUrl", locationUrl)
        }
        getRoute()
        if (sessionStorage.getItem("route")) {
          this.registerParmas = JSON.parse(sessionStorage.getItem("route"));
          // ggw_id = result.ggw_id;
          // keywords = result.s_txt;
          // visit_source = result.s_url;
          // if (result.s_source) {
          //   companySource = result.s_source;
          // }
        }
        this.url = 'https://cstaticdun.126.net/load.min.js' + '?t=' + this.getTimestamp(1 * 60 * 1000);
        //滑块验证对象
        let that = this;
        this.loadScript(this.url, function () {
          // 进行初始化验证码等后续逻辑
          initNECaptcha({
            captchaId: '21ddb75593e043d9a00419e7e5c772f9',
            element: '#captcha',
            mode: 'float', //图片为嵌入式
            width: '6rem',
            onReady: function (instance) {
              
            },
            onVerify: function (err, data) {
              if (!err) {
                if(that.regPhone()) {
                  that.formData.panel = true;
                  that.formData.panelTxt = "";
                  that.formData.codeflag = true;
                  document.querySelector("#app .module2").style.paddingTop = '5.8rem';
                  document.querySelector("#app .module2").style.height = '11.47rem';
                  document.querySelector("#app .module2 .form .single").style.top = '9.54rem';
                  that.codeData = data;
                  that.sendCode()
                }else{
                  CAPTCHA_OBJ.refresh();
                }
                // 当验证失败时，内部会自动refresh方法，无需手动再调用一次
                
              } else {
                that.formData.panel = false;
                return;
              }
            }
          }, function onload(instance) {
            CAPTCHA_OBJ = instance;
            document.querySelector(".yidun_panel").style.display="none";
            document.querySelector(".yidun_tips").style.lineHeight="0.7rem";
          })
        })
      },
      // 获取并存储ggw_id
      setGgwId() {
        var url = location.href;
        var ggw_id = "default";
        if (url.indexOf("ggw_id") !== -1) {
          // url中有ggw_id参数
          var queryList = location.search.substring(1).split("&");
          for (var i = 0; i < queryList.length; i++) {
            if (queryList[i].indexOf("ggw_id") !== -1) {
              ggw_id = queryList[i].split("=")[1]
              localStorage.setItem("ggw_id", ggw_id)
              return ggw_id
            }
          }
        } else if (localStorage.getItem("ggw_id")) {
          ggw_id = localStorage.getItem("ggw_id");
          return ggw_id;
        } 
          return ggw_id;
          
        // else {
        //   var dq = decodeURI(document.referrer);
        //   if (dq.indexOf("/html/index") != -1 || dq == "https://chinabidding.cn/") {
        //     return ggw_id = "7002";
        //   } else if (dq.indexOf("/html/ybcloud") != -1) {
        //     return ggw_id = "7003";
        //   } else if (dq.indexOf("/html/yuanbo") != -1) {
        //     return ggw_id = "7001";
        //   } else if (dq.indexOf("/html/channel") != -1) {

        //     var value = "";
        //     if (dq.split("?")[1] && dq.split("?")[1].split("=")[0] == "channel_id") {
        //       value = dq.split("?")[1].split("=")[1];
        //     } else {
        //       value = "1"
        //     }
        //     switch (value) {
        //       case "10":
        //         ggw_id = "7011";
        //         break;
        //       case "9":
        //         ggw_id = "7013";
        //         break;
        //       case "8":
        //         ggw_id = "7012";
        //         break;
        //       case "7":
        //         ggw_id = "7010";
        //         break;
        //       case "6":
        //         ggw_id = "7007";
        //         break;
        //       case "5":
        //         ggw_id = "7009";
        //         break;
        //       case "4":
        //         ggw_id = "7005";
        //         break;
        //       case "3":
        //         ggw_id = "7004";
        //         break;
        //       case "2":
        //         ggw_id = "7006";
        //         break;
        //       default:
        //         ggw_id = "7008";
        //         break;
        //     }
        //     return ggw_id;
        //   }
        //   return ggw_id;
        // }
      },
      // 获取并存储utm_term
      setUtm() {
        var url = location.href;
        var utm_term = "default";
        if (url.indexOf("utm_term") !== -1) {
          // url中有utm_term参数
          var queryList = location.search.substring(1).split("&");
          for (var i = 0; i < queryList.length; i++) {
            if (queryList[i].indexOf("utm_term") !== -1) {
              utm_term = queryList[i].split("=")[1]
              localStorage.setItem("utm_term", utm_term)
              return utm_term
            }
          }
        } else if (localStorage.getItem("utm_term")) {
          utm_term = localStorage.getItem("utm_term");
          return utm_term;
        }
        return utm_term;
      },
      getUtmSource() {   //0426获取utm
        var url = location.href;
        var utm_source = "default";
        if (url.indexOf("utm_source") !== -1) {
          // utm_source
          var queryList = location.search.substring(1).split("&");
          for (var i = 0; i < queryList.length; i++) {
            if (queryList[i].indexOf("utm_source") !== -1) {
              utm_source = queryList[i].split("=")[1]
              localStorage.setItem("utm_source", utm_source)
              return utm_source
            }
          }
        } else if (localStorage.getItem("utm_source")) {
          utm_source = localStorage.getItem("utm_source");
          return utm_source;
        }
        return utm_source;
      },
      getUtmType(item) {
        var url = location.href;
        var utm_temp = "default";
        if (url.indexOf(item) !== -1) {
          var queryList = location.search.substring(1).split("&");
          for (var i = 0; i < queryList.length; i++) {
            if (queryList[i].indexOf(item) !== -1) {
              utm_temp = queryList[i].split("=")[1]
              localStorage.setItem(item, utm_temp)
              return utm_temp
            }
          }
        } else if (localStorage.getItem(item)) {
          utm_temp = localStorage.getItem(item);
          return utm_temp;
        }
        return utm_temp;
      },
      getService() {
        qimoChatClick()
      },
      getCode() {
        if(this.codeText == "获取验证码") {
          this.formData.panel = false;
          CAPTCHA_OBJ.refresh();
          this.regPanel();
        }
      },
      sendCode() {
        axios({
          method: 'post',
          url: baseURL + '/yuan/login/messagelogin/loginorregister',
          data: qs.stringify({
            phone: convert1(this.formData.phone),
            geetest_challenge: this.codeData.validate,
            geetest_validate: this.codeData.validate,
            geetest_seccode: this.codeData.validate
          }),
        }).then(res => {
          if (res.data.code === 202) {
            this.afterSendCode()
          } else {
            this.message(res.data.msg)
          }
        })

      },
      afterSendCode() {
        this.codeText = this.index + "s后可重发";
        this.sendFlag = false;
        this.interver = setInterval(() => {
          this.index--
          this.codeText = this.index + "s后可重发";
        }, 1000);
        this.timeout = setTimeout(() => {
          clearInterval(this.interver)
          this.codeText = "获取验证码";
          this.sendFlag = true;
          this.index = 60

        }, 60000)
      },
      message(mes) {
        let key = parseInt(Math.random() * 1000000000000)
        this.messageFlag = false;
        this.mes = mes;
        this.key = key;
        this.messageFlag = true;
      },
      toRegister(){
        this.showMask = false;
        this.goRegister();
      },
      goRegister() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
        this.message("请先完成注册")
      },
      register() {
        if(this.formData.codeflag) {  //校验3个
          let flag1 = this.regPhone(), flag2 = this.regPanel(), flag3 = this.regCode(), flag4 = this.regName(), flag5 = this.regCompany();

          if(flag1 && flag2 && flag3 && flag4 && flag5) {
            var time = new Date();
            var nowTime = String(time.getFullYear()) + String(time.getMonth() + 1) + String(time.getDate()) + String(time
              .getHours()) + String(time.getMinutes()) + String(time.getSeconds());

            if(window.location.href.indexOf("?") != -1){
              var urlList = window.location.href.split("?")[1].split("&");
            }else{
              var urlList = [];
            }
            
            var adflag = false;
            urlList.forEach((item)=>{
              if(item.split("=")[0]=="gtype" && item.split("=")[1]=="adscreen"){
                adflag = true;
              }
            })

            // let logidUrl = "https://m.chinabidding.cn/tg/index.html"  + "?bd_vid =" + this.bd_vid;
            let logidUrl = "";
            if (localStorage.getItem("logidUrl")){
              logidUrl = localStorage.getItem("logidUrl");
            }

            axios({
              method: 'post',
              url: baseURL + '/yuan/register/registernew/register',
              data: qs.stringify({
                phone: convert1(this.formData.phone),
                phonecode: convert1(this.formData.code),
                t: nowTime,
                companySource: adflag?25:22,
                custName: convert1(this.formData.name),
                companyName: convert1(this.formData.company),
                ggw_id: convert1(this.ggw_id),
                utm_term: convert1(this.utm_term),
                utm_source: convert1(this.utm_source),
                utm_campaign: convert1(this.utm_campaign),
                utm_content: convert1(this.utm_content),
                utm_keyid: convert1(this.utm_keyid),
                qhclickid: convert1(this.qhclickid),
                keyWords: convert1(this.registerParmas.s_txt),
                visit_source: convert1(this.registerParmas.s_url),
                sem: 'sem',
                logidUrl: convert1(logidUrl)
              }),
            }).then(res => {
              if (res.data.code === 201) {
                gio('track', 'zhucechenggong');
                if(adflag){  //广告机注册
                  this.message("注册成功")
                  setTimeout(() => {
                    if(window.location.href.indexOf("?") == -1){
                      window.location.href = "https://m.chinabidding.cn/"
                    }else{
                      window.location.href = "https://www.chinabidding.cn/public/adscreen/html/adZzb.html?"+window.location.href.split("?")[1]
                    }
                  }, 1000)
                }else{
                  this.message("注册成功，即将跳转到采招网移动端")
                  setTimeout(() => {
                    this.post('https://m.chinabidding.cn', JSON.parse(res.data.msg))
                  }, 1000);
                }
              } else {
                this.message(res.data.msg)
              }
            })
          }
        }else{  //校验2个
          if(this.regPhone() && this.regPanel()) {
            return
          }
        }
      },
      getTimestamp(msec) {
        msec = !msec && msec !== 0 ? msec : 1
        return parseInt((new Date()).valueOf() / msec, 10)
      },
      loadScript(src, cb) {
        var head = document.head || document.getElementsByTagName('head')[0]
        var script = document.createElement('script')

        cb = cb || function () {}

        script.type = 'text/javascript'
        script.src = src

        if (!('onload' in script)) {
          script.onreadystatechange = function () {
            if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
            this.onreadystatechange = null
            cb(script)
          }
        }

        script.onload = function () {
          this.onload = null
          cb(script)
        }

        head.appendChild(script)
      },
      closeAgree() {
        this.agreeFlag = false;
      },
      open() {
        this.agreeFlag = true;
      },
      post(url, params) {
        var temp = document.createElement("form");
        temp.action = url;
        temp.method = "post";
        // temp.target = "_blank";
        temp.style.display = "none";
        for (var x in params) {
          var opt = document.createElement("textarea");
          opt.name = x;
          opt.value = params[x];
          temp.appendChild(opt);
        }
        document.body.appendChild(temp);
        temp.submit();
        temp.remove();
        // return temp;
      },
      tologin() {
        // if(window.location.href.indexOf("?")!=-1 && window.location.href.indexOf("gtype")!=-1){
        //   window.location.href = "https://www.chinabidding.cn/public/adscreen/html/adLogin.html?"+window.location.href.split("?")[1];
        // }else{
        //   window.location.href = "https://www.chinabidding.cn/public/adscreen/html/adLogin.html";
        // }
        window.location.href = "https://m.chinabidding.cn/login?url=/";
      },

      regPhone() {
        let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(this.formData.phone){
          if(reg.test(this.formData.phone)) {
            this.formData.phoneTxt = ""
            return true
          }else{
            this.formData.phoneTxt = "请输入正确手机号码"
            return false
          }
        }else{
          this.formData.phoneTxt = "请输入手机号码"
          return false
        }
      },
      regPanel() {
        if(this.formData.panel){
          this.formData.panelTxt = ""
          return true
        }else{
          this.formData.panelTxt = "请完成滑动验证"
          return false
        }
      },
      regCode() {
        let reg = /^[A-Za-z0-9]+$/;
        if(this.formData.code){
          if(reg.test(this.formData.code)) {
            this.formData.codeTxt = ""
            return true
          } else {
            this.formData.codeTxt = "验证码错误，请重新输入"
            return false
          }
        }else{
          this.formData.codeTxt = "请输入手机验证码"
          return false
        }
      },
      regName() {
        let reg = /^[A-Za-z\u4E00-\u9FFF]+$/;
        if(this.formData.name){
          if(this.formData.name.length>=2) {
            if(this.formData.name.length<=25) {
              if(reg.test(this.formData.name)) {
                this.formData.nameTxt = ""
                return true
              }else{
                this.formData.nameTxt = "联系人姓名不能包含符号、空格与数字"
                return false
              }
            }else{
              this.formData.nameTxt = "联系人姓名输入过长（2-25位）"
              return false
            }
          }else{
            this.formData.nameTxt = "联系人姓名输入过短（2-25位）"
            return false
          }
        }else{
          this.formData.nameTxt = "请输入联系人姓名"
          return false
        }
      },
      regCompany() {
        let reg = /^[0-9A-Za-z\u4E00-\u9FFF（）()]+$/;
        if(this.formData.company){
          if(this.formData.company.length>=4) {
            if(this.formData.company.length<=50) {
              if(reg.test(this.formData.company)) {
                this.formData.companyTxt = ""
                return true
              }else{
                this.formData.companyTxt = "公司名称不能包含符号与空格"
                return false
              }
            }else{
              this.formData.companyTxt = "公司名称输入过长（4-50位）"
              return false
            }
          }else{
            this.formData.companyTxt = "公司名称输入过短（4-50位）"
            return false
          }
        }else{
          this.formData.companyTxt = "请输入公司名称"
          return false
        }
      },
      justify() {
        let doc = document;
        let win = window;
        var docEl = doc.documentElement,
        setFontSize = function() {
            var clientWidth = document.documentElement.clientWidth;
            if(!clientWidth) return;
            //原本对于html的字号设置 我这里用的是750的标准 ，640的也是同理
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            if(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize) {
                var size = window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split('p')[0];
                //这里再取出当前html的font-size，和你想附的值进行比较，
                //这里为什么不直接用size< 原因是正常机型的size也不一定等于你想附的值，尝试了很多机型，除了问题机型外，一般差距很小，另一半完全相等;      
                //为什么不直接*1.25 也不解释了 最终比例不一定是1.25
                if(size*1.2 < 100 * (clientWidth / 750)) {
                //如果当前html的font-size 的1.2倍仍然小于 之前想设置的值，就说明是问题机型，给之前想附的值乘1.25倍，这样他会被系统再次除1.25得到的才是我们想附的值
                    docEl.style.fontSize = 125 * (clientWidth / 750) + 'px';
                }
            }
        };
        doc.addEventListener('DOMContentLoaded', setFontSize, false);
      },
    },
    mounted() {
      this.init();
      this.justify();
      axios({
          method: 'post',
          url: baseURL + '/yuan/channel/allchannel/getchanneldata',
          data: qs.stringify({
            channel_id: '1'
          }),
        }).then(res => {
         
        })
    }
  }
</script>