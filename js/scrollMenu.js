//receive element
const itemsMenu = document.getElementsByClassName('itemMenu')

//function to put smooth event in items of menu
function createEventScrollMenu(item){
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const id = item.getAttribute('href')
        console.log(document.getElementById(id.replace('#', '')))
        document.getElementById(id.replace('#', '')).scrollIntoView({ behavior: 'smooth' })
    })
}

for(let i=0; i<itemsMenu.length; i++){
    createEventScrollMenu(itemsMenu[i])
}