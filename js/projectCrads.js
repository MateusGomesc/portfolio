//receive JSON
request().then((data) => {
    for(let i=0; i<data.projects.length; i++){
        //receive elements
        const areaCards = document.getElementsByClassName('areaProjects')[0]

        //create elements
        const card = document.createElement('div')
        const bodycard = document.createElement('div')
        const title = document.createElement('h3')
        const description = document.createElement('p')
        const areaBtn = document.createElement('div')
        const ancoraImg = document.createElement('a')
        const imgGit = document.createElement('img')
        const imgProjects = document.createElement('img')

        if(data.projects[i].isWebSite === 'true'){
            const btn = document.createElement('button')
            const ancoraBtn = document.createElement('a')
            btn.innerHTML = 'Ir ao site'
            ancoraBtn.setAttribute('href', data.projects[i].domain)
            ancoraBtn.appendChild(btn)
            areaBtn.appendChild(ancoraBtn)
            btn.classList.add('btnSite')
        }

        //insert content
        title.innerHTML = data.projects[i].name
        description.innerHTML = data.projects[i].description
        imgGit.setAttribute('src', './img/icons/githubVerde.png')
        imgGit.setAttribute('alt', 'Logo GitHub')
        imgProjects.setAttribute('src', data.projects[i].image)
        imgProjects.setAttribute('alt', 'Projeto')
        ancoraImg.setAttribute('href', data.projects[i].github)

        //insert class
        card.classList.add('cardProjects')
        bodycard.classList.add('bodyCardProject')
        title.classList.add('titleProjects')
        description.classList.add('textProjects')
        areaBtn.classList.add('areaBtnProjects')
        imgGit.classList.add('imgGitHub')
        imgProjects.classList.add('imgProjects')

        //configure hierarchy
        card.appendChild(bodycard)
        card.appendChild(imgProjects)
        bodycard.appendChild(title)
        bodycard.appendChild(description)
        bodycard.appendChild(areaBtn)
        ancoraImg.appendChild(imgGit)
        areaBtn.appendChild(ancoraImg)
        areaCards.appendChild(card)
    }
})