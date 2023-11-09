const btnDiv = document.querySelector('.btns');

const menuBtns = ['All', 'Break Fast', 'Lunch', 'Dinner', 'Shakes'];

menuBtns.forEach((btn) => {
    btnDiv.innerHTML += `<button class="btnss" onclick="printbtn('${btn}')">${btn}</button>`
})




const menuCard = document.querySelector('.menuCard')

console.log(menuCard);

//menuArray
const menuArray =
    [
        {
            name: "Zinger Burder",
            Price: 550,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/1.jpg",
            category: "Break Fast",
        },
        {
            name: "Zinger Pizza",
            Price: 950,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/1.png",
            category: "Break Fast",
        },
        {
            name: "Zinger Frise",
            Price: 250,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/3.jpg",
            category: "Break Fast",
        },
        {
            name: "Mayo Burder",
            Price: 350,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/4.jpg",
            category: "Break Fast",//b
        },
        {
            name: "Vanila Shake",
            Price: 400,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/shake1.jpeg",
            category: "Shakes",
        },
        {
            name: "Strabbary Shake",
            Price: 500,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/shake2.jpeg",
            category: "Shakes",
        },
        {
            name: "Strabbary Shake",
            Price: 350,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/shake3.jpeg",
            category: "Shakes",
        },
        {
            name: "Chocolate Shake",
            Price: 250,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/shake4.jpeg",
            category: "Shakes",
        },
        {
            name: "Lunch",
            Price: 400,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/lunch1.jpeg",
            category: "Lunch",
        },
        {
            name: "Lunch",
            Price: 500,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/lunch2.jpeg",
            category: "Lunch",
        },
        {
            name: "Lunch",
            Price: 350,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/lunch3.jpeg",
            category: "Lunch",
        },
        {
            name: "Lunch",
            Price: 250,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/lunch4.jpeg",
            category: "Lunch",
        },
        {
            name: "Dinner",
            Price: 400,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/dinner1.jpeg",
            category: "Dinner",
        },
        {
            name: "Dinner",
            Price: 500,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/dinner2.jpeg",
            category: "Dinner",
        },
        {
            name: "Dinner",
            Price: 350,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/dinner3.jpeg",
            category: "Dinner",
        },
        {
            name: "Dinner",
            Price: 250,
            Discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. magnam nostrum ipsam excepturi neque in odit. eligendi modi neque!",
            image: "assets/dinner4.jpeg",
            category: "Dinner",
        },
    ];

console.log(menuArray);

const menuDiv = document.querySelector('.menuCard');
console.log(menuDiv.innerHTML);

function printbtn(menuCategory) {
    menuArray.filter((data) => {
        menuDiv.innerHTML = "";
        if (data.category.includes(menuCategory)) {
            return true
        } else if (menuCategory == "All") {
            return true
        }
    }).forEach((item) => {
        menuDiv.innerHTML += `<div class="card">
            <div class="menu-item">
                <div class="menu-img"><img src="${item.image}" alt=""></div>
                <div class="menu-content">
                    <div
                        style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid orange;">
                        <h2 style="color: #fff;">${item.name}</h2>
                        <h3 style="color: #fff;">${item.Price}</h3>
                    </div>
                    <p>${item.Discription}</p>
                </div>
            </div>
        </div>`

    })
}
printbtn()
