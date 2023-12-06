letloggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const uservalue = document.querySelector(".uservalue");
const setting = document.querySelector("#setting");
const cross = document.querySelector("#cross");
const updateEmail = document.querySelector('#updateEmail');
const updatePassword = document.querySelector("#updatePassword");


const users = JSON.parse(localStorage.getItem("users"));
console.log(users);
// if (!loggedInUser) window.location.href = "../login/index.html";

function updatepassword() {

let foundUser = users.find((user) => {
  if (user.email = updateEmail.value) return user;
});

if (foundUser.password = updatePassword.value)




localStorage.setItem("users", JSON.stringify(foundUser));


  localStorage.removeItem("loggedInUser");
  window.location.href = "../login/index.html";
}




function logoutHanler() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "../login/index.html";
  console.log("chal gaya");
}



// logoutHanler();

function updatHandler(){
    uservalue.style.display = "block";
    setting.style.display = "none";
   cross.style.display = "block";
}
// updatHandler()

function bandkardo() {
    uservalue.style.display = "none";
    cross.style.display = "none";
  setting.style.display = "block";
}
// bandkardo()

