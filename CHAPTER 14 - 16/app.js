/////////////////////////////////////CHAPTER 14 - 16/////////////////////////////////////

/////////////////////////////////////QUESTION 1 /////////////////////////////////////////

var student = [];

/////////////////////////////////////QUESTION 2 /////////////////////////////////////////

var student = {};

/////////////////////////////////////QUESTION 3 /////////////////////////////////////////

var str_Array = ["a", "b", "c", "d"];

/////////////////////////////////////QUESTION 4 /////////////////////////////////////////

var num_Array = [1,2,3,4,5];

/////////////////////////////////////QUESTION 5 /////////////////////////////////////////

var boolean_Array = [true,false]

/////////////////////////////////////QUESTION 6 /////////////////////////////////////////


var mix_Array = ["string","sameer",20,30,true,false]

/////////////////////////////////////QUESTION 7 /////////////////////////////////////////

document.write("<h1><i>Qualifications:</i></h1> <hr>")

let qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil","Phd <hr>"]
document.write("1) ", qualifications[0],"<br>");
document.write("2) ", qualifications[1],"<br>");
document.write("3) ", qualifications[2],"<br>");
document.write("4) ", qualifications[3],"<br>");
document.write("5) ", qualifications[4],"<br>");
document.write("6) ", qualifications[5],"<br>");
document.write("7) ", qualifications[6],"<br>");
document.write("8) ", qualifications[7],"<br>");

/////////////////////////////////////QUESTION 8 /////////////////////////////////////////

let student_Name = ["Michael","John","Tony"]
let student_score = [320,230,480]
let totak_Marks = 500;

let percentage = (student_score[0]/totak_Marks) * 100;
document.write("Score of " + student_Name[0] + " is " + student_score[0] + "." + "Percentage: " + percentage + "%")
document.write("<br>")
let percentage1 = (student_score[1]/totak_Marks) * 100;
document.write("Score of " + student_Name[1] + " is " + student_score[1] + "." + "Percentage: " + percentage1 + "%")
document.write("<br>")
let percentage2 = (student_score[2]/totak_Marks) * 100;
document.write("Score of " + student_Name[2] + " is " + student_score[2] + "." + "Percentage: " + percentage2 + "%")
document.write("<br><hr>")

/////////////////////////////////////QUESTION 10 /////////////////////////////////////////

let Score = ["320","230","480","120"]
document.write("Score of Student :" + Score + "<br>")
let sort_score = Score.sort();
document.write("0rdered Score of Student :" + sort_score + "<br><hr>")


/////////////////////////////////////QUESTION 11/////////////////////////////////////////

let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
let select_cities = cities.slice(2,4);
document.write("Cities List: <br>")
document.write(cities + "<br>")
document.write("Select cities List: <br>")
document.write(select_cities + "<br><hr>")

/////////////////////////////////////QUESTION 12/////////////////////////////////////////

var arr = ["This","is","my","cat"]
var string = arr.join(" ")
document.write("Array:<br>")
document.write(arr  + "<br>")
document.write("String: <br>")
document.write(string + "<br><hr>")

/////////////////////////////////////QUESTION 13/////////////////////////////////////////

let accessories = [];
accessories.push("Keyboard")
accessories.push("Mouse")
accessories.push("Monitor")
accessories.push("Printer")
document.write("Divices:" + "<br>")
document.write(accessories + "<br><br><br>")
let accessories1 = accessories.shift();
let accessories2 = accessories.shift();
let accessories3 = accessories.shift();
let accessories4 = accessories.shift();
document.write("Out" + "<br>")
document.write(accessories1 + "<br>")
document.write("Out" + "<br>")
document.write(accessories2 + "<br>")
document.write("Out" + "<br>")
document.write(accessories3+ "<br>")
document.write("Out" + "<br>")
document.write(accessories4 + "<br><hr>")


/////////////////////////////////////QUESTION 14/////////////////////////////////////////

let divices =[]
divices.push("Keyboard")
divices.push("Mouse")
divices.push("Monitor")
divices.push("Printer")
document.write("Divices:<br>")
document.write(divices + "<br><br><br>")
let divice1 =divices.pop();
let divice2 =divices.pop();
let divice3 =divices.pop();
let divice4 =divices.pop();
document.write("Out" + "<br>")
document.write(divice1 + "<br>")
document.write("Out" + "<br>")
document.write(divice2 + "<br>")
document.write("Out" + "<br>")
document.write(divice3+ "<br>")
document.write("Out" + "<br>")
document.write(divice4 + "<br><hr>")


/////////////////////////////////////QUESTION 15/////////////////////////////////////////

let phone = ["Apple","Samsumg","Motorola","Nokia","Sony","Huawai"]
document.write("<select id = phoneSelect>");
document.write('<option value = Apple >Apple</option> ');
document.write('<option value = Samsumg >Samsumg</option> ');
document.write('<option value = Motorola >Motorola</option> ');
document.write('<option value = Nokia >Nokia</option> ');
document.write('<option value = Sony >Sony</option> ');
document.write('<option value = Huawai >Huawai</option> ');
document.write("</select> <br><br><br><br><br><br>")




////////////////////////////////////////////ASSIGNMENT IS COMPLETE///////////////////////////////////////////