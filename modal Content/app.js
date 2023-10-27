const main = document.querySelector(".main")
const modalcontent = document.querySelector(".modalcontent")
const openmodal = document.querySelector(".openmodal")
const container = document.querySelector(".container")


console.log(bandkardo);

function kholdo(){
    modalcontent.style.display = "block"
    openmodal.style.display = "none"

}
// kholdo()

function bandkardo(){
    modalcontent.style.display = "none"
    openmodal.style.display = "block"

}