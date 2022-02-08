var website_video = document.getElementById("website_video")

document.getElementById("website_info").onclick = function () {
  console.log("More info button clicked");
  website_video.style.display = "inline";
}

website_video.addEventListener("click", function() {
  website_video.style.display = "none";
});

function sendEmail(){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "danielfeltham98@gmail.com",
      Password : "",
      To : 'danielfeltham98@gmail.com',
      From : document.getElementById("contact_email").value,
      Subject : "Website Contact Form Enquiry",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}
