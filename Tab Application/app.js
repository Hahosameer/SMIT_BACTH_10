const tab = document.querySelector('#tab');
const image = document.querySelector('#image');
const tabBtn = document.querySelector('#tabBtn')
const tabContant = document.querySelector('#tabContant')

console.log(image);

const tabButton = ['History', 'Goals', 'Vision'];

tabButton.forEach((btn) => {
    tabBtn.innerHTML += ` <button onclick="printBtn('${btn}')">${btn}</button>`
})


const tabArray =
    [
        {
            catagery: "History",
            heading: "History",
            discription: "obcaecati numquam ullam soluta distinctio dolorum Lorem ipsum dom ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  Ut quosab sint consequuntur illoomnis iure accusamus provident? Ipsa id corrupti tempore sequi     sequi olor sit amet consequi obcaecati numquam ullam quis soluta distinctio dolorum",
            image: "assets/history.PNG",
        },
        {
            catagery: "Goals",
            heading: "Goals",
            discription: "obcaecati numquam ullam soluta distinctio dolorum Lorem ipsum dom ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  Ut quosab sint consequuntur illoomnis iure accusamus provident? Ipsa id corrupti tempore sequi     sequi olor sit amet consequi obcaecati numquam ullam quis soluta distinctio dolorum",
            image: "assets/goal.jpg",
        },
        {
            catagery: "Vision",
            heading: "Vision",
            discription: "obcaecati numquam ullam soluta distinctio dolorum Lorem ipsum dom ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  Ut quosab sint consequuntur illoomnis iure accusamus provident? Ipsa id corrupti tempore sequi     sequi olor sit amet consequi obcaecati numquam ullam quis soluta distinctio dolorum",
            image: "assets/vision.jpg",
        },
    ];

function printBtn(val){
tabArray.filter((item) => {
    if(item.catagery.includes(val)){
        return true
    }else if(val == ''){
        return true
    }
}).forEach((result) => {
   image.innerHTML = `<div id="image">
   <img src="${result.image}" alt="">
</div>`
tabContant.innerHTML = `<div id="tabContant">
<h2>${result.heading}</h2>
<p>${result.discription}</p>
</div>`

})
}
printBtn('History')


