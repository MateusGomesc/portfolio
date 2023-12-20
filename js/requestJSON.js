async function request(){
    const response = await fetch('./js/data.json')
    const data = await response.json()
    return data
}