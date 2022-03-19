const LinkOnLoad = () => {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) {
    // "Android";
    document.getElementById("facebook").href = "fb://page/109125357475042";
  } else if (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  ) {
    document.getElementById("facebook").href = "fb://profile/109125357475042";
    //return "iOS";
  }
  //return "Other";
  document.getElementById("facebook").href = "fb://profile/109125357475042";
};
