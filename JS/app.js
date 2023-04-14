let menu = document.querySelector(`.menu`)
let sideBar = document.querySelector(`.sidebar`)



function openSidebar(){
  console.log(sideBar.classList.add(`active`))

}

menu.addEventListener(`click`, openSidebar);



let closeBtn = document.querySelector(`.close_sidebar`)

function closeSidebar(){
  console.log(sideBar.classList.remove(`active`))
}


closeBtn.addEventListener(`click`, closeSidebar)