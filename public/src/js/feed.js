var shareImageButton = document.querySelector("#share-image-button");
var createPostArea = document.querySelector("#create-post");
var closeCreatePostModalButton = document.querySelector(
  "#close-create-post-modal-btn"
);

function openCreatePostModal() {
  createPostArea.style.display = "block";

  if (deferredPrompt) {
    // 確定我們有「攔截」到chrome所發出的install banner事件
    deferredPrompt.prompt(); // 決定要跳出通知

    // 根據用戶的選擇進行不同處理，這邊我指印出log結果
    deferredPrompt.userChoice.then(function (choiceResult) {
      console.log(choiceResult.outcome);

      if (choiceResult.outcome === "dismissed") {
        console.log("User cancelled installation");
      } else {
        console.log("User added to home screen");
      }
    });
    deferredPrompt = null; // 一旦用戶允許加入後，之後就不會再出現通知
  }
}

function closeCreatePostModal() {
  createPostArea.style.display = "none";
}

shareImageButton.addEventListener("click", openCreatePostModal);

closeCreatePostModalButton.addEventListener("click", closeCreatePostModal);
