function check() {
  var email = document.getElementById("email");
  var error = document.getElementById("error-message");
  if (email.checkValidity() === false) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
}
