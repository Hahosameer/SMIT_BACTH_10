
let question = document.querySelector('.accordion')
// let accItem = document.querySelectorAll('.lable');

for(let i = 0; i< question.length; i++){
    question[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
    
    }



// for(let i = 0; i < question.length; i++){
//     question[i].addEventListener('click', function(){
//         this.classList.toggle('active')
//     })
// }
