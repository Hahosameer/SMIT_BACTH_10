import { auth, signOut } from "../utils/firebaseConfig.js";


const logoutBtn = document.getElementById("logout");



const logoutHandler = () => {
  console.log("tu chala ya nahin");

  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "../login/index.html";
    })
    .catch((error) => {
      // An error happened.
      console.log(error, "===>> error");
    });
};
logoutBtn.addEventListener("click", logoutHandler);
