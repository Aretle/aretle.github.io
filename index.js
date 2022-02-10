var website_video = document.getElementById("website_video")

document.getElementById("website_info").onclick = function() {
  console.log("More info button clicked");
  website_video.style.display = "inline";
}

website_video.addEventListener("click", function() {
  website_video.style.display = "none";
  console.log("Exit video");
  var iframe = document.getElementsByTagName("iframe")[0];
  var url = iframe.getAttribute('src');
  iframe.setAttribute('src', '');
  iframe.setAttribute('src', url);
});
