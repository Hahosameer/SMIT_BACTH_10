


// import { auth } from "../utils/firebaseConfig";
// import { doc } from "../utils/firebaseConfig";
import { db, getDoc } from "../utils/firebaseConfig.js";
import {  addInDBById, auth, doc, onAuthStateChanged, signUp,  } from "../utils/functions.mjs";

const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#Cpassword");
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

const signupBtn = document.querySelector("#submitBtn");

console.log(form);

// const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// if (loggedInUser) window.location.href = "../homepage/index.html";

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

console.log("chal gaya");

// const usersKiVal = JSON.parse(localStorage.getItem("users")) || [];
// console.log(usersKiVal, "=====>>>>");

// field chak

// leanght chak

//                                                         sign up handler

onAuthStateChanged(auth, async (user) => {
  //login
  if (user) {
    const uid = user.uid; //uid
    console.log(uid, "==>> uid");

    alert("user is logged in");

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());

      alert("user data is available");
      // window.location.href = "../home/index.html";
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }

    // ...
  } else {
    alert("user signout hai");
    // User is signed out
    // ...
    // window.location.href = "../login/index.html";
  }
});

////////////////////////////////////////////////////////////////////////////////////////////



const signupHandler = async () => {


  //checking if password and confirm password are same
  if (password.value !== cPassword.value) {
    alert("Password and Confirm Password does not match");
    return;
  }

  //checking if any field is empty
  if (
    !email.value ||
    !userName.value ||
    !password.value ||
    !cPassword.value
  ) {
    alert("Please fill all the fields");
    return;
  }

  // creating data object to add in db
  const data = {
    email: email.value,
    userName: userName.value,
    password: password.value,
  };

  //calling signuUp function from utils/functions.mjs
  const registering = await signUp(email.value, password.value);
  if (registering.status) {
    // const profilePictureName = `${new Date().getTime()}-${
    //   profilePicture.files[0].name
    // }`;
    // //calling uploadFile function from utils/functions.mjs
    // const upload = await uploadFile(
    //   profilePicture.files[0],
    //   profilePictureName
    // );
    // if (upload.status) {
    //   data.profilePicture = upload.downloadURL;
    //   alert(upload.message);
    // } else {
    //   alert(upload.message);
    // }
    //calling addInDBById function from utils/functions.mjs
    const userAddInDB = await addInDBById(
      data,
      registering.data.user.uid,
      "users"
    );
    if (userAddInDB.status) {
      alert(userAddInDB.message);
      alert(registering.message);
     window.location.href = "../homepage/index.html";
    } else {
      alert(userAddInDB.message);
    }
  } else {
    alert(registering.message);
  }
};
signupBtn.addEventListener("click", signupHandler);
///////////////////////////////////////////////////////////////////////////////////////////
