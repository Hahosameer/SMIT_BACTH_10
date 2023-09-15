/////////////////////////////////////////CHAPTER6//////////////////////////////////////

////////////////////////////////////////Question1/////////////////////////////////////

document.write("<h1>Question1</h1>")
document.write("<br>")

var num = 10;

document.write("Result:")
document.write("<br>")
document.write(" The value of a is: " ,num)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
++num
document.write(" The value of ++a is: " ,num)
document.write("<br>")
document.write(" Now the  of a is: " ,num)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write(" The value of a++ is: " ,num)
num++
document.write("<br>")
document.write(" Now the  of a is: " ,num)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")

--num
document.write(" The value of --a is: " ,num)
document.write("<br>")
document.write(" Now the  of a is: " ,num)
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write(" The value of a-- is: " ,num)
num--
document.write("<br>")
document.write(" Now the  of a is: " ,num)
document.write("<hr>")

//////////////////////////////////////////////////////Quwstion2//////////////////////////////////////////////////////
document.write("<h1>Question2</h1>")
document.write("<br>")



var a = 2;
var b = 1;
document.write("a is " ,a)
document.write("<br>")
document.write("a is " ,b)
document.write("<br>") 
var result =  --a - --b + ++b + b--; 
document.write(" The Result is ", result)
document.write("<hr>")


//////////////////////////////////////////////////////Quwstion3//////////////////////////////////////////////////////
document.write("<h1>Question3</h1>")
document.write("<br>")

var userName = prompt("Enter your name");
document.write("Asalam-u-oalikum  " , userName)
console.log("Asalam-u-oalikum  " , userName)
document.write("<br>")
document.write("<hr>")
//////////////////////////////////////////////////////Quwstion4////////////////////////////////////////////////

document.write("<h1>Question4</h1>");
document.write("<br>")

let tableNumber = 5;
document.write(" Table of " +  tableNumber);
document.write("<br>")
document.write("<br>")
document.write ( "5 x 1 = " + (5 * 1))
document.write("<br>")
document.write ( "5 x 2 = " + (5 * 2))
document.write("<br>")
document.write ( "5 x 3 = " + (5 * 3))
document.write("<br>")
document.write ( "5 x 5 = " + (5 * 5))
document.write("<br>")
document.write ( "5 x 7 = " + (5 * 7))
document.write("<br>")
document.write ( "5 x 8 = " + (5 * 8))
document.write("<br>")
document.write ( "5 x 9 = " + (5 * 9))
document.write("<br>")
document.write ( "5 x 10 = " + (5 * 10))
document.write("<br>");
document.write("<hr>");
//////////////////////////////////////////////////////Quwstion5//////////////////////////////////////////////////////
document.write("<h1>Question5</h1>")
document.write("<br>")

var  subject1 = prompt("Enter your first Subject Name")
console.log("First Subject Name ",subject1);
document.write("First Subject Name ",subject1);
document.write("<br>")


var  subject2 = prompt("Enter your Second Subject Name")
console.log("Second Subject Name ",subject2);
document.write("Second Subject Name ",subject2);
document.write("<br>")



var  subject3 = prompt("Enter your Third Subject Name")
console.log("Third Subject Name ", subject3);
document.write("Third Subject Name ", subject3);
document.write("<br>")



var totalMark = 100;

var obtainedMarkOfSubject1 = +prompt("Enter the (Subject1 )Mark out of 100")
console.log("$(Subject1) Obtained Marks: " , obtainedMarkOfSubject1);
document.write("$(Subject1) Obtained Marks: " , obtainedMarkOfSubject1)


document.write("<br>")



var obtainedMarkOfSubject2 = +prompt("Enter the (Subject2 )Mark out of 100")
console.log("$(Subject2) Obtained Marks: " , obtainedMarkOfSubject2);
document.write("$(Subject2) Obtained Marks: " , obtainedMarkOfSubject2)

document.write("<br>")



var obtainedMarkOfSubject3 = +prompt("Enter the (Subject3 )Mark out of 100")
console.log("$(Subject3) Obtained Marks: " , obtainedMarkOfSubject3);
document.write("$(Subject3) Obtained Marks: " , obtainedMarkOfSubject3)
document.write("<br>")

var allSubject = obtainedMarkOfSubject1 + obtainedMarkOfSubject2 + obtainedMarkOfSubject3;
console.log("Total Obtained Marks All Subject " ,allSubject);
document.write("Total Obtained Marks All Subject " ,allSubject)
document.write("<br>")


var percentageSubject1 = (obtainedMarkOfSubject1 * 100)/100;
console.log("$(subject1) percentage: ", obtainedMarkOfSubject1, "%");
document.write("$(subject1) percentage: ", obtainedMarkOfSubject1, "%");
document.write("<br>")


var percentageSubject2 = (obtainedMarkOfSubject1 * 100)/100;
console.log("$(subject2) percentage: ", obtainedMarkOfSubject2, "%");
document.write("$(subject2) percentage: ", obtainedMarkOfSubject2, "%");
document.write("<br>")


var percentageSubject3 = (obtainedMarkOfSubject1 * 100)/100;
console.log("$(subject3) percentage: ", obtainedMarkOfSubject3, "%");
document.write("$(subject3) percentage: ", obtainedMarkOfSubject3, "%");
document.write("<br>")


var totalPercentage = (percentageSubject1 + percentageSubject2 + percentageSubject3)/3;
console.log("Total Percentage" ,totalPercentage, "%");
document.write("Total Percentage" ,totalPercentage, "%");
document.write("<br>")