//receive elements
const btn = document.getElementById('btn')
const menu = document.getElementById('menu')
const header = document.getElementsByTagName('header')[0]
const btnClose = document.getElementsByClassName('menuMobileBtnClose')[0]
const items = document.getElementsByClassName('itemMenuMobile')
const main = document.getElementsByTagName('main')[0]
const logo = document.getElementsByClassName('logotipo')[0]

//interaction menu
btn.addEventListener('click', () => {
    menu.style.display = 'block'
    btn.style.display = 'none'
    header.style.paddingRight = 0
    main.style.filter = 'blur(5px)'
    logo.style.filter = 'blur(5px)'
})

btnClose.addEventListener('click', () => {
    menu.style.display = 'none'
    btn.style.display = 'block'
    header.style.paddingRight = '20px'
    main.style.filter = 'none'
    logo.style.filter = 'none'
})

//function to close menu when user click on link
function closeMenu(item){
    item.addEventListener('click', (e) => {
        e.preventDefault()
        menu.style.display = 'none'
        btn.style.display = 'block'
        header.style.paddingRight = '20px'
        main.style.filter = 'none'
        logo.style.filter = 'none'
    })
}

for(let i=0; i<items.length; i++){
    closeMenu(items[i])
}