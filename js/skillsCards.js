//receive elements
const areaCards = document.getElementsByClassName('areaSkills')[0]
const areaPagination = document.getElementsByClassName('areaPagination')[0]

const res = request().then(data => {
    //create cards
    for(let i=0; i<data.skills.length; i++){
        //create elements
        const card = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h3')

        //modifies content
        image.setAttribute('src', data.skills[i].image)
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

    //create pagination
    for(let i=0; i<data.skills.length; i++){
        //create elements
        const btn = document.createElement('button')

        //puts classes
        btn.classList.add('btnPagination')

        //configure hierarchy
        areaPagination.appendChild(btn)
    }
})

