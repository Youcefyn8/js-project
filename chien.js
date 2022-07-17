async function start() {
  try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await response.json()
      console.log(data.message)
      createdBreedList(data.message)
  } catch (e) {
      console.log(e.message)
  }
}
start()


function createdBreedList(breedList) {
  document.getElementById("breed").innerHTML =
      `
      <select onchange="loadByBreed(this.value)">
      <option>Sélectionner une race de chien</option>
      ${Object.keys(breedList).map(function (breed) {
          return `<option>${breed}</option>`
      }).join('')}</select>
      `
}


// https://dog.ceo/api/breed/hound/images/random

async function loadByBreed(breed) {
  if (breed != "Sélectionner une race de chien") {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      const data = await response.json()
      console.log(data.message);

      // TODO INSERER IMG DANS UNE DIV GENEREE
      document.getElementById("imgBreed").innerHTML = 
          `
          <img src="${data.message}" alt="dog pic" />
          `
  }
}


// TODO CALL API DOGCEO -> RECUP 3 IMAGES AU HASARD

// https://dog.ceo/api/breed/hound/images/random/3

async function select3randomImagesByDogBreed() {
  if (breed != "Sélectionner une race de chien") {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
      const data = await response.json()
      const breedImages = data.message;
      console.log(data.message);

      // TODO INSERER IMG DANS UNE DIV GENEREE
      document.getElementById("imgBreed3").innerHTML = 
          `
          <div>
              <img src="${breedImages[0]}" alt="dog pic" />
              <img src="${breedImages[1]}" alt="dog pic" />
              <img src="${breedImages[2]}" alt="dog pic" />
          </div>
          `
  }
}
