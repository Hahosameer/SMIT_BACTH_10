const contentBx = document.getElementsByClassName('contentBx')

for(let i = 0; i < contentBx.length; i++){
    contentBx[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}