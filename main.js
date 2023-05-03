// let table = document.querySelector(".table")
let box = document.querySelector(".box")
let inpId = document.querySelector(".Id")
let inpImg = document.querySelector(".image")
let inpEmail = document.querySelector(".Email")
let inpFullName = document.querySelector(".FullName")
let inpAge = document.querySelector(".Age")
let inpPhone = document.querySelector(".Phone")
let btnAdd = document.querySelector(".btnAdd")


// modal edit 

let inpImgModal = document.querySelector(".inpImgModal")
let inpEmailModal = document.querySelector(".inpEmailModal")
let inpFullNameModal = document.querySelector(".inpFullNameModal")
let inpAgeModal = document.querySelector(".inpAgeModal")
let inpPhoneModal = document.querySelector(".inpPhoneModal")
let ok =document.querySelector(".ok")


var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let data=[
    {
        id:1,
        img:"https://avatars.mds.yandex.net/i?id=8266fa7b8b4b3b357272c08283e1ce9373fd40ce-6946654-images-thumbs&n=13",
        email:"email 1",
        fullName:"Muhammad",
        age:21,
        phone:987654321,
    }
]

// Add

btnAdd.onclick=()=>{
    let newUser={
        id:new Date().getTime(),
        img:inpImg.value,
        email:inpEmail.value,
        fullName:inpFullName.value,
        age:inpAge.value,
        phone:inpPhone.value
    }
    data.push(newUser)
    inpId.value=""
    inpImg.value=""
    inpEmail.value=""
    inpFullName.value=""
    inpAge.value=""
    inpPhone.value=""
    getUser()
}



// Delete

function deleteFunc(id){
    data = data.filter((e)=>{
        return e.id!=id
    })
    getUser()
}


// Edit

let idx = null
function editFucn(id){
    idx =id
    modal.style.display="block"
    let user = data.find((e)=>e.id==id)
    inpImgModal.value=user.img
    inpEmailModal.value=user.email
    inpFullNameModal.value=user.fullName
    inpAgeModal.value=user.age
    inpPhoneModal.value=user.phone
}

// edit

function editUser(){
    data=data.map((e)=>{
        if(e.id==idx){
            e.img=inpImgModal.value
            e.email=inpEmail.value
            e.fullName=inpFullNameModal.value
            e.age=inpAgeModal.value
            e.phone=inpAgeModal.value
        }
        return e
    });
    getUser()
    modal.style.display="none"
}
ok.onclick=editUser


function getUser(){
    box.innerHTML=""

    data.forEach((elem,index)=>{

        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        tdId.innerHTML = elem.id
        let td1 =document.createElement("td")
        td1.innerHTML=index+1
        let tdImg = document.createElement("td")
        let tdButton = document.createElement("td")
        let img = document.createElement("img")
        img.src = elem.img
        
        let tdEmail = document.createElement("td")
        tdEmail.innerHTML = elem.email
        let tdFullName = document.createElement("td")
        tdFullName.innerHTML = elem.fullName
        let tdAge = document.createElement("td")
        tdAge.innerHTML = elem.age
        let tdPhone = document.createElement("td")
        tdPhone.innerHTML = elem.phone
        btnDelete = document.createElement("button")
        btnDelete.innerHTML = "Delete"
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"

        btnEdit.onclick=()=>{
            editFucn(elem.id)
        }

        btnDelete.onclick=()=>{
            deleteFunc(elem.id)
        }


        tr.appendChild(td1)
        tr.appendChild(img)
        tr.appendChild(tdEmail)
        tr.appendChild(tdFullName)
        tr.appendChild(tdAge)
        tr.appendChild(tdPhone)
        tr.appendChild(tdButton)
        tdButton.appendChild(btnDelete)
        tdButton.appendChild(btnEdit)
        box.appendChild(tr)



        img.classList.add("img")
        btnAdd.classList.add("btnAdd")
        btnDelete.classList.add("btnDelete")
        btnEdit.classList.add("btnEdit")
        ok.classList.add("ok")



    })
}
getUser()