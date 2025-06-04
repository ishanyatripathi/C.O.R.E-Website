<script>
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Please enter a valid email.");
    return;
  }

  const callbackName = "handleResponse_" + Date.now();

  window[callbackName] = function (data) {
    if (data.result === "success") {
      alert("Thank you! You can now download C.O.R.E.");
      window.location.href = "https://github.com/ishanyatripathi/CORE-Website/releases/download/v1.0/CORE_v1.zip";
    } else {
      alert("Something went wrong: " + (data.message || "Unknown error"));
    }

    // Cleanup injected script
    const scriptTag = document.getElementById(callbackName);
    if (scriptTag) scriptTag.remove();
    delete window[callbackName];
  };

  const script = document.createElement("script");
  script.id = callbackName;
  script.src = `https://script.google.com/macros/s/AKfycbyHnQ0FfFinqiU84vlNJApOqTdhLJW2IrTgNN6qDo0LEYP6vuOMFYKYnlcRRmMk1m4/exec?email=${encodeURIComponent(email)}&callback=${callbackName}`;
  document.body.appendChild(script);
});
</script>
