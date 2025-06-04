document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;

  fetch("https://script.google.com/macros/s/AKfycby-W2OOaFuLO-oEIJ6phRVXMITnW6HgODxZ73hVRD99qztXbBBUXG8oT0UBgCteyK9l/exec", {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => res.json())
    .then(() => {
      alert("Thank you! You can now download C.O.R.E.");
      document.getElementById("download").style.display = "block";
    })
    .catch(err => {
      alert("Something went wrong.");
      console.error(err);
    });
});
