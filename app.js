//ye hum ney submit btn ko get kia ha
var addBtn = document.querySelector('.submit')
//ye hum ny ul ko get kia hai
let itemUl = document.querySelector('.itemUl')
// console.log(itemUl)
//yahan hum ney input get kia hai
var input = document.querySelector(".input")
// console.log(input)
//clear all wala btn
// var clearall = document.querySelector('.clearAll')
// // console.log(clearAll)
// clearall.addEventListener('click',clearAll(this))


//yahan 1 function hai jo li creat krta hai or append bhi krwaraha hai
function addTodo() {

    //creat li in java Script

    var list = document.createElement('li')
    var todoText = document.createTextNode(input.value)
    list.appendChild(todoText)
    list.setAttribute('class', 'list')
    itemUl.appendChild(list)
    // console.log(list)


    // creat delete button 
    var deleteBtn = document.createElement("button")
    var Deltetxt = document.createTextNode("Delete")
    deleteBtn.setAttribute('class', 'delete')
    deleteBtn.setAttribute('onclick', 'deleteFunc(this)')
    deleteBtn.appendChild(Deltetxt)
    list.appendChild(deleteBtn)


    //creat edit button 
    var editBtn = document.createElement('button')
    var edittxt = document.createTextNode("Edit")
    editBtn.setAttribute('class','edit')
    editBtn.setAttribute('onclick','editFunc(this)')
    list.appendChild(editBtn)
    editBtn.appendChild(edittxt)



    input.value = ""
    // console.log(list)

}

function deleteFunc(e){
    e.parentNode.remove()
}
function clearAll(e){
    itemUl.remove()
   }

   function editFunc(e){
    var value = e.parentNode.firstChild.nodeValue
    var editProm = prompt('edit your value there',value)
    e.parentNode.firstChild.nodeValue = editProm

   }
//ye btn submit wala hai
addBtn.addEventListener('click', () => {
    addTodo()
})