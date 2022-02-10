var website_video = document.getElementById("website_video")

document.getElementById("website_info").onclick = function() {
  console.log("More info button clicked");
  website_video.style.display = "inline";
}

website_video.addEventListener("click", function() {
  website_video.style.display = "none";
});
