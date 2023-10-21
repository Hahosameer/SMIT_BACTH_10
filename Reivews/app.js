const userData = [
    {
        image: "assets/m1.jpeg",
        username:"Hadi Jon",
        designation:"Web Developer",
        bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aut dolore, inventore illo deleniti facilis repudiandae pariatur ut asperiores tempore!"
 
    },
    {
        image: "assets/m2.jpeg",
        username:"Susan Smit",
        designation:"Riter",
        bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aut dolore, inventore illo deleniti facilis repudiandae pariatur ut asperiores tempore!"
 
    },
    {
        image: "assets/m3.jpeg",
        username:"Shahid Ali",
        designation:"Doctor",
        bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aut dolore, inventore illo deleniti facilis repudiandae pariatur ut asperiores tempore!"
 
    },
    {
        image: "assets/m4.jpeg",
        username:"Ahmed",
        designation:"Shopkeper",
        bio:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis aut dolore, inventore illo deleniti facilis repudiandae pariatur ut asperiores tempore!"
 
    },
]
console.log(userData);
//////////////////////////////////Show data user///////////////////////////////////////

const userImage = document.getElementById("userimage");
const userName = document.getElementById("username");
const userDesignation = document.getElementById("designation");
const userInfo = document.getElementById("bio");

 let userCurrIndex = 0;


function setUserData() {
    userImage.src = userData[userCurrIndex].image;
    userName.textContent = userData[userCurrIndex].username;
    userDesignation.textContent = userData[userCurrIndex].designation;
    userInfo.textContent = userData[userCurrIndex].bio;
  }
  setUserData() 

  
  function moveForword(){
    userCurrIndex++;
    if(userCurrIndex  >= userData.length){
        userCurrIndex = 0;
    }
    setUserData()
  }

  function moveBackword(){
    userCurrIndex--;
    if(userCurrIndex  < 0){
       
        userCurrIndex = userData.length - 1
        
        console.log("user index", userCurrIndex);
    }
    setUserData()
  }
