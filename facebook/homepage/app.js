//docoment catch

import { 
   
  addDoc,
  auth,
  collection,
  db,
  getDoc,
  getDocs,
  onAuthStateChanged,
  query,
  signOut,
  doc as docFromFirebase,
  doc,
  deleteDoc,
  setDoc,} from "../utils/firebaseConfig.js";


let userDetails;
let uid;
onAuthStateChanged(auth, async (user) => {
  if (user) {
  
    uid = user.uid;
    console.log(uid, "==>> uid");
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      userDetails = docSnap.data();
      console.log(docSnap.data());
    } else {
      console.log("No Document found");
    }

    // ...
  } else {
    // User is signed out
    // ...
    window.location.href = "../login/index.html";
  }
});
////////////////////////////////////////////

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// if(!loggedInUser) window.location.href = "../login/index.html"


const modalkiImage = document.querySelector('#modalkiImage')
const Gallery = document.querySelector(".fa-solid");
const cardImageTop = document.querySelector("#cardImageTop");
const textarea = document.querySelector("#message-text");
const about = document.querySelector("#about");
const imageinput = document.querySelector("#imageinput");
const cardmenuimage = document.querySelector("#cardmenuimage");
const cardMenu = document.querySelector(".card-menu-wrap");
const plus = document.querySelector('#plus')
const hambar = document.querySelector('#hambar')
const menuicon = document.querySelector("#menuicon");
const gamepad = document.querySelector("#gamepad");
const seeless = document.querySelector("#seeless");
const userid = document.querySelector("#userid");
const modalprofile = document.querySelector("#modalprofile");
const cardimgtop = document.querySelector("#mariimg");
const profileimage = document.querySelector(".profileimage");
const modalpic1 = document.querySelector("#modalpic1");
const leftbarprofile = document.querySelector("#left-bar-profile");

console.log(profileimage);
//    //////////////////////////logput handler 
const seemoreicon = document.querySelector(".seemoreicon");
const seemore = document.querySelector("#seemore");
// function logoutHandler(){
//   localStorage.removeItem('loggedInUser')
//  window.location.href = "../login/index.html"
// }
window.openModalHandler =()=> {
  cardMenu.style.display = "block";
  cardmenuimage.setAttribute("onclick", "closeHandler()");
  console.log("ffffdf");
}
// const logoutHandler = () => {
//   //   localStorage.removeItem("loggedInUser");

//   //   window.location.href = "../login/index.html";

//   signOut(auth)
//     .then(() => {
//       // Sign-out successful.
//       window.location.href = "../login/index.html";
//     })
//     .catch((error) => {
//       // An error happened.
//       console.log(error, "===>> error");
//     });
// };




window.closeHandler =() =>{
  console.log("dsddsds");
  cardMenu.style.display = "none";
  cardmenuimage.setAttribute('onclick','openModalHandler()')

}
window.seeMoraHandler = () => {
seemoreicon.style.display = "block"
seemore.style.display = 'none'
}
 window.seelessHandler =() => {
  seemoreicon.style.display = "none";
  seemore.style.display = "block";
  
}

leftbarprofile.addEventListener('click', function(){

})


const leftSideBar = document.querySelector("#left-sidebar");
window.hambarHandler =() =>{
leftSideBar.style.display= "block"
 }


function navbar() {
  const wondowWidth = window.innerWidth;
  
  if (wondowWidth <= 1000) {
    gamepad.style.display = "none";
    menuicon.style.display = "none";
    hambar.style.display = "block";
    plus.style.display = "block";
  } else {
    gamepad.style.display = "block";
    menuicon.style.display = "block";
    hambar.style.display = "none";
    plus.style.display = "none";
    
  }
}
// console.log(navbar);

window.addEventListener("resize", navbar);

const fillLike = document.querySelector("#fillLike");
const lineLike = document.querySelector("#lineLike");
const likessss = document.querySelector("#likessss");
const num = document.querySelector("#num");
const postbtn = document.querySelector("#postbtn");

// likessss.addEventListener("click", function () {
//   fillLike.style.display = "block";
//   lineLike.style.display = "none";
//   fillLike.style.color = "#0866FF";
//   num.textContent = +1;
//   //
//   // likessss.setAttribute("onclick", "downLikeHandler()");
//   console.log("sameer");
// }); 


// fillLike.addEventListener("click", function () {
//   fillLike.style.display = "none";
//   lineLike.style.display = "block";
//   fillLike.style.color = "black";
//   num.textContent = 0;
//     console.log("sameer kkk");
//   // likessss.setAttribute('onclick','likessssHandler()');
// });

// post handler//////


const postCard = document.querySelector("#postCard");

const postLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

let imageUrl;

// postDisplayHandler
const postDisplayHandler = async() =>{

  postCard.innerHTML = ""
  
  //firebase se bht sarey documents lenay jaa raha hun

  const posts = [];
  const q = query(collection(db, "posts"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());

    const singlePost = doc.data();

    posts.push({ ...singlePost, id: doc.id });

    //user data laa k do, jis ney posting ki thi

    // singlePost.userUid
  });
 console.log(posts, "===>> posts");

const postLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];

       console.log(postLocalStorage);

   postLocalStorage.reverse().forEach(post => {

let textHTML;
if (post.imgData) {
  textHTML = `  

      <div class="col-12 bg-dangr" id="main-card">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetails.userName}</h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot" onclick="dotHandler('${post.id}')"></i>
              </div>
              <div class="card">     
                  <p class="card-text" id="discription">
                    ${post.textdate}
                  </p>
                  <img src='${post?.imgData}'alt="image" />
                  <div class="like">
                    <i class="ri-thumb-up-fill"></i>
                    <span id="num">0</span>
                  </div>
                  <div class="icons">
                  <div class="bottom-icon" id="likessss">
                    <i class="ri-thumb-up-line" id="lineLike"></i>
                    <i class="ri-thumb-up-fill" id="fillLike"></i>
                    <p>like</p>
                  </div>
                  <div class="bottom-icon">
                    <i class="fa-regular fa-comment"></i>
                    <p>Comment</p>
                  </div>
                  <div class="bottom-icon">
                    <i class="ri-share-forward-line"></i>
                    <p>Share</p>
                  </div>
                  </div>
                </div>
              </div> `;
            // userid.textContent = loggedInUser.userName;
            // modalpic1.textContent = loggedInUser.userName;
            // 

  console.log("imagee wala ho");
} else {
  textHTML = `
           <div class="col-12 bg-dangr" id="main-card">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName"></h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot" onclick="dotHandler()"></i>
              </div>
              <div class="card">     
                  <p class="card-text" id="discription">
                    ${post.textdate}
                  </p>
               
                  <div class="like">
                    <i class="ri-thumb-up-fill"></i>
                    <span id="num">0</span>
                  </div>
                  <div class="icons">
                  <div class="bottom-icon" id="likessss"  onclick="likeHandler()" >
                    <i class="ri-thumb-up-line" id="lineLike"></i>
                    <i class="ri-thumb-up-fill" id="fillLike""></i>
                    <p>like</p>
                  </div>
                  <div class="bottom-icon">
                    <i class="fa-regular fa-comment"></i>
                    <p>Comment</p>
                  </div>
                  <div class="bottom-icon">
                    <i class="ri-share-forward-line"></i>
                    <p>Share</p>
                  </div>
                  </div>
                </div>
              </div> `;
              // userid.textContent = loggedInUser.userName;
           
  console.log("imagee wala nahi ho");
}
    postCard.innerHTML += textHTML 
  
});

}
postDisplayHandler()

      

function  likeHandler(){
  console.log("i am like");
  // lineLike.style.display = "none";
  // fillLike.style.display = "block";
  //   fillLike.style.color = "#0866FF";
    // num.textContent = +1;
}

const imageOpenHandler = () => {
  imageUrl = prompt("Post the link of your image");
}

///////////////////////////////// post Handler///////////////////////////


 

function postHandler(){
  console.log("postHandler");
  let postObj;
  if (imageUrl) {
    console.log(imageUrl);
    postObj = {
      id: Date.now(),
      textdate: textarea.value,
      imgData: imageUrl,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
    postbtn.style.backGroundColor = "#0866FF"
   
  } else {
    postObj = {
      id: Date.now(),
      textdate: textarea.value,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser"))
    };
    postbtn.style.backGroundColor = "#0866FF"
  }
console.log(postObj);
  textarea.value = "";
 


  postLocalStorage.push(postObj);

  localStorage.setItem("posts", JSON.stringify(postLocalStorage));

  postDisplayHandler();


}




// function myProfileHandler(){
//  cardimgtop.value = imageUrl;
// profileimage.scr =  imageUrl
// }