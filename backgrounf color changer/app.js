var colors = ["red", "blue", "pink", "brown", "yellow", "voilet", "grey", "navy"]

var colorNames = document.querySelector('span')

function colorHandler() {
    var randamcolor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randamcolor];
    colorNames.textContent = colors[randamcolor];
}
colorHandler();
// console.log(randamcolor);