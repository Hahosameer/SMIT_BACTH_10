

document.write("<h2>Question4</h2>")

var character = prompt("Enter any alphabet from a to z")
character = character.toLowerCase();
if((character === "a")||(character === "e")||(character === "i")||(character === "e")||(character === "u")){
    document.write("<h3>true</h3>")
} else {
    document.write("<h3>fales</h3>")
}

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
