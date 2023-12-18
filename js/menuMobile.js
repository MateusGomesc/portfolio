//recebe elementos
const btn = document.getElementById('btn')
const menu = document.getElementById('menu')

//interação com menu
btn.addEventListener('click', () => {
    if(menu.style.display === 'block' || menu.style.display === ''){
        menu.style.display = 'none'
    }
    else{
        menu.style.display = 'block'
        btn.style.display = 'none'
    }
})