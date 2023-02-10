// 判斷瀏覽器是否支援 Service Workers
// if ("serviceWorker" in navigator) {
//   // 註冊 Service Workers
//   // register 是支援 Promise
//   navigator.serviceWorker
//     .register("./sw.js")
//     .then(res => {
//       console.log("Service worker registered!");
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
if ("serviceWorker" in navigator) {
  // register 是支援 Promise 的
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}

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
