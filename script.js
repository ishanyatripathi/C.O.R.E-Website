document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Please enter a valid email.");
    return;
  }

  const callbackName = "jsonpCallback_" + Date.now();

  // Create a temporary global callback function
  window[callbackName] = function (data) {
    if (data.result === "success") {
      alert("Thank you! You can now download C.O.R.E.");
      document.getElementById("download").style.display = "block";
    } else {
      alert("Server error: " + (data.message || "Unknown error"));
    }

    // Clean up
    const script = document.getElementById(callbackName);
    if (script) script.remove();
    delete window[callbackName];
  };

  // Create a <script> tag to request the data using JSONP
  const script = document.createElement("script");
  script.id = callbackName;
  script.src = `https://script.google.com/macros/s/AKfycbyHnQ0FfFinqiU84vlNJApOqTdhLJW2IrTgNN6qDo0LEYP6vuOMFYKYnlcRRmMk1m4/exec?email=${encodeURIComponent(email)}&callback=${callbackName}`;
  document.body.appendChild(script);
});
