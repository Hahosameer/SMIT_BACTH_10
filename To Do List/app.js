const listItemInput =document.querySelector('#listItemInput')
const unorderList = document.querySelector('ul')
const addBtn = document.querySelector('#submit')

console.log(unorderList.innerHTML);

function submitHandler(){
    let val = listItemInput.value
    const li = `<li id=${val}>
    <h5>${val}</h5>
    <div>
        <span id="edit" onclick="editHandler('${val}')"><i class="ri-edit-2-fill"></i></span>
        <span id="delete" onclick="deleteHandler('${val}')"> <i class="ri-delete-bin-6-line"></i></span>
    </div>
</li>`

unorderList.innerHTML += li
listItemInput.value = ""
    console.log(val);
}


function editHandler(val){
    const li = document.getElementById(val)
    console.log(li);
    listItemInput.value = li.children[0].textContent
    addBtn.textContent = "Updated"
    addBtn.setAttribute('onclick' , `newEditHandler('${val}')`)
}


function deleteHandler(val){
    const li = document.getElementById(val)
    unorderList.removeChild(li)
}

function newEditHandler(val) {
    console.log(val)
    const li = document.getElementById(val)
    li.children[0].innerHTML = listItemInput.value
    addBtn.textContent = "ADD"
    addBtn.setAttribute('onclick', `submitHandler()`)
    listItemInput.value = ""
}
