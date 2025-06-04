document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  if (!email) {
    alert("Please enter a valid email.");
    return;
  }

  const url = "https://script.google.com/macros/s/AKfycbyHnQ0FfFinqiU84vlNJApOqTdhLJW2IrTgNN6qDo0LEYP6vuOMFYKYnlcRRmMk1m4/exec";
  const fetchUrl = `${url}?email=${encodeURIComponent(email)}`;

  fetch(fetchUrl, {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok: " + res.status);
      return res.json();
    })
    .then((data) => {
      if (data.result === "success") {
        alert("Thank you! You can now download C.O.R.E.");
        window.location.href = "https://github.com/ishanyatripathi/CORE-Website/releases/download/v1.0/CORE_v1.zip";
      } else {
        alert("Server error: " + data.message);
      }
    })
    .catch((err) => {
      alert("Something went wrong: " + err.message);
      console.error(err);
    });
});
