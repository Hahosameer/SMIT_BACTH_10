
const email = document.querySelector("#email");
const forget = document.querySelector("#forget");
const container = document.querySelector(".contaniner");
const loder = document.querySelector(".loder");
const password = document.querySelector("#password");
const loding = document.querySelector(".loding");
const errorbox = document.querySelector(".errorbox");

//  setTimeout(() => {
   
// }, 2000);
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


if (loggedInUser) window.location.href = "../homepage/index.html";
//    logimHandler


function loginHandler() {
  console.log("login here");
  const users = JSON.parse(localStorage.getItem("users"));

  // ckak filed
  if (!email.value || !password.value) {
   errorbox.style.display = "block";
   errorbox.textContent = "Please fill in this filed";
    return;
  }

  // ckak leanght

  if (password.value.length < 6) {
      errorbox.style.display = "block";
      errorbox.textContent = "Password must be at least 6 characters";
    return;
  }

  if (!users) {
       errorbox.style.display = "block";
       errorbox.textContent = "Sorry user is found";
    return;
  }

  const foundUser = users.find(user => {
    if (user.email === email.value) return user;
  });

  if (!foundUser) {
       errorbox.style.display = "block";
       errorbox.textContent = "NO user found";
    return;
  }

  if (foundUser.password !== password.value){
         errorbox.style.display = "block";
         errorbox.textContent = "Invalid Credentials";
     return;
  }
    

  
  localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

  container.style.display = "none";
  loding.style.display = "block";
  loding.style.display = "flex";

  setTimeout(() => {
    window.location.href = "../homepage/index.html";
  }, 2000);

}


function signupNow() {
  window.location.href = "../signup/index.html";
}

