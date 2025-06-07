const webAppUrl = "https://script.google.com/macros/s/AKfycbyWtp7ze7yznxe9llL0PXf2UY6KOQWtViHhYziSqRoq2uJCYatDdkElCsTA2puDLyLH/exec"; // Replace this with your actual Web App URL

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter a valid email.");
    return;
  }

  fetch(webAppUrl, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      alert("Thank you for signing up!");
      emailInput.value = "";
      document.getElementById("download").style.display = "block"; // Show download link
    } else {
      alert("Error saving your email. Please try again.");
    }
  })
  .catch(() => {
    alert("Network error. Please try again.");
  });
});
