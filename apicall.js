async function randomImg(){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const data = await response.json()
    console.log(data)
}

//insert a rnd img in dom
function inserPicture( url ){
    document.getElementById('randomPic').innerHTML = `<img src="${url}" alt="random pic of a random dog">`
}

randomImg()