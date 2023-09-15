///////////////////////////////////Question1/////////////////////////////////////////////

document.write("<h1>Question1</h1>")
document.write("<br>")

var num1 =10
var num2 =20
var result =num1 + num2;

document.write(" Sum of  " + num1 + " and " + num2 + " is " + result) 
document.write("<br>")


///////////////////////////////////////////Question2//////////////////////////////////////

document.write("<h1>Question2</h1>")
document.write("<br>")

var Subtract =num1 - num2;
document.write("<br>")
document.write(" Subtraction  of " + num1 + " and " + num2 + " is " + Subtract) 
document.write("<br>")
var Multiply =num1 * num2;
document.write("<br>")
document.write(" Multiplication  of " + num1 + " and " + num2 + " is " + Multiply ) 
document.write("<br>")
var Division =num1 / num2;
document.write("<br>")
document.write(" Division of " + num1 + " and " + num2 + " is " + Division ) 
document.write("<br>")
var Modulus =num1 % num2;
document.write("<br>")
document.write(" Modulus of " + num1 + " and " + num2 + " is " + Modulus ) 
document.write("<br>")
document.write("<hr>")

//////////////////////////////////////Question3//////////////////////////////////////////

document.write("<h1>Question3</h1>")
document.write("<br>")

//Question3 (a)
let number;
//Question3 (b)
document.write(" Value after variable declaration is: "  + number)
document.write("<br>")
//Question3 (c)
number =5;
//Question3 (d)
document.write(" initial value: " + number)
document.write("<br>")
//Question3 (e)
number ++;
//Question3 (f)
document.write(" Value after increment is: "  + number)
document.write("<br>")
//Question3 (g)
number  += 7;
//Question3 (h)

document.write(" Value after addition is: "  + number)
document.write("<br>")
//Question3 (i)
number --;
//Question3 (j)
document.write(" Value after decrement is: "  + number)
document.write("<br>")
//Question3 (k)
let remainder = number % 3;
//Question3 (l)
document.write(" Value after remainder is: "  + remainder)
document.write("<hr>")

////////////////////////////////////////Question4 /////////////////////////////////////////

document.write("<h1>Question4</h1>")
document.write("<br>")

let Ticket_Price = 600;
let Total_Ticket = 5;
let Total_Cost =  Ticket_Price*Total_Ticket;

document.write(" Total cost to by " ,Total_Ticket," ticket to a movie is ",Total_Cost," PKR ");
document.write("<hr>");

////////////////////////////////////////Question5//////////////////////////////////////////

document.write("<h1>Question5</h1>");
document.write("<br>")

let tableNumber = 4;
document.write(" Table of " +  tableNumber);
document.write("<br>")
document.write("<br>")
document.write ( "4 x 1 = " + (4 * 1))
document.write("<br>")
document.write ( "4 x 2 = " + (4 * 2))
document.write("<br>")
document.write ( "4 x 3 = " + (4 * 3))
document.write("<br>")
document.write ( "4 x 4 = " + (4 * 4))
document.write("<br>")
document.write ( "4 x 7 = " + (4 * 7))
document.write("<br>")
document.write ( "4 x 8 = " + (4 * 8))
document.write("<br>")
document.write ( "4 x 9 = " + (4 * 9))
document.write("<br>")
document.write ( "4 x 10 = " + (4 * 10))
document.write("<br>");



document.write("<hr>"); 
 
 ///////////////////////////////////Question6/////////////////////////////////////////////


 document.write("<h1>Question6</h1>");
document.write("<br>")

//Q6 a

var celcius = 25;
//Q6 b
var cTof = (celcius * 9 / 5)+ 32;
document.write(celcius, "&degC","is", '&degf')
document.write("<br>");
//Q6 c
var fahrenheit = 70;
//Q6 d
var fToC =(fahrenheit -32) * 5/9;
document.write(frameElement , "&degC" , "is" , fToC, "&degf")
document.write("<br>");
document.write("<hr>");

//////////////////////////////////Questionb7///////////////////////////////////////////


document.write("<h1>Question7</h1>");
document.write("<br>")


//Q7 a
document.write("<h1>Shopping cart</h1")
document.write("</br>")
document.write("</br>")
document.write("</br>")
document.write("</br>")
var priceItem = 650;

var priceItem1 = 650;
document.write("Price of item 1 is: " , priceItem1);
document.write("</br>")
//Q7 b 

var quantityItem1 = 3
document.write("Quantity of item 1 is ", quantityItem1);
document.write("</br>")
//Q7 c
var priceItem2 = 100;
document.write("Price of item 2 is: " , priceItem2);
document.write("</br>")
//Q7 d

var quantityItem2 = 7;
document.write("Qyantity of item 2 is ", quantityItem2)
document.write("</br>")

//Q7 e

var shopingCharges = 100;
document.write("Shipping charges ", shopingCharges)
document.write("</br>")


var totalCoat = (priceItem1*quantityItem1)+(priceItem2*quantityItem2)+ shopingCharges
document.write("Total cost of your order is:", totalCoat)
document.write("<hr>")

////////////////////////////////Question8//////////////////////////////////////////////
document.write("<h1>Question8</h1>");
document.write("<br>")

document.write("<h1>Mark sheet</h1>");
document.write("<br>")

var totalMark= 1400;
document.write("Total mark ", totalMark)
document.write("<br>")

var markObtained = 970
document.write("Mark Obtained ", markObtained)
document.write("<br>")

var  percentage = markObtained/totalMark *100
document.write( "Percentage " , percentage)
document.write("<br>")
document.write("<hr>")
//////////////////////////////////////Question9///////////////////////////////////////

document.write("<h1>Question9</h1>");
document.write("<br>")

document.write("<h1>Currency in PKP</h1>");
document.write("<br>")

var DOL = 1048;
var AED = 700
var TotalCurrencyPKP =  DOL + AED
document.write("Total Currency in PKP: ",TotalCurrencyPKP)
document.write("<br>")
document.write("<hr>")

/////////////////////////////////////Queston10////////////////////////////////////////

document.write("<h1>Question10</h1>");
document.write("<br>")

document.write("<h1>Arithmetic operations in single Expression</h1>")
document.write("<br>")

var someNumber = 10;
var calculations = [(someNumber + 5)* 10]/2;

document.write("Total  calculations is" , calculations)
