document.querySelector("button").addEventListener("click", signIn);
var regUsers = JSON.parse(localStorage.getItem("userData"));
console.log("regUsers:", regUsers);

function signIn() {
  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#pass").value;
  
  localStorage.setItem("person", person);
  for (var i = 0; i < regUsers.length; i++) {
    if (regUsers[i].emailAddress == email && regUsers[i].passWord == pass) {
      person = userData[i].firstName + " " + userData[i].lastName;
      alert(logged in successfull);
      window.location.href = "mainpage.html";
    }
      
  }
}
function createAc() {
  window.location.href = "signup.html";
}