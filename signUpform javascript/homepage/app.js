//docoment catch

const modalkiImage = document.querySelector('#modalkiImage')
const inputFile = document.querySelector('#input-file')
const Gallery = document.querySelector(".fa-solid");
const cardImageTop = document.querySelector("#cardImageTop");
const textarea = document.querySelector("#message-text");


//    //////////////////////////logput handler 

function logoutHandler(){
  localStorage.removeItem('loggedInUser')
 window.location.href = "../login/index.html"
}

//  image src change
inputFile.onchange = function(){
    modalkiImage.src = URL.createObjectURL(inputFile.files[0])

    modalkiImage.style.display = "block"
}
//three  dot edit delete modal

const dot = document.querySelector("#dot");
const hide = document.querySelector(".hide");
const cancle = document.querySelector("#cancle");

//  delete modal ka liya

dot.addEventListener('click',function(){
    hide.style.display = "block"
})
cancle.addEventListener("click", function () {
  hide.style.display = "none";
});

// post handler//////
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

const postCard = document.querySelector("#postCard");

const postLocalStorage = JSON.parse(localStorage.getItem('posts')) || []



// postDisplayHandler
const postDisplayHandler = () =>{
  postCard.innerHTML = ""
  
const postLocalStorage = JSON.parse(localStorage.getItem("posts")) || [];

console.log(postLocalStorage);

postLocalStorage.forEach(post => {

let textHTML;
if(post.imageUrl){

textHTML = `
            <div class="col-12 bg-danger" style="padding: 40px">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetail.userName}</h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot"></i>
                <div class="hide">
                  <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li>Share</li>
                    <li id="cancle">Cancle</li>
                  </ul>
                </div>
              </div>
              <div class="card" style="width: 100%">
              
                <div class="card-body">
                  <p class="card-text" id="discription">
                   ${post.textdate}
                  </p>
                  <img src=${post.imageUrl} alt="image" />
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

}else{
  textHTML = `
            <div class="col-12 bg-danger" style="padding: 40px">
              <div class="profilepost">
                <img src="assets/unone user.jpg" alt="image" />
                <h3 id="userName">${post?.userDetail.userName}</h3>
                <i class="fa-solid fa-ellipsis-vertical" id="dot"></i>
                <div class="hide">
                  <ul>
                    <li>Edit</li>
                    <li>Delete</li>
                    <li>Share</li>
                    <li id="cancle">Cancle</li>
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
            </div>`;

}

    postCard.innerHTML += textHTML 
  
    
});


}
postDisplayHandler()

function postHandler(){
  
  console.log("postHandler");
  discription.textContent = textarea.value;
  cardImageTop.src = modalkiImage.src;
  //
 

  
  let postObj
  if(cardImageTop) {

    postObj = {
      id: Date.now(),
      textdate: about,
      imageUrl: cardImageTop.src,
      userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
    };
  }else{

     postObj = {
       id: Date.now(),
       textdate: about,
       userDetail: JSON.parse(localStorage.getItem("loggedInUser")),
     };

  }
   textarea.value = "";
    modalkiImage.src = "";

  postLocalStorage.push(postObj)

localStorage.setItem("posts", JSON.stringify(postLocalStorage));

postDisplayHandler()

}
