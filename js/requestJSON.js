fetch('./js/data.json').then(response => {
    if(response.ok){
        return response.json()
    }
})
.then(data => {
    return data
})