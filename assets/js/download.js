// // 复制的方法
// function copyText(text, callback) {
//   // text: 要复制的内容， callback: 回调
//   var tag = document.createElement("input");
//   tag.setAttribute("id", "cp_hgz_input");
//   tag.value = text;
//   document.getElementsByTagName("body")[0].appendChild(tag);
//   document.getElementById("cp_hgz_input").select();
//   document.execCommand("copy");
//   document.getElementById("cp_hgz_input").remove();
//   if (callback) {
//     callback(text);
//   }
// }
// //获取get参数的方法
// function getQueryVariable(variable) {
//   var query = window.location.search.substring(1);
//   var vars = query.split("&");
//   for (var i = 0; i < vars.length; i++) {
//     var pair = vars[i].split("=");
//     if (pair[0] == variable) {
//       return pair[1];
//     }
//   }
//   return "";
// }

// function setUrl() {
//   let codeid;
//   if (location.search.indexOf("re=") < 0) {
//     const host = location.host;
//     for (let i in urlData) {
//       if (host.indexOf(i) >= 0) {
//         codeid = urlData[i].channel_id;
//       }
//     }
//   }
//   return codeid || "";
// }
// async function DownSoft() {
//   var u = navigator.userAgent;
//   //iOS
//   var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
//   //Android
//   var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;

//   //begin get channel code from clipboarad
//   let gameId = getQueryVariable("from_gameid");
//   let code = getQueryVariable("channelCode");
//   let copyObj = {
//     from_gameid: gameId,
//     channelCode: code,
//   };
//   let copyStr = JSON.stringify(copyObj);
//   copyText(copyStr, function () {
//     console.log("copy successful", copyStr);
//   });

//   //end get channel code from clipboarad

//   if (isiOS) {
//     window.location.href =
//       "https://zbgmg.hjfoycmy.com/api/c/xttclkk8";
//   } else if (isAndroid) {
//     window.location.href =
// //      "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/rummmytry-release-massage.apk";
//       "https://appsvip.s3.ap-south-1.amazonaws.com/rummmytry.apk";
//   } else {
//     window.location.href =
// //      "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/rummmytry-release-massage.apk";
//       "https://appsvip.s3.ap-south-1.amazonaws.com/rummmytry.apk";
//   }
// }

function DownSoft() {
  var u = navigator.userAgent;
  //iOS
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  //Android
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;

  //begin get channel code from clipboarad
  let gameId = getQueryVariable("from_gameid")
  let code = getQueryVariable("channelCode")
  let copyObj = {
      from_gameid: gameId,
      channelCode: code
  }
  let copyStr = JSON.stringify(copyObj)
  copyText(copyStr, function () { console.log('copy successful', copyStr) })
  //end get channel code from clipboard

  let fbclid = getQueryVariable("fbclid")
  var golink="";
  console.log('fbclid',fbclid)
  if(fbclid.length>1){
     //  channel apk  this  url 
     golink="https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-6666678.apk";	
  }else{
     golink="https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-6666678.apk";	
  }


  if (isiOS) {
      //if  not have ios 注释
      window.location.href = "https://xjpklccossyd06.zxcvrfrec.com/Rummytry/RummyTry-channel-6666678.apk"
  }else if (isAndroid) {
      window.location.href = golink;
  }else {
    window.location.href = golink;
  }
}
