const showShare = document.getElementById("showShare");
const hideButton = document.getElementById("share-box");

showShare.addEventListener("click", () => {
  if (window.innerWidth >= 900) {
    showShare.classList.toggle("share-svg-logo-onClick");

    hideButton.classList.toggle("hidden");
  } else if (window.innerWidth < 900) {
    hideButton.classList.toggle("hidden");

    hideButton.classList.toggle("hidden-mobile");
  }
});
