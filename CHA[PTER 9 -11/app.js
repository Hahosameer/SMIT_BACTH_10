///////////////////////////////QUSETION 9 TO 11 ////////////////////////////////////////////

///////////////////////////////////QUESTION1//////////////////////////////////////////////
document.write("<h2>Question1</h2>")
var city = prompt("Enter thr city name")
alert("Welcome to city light")
document.write("Welcome to city light")
document.write("<hr>")

///////////////////////////////////QUESTION2//////////////////////////////////////////////
document.write("<h2>Question2</h2>")


var gender = prompt("Enter your gender");
if(gender.toLowerCase() === "male") { 
    alert("Good morning sir");
document.write("Good morning sir");
}else if(gender.toLowerCase() === "female") {
    alert("Good morning Ma'am"); 
    document.write("Good morning Ma'am"); 
}
document.write("<hr>");


///////////////////////////////////QUESTION3//////////////////////////////////////////////

var trafficSignal = prompt("Enter your trafic Signal")

if(trafficSignal.toLowerCase() == "Red"){
    alert("Must Stop")
}else if(trafficSignal.toLowerCase() == "Yellow"){
    alert("Ready to move")
}else if(trafficSignal.toLowerCase() == "Green"){
    alert("Move Now")
}


/////////////////////////////////QUESTION4//////////////////////////////////////////////

var currentFuel = +prompt("Enter remaning fuel in car (in litres)")

if(currentFuel < 0.25){
    alert("“Please refill the fuel in your car")
}


///////////////////////////////////QUESTION5//////////////////////////////////////////////


 var a = 4;
  if (++a === 5){ 
    alert("given condition for variable a is true");
 }



var b = 82;
if (b++ === 83){
   alert("given condition for variable b is true"); 
 }


 var c = 12; if
 (c++ === 13){
  alert("condition 1 is true");
  }
   if (c === 13){ 
    alert("condition 2 is true");
  }
   if (++c === 14){ 
     alert("condition 3 is true");
  } 
  if(c === 14){ 
     alert("condition 4 is true"); 
 } 


 var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 } 


 if (true){
     alert("True");
 } 
 if (false){
     alert("False"); 
} 
if (true){
}
 if (false){ 
    alert("False"); 
}
 

////////////////////////////////QUESTION6//////////////////////////////////////////////
document.write("<h2>Question6</h2>")
document.write("<br>")
document.write("<h1>Marks Sheet<h1>")
var totalMarks = +prompt("Total Marks")
document.write("Total Marks " + totalMarks)
document.write("<br>")
var obtainedmarks = +prompt("Enter  marks obtained in three subjects: ")
document.write("Marks Obtained :" + obtainedmarks)
 document.write("<br>")
var percentage = (totalMarks/obtainedmarks) * 100;
document.write("Percentage : " + percentage  + "%")
document.write("<br>")
console.log(percentage);

if(percentage >= 80){
    alert(" Grade : A - one ")
    document.write("Grade : A - one ")
    document.write("Remarks : Excellent ")
}else if(percentage <= 80 && percentage >= 70){
    alertA(" Grade : A ")
    document.write("Grade : A ")
    document.write("Remarks : Good ")
}else if(percentage <= 70 && percentage >= 60){
    alert("Grade : B ")
    document.write("Grade : B ")
    document.write("Remarks : you need to improve ")
}else if(percentage <= 60  && percentage >= 50){
    alert("Grade : C ")
    document.write("Grade : C ")
    document.write("Remarks : sorry ")
}


////////////////////////////////QUESTION7//////////////////////////////////////////////
document.write("QUESTION 7")
document.write("<br>")

let secretNumber = 5;
let guessNumber = +prompt("Enter the Number ranging from 1 to 10:")
if(secretNumber === guessNumber){
    document.write("<h1>Bingo! Correct answer</h1>")
}else if(secretNumber === guessNumber){
    document.write("<h1>Close enough to the correct answer</h1>")
}
else if(++secretNumber === guessNumber){
    document.write("<h1>“Close enough to the correct answer</h1>")
}else{
    document.write("<h1>Wrong Answer</h1>")
}

////////////////////////////////QUESTION8//////////////////////////////////////////////
document.write("QUESTION 8")
document.write("<br>")

let givenNumber = +prompt("Enter the Number") 
if(givenNumber % 2 === 0 ){
    document.write("The Number is divisible by")
}else{
    document.write("The Number is not divisible by")
}
document.write("<br>")

//////////////////////////////////QUESTION9//////////////////////////////////////////////
document.write("QUESTION 9")
document.write("<br>")

let inputNumber = +prompt("Enter the Number")
if (inputNumber % 2 === 0) {
    document.write("Even Number")
}else{
    document.write("odd Number")
}


////////////////////////////////QUESTION10//////////////////////////////////////////////
document.write("QUESTION 10")
document.write("<br>")

 var temperature = +prompt("Enter the temperature:")
if(temperature > 40){
    document.write("<h3>It is ti hot outside</h3>")
}else if(temperature > 30){
    document.write("<h3>The whether today is normal</h3>")
}else if(temperature > 20){
    document.write("<h3>Today whether is cool</h3>")
}else if(temperature > 10){
    document.write("<h3>To day whethe is so cool</h3>")
}



//////////////////////////////////QUESTION11//////////////////////////////////////////////
document.write("QUESTION 11")
document.write("<br>")

let firstNumber = +prompt("Enter the first Number")
let secondNumber = +prompt("Enter the second Number")
let operator = prompt("Enter any one opreator from following ,+,-,*,/,%")

if(operator === "+"){
   let  result = firstNumber + secondNumber;
    document.write("Result: " + result )
}else if(operator === "-"){
    result = firstNumber - secondNumber;
    document.write("Result: " + result )
}else if(operator === "*"){
    result = firstNumber * secondNumber;
    document.write("Result: " + result )
}else if(operator === "/"){
    result = firstNumber / secondNumber;
    document.write("Result: " + result )
} else if(operator === "%"){
    result = firstNumber % secondNumber;
    document.write("Result: " + result )
} 

console.log(result);