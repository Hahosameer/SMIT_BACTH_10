/////////////////////////////////// CHAPTER 21-25 /////////////////////////////////////

////////////////////////////////////////////////////////Q1//////////////////////////////////////////////////////
// var firstName = prompt("First Name")

// var lastName = prompt("last Name")

// var fullName = `Full Name: ${firstName} ${lastName}`
// document.write(fullName)


////////////////////////////////////////////////////////Q2//////////////////////////////////////////////////////

// let favMobilePhone = prompt("Enter your favorite mobile phone model")

// document.write(` <h1>My favorite phone is: ${favMobilePhone}
//  <br> length of string : ${favMobilePhone.length} </h1>`)

//  document.write("<hr>")
////////////////////////////////////////////////////////Q3//////////////////////////////////////////////////////

// let text = "Pakistani"

// let  firstIndexOfText = text.indexOf("n");

// document.write(`<h1>String: ${text} <br> Index of 'n' ${firstIndexOfText}</h1>`)

////////////////////////////////////////////////////////Q4//////////////////////////////////////////////////////
// let text_1 = "Hello World"

// let  LastIndex = text_1.lastIndexOf("l");

// document.write(`<h1>String: ${text_1} <br> Last Index of 'l' ${LastIndex}</h1>`)


//Q5
// let index ="Pakistani"
// let  firstIndex = index.charAt(3);

// document.write(`<h1>String: ${index} <br> Character at index 3: ${firstIndex}</h1>`)

////////////////////////////////////////////////////////Q6//////////////////////////////////////////////////////

// let firstName_2 = prompt("First Name")
// let  lastName_2 = prompt("last Name")

// let conCat =  firstName_2.concat("" + lastName_2)

// document.write(`We Come to our land: ${conCat}`)
////////////////////////////////////////////////////////Q7//////////////////////////////////////////////////////

//  let city ="Hyderabad"

// document.write(`<h1>City: ${city} <br> After replacement : ${city.replace("Hyderabad" , "Islamabad")}</h1>`)

////////////////////////////////////////////////////////Q8//////////////////////////////////////////////////////

// var message = "Ali and Sami are best friend. They play circket and football together"

// document.write(`<h1> My value :${message}

// <br>After replace All: ${message.replaceAll("and" , "&")} </h1> `)


/////////////////////////////////////////////////////Q9///////////////////////////////////////////////////

// let str = "472"
// let numbers = 472

// document.write(`<h2>Value: ${str} <br> Type : String 
// <br> Vulue : ${numbers}<br> Type : Numbers </h2>`)

////////////////////////////////////////////////////////Q10//////////////////////////////////////////////////////

// let food = "peanut

// document.write(`<h2>User input : ${food}<br> Upper Case : ${food.toUpperCase()}</h2>`)

////////////////////////////////////////////////////////Q11//////////////////////////////////////////////////////\

//   let string = "javascript" 

//   let StrFirstCap = string[0].toUpperCase();

//  let lowerCase = string.slice(1).toLowerCase();

//   document.write(`<h2>User input : ${userInput} <br> Title case : ${  StrFirstCap + lowerCase}</h2>`)


// let string = "javascript" 

// let cap = string.charAt(0).toUpperCase() + string.slice(1)

// document.write(`<h2> User Input : ${string} <br> Title Case : ${cap} </h2>`)

// ////////////////////////////////////////////////////////Q12//////////////////////////////////////////////////////

//  let numbers = 35.36;

//  let converIntoStr = numbers.toString() * 100;

//  document.write(`<h2> Numbers : ${numbers} <br> Result : ${converIntoStr}<br>  </h2>`)


// var num = prompt("Enter a decimal numbers")
// document.write(num.replace("." , ""))

////////////////////////////////////////////////////////Q13//////////////////////////////////////////////////////
// var userName = prompt("Enter your User name");

// var signh = /[a-zA-Z0-9]/gi;
// if(signh.test(userName)){
//     alert(`User is ${userName}`)
// }else{

//     alert("Pleas enter your valaid User anme")
// };

////////////////////////////////////////////////////////Q14//////////////////////////////////////////////////////
// let bakaryItem = ["Cake","pie apple","cookie","chips","patties"]
// let aboutItem = prompt("Welcome to ABC bakery. What do you want order \n sir/ma'am")
// let foundMacth = false;

// for(let i = 0; i < bakaryItem.length; i++){
//     if(bakaryItem[i] === aboutItem){
//         foundMacth = true;
//         document.write(`${bakaryItem[i]} is Available at index ${i} in our bakery`)

//     }
//     if(foundMacth === false){
//         document.write(`We are sorry. ${aboutItem} is not Available in our bakery `)
//     }
// }


////////////////////////////////////////////////////////Q15//////////////////////////////////////////////////////

// let password = prompt("Enter your password")

// let matchNum = false;

// for (let i = 0; i < password.length; i++) {//////////////////////////////////////////////////////
//     if (isNaN(parseInt(password[i]))) {
//         document.write(`Enter Password : ${password} <br>`)
//         matchNum = true;
//         break

//     } else {
//         document.write(`Password can not begin with a numbers  <br>`)
//         break
//     }
// }

// if (isNaN(parseInt (password.length)) < 6 )  {
//     document.write(`Pleas enter a valiad passwrod`)
// }

////////////////////////////////////////////////////////Q16//////////////////////////////////////////////////////


