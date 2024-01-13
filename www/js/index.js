/*
 * Copyright (c) [2024] [BSF]
 * [https://byteee.fund]
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("device ready!");

  // check wechat app installed
  window.Wechat.isWXAppInstalled(
    function (response) {
      document.getElementById("installResult").innerText = response;
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );

  window.Wechat.getSDKVersion(
    function (response) {
      document.getElementById("versionResult").innerText = response;
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loginButton").addEventListener("click", sendAuthReq);
  document
    .getElementById("scanButton")
    .addEventListener("click", sendAuthScanReq);
  document.getElementById("payButton").addEventListener("click", sendPayReq);
  document
    .getElementById("shareTextButton")
    .addEventListener("click", shareText);
  document
    .getElementById("shareImageButton")
    .addEventListener("click", shareImage);
  document
    .getElementById("shareVideoButton")
    .addEventListener("click", shareVideo);
  document
    .getElementById("shareWebPageButton")
    .addEventListener("click", shareWebPage);
  document
    .getElementById("shareMiniProgramButton")
    .addEventListener("click", shareMiniProgram);
  document
    .getElementById("launchMiniProgramButton")
    .addEventListener("click", launchMiniProgram);
  document
    .getElementById("openCustomerServiceChatButton")
    .addEventListener("click", openCustomerServiceChat);
  document
    .getElementById("launchWechatButton")
    .addEventListener("click", launchWechat);

  document
    .getElementById("checkUniversalLinkButton")
    .addEventListener("click", checkUniversalLink);
  document.getElementById("startLogButton").addEventListener("click", startLog);
  document.getElementById("stopLogButton").addEventListener("click", stopLog);
});

document.addEventListener("wechat.onQrcodeScanned", function () {
  console.log("onQrcodeScanned!!!");
}, false);

document.addEventListener("wechat.onAuthFinish", function () {
  console.log("onAuthFinish!!!");
}, false);

document.addEventListener("wechat.apiInit", function (event) {
    console.log("apiInit!!!");
    console.log(event.result);
   document.getElementById("apiResult").innerText = event.result;
}, false);

document.addEventListener(
  "wechat.onLog",
  function (message) {
    console.log(message);
  },
  false
);


function checkUniversalLink() {
  window.Wechat.checkUniversalLinkReady(
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function startLog() {
  window.Wechat.startLog(
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function stopLog() {
  window.Wechat.stopLog(
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function launchWechat() {
  window.Wechat.launchWechatApp(
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function sendAuthReq() {
  window.Wechat.login(
    { scope: "snsapi_userinfo", state: "wechat_sdk_demo_test" },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function sendAuthScanReq() {
  window.Wechat.auth(
    { scope: "111", nonceStr: "2222", timeStamp: "xxxx", signature: "xxxx" },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function shareText() {
  window.Wechat.shareText(
    {
      text: "test",
      scene: 0,
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function shareImage() {
  window.Wechat.shareImage(
    {
      imagePath: "www/img/logo.png",
      scene: 0,
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function shareVideo() {
  window.Wechat.shareVideo(
    {
      title: "video",
      description: "this is a video",
      videoUrl: "http://vjs.zencdn.net/v/oceans.mp4",
      thumbPath: "www/img/logo.png",
      scene: 0,
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function shareWebPage() {
  window.Wechat.shareWebpage(
    {
      webpageUrl: "https://byteee.fund",
//      title: "webpage",
      description: "this is a webpage",
      thumbPath: "www/img/logo.png",
//      scene: 0,
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function shareMiniProgram() {
  window.Wechat.shareMiniProgram(
    {
      webpageUrl: "https://byteee.fund",
      title: "miniprogram",
      description: "this is a webpage",
      imagePath: "www/img/logo.png",
      userName: "gh_67210fc11b59",
      path: "/pages/index",
      miniprogramType: 0,
      withShareTicket: true,
      scene: 0,
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function shareWebPage() {
  window.Wechat.shareWebPage(
    {
      webpageUrl: "https://byteee.fund",
      title: "webpage",
      description: "this is a webpage",
      thumbPath: "www/img/logo.png",
      scene: 0,
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function launchMiniProgram() {
  window.Wechat.launchMiniProgram(
    {
      userName: "gh_67210fc11b59",
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function openCustomerServiceChat() {
  window.Wechat.openCustomerServiceChat(
    {
      corpId: "ww36daeb5459917edd",
      url: "https://work.weixin.qq.com/kfid/kfc1c139cd3beb2f516",
    },
    function (response) {
      alert(JSON.stringify(response));
    },
    function (error) {
      alert(JSON.stringify(error));
    }
  );
}

function sendPayReq() {
  window.Wechat.requestPayment({
    appid: "wxd930ea5d5a258f4f",
    mchId: "1900000109",
    prepayid: "1101000000140415649af9fc314aa427",
    package: "Sign=WXPay",
    noncestr: "1101000000140429eb40476f8896f4c9",
    timestamp: "1398746574",
    sign:
      "oR9d8PuhnIc+YZ8cBHFCwfgpaK9gd7vaRvkYD7rthRAZ/X+QBhcCYL21N7cHCTUxbQ+EAt6Uy+lwSN22f5YZvI45MLko8Pfso0jm46v5hqcVwrk6uddkGuT+Cdvu4WBqDzaDjnNa5UK3GfE1Wfl2gHxIIY5lLdUgWFts17D4WuolLLkiFZV+JSHMvH7eaLdT9N5GBovBwu5yYKUR7skR8Fu+LozcSqQixnlEZUfyE55feLOQTUYzLmR9pNtPbPsu6WVhbNHMS3Ss2+AehHvz+n64GDmXxbX++IOBvm2olHu3PsOUGRwhudhVf7UcGcunXt8cqNjKNqZLhLw4jq/xDg==",
  },
  function (response) {
    alert(JSON.stringify(response));
  },
  function (error) {
    alert(JSON.stringify(error));
  });
}
