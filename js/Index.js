const shareBtn = document.querySelector(".social-link-btn");
const socialDiv = document.querySelector(".social-icons");
const shareDiv = document.querySelector(".share-div");

shareBtn.addEventListener("click", function () {
  socialDiv.classList.toggle("active");
});

shareDiv.addEventListener("click", function () {
  socialDiv.classList.remove("active");
});
