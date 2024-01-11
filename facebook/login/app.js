import { auth, db, doc, getDoc, onAuthStateChanged } from "../utils/firebaseConfig.js";

const email = document.querySelector("#email");
const forget = document.querySelector("#forget");
const container = document.querySelector(".contaniner");
const loder = document.querySelector(".loder");
const password = document.querySelector("#password");
const loding = document.querySelector(".loding");
const errorbox = document.querySelector(".errorbox");
// const form = docoment.querySelector('#form')


// const loginBtn = docoment.querySelector("#loginBtn");


form.addEventListener("submit", function (e) {
  e.preventDefault();
});
//  setTimeout(() => {
   
// }, 2000);
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


if (loggedInUser) window.location.href = "../homepage/index.html";
//    logimHandler



  console.log("login here");
  const users = JSON.parse(localStorage.getItem("users"));

  // ckak filed


  // ckak leanght

 
  

onAuthStateChanged(auth, async (user) => {
  //login
  if (user) {
    //login
    const uid = user.uid;
    console.log(uid, "==>> uid");
    alert("user log in huwa hai");
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      alert("is user ka data mojood hai");
      window.location.href = "../homepage/index.html";
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    // ...
  } else {
    alert("signout huwa hai");
  }
});

const loginHandler = () => {
  //   const users = JSON.parse(localStorage.getItem("users"));

  //checking fields
  if (!email.value || !password.value) return alert("Saari fields likh bhai");
  //checking length

  if (password.value.length < 8)
    return alert("password length should be atleast 8 characters");

  
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      //login
      // Signed in
      const user = userCredential.user;
      console.log(user, "===>> user");

      alert("Login Successfully, diverting you to the home page");

      //   localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      setTimeout(() => {
      window.location.href = "../homepage/index.html";
      }, 2000);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
    });
};

loginBtn.addEventListener("click", loginHandler);

//   if (!users) {
//        errorbox.style.display = "block";
//        errorbox.textContent = "Sorry user is found";
//     return;
//   }

//   const foundUser = users.find(user => {
//     if (user.email === email.value) return user;
//   });

//   if (!foundUser) {
//        errorbox.style.display = "block";
//        errorbox.textContent = "NO user found";
//     return;
//   }

//   if (foundUser.password !== password.value){
//          errorbox.style.display = "block";
//          errorbox.textContent = "Invalid Credentials";
//      return;
//   }
    

  
//   localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

//   container.style.display = "none";
//   loding.style.display = "block";
//   loding.style.display = "flex";

//   setTimeout(() => {
//     window.location.href = "../homepage/index.html";
//   }, 2000);




// function signupNow() {
//   window.location.href = "../signup/index.html";
// }

