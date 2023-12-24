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


function openModalHandler(){
  console.log("i am open handler");
 
     cardMenu.style.display = "block";

  cardmenuimage.setAttribute("onclick", "closeModalHandler()");
}

function closeModalHandler(){
  console.log("i am close handler");
     cardMenu.style.display = "none";
   cardmenuimage.setAttribute("onclick", "openModalHandler()");

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


// modalkiImage.src = imageinput.value;
// modalkiImage.src = imageinput.value;
// modalkiImage.style.display = 'block'
// console.log(imageinput);



// // inputFile.addEventListener("change", () => {

// // const fr = new FileReader();

// // fr.readAsDataURL(inputFile.files[0]);
// // fr.addEventListener('load', () => {

// //   const url = fr.result
// //   modalkiImage.src = fr
// //   console.log(url);
// //   console.log(fr);
// // })

// })


//  image src change
// inputFile.onchange = function(){
//     modalkiImage.src = URL.createObjectURL(inputFile.files[0])

//     modalkiImage.style.display = "block"
//     console.log("ds");
// }
//three  dot edit delete modal

const dot = document.querySelector("#dot");
const hide = document.querySelector(".hide");
const cancle = document.querySelector("#cancle");

//  delete modal ka liya


// dot.addEventListener('click',function(){
//     hide.style.display = "block"
// });

// function cancleHandler(){
//    hide.style.display = "none";
//    console.log("i am cancle");
// }

function dotHandler(){
   hide.style.display = "block";
     console.log("i am dot");
}

// cancle.addEventListener("click", function () {
//   hide.style.display = "none";/
// });

// post handler//////


const postCard = document.querySelector("#postCard");

const postLocalStorage = JSON.parse(localStorage.getItem('posts')) || []



// postDisplayHandler
const postDisplayHandler = () =>{

  postCard.innerHTML = ""
  
const postLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];

       console.log(postLocalStorage);

   postLocalStorage.reverse().forEach(post => {

let textHTML;
if(post.imageUrl){

textHTML = `
            <div class="col-12 bg-danger" style="padding: 40px">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetail.userName}</h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot" onclick"dotHandler()"></i>
                <div class="hide">
                  <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li>Share</li>
                    <li id="cancle" onclick"cancleHandler()">Cancle</li>
                  </ul>
                </div>
              </div>
              
               <div class="card" style="width: 100%">
               <div class="card-body">
                  <p class="card-text" id="discription">${post.textdate}</p>

                  <img src=${post.imageUrl} class="card-img-top" id="cardImageTop"  alt="..."/>
                  <div class="icon">
                    <ul>
                      <li><i class="fa-regular fa-heart"></i>like</li>
                      <li><i class="fa-regular fa-comment"></i>Comment</li>
                      <li>
                        <i class="fa-regular fa-share-from-square"></i>Send
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`;
            console.log("imagee wala ho");

}else{
  textHTML = `
          <div class="col-12 bg-danger" style="padding: 40px">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetail.userName}</h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot" onclick"dotHandler()"></i>
                <div class="hide">
                  <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li>Share</li>
                    <li id="cancle" onclick"cancleHandler()">Cancle</li>
                  </ul>
                </div>
              </div>
              <div class="card" style="width: 100%">
              
                <div class="card-body">
                  <p class="card-text" id="discription">${post.textdate}</p>
                  <div class="icon">
                    <ul>
                      <li><i class="fa-regular fa-heart"></i>like</li>
                      <li><i class="fa-regular fa-comment"></i>Comment</li>
                      <li>
                        <i class="fa-regular fa-share-from-square"></i>Send
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`
            console.log("imagee wala nahi ho");



}
    postCard.innerHTML += textHTML 
  
    
});


}
postDisplayHandler()

///////////////////////////////// post Handler///////////////////////////


  //  cardImageTop.value = inputFile.value;
function imageOpenhandler(){
  cardImageTop.src = imageinput.value;
  // modalkiImage.style.display = "block";
  console.log(imageinput);

}
function postHandler(){
  console.log("postHandler");

  // cardImageTop.src = imageinput.value;


 
  let postObj;
  if (cardImageTop) {
    postObj = {
      id: Date.now(),
      textdate: textarea.value,
      imageUrl: cardImageTop.src,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
    console.log(modalkiImage.src);
  } else {
    postObj = {
      id: Date.now(),
      textdate: textarea.value,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser"))
    };
  }
console.log(postObj);
  textarea.value = "";
  modalkiImage.src = "";

  postLocalStorage.push(postObj);

  localStorage.setItem("posts", JSON.stringify(postLocalStorage));

  postDisplayHandler();


}
