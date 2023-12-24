const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const Cpassword = document.querySelector("#Cpassword");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form");
const rongpass = document.querySelector("#rongpass");
const lock = document.querySelector("#lock");
const bordar = document.querySelector("#bordar");
// error get value
const container = document.querySelector(".contaniner");
const loder = document.querySelector(".loder");
const errorbox = document.querySelector(".errorbox");
const errow = document.querySelector("#errow");
const loding = document.querySelector(".loding");
console.log(form);

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (loggedInUser) window.location.href = "../homepage/index.html";

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

function submitHandler() {
  console.log("chal gaya");

  const usersKiVal = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersKiVal, "=====>>>>");

  // field chak
  if (!password.value || !email.value || !Cpassword.value || !userName.value){
    errorbox.style.display = "block"
    errorbox.textContent = "Please fill in this field";
     return
  }

  // leanght chak

  if (password.value.length < 6) {
       errorbox.style.display = "block"
    errorbox.textContent = "Password must be at least 6 characters";
    return;
  }

  if (password.value != Cpassword.value) {
    errorbox.style.display = "block";
    errorbox.textContent = "Pleas Correct Paasword";
    return;
  }
  const userNameFound = usersKiVal.find((user) => {
    if (user.userName === userName.value) return user;
  });

  //Name fond ha tu
  if (userNameFound) {
     errorbox.style.display = "block";
     errorbox.textContent = "User alredy taken";
    return;
  }

  const userEmailFound = usersKiVal.find((user) => {
    if (user.email === email.value) return user;
  });
  ///Email found ha to

  if (userEmailFound) {
  errorbox.style.display = "block";
    errorbox.textContent = "UserEmail already exist";
    return;
  }

  const user = {
    id: Date.now(),
    userName: userName.value,
    email: email.value,
    password: password.value,
    CPassword: Cpassword.value,
  };

  usersKiVal.push(user);

  localStorage.setItem("users", JSON.stringify(usersKiVal));


container.style.display = "none";

 loding.style.display = "block";
  loding.style.display = "flex"


  setTimeout(() => {
    window.location.href = "../login/index.html";
  }, 2000);
}
// submitHandler();
