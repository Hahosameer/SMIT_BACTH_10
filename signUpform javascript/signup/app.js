const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const Cpassword = document.querySelector("#Cpassword");
const submitBtn = document.querySelector("#submitBtn");
const form = document.querySelector("form");
const rongpass = document.querySelector("#rongpass");
const lock = document.querySelector("#lock");
const con = document.querySelector("#con");
const bordar = document.querySelector("#bordar");
// error get value
const errorPassword = document.querySelector("#errorPass");
const errorCpass = document.querySelector("#cpass");
const input = document.querySelector("input");
const lable = document.querySelector("label");
const errow = document.querySelector("#errow");
const container = document.querySelector(".container");
const loder = document.querySelector(".loder");
console.log(lable);
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
     Swal.fire({
      
       text: "Please fill in this filed",
       confirmButtonColor: "#3085d6",
     });
     return
  }

  // leanght chak

  if (password.value.length < 6) {
    errorPassword.style.display = "block";
    errow.style.display = "block";
    errorPassword.textContent = "Password must be at least 6 characters";
    return;
  }

  if (password.value != Cpassword.value) {
    lock.style.display = "none";
    rongpass.style.display = "block";
    return;
  }
  const userNameFound = usersKiVal.find((user) => {
    if (user.userName === userName.value) return user;
  });

  //Name fond ha tu
  if (userNameFound) {
    Swal.fire({
      title: "Sorry",
      text: "User alredy taken",
      confirmButtonColor: "#3085d6",
   
    });
    return;
  }

  const userEmailFound = usersKiVal.find((user) => {
    if (user.email === email.value) return user;
  });
  ///Email found ha to

  if (userEmailFound) {
    Swal.fire({
      title: "Sorry",
      text: "UserEmail already exist",
      confirmButtonColor: "#3085d6",

    });
    return;
  }

  const user = {
    userName: userName.value,
    email: email.value,
    password: password.value,
    CPassword: Cpassword.value,
  };

  usersKiVal.push(user);

  localStorage.setItem("users", JSON.stringify(usersKiVal));


container.style.display = "none";

  loder.style.display = "block";


  setTimeout(() => {
    window.location.href = "../login/index.html";
  }, 2000);
}
// submitHandler();

password.addEventListener("click", function () {
  errorPassword.style.display = "none";
});

Cpassword.addEventListener("click", function () {
  rongpass.style.display = "none";
  lock.style.display = "block";
});
