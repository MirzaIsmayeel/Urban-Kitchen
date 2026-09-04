let Sidebarclose = document.querySelector(".sidebar-close")
let Navmenu = document.querySelector(".nav-menu")
let Sidebar = document.querySelector(".sidebar-container")
let Sidebarauto = ()=>{
    Sidebar.classList.toggle('sidebar-container-open')
    document.body.classList.toggle('overflow-hidden')
}
Navmenu.addEventListener("click", Sidebarauto)
Sidebar.addEventListener("click", Sidebarauto)
Sidebar.addEventListener("click", Sidebarauto)
