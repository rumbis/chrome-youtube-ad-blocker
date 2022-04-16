setInterval(() => {
  const skipBtn = document.getElementsByClassName("ytp-ad-skip-button");
  const ytp_overlay = document.getElementsByClassName(
    "ytp-ad-overlay-close-button"
  );
  const fullAdd = document.getElementsByClassName("html5-main-video");
  const fullAddCheck = document.getElementsByClassName("ytp-ad-preview-slot");
  if (skipBtn[0] != undefined) {
    skipBtn[0].click();
    console.log("ad skipped");
  }
  if (ytp_overlay[0] != undefined) {
    ytp_overlay[0].click();
    console.log("ad closed");
  }
  if (fullAddCheck[0] != undefined && fullAdd[0] != undefined) {
    console.log("full add skipped");
    fullAdd[0].currentTime = fullAdd[0].duration;
  }
}, 420);
