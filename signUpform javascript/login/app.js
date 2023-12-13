
const email = document.querySelector("#email");
const rongpass = document.querySelector("#rongpass");
const lock = document.querySelector("#lock");
const con = document.querySelector("#con");
const forget = document.querySelector("#forget");
const container = document.querySelector(".container");
const loder = document.querySelector(".loder");
const password = document.querySelector("#password");
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//  setTimeout(() => {
   
// }, 2000);

if (loggedInUser) window.location.href = "../homepage/index.html";
//    logimHandler
function loginHandler() {
  const users = JSON.parse(localStorage.getItem("users"));

  //ckak filed
  if (!email.value || !password.value) {
    Swal.fire({
      text: "Please fill in this filed",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  // ckak leanght

  if (password.value.length < 6) {
    Swal.fire({
      text: "Password must be at least 6 characters",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  if (!users) {
    Swal.fire({
      text: "Sorry no user found",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  const foundUser = users.find(user => {
    if (user.email === email.value) return user;
  });

  if (!foundUser) {
    Swal.fire({
      text: "No user found",
      confirmButtonColor: "#3085d6",
    });
    return;
  }

  if (foundUser.password !== password.value){
     Swal.fire({
       text: "Invalid Credentials",
       confirmButtonColor: "#3085d6",
     });
     return;
  }
    

  
  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  container.style.display = "none";
  loder.style.display = "block";

  setTimeout(() => {
    window.location.href = "../homepage/index.html";
  }, 2000);

}


function signupNow() {
  window.location.href = "../signup/index.html";
}

