let diceImage = document.querySelector("#image");
let rollDice = document.querySelector("#rollDice");
let playerName1 = document.querySelector("#playerName1");
let playerName2 = document.querySelector("#playerName2");
let totalScore1 = document.querySelector("#totalScore1");
let totalScore2 = document.querySelector("#totalScore2");
let currentScore1 = document.querySelector("#currentScore1");
let currentScore2 = document.querySelector("#currentScore2");
let inputPlayer1 = document.querySelector("#inputPlayer1");
let inputPlayer2 = document.querySelector("#inputPlayer2");
let okBtn = document.querySelector("#okBtn");
let hold = document.querySelector("#hold");
let newGame = document.querySelector("#new");
let inputContant = document.querySelector("#inputContant");
let main = document.querySelector(".main");
let winplayer1 = document.querySelector("#winplayer1");
let winningPage = document.querySelector("#winningPage");
let winPlayerName = document.querySelector("#winPlayerName");
let player1PicInput = document.querySelector("#player1PicInput");
let player2PicInput = document.querySelector("#player2PicInput");
let pic1Input = document.querySelector("#pic1");
let pic2Input = document.querySelector("#pic2");
let winPic = document.querySelector("#winPic");
let heading = document.querySelector("#heading");
console.log(heading);
let player1Trun = true;

/////////////////////////////// pic input/////////////////////
player1PicInput.addEventListener("change", () => {
  pic1Input.src = URL.createObjectURL(player1PicInput.files[0]);
});
player2PicInput.addEventListener("change", () => {
  pic2Input.src = URL.createObjectURL(player2PicInput.files[0]);
});

///////////////////////////// roll dice /////////////////////////////////
rollDice.addEventListener("click", () => {
  diceImage.style.transform += "rotate(360deg)";
  diceImage.style.transition += "0.1s";

  if (totalScore1.textContent < 100 && totalScore2.textContent < 100) {
    let rondomNum = Math.ceil(Math.random() * 6);
    diceImage.src = `assets/${rondomNum}.png`;

    if (rondomNum == 1) {
      alert(`It's 1 turn change`);
      if (player1Trun) {
        player1Trun = false;
      } else {
        player1Trun = true;
      }
      currentScore1.textContent = 0;
      currentScore2.textContent = 0;
    } else {
      if (player1Trun) {
        currentScore1.textContent =
          Number(currentScore1.textContent) + rondomNum;
      } else {
        currentScore2.textContent =
          Number(currentScore2.textContent) + rondomNum;
      }
    }
  }
});


/////////////////////// hold    //////////////////////

hold.addEventListener("click", () => {
  if (totalScore1.textContent < 100 && totalScore2.textContent < 100) {
    if (player1Trun) {
      totalScore1.textContent =
        Number(totalScore1.textContent) + Number(currentScore1.textContent);
      currentScore1.textContent = 0;
      player1Trun = false;
    } else {
      totalScore2.textContent =
        Number(totalScore2.textContent) + Number(currentScore2.textContent);
      currentScore2.textContent = 0;
      player1Trun = true;
    }
    if (totalScore1.textContent >= 50) {
      // alert("win " + playerName1.textContent )
      main.style.display = "none";
      winplayer1.style.height = "100vh";
      winningPage.style.display = "block";
      winPlayerName.textContent = playerName1.textContent;
      winPic.src = pic1Input.src;
    } else if (totalScore2.textContent >= 50) {
      // alert("win " + playerName2.textContent )
      main.style.display = "none";
      winplayer1.style.height = "100vh";
      winningPage.style.display = "block";
      winPlayerName.textContent = playerName2.textContent;
      winPic.src = pic2Input.src;
    }
  }
});

newGame.addEventListener("click", () => {
  totalScore1.textContent = 0;
  totalScore2.textContent = 0;
  currentScore1.textContent = 0;
  currentScore2.textContent = 0;
  playerName1.textContent = "PLAYER 1";
  playerName2.textContent = "PLAYER 2";
  inputContant.style.display = "block";
  heading.style.padding = "20px"
});

okBtn.addEventListener("click", () => {
  playerName1.textContent = inputPlayer1.value;
  inputPlayer1.textContent = ""
  playerName2.textContent = inputPlayer2.value;
  inputContant.style.display = "none";
  
});


okBtn 
