// 判斷瀏覽器是否支援 Service Workers
if ("serviceWorker" in navigator) {
  // 註冊 Service Workers
  // register 是支援 Promise
  navigator.serviceWorker
    .register("./sw.js")
    .then(res => {
      console.log("Service worker registered!");
    })
    .catch(error => {
      console.log(error);
    });
}

let deferredPrompt;
const addBtn = document.querySelector(".addBtn");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", e => {
  // 防止 Chrome 67 及更早版本自动显示安装提示
  e.preventDefault();
  // 稍后再触发此事件
  deferredPrompt = e;
  // 更新 UI 以提醒用户可以将 App 安装到桌面
  addBtn.style.display = "block";

  addBtn.addEventListener("click", e => {
    // 隐藏显示 A2HS 按钮的界面
    addBtn.style.display = "none";
    // 显示安装提示
    deferredPrompt.prompt();
    // 等待用户反馈
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

// let deferredPrompt;

// window.addEventListener("beforeinstallprompt", function (event) {
//   console.log("beforeinstallprompt fired");
//   event.preventDefault(); // 取消預設的直接跳出通知設定
//   deferredPrompt = event; // 將監聽到的install banner事件傳到deferredPrompt變數

//   // return false;
// });

// window.addEventListener("load", function () {
//   if (deferredPrompt) {
//     // 確定我們有「攔截」到chrome所發出的install banner事件
//     deferredPrompt.prompt(); // 決定要跳出通知

//     // 根據用戶的選擇進行不同處理，這邊我指印出log結果
//     deferredPrompt.userChoice.then(function (choiceResult) {
//       console.log(choiceResult.outcome);

//       if (choiceResult.outcome === "dismissed") {
//         console.log("User cancelled installation");
//       } else {
//         console.log("User added to home screen");
//         shareImageButton.style.display = "none";
//       }
//     });
//     deferredPrompt = null; // 一旦用戶允許加入後，之後就不會再出現通知
//   }
// });
