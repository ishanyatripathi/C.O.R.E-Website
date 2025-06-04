document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  fetch("https://script.google.com/macros/s/AKfycbxHC_EzrHlln9CKbmY3dZpZGJJPWFqVEyXcLwGqKgQ7NYeM_KVycJeeYMc0_Mo7ERI/exec", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(() => {
      alert("Thank you! You can now download C.O.R.E.");
      window.location.href = "https://github.com/ishanyatripathi/CORE-Website/releases/download/v1.0/CORE_v1.zip";
    })
    .catch(err => {
      alert("Something went wrong.");
      console.error(err);
    });
});
