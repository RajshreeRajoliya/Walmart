document.querySelector("button").addEventListener("click", signUp);
var userArr = JSON.parse(localStorage.getItem("userData")) || [];

function signUp() {
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  // console.log(name,lname,email,pass)
  var userCredentials = {
    firstName: name,
    lastName: lname,
    emailAddress: email,
    passWord: pass,
  };
  // console.log(userCredentials)
  userArr.push(userCredentials);
  localStorage.setItem("userData", JSON.stringify(userArr));
  window.location.href = "login.html";
}
function signIn() {
  window.location.href = "login.html";
}