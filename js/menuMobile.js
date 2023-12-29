//receive elements
const btn = document.getElementById('btn')
const menu = document.getElementById('menu')
const header = document.getElementsByTagName('header')[0]
const btnClose = document.getElementsByClassName('menuMobileBtnClose')[0]
const items = document.getElementsByClassName('itemMenuMobile')

//interaction menu
btn.addEventListener('click', () => {
    menu.style.display = 'block'
    btn.style.display = 'none'
    header.style.paddingRight = 0
})

btnClose.addEventListener('click', () => {
    menu.style.display = 'none'
    btn.style.display = 'block'
    header.style.paddingRight = '20px'
})

//function to close menu when user click on link
function closeMenu(item){
    item.addEventListener('click', (e) => {
        e.preventDefault()
        menu.style.display = 'none'
        btn.style.display = 'block'
        header.style.paddingRight = '20px'
    })
}

for(let i=0; i<items.length; i++){
    closeMenu(items[i])
}