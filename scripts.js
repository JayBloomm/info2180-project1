document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".newsletter form");
  const emailInput = document.getElementById("email");
  const message = document.querySelector(".message");

  form.addEventListener("submit", function (event) {
    // Stop the page from reloading on submit
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
      message.textContent = "Enter a valid email address.";
      return;
    }

    message.textContent =
      "Thanks Your email address " + email + " has been added to our mailing list!";
    form.reset();
  });
});