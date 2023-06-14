var alertpara = document.querySelector('.alert')
// console.log(alertpara)

var input = document.querySelector('.input')
// console.log(input)

var addBtn = document.querySelector('.submit')
// console.log(addBtn);

var clearAll = document.querySelector('.clearAll')
// console.log(clearAll);


// var edit = document.querySelector('.edit')
// console.log(edit);


var itemUl = document.querySelector('.itemUl')
// console.log(itemUl);

var modalInput = document.querySelector('.editInput')
// console.log(editInput);



var modalEditBtn = document.querySelector('.doneEdit')
// console.log(modalEditBtn);


var modal = document.querySelector('.modal')
// console.log(modal);


var overlay = document.querySelector('.overlay')
// console.log(overlay);




//ye null is leye chori hai taky uid bna sakein bad  may
let editUid = null;


//yahn item stored hongy array may
let EmptyItemStore = JSON.parse(localStorage.getItem('myList')) || []

// console.log(EmptyItemStore);


itemUl.innerHTML = EmptyItemStore.join(" ")

//yahan alert wala para k leye funtionaly bana i hai

const alertFunc =(alertData)=>{
        alertpara.innerHTML = alertData
        alertpara.style.visibility = 'visible'

        setTimeout(()=>{
            alertpara.style.visibility = 'hidden'
        }, 2500)
}

// YAHAN hum ney edit k leye functionalityt ki hai
//  or btn per hi on click laga dia hai hum nay
// yahan se edit shuru howa hai

const editFunc = (uId) => {
    
    // console.log("Edit chal raha hai", uid)

    editUid = uId

    
    // console.log(editUid);

    const myList = Array.from(itemUl.childNodes)
    
    // console.log(itemUl.childNodes);
    // console.log(myList);
    
    const filteredData = myList.filter((eachItem) => eachItem.id == uId)
    
    // console.log(filteredData);
    
    modalInput.value = filteredData[0].querySelector('p').innerText
    
    // console.log(modalInput.value);

     modal.classList.remove('hidden')
    overlay.classList.remove('hidden')

    // modalEditFoo(editUid) ye function button per hi chala dia hum ney

}

const  modalEditFoo = (uniqueId) => {

    

    // console.log(modalInput.value)
    const findIndex =  EmptyItemStore.findIndex((eachItem)=> eachItem.includes(editUid))
    
    // console.log(findIndex);

    EmptyItemStore.splice(findIndex ,1 , ` <li id="${uniqueId}">
    <P>${modalInput.value}</P>
    <div class="btnDiv">
    <button class="edited"  onclick="editFunc(${uniqueId})"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete" onclick="deleteFunc(${uniqueId})"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        </li>`)
        
        
        localStorage.setItem('myList', JSON.stringify(EmptyItemStore));

        itemUl.innerHTML = EmptyItemStore.join(" ");
        
        // console.log(modalInput.value)
                hiddenModal()
    }

//modal close or thori functionality
const hiddenModal = () => {


    //  console.log(modalInput.value)


     modal.classList.add('hidden')
     overlay.classList.add('hidden')

     setTimeout(()=>{
        //  modal.classList.add('hidden')
        //  overlay.classList.add('hidden')
         modalInput.value = ""
     },1000)
    
    alertFunc(`${modalInput.value} is edited `)    
}



//yahan hum delete ka function bna rahy hein
const deleteFunc = (uid) => {

    // console.log("chal raha hai ",uid);
    // console.log(EmptyItemStore,"empty array");

    //yahan index find k hai each item jis per click horaha ahi
    const findIndexNum = EmptyItemStore.findIndex((eachItem) => eachItem.includes(uid))


    // console.log(findIndexNum , "===>INDEX OF EACH ITEM");

    EmptyItemStore.splice(findIndexNum, 1)

    // console.log(EmptyItemStore);
    // console.log(EmptyItemStore,"==>>array after deleted");

    localStorage.setItem('myList', JSON.stringify(EmptyItemStore));
    itemUl.innerHTML = EmptyItemStore.join(" ")

    alertFunc(`one item is deleted into your list`)

    // alert(`${EmptyItemStore[0]}`)
}

//yahan item add hony ka function chala hai
const addFunction = () => {

    // console.log("chal raha hai")

    if (input.value === '') {
       alertFunc(`kuch to likh le bhai !!`)

        return
    }

    //yahan unique ID bnai hai hai 
    const uniqueId = new Date().getTime()

    // console.log(uniqueId);

    // console.log(input.value);

    // alert(`${input.value} is insert in list`)

    const insretData = ` <li id="${uniqueId}">
    <P>${input.value}</P>
    <div class="btnDiv">
    <button class="edited"  onclick="editFunc(${uniqueId})"><i class="fa-regular fa-pen-to-square"></i></button>
    <button class="delete" onclick="deleteFunc(${uniqueId})"><i class="fa-solid fa-trash-can"></i></button>
   </div>
</li>`;
    EmptyItemStore.push(insretData);

    itemUl.innerHTML = EmptyItemStore.join(" ")

    localStorage.setItem('myList',JSON.stringify(EmptyItemStore))

    // console.log(insretData);

    // console.log(EmptyItemStore);
    alertFunc(`${input.value}  is added in your list`)
    
    input.value = ""
    clearAll.classList.remove('hidden')
}

//yahan all item clear function chalaya hai
const ClearAllItem = () => {

    itemUl.innerHTML = ``
    EmptyItemStore = []
    localStorage.setItem('myList', JSON.stringify(EmptyItemStore));
    alertFunc('your list is Empty Now!')
    clearAll.classList.add('hidden')   
    // if(EmptyItemStore = [] && itemUl.innerHTML == ``){
    // }
    // else{
    //     clearAll.classList.remove('hidden')
    // }
}



clearAll.addEventListener('click', ClearAllItem)

addBtn.addEventListener('click', addFunction)

