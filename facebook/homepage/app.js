//docoment catch

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if(!loggedInUser) window.location.href = "../login/index.html"


const modalkiImage = document.querySelector('#modalkiImage')
const inputFile = document.querySelector('#input-file')
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

//    //////////////////////////logput handler 

function logoutHandler(){
  localStorage.removeItem('loggedInUser')
 window.location.href = "../login/index.html"
}

function openModalHandler() {
  cardMenu.style.display = "block"
  cardmenuimage.setAttribute('onclick', 'closeHandler()')
  console.log("ffffdf");
}

function closeHandler(){
  console.log("dsddsds");
  cardMenu.style.display = "none";
  cardmenuimage.setAttribute('onclick','openModalHandler()')

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

// function likessssHandler() {
//   fillLike.style.display = "block";
//   lineLike.style.display = "none";
//   fillLike.style.color = "#0866FF";
//   num.textContent = +1;
//   //
//   likessss.setAttribute("onclick", 'downLikeHandler()');
//   console.log("sameer");
// }
// function downLikeHandler() {
//   fillLike.style.display = "none";
//   lineLike.style.display = "block";
//   fillLike.style.color = "black";
//   num.textContent = 0;
//   // likessss.setAttribute('onclick','likessssHandler()');
// }

// post handler//////


const postCard = document.querySelector("#postCard");

const postLocalStorage = JSON.parse(localStorage.getItem('posts')) || []

let imageUrl;

// postDisplayHandler
const postDisplayHandler = () =>{

  postCard.innerHTML = ""
  
const postLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];

       console.log(postLocalStorage);

   postLocalStorage.reverse().forEach(post => {

let textHTML;
if (post.imgData) {
  textHTML = `  

      <div class="col-12 bg-dangr" id="main-card">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetail.userName}</h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot" onclick="dotHandler()"></i>
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
                  <div class="bottom-icon" id="likessss" onclick="likessssHandler()">
                    <i class="ri-thumb-up-line" id="lineLike"></i>
                    <i class="ri-thumb-up-fill" id="fillLike" onclick="downLikeHandler()"></i>
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
              </div> `
  console.log("imagee wala ho");
} else {
  textHTML = `
           <div class="col-12 bg-dangr" id="main-card">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetail.userName}</h3>
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
                  <div class="bottom-icon" id="likessss"${onclick="likessssHandler()"}>
                    <i class="ri-thumb-up-line" id="lineLike"></i>
                    <i class="ri-thumb-up-fill" id="fillLike" onclick="downLikeHandler()"></i>
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
              </div> `
  console.log("imagee wala nahi ho");
}
    postCard.innerHTML += textHTML 
  
    
});


}
postDisplayHandler()



function likessssHandler() {
  fillLike.style.display = "block";
  lineLike.style.display = "none";
  fillLike.style.color = "#0866FF";
  num.textContent = +1;
  //
  likessss.setAttribute("onclick", "downLikeHandler()");
  console.log("sameer");
}
function downLikeHandler() {
  fillLike.style.display = "none";
  lineLike.style.display = "block";
  fillLike.style.color = "black";
  num.textContent = 0;
  // likessss.setAttribute('onclick','likessssHandler()');
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
