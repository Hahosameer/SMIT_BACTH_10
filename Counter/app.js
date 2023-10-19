


let paragraph = document.getElementById("number")
let number = 0;
console.log(paragraph);

function decreamentHandler() {
    number--;
    paragraph.textContent = number;
    if (number < 0) {
        
        paragraph.textContent = number;
        paragraph.style.color = "red"
    }
}

function resteHandler() {
    number = 0
    paragraph.textContent = number;
    paragraph.style.color = "orange"
}
function incrementHandler() {
    number++;
    paragraph.textContent = number;
    if (number > 0) {
        
        paragraph.textContent = number;
        paragraph.style.color = "white"
    }
}





// function incrementHandler() {
//     ++number
//     paragraph.textContent = number;
//     paragraph.style.color = "white"
// }


// function decreamentHandler() {
//     paragraph.textContent = --number;
//     if(paragraph.textContent < 0){
//         paragraph.style.color = "red"
//     }
// }