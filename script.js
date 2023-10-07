const showShare = document.getElementById("showShare");
const hideButton = document.getElementById("share-box");
showShare.addEventListener("click", () => {
  if (window.innerWidth >= 900) {
    showShare.classList.toggle("share-svg-logo-normal");
    showShare.classList.toggle("share-svg-logo-onClick");
    hideButton.classList.toggle("hidden");
  } else if (window.innerWidth < 900) {
    // hideButton.classList.toggle("hidden-mobile");
    // hideButton.classList.toggle("hidden");

    showShare.addEventListener("mouseover", function () {
      hideButton.classList.remove("hidden");
      hideButton.classList.add("hidden-mobile");
    });

    showShare.addEventListener("mouseout", function () {
      hideButton.classList.remove("hidden-mobile");
      hideButton.classList.add("hidden");
    });
  }
});
