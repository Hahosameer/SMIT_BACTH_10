const input = document.querySelector('#input')
const guess = document.querySelector('#guess')
const Score = document.querySelector('#Score')
const CheckBtn = document.querySelector('#btn')
const question = document.querySelector('#question')
const highScore = document.querySelector('#highScore')
const container = document.querySelector('.container')
let newScore= 20
const randomNumber = Math.ceil( Math.random() * 20)
 
console.log(randomNumber);

function check(){
 if( input.value == randomNumber){
    guess.textContent = "Correct Number"
    question.textContent = randomNumber;
    highScore.textContent = randomNumber;
    container.style.backgroundColor = "green"
    input.style.backgroundColor = "green"
    input.value = ""
 }else{
    guess.textContent = input.value > randomNumber ? "Too High" : "Too Low"
    input.value = ""
    Score.textContent = --newScore ;
   
 }
}