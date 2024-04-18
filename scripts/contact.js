// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button");
  const contactPage = document.getElementById("contact-page");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    contactPage.innerHTML =
      '<p class="thank-you-message">Thank you for your message!</p>';

    const thankYouMessage = document.querySelector(".thank-you-message");
    thankYouMessage.style.fontSize = "24px";
    thankYouMessage.style.paddingBottom = "300px";
  });
});