// for (var i = 0; i <h1 univarsity.length; i++) {
//     for (var j = 0; j < univarsity[i].length; j++) {
//         console.log(univarsity[i][j]);

//     }
// }


////////////////////////////////////////////////////////17////////////////////////////////////////////////////

// let pak = "Pakistan"

// let last = pak.charAt(7)

// document.write(`User input :${pak} <br>  last character of input: ${last}`)



///////////////////////////////////////////// CHAPTER 26- 30 //////////////////////////////////////////////////



////////////////////////////////////////////////// Q1 ///////////////////////////////////////////////////////

// var  numbers = 3.45214
// var  changeValue = Math.round(numbers)
// var flor = Math.floor(numbers)
// var cil = Math.ceil(numbers)



// document.write(`numbers: ${numbers} <br> round of value: ${changeValue}  <br> floor Value: ${flor} <br> Ciel Value:${cil}`)


////////////////////////////////////////////////// Q2 ///////////////////////////////////////////////////////

// var  numbers = -2.673;
// var rond =  Math.round(numbers)
// var flo_2 =  Math.floor(numbers)
// var cill =  Math.ceil(numbers)
//  document.write(` Number : ${numbers} <br> round of value : ${rond} <br> floor Value : ${flo_2} <br> Ciel Value :${cill}`)
// document.write(rond)

////////////////////////////////////////////////// Q3 ///////////////////////////////////////////////////////

// var randomNumber  = Math.floor(Math.random() + 4);
// var randomNumber2 =  Math.floor(Math.random() + 6);

// document.write(`<h1>random dice value : ${randomNumber} <br> random dice value : ${randomNumber2}</h1>`)

////////////////////////////////////////////////// Q4 ///////////////////////////////////////////////////////

// var randomCoinValue = ["heads", "Tails"]

// var emtyStr = "";
// var randam;

// for (let i = 0; i < randomCoinValue.length; i++) {
//     randam = Math.floor(Math.random() * randomCoinValue.length);
//     emtyStr = randomCoinValue[randam]
// }

// document.write(`<br><br> ${randam} <br> random Coins value : ${emtyStr}`)


////////////////////////////////////////////////// Q5 ///////////////////////////////////////////////////////


// var showRandomNumber = Math.floor(Math.random() * 100)

// document.write(`randam number between 1 and 100 : ${showRandomNumber}`)

////////////////////////////////////////////////// Q6 ///////////////////////////////////////////////////////

// var weight =parseFloat(prompt("Enter user weight Kilograms")) 

// alert(`The weight of user is ${weight} Kilograms`)

////////////////////////////////////////// COMPLETE 30 CHAPTER ////////////////////////////////////////////////


//////////////////////////////////////////// START 31 CHAPTER  ////////////////////////////////////////////////


////////////////////////////////////////////////// Q1 ///////////////////////////////////////////////////////

// var date = new Date();
// document.write(date);


////////////////////////////////////////////////// Q2 ///////////////////////////////////////////////////////

// var monthNames  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var theDay = now.getMonth();
// var nameOfToMonth = monthNames[theDay];

// document.write(`Current month : ${nameOfToMonth}`)


////////////////////////////////////////////////// Q3 ///////////////////////////////////////////////////////

// var dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// document.write(` Today is : ${nameOfToday}`)



////////////////////////////////////////////////// Q4 ///////////////////////////////////////////////////////

// var date = new Date();

// var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];

// var currentdays = date.getDay();
// var daysName = days[currentdays];
// if(daysName == days[0] ){
//     alert("It's Fun day");
// }else{
//     alert("pagal")
// }

// document.write(daysName);

////////////////////////////////////////////////// Q5 ///////////////////////////////////////////////////////

// var date = new Date();

// date.getDate();

// if(date.getDate() < 12){
// document.write("First fifteen days of the month")
// }else{
//     document.write("Last day of the month")
// }

////////////////////////////////////////////////// Q6 ///////////////////////////////////////////////////////

// var dateMonthTime  = new Date();
// var currentDate = dateMonthTime.getDate();
// var milliseconds = dateMonthTime.getTime();
// var minutes = milliseconds / 60;
// document.write(`Current Date : ${dateMonthTime}  <br> Elapsed milliseconds since january 1, 1970:${milliseconds} <br> Elapsed minutes since january 1, 1970: ${minutes}`)


////////////////////////////////////////////////// Q7 ///////////////////////////////////////////////////////

// var min = new Date();
// var minHour = min.getHours()
// if(minHour < 2){
//     alert("AM")
// }else{
//     alert("PM")
// }
// document.write(` It's ${minHour}`)



////////////////////////////////////////////////// Q8 ///////////////////////////////////////////////////////

// var lastDate = new Date("December 31  2020");

// document.write(`Later date: ${lastDate}`)



////////////////////////////////////////////////// Q9 ///////////////////////////////////////////////////////

// var firstRamadan = new Date("11 March 2024")
// var toDay = new Date();
// var diff = firstRamadan.getTime() - toDay.getTime();
// var days = Math.round(diff / (1000 * 60 * 60 * 24));
// document.write(`${days} days have passed since 1<sup>st</sup> Ramadan , 2024`)


////////////////////////////////////////////////// Q10 ///////////////////////////////////////////////////////

// var december = new Date("5 Dec 2024")



// document.write(december)
 




// var a= moment(new Date(" 11 March 2024"));
// var b= moment(new Date());
// document.write(a.diff(b,"months"));
