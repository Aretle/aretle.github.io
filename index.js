var website_video = document.getElementById("website_video")

document.getElementById("website_info").onclick = function() {
  console.log("More info button clicked");
  website_video.style.display = "inline";
}

website_video.addEventListener("click", function() {
  website_video.style.display = "none";
});

function sendEmail() {
  Email.send({
    SecureToken: "6715f5a5-7173-4b07-b6b0-7b0de44da2f9",
    To: 'danielfeltham98@gmail.com',
    From: "danielfeltham98@gmail.com",
    Subject: "Website Contact Form Enquiry",
    Body: "Name: " + document.getElementById("contact_name").value +
      "<br> Email: " + document.getElementById("contact_email").value +
      "<br> Message: " + document.getElementById("contact_message").value
  }).then(
    message => alert(message)
  );
}