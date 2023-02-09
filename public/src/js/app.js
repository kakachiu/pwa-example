// 判斷瀏覽器是否支援 Service Workers
if ("serviceWorker" in navigator) {
  // 註冊 Service Workers
  // register 是支援 Promise
  navigator.serviceWorker
    .register("/sw.js")
    .then(res => {
      console.log("Service worker registered!");
    })
    .catch(error => {
      console.log(error);
    });
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", function (event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault(); // 取消預設的直接跳出通知設定
  deferredPrompt = event; // 將監聽到的install banner事件傳到deferredPrompt變數

  return false;
});
