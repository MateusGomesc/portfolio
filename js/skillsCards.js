//receive elements
const areaCards = document.getElementsByClassName('areaSkills')[0]
const btnPagination = document.getElementsByClassName('btnPagination')

request().then(data => {
    //create cards
    for(let i=0; i<data.skills.length; i++){
        //create elements
        const card = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h3')

        //modifies content
        image.setAttribute('src', data.skills[i].image)
        image.setAttribute('alt', 'Logo Linguagem')
        name.innerHTML = data.skills[i].name

        //puts classes
        card.classList.add('cardSkill')
        image.classList.add('imgCardSkill')
        name.classList.add('textCardSkill')

        //configure hierarchy
        areaCards.appendChild(card)
        card.appendChild(image)
        card.appendChild(name)
    }

    //Pagination Control
    const scrollPagination = (left) => {
        const card = areaCards?.firstElementChild
        const cardSize = (card?.clientWidth ?? 0) + 48
        const scrollPosition = areaCards?.scrollLeft ?? 0
        left ? areaCards.scrollTo({left: scrollPosition - cardSize}) : areaCards.scrollTo({left: scrollPosition + cardSize})
    }
    
    btnPagination[0].addEventListener('click', () => scrollPagination(true))
    btnPagination[1].addEventListener('click', () => scrollPagination(false))
})

