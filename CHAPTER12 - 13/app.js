//////////////////////////////////////CHAPTER 12 TO 13////////////////////////////////////


/////////////////////////////////////QUESTION 1//////////////////////////////////////////

document.write("<h2>Question1</h2>")
document.write("<br>")
var char = +prompt("Enter a character (number or string)"); 

if((char >= 65)&&(char <= 90)) {
    document.write("<h3>Input is uppercase letter</h3>")
}else if((char >= 97)&&(char <= 122)){
    document.write("<h3>Input is lowercase letter</h3>")
}else{
    document.write("<h3>Input is a number</h3>")
}

/////////////////////////////////////QUESTION 2//////////////////////////////////////////

document.write("<h2>Question2</h2>")
document.write("<br>")

var integer1 = prompt("Enter the first integer")
var integer2 = prompt("Enter the secondinteger")
if((integer1 > integer2)||(integer2 < integer1)) {
document.write(integer1 + " is larger than " + integer2)
}else if((integer2 > integer1)||(integer1 < integer2)) {
    document.write( integer2 + " is larger than " + integer1)
}else if(integer1 === integer2){
document.write(integer1 + " is equel to " + integer2)
}

/////////////////////////////////////QUESTION 3//////////////////////////////////////////

document.write("<h2>Question3</h2>")
document.write("<br>")



var userNumber = +prompt("Enter the number")
if(userNumber < 0){
    document.write("<h3>The number is negitive</h3>")
}else if(userNumber === 0) {
    document.write("The number is zaro")
}else{
    document.write("<h3>The number is positive</h3>")
}

/////////////////////////////////////QUESTION 4//////////////////////////////////////////

document.write("<h2>Question4</h2>")
document.write("<br>")


var character = prompt("Enter any alphabet from a to z")
character = character.toLowerCase();
if((character === "a")||(character === "e")||(character === "i")||(character === "e")||(character === "u")){
    document.write("<h3>true</h3>")
} else {
    document.write("<h3>fales</h3>")
}

/////////////////////////////////////QUESTION 5//////////////////////////////////////////


document.write("<br>")



document.write("<h2>Question5</h2>")
var correctPassword = "232323"
var userPassword = prompt("Enter your password")
if(userPassword === ""){
    document.write("<h3>Pleas enter your password</h3>")
}else if(correctPassword === userPassword){
    document.write("<h3>Correct! The password you enter matches the orignat password</h3>")
}else if(correctPassword !== userPassword){
    document.write("<h3>Incorrect Pasword</h3>")
}

/////////////////////////////////////QUESTION 6//////////////////////////////////////////


document.write("<br>")

// document.write(greeting)
// var hour = 13;
document.write("<h2>Question6</h2>")

var greeting = prompt("Please enter number");
if(greeting < 18){ 
alert  ("Good day")
}else{
alert("good Evening");
}


/////////////////////////////////////QUESTION 7//////////////////////////////////////////

document.write("<h2>Question7</h2>")
document.write("<br>")

document.write("<h2>Question7</h2>")
var time = +prompt("Enter time in 24 hours clock format like;1900 = 7pm")
if((time >= 1)&&(time <= 12.00)){
document.write("<h3>Good Morning")
}else if((time >=12.00)&&(time <= 17.00)){
    document.write("<h3>Good Afternoon")
}else if((time >=17.00)&&(time <= 21.00)){
    document.write("<h3>Good Evening")
}else if((time >=21.00)&&(time <= 23.00)){
    document.write("<h3>Good Night")
}