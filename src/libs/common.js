// 获取ggw_id,关键字，来源2020-09-21
export const getRoute = function () {
    var route = {
        ggw_id: "",
        s_url: "",
        s_txt: "",
        s_source: 1
    };
    if (sessionStorage.getItem("route")) {
        var s_roure = JSON.parse(sessionStorage.getItem("route"));
        route.ggw_id = s_roure.ggw_id;
        route.s_url = s_roure.s_url;
        route.s_txt = s_roure.s_txt;
        if (s_roure.s_source) {
            route.s_source = s_roure.s_source
        }
    }
    var dq = decodeURI(document.referrer); //获取上一个页面信息
    var eg = [];
    eg.push(['baidu', 'wd']);
    eg.push(['google', 'q']);
    eg.push(['soso', 'w']);
    eg.push(['yodao', 'q']);
    eg.push(['bing', 'q']);
    eg.push(['yahoo', 'q']);
    eg.push(['sogou', 'query']);
    eg.push(['gougou', 'search']);
    eg.push(['360', 'q']);
    eg.push(['so', 'q']);
    for (var el in eg) {
        var s = eg[el];
        var DandQ = String(s).split(","); //字符分割              
        if (dq.split("?")[1] && dq.split("?")[0].indexOf(DandQ[0]) > 0) {
            dq.split("?")[1].split("&").forEach(function (item) {
                if (item.split("=")[0] == DandQ[1]) {
                    route.s_url = dq.split("?")[0];
                    route.s_txt = decodeURIComponent(item.split("=")[1]);
                    console.log(route.s_txt)
                }
            })
        }
    }
    if (dq.indexOf("/html/index") != -1) {
        route.ggw_id = "7002";
        if (!(route.s_url && route.s_url != "直接访问")) {
            route.s_url = "直接访问"
        }
    } else if (dq.indexOf("/html/ybcloud") != -1) {
        route.ggw_id = "7003";
        route.s_source = 17;
        if (!(route.s_url && route.s_url != "直接访问")) {
            route.s_url = "直接访问"
        }
    } else if (dq.indexOf("/html/yuanbo") != -1) {
        route.ggw_id = "7001";
        route.s_source = 15;
        if (!(route.s_url && route.s_url != "直接访问")) {
            route.s_url = "直接访问"
        }
    } else if (dq.indexOf("/html/channel") != -1) {
        var value = "";
        if (dq.split("?")[1] && dq.split("?")[1].split("=")[0] == "channel_id") {
            value = dq.split("?")[1].split("=")[1];
        } else {
            value = "1"
        }

        if (!(route.s_url && route.s_url != "直接访问")) {
            route.s_url = "直接访问"
        }
        switch (value) {
            case "10":
                route.ggw_id = "7011";
                break;
            case "9":
                route.ggw_id = "7013";
                break;
            case "8":
                route.ggw_id = "7012";
                break;
            case "7":
                route.ggw_id = "7010";
                break;
            case "6":
                route.ggw_id = "7007";
                break;
            case "5":
                route.ggw_id = "7009";
                break;
            case "4":
                route.ggw_id = "7005";
                break;
            case "3":
                route.ggw_id = "7004";
                break;
            case "2":
                route.ggw_id = "7006";
                break;
            default:
                route.ggw_id = "7008";
                break;
        }
    } else {
        if ((!route.s_txt) && dq.indexOf("/html/login") == -1) {
            route.s_url = dq.split("?")[0]
        }
    }

    sessionStorage.setItem("route", JSON.stringify(route));
}

// 数据加密
export const convert1 = function (txt){
    var a = '434D643932666D644B454E304E646C616535334D6435666E';
    a = CryptoJS.enc.Hex.parse(a)
    var b = CryptoJS.enc.Hex.parse("30393138313633304D4D474C435A5059")
    var enc = CryptoJS.AES.encrypt(txt ,a,{
        iv:b,
        mode: CryptoJS.mode.CBC,  
        padding: CryptoJS.pad.Pkcs7
    })
    return enc.ciphertext.toString()
}


// 在线客服咨询
export const  qimoChatClick = function() {
    // var url = "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/3"; //游客
    // var xmlhttp;
    // if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    //     xmlhttp=new XMLHttpRequest();
    // }
    // else {// code for IE6, IE5
    //     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    // }
    // xmlhttp.open("GET","/cblcn/home/logincheck?t=" + Math.random(),true);
    // xmlhttp.send();
    // xmlhttp.onreadystatechange=function() {
    //     if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    //         var result = xmlhttp.responseText;
    //         if(result){
    //             var us = eval('(' + result + ')');
    //             if(us&&us.record_id){
    //                 //免费用户
    //                 if(us.cust_right_group == 0){
    //                     url = "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/1";
    //                 }else {
    //                     //收费用户
    //                     url = "https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/2";
    //                 }

    //             }

    //             window.open(url,"","modal=yes,width=800,height=600,resizable=no,scrollbars=no,left=100,top=100");
    //         }
    //     }
    // }
    location.href = `https://tb.53kf.com/code/client/0ae6bb374440bbf180f02e04d57fb6962/3`
}
