//receive elements
const areaCards = document.getElementsByClassName('areaSkills')[0]
const btnPagination = document.getElementsByClassName('btnPagination')

//create cards
request().then(data => {
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
})


