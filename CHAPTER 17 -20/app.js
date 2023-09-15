///////////////////////////////////CHAPTER 17 - 20 ////////////////////////////////////////

///////////////////////////////////QUESTION 1///////////////////////////////////////////
document.write("<h2><i>QUESTION 1</i></h2>")
let arrayOfArray = [ [], [], []];
document.write("<br><hr>")
///////////////////////////////////QUESTION 2///////////////////////////////////////////
document.write("<h2><i>QUESTION 2</i></h2><br>")
let mulDimArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1,]]
document.write(mulDimArray[0] + "<br>" + mulDimArray[1] + "<br>" + mulDimArray[2] + "<br><hr>")

///////////////////////////////////QUESTION 3///////////////////////////////////////////

document.write("<h2><i>QUESTION 3</i></h2><br>")
for (let index = 1; index <=10 ; index++) {
    document.write(index , "<br>")
}
document.write("<br><hr>")


///////////////////////////////////QUESTION 4///////////////////////////////////////////

let tableNumber = +prompt("Enter a number to show its Multiplication table")
let tableLength = +prompt("Enter length multiplication table")
document.write(" multiplication table of " + tableNumber + "<br></br>")
document.write("Length " + tableLength + "<br>")
for (let i = 1; i <= tableLength; i++){
    document.write(tableNumber + " x "  +  i  + " = " + tableNumber*i + "<br>")
  
}
document.write("<br><hr>")
///////////////////////////////////QUESTION 5///////////////////////////////////////////


let fruit = ["apple", "banana","mango","orange","strawberry"]
for (let index = 0; index < fruit.length; index++) {
   document.write(fruit[index], "<br>")
    
}
for (let i = 0; i < fruit.length; i++) {
   document.write("Element at Index " + i + " is " + fruit[i] + "<br>")
    
}
document.write("<br><hr>")

///////////////////////////////////QUESTION 6///////////////////////////////////////////

document.write("<h3>Counting:</h3>")
////a
for (let i = 1; i <= 15; i++) {
    document.write(i + ",")
    
}

//////b
document.write("<h3>Reverse counting:</h3>")
for (let i = 10; i >= 1 ; i--) {
   document.write(i + ",")
    
}
////c
document.write("<h3>Even:</h3>")

for (let i = 0; i <= 20 ; i+=2) {
document.write(i + ",")
    
}
////d
document.write("<h3>Odd:</h3>")

for (let i = 1; i < 20 ; i+=2) {
document.write(i + ",")
    
}
////e
document.write("<h3> Series:</h3>")

for (let i = 2; i < 20 ; i+=2) {
document.write(i + "k" + ",")
    
}


///////////////////////////////////QUESTION 7///////////////////////////////////////////

let bakeres = ["cake","apple pie","cookies","chips","patties"]
let userInput = prompt("Welcomr to ABC bakery.What do you want to order sir/Ma,ma")

userInput = userInput.toLowerCase();
let foods = false;
let itemIndex;
for (let i = 0; i < bakeres.length; i++) {
  let currentItem = bakeres[i].toLowerCase();
  if(currentItem === userInput){
  foods = true;
  itemIndex = i;
  }
    
}
if(foods){
    alert(userInput + " is available at index " + itemIndex + " is our bakery")
}else{
    alert("we are sorry " + userInput + " is not avaible is our bakery ")
}


///////////////////////////////////QUESTION 8///////////////////////////////////////////

let A = [24,53,78,91,12]
let largestNumber = A[0]
document.write("<br><hr>")
document.write("Array item:" + A + "<br>")
for (let i = 0; i < A.length; i++) {
  if(A[i] > largestNumber){
    largestNumber = A[i]
  }
    
}
document.write(" The largest Number number is:" + largestNumber)


///////////////////////////////////QUESTION 9///////////////////////////////////////////

let A1 = [24,53,78,91,12]
let smallestNumber = A1[0]
document.write("<br><hr>")
document.write("Array item:" + A + "<br>")
for (let i = 0; i < A1.length; i++) {
  if(A1[i] < smallestNumber){
    smallestNumber = A1[i]
  }
    
}

document.write(" The Smalllest number is:" + smallestNumber)
document.write("<br>")
document.write("<br><hr>")

///////////////////////////////////QUESTION 10///////////////////////////////////////////

for (let i = 5; i <= 100 ; i+=5) {  
    document.write(i + "," )
        
    }