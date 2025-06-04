document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  // Prepare URL-encoded form data
  const formData = new URLSearchParams();
  formData.append("email", email);

  fetch("https://script.google.com/macros/s/AKfycbyHnQ0FfFinqiU84vlNJApOqTdhLJW2IrTgNN6qDo0LEYP6vuOMFYKYnlcRRmMk1m4/exec", {
    method: "POST",
    body: formData.toString(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(res => {
      if (!res.ok) throw new Error("Network response was not ok: " + res.status);
      return res.text(); // Get raw response as text
    })
    .then(text => {
      let data;
      try {
        data = JSON.parse(text); // Manually parse JSON
      } catch (err) {
        throw new Error("Invalid JSON response: " + text);
      }

      if (data.result === "success") {
        alert("Thank you! You can now download C.O.R.E.");
        window.location.href = "https://github.com/ishanyatripathi/CORE-Website/releases/download/v1.0/CORE_v1.zip";
      } else {
        alert("Server error: " + data.message);
      }
    })
    .catch(err => {
      alert("Something went wrong: " + err.message);
      console.error(err);
    });
});
