console.log('%c HI', 'color: firebrick')

let breeds = []
function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(resp => {
        console.log("hello", resp.message)
        const dogImage = document.getElementById("dog-image-container")
        resp.message.forEach(url => {
            const img = document.createElement("img")
            img.src = url
            dogImage.append(img)
        })
            
    })
}

function getBreedNames() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(resp => {
        breeds = Object.keys(resp.message)
        addBreedNamesToDom(breeds)
    })
}

function addBreedNamesToDom(breeds) {
    const ul = document.querySelector("#dog-breeds")
    breeds.map(breed => {
        const li = document.createElement("li")
        li.textContent = breed
        ul.append(li)
    })
}

document.addEventListener("click", event => {
    if(event.target.matches("li")) {
        event.target.style.color = "red"
    }
})

document.addEventListener("change", event => {
    if(event.target.matches("#breed-dropdown")) {
        const ul = document.querySelector("#dog-breeds")
        ul.innerHTML = ""
        const filterBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedNamesToDom(filterBreeds)
    }
})

getBreeds()
getBreedNames()