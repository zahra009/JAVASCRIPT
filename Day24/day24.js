let body = document.body

body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'Arial, Helvetica, sans-serif'
body.style.backgroundImage = 'url(./images/galaxy.gif)'

document.querySelector('h1').style.color = 'white'
document.querySelector('h1').style.margin = '3rem auto'
document.querySelector('h1').style.fontSize = '3rem'

const planets = 'Mercury, Venus, Earth, Mars, Jupiter, Uranus, Neptune, Pluto, Moon'.split(', ')
const select = document.querySelector('select')
select.innerHTML += planets
    .map(planet => `<option value="${planet}">${planet}</option>`)
    .join('\n')
select.style.padding= '12px'
select.style.borderRadius = '5px'
select.style.color = '#b2b2b1'
// select.text-transform = 'capitali'


const type = document.querySelector('input')
type.style.padding = '12px'
type.style.width = '15rem'


let button = document.querySelector('button')
button.style.border = 'none'
button.style.color = 'white'
button.style.backgroundColor = '#6f6f71'
button.style.borderRadius = '4px'
button.style.padding = '12px'

const space = {
    mecury: {
        gravity: 0.48,
        image: "mecury.png"
    },
    venus: {
        gravity: 0.94,
        image: "venus.png"
    },
    uranus: {
        gravity: 1.33,
        image: "uranus.png"
    },
    pluto: {
        gravity: 1.85,
        image: "pluto.png"
    },
    neptune: {
        gravity:2.26,
        image: "neptune.png" 
    },
    saturn: {
        gravity: 1.59,
        image: "saturn.png"
    },
    mars: {
        gravity: 3.30,
        image: "mars.png"
    },
    moon: {
        gravity: 4.45,
        image: "moon.png"
    },
    galaxy: {
        gravity: 5.56,
        image: "galaxy.gif"
    },
    earth: {
        gravity: 3.39,
        image: "earth.png"
    }
}

const container= document.querySelector('.container')
container.style.display = 'flex'
// container.style.margin-left = 

container.style.backgroundcolor = 'red'
container.style.width = '10px'
container.style.height = '20px'
let weight;

const containerUi = (img,text) => {
    let image =
document.createElement("img")
 image.src = `images/${img}`;
 let p = 
document.createElement("p")
 p.textContent= text
 p.className = "big"
 container
 container.appendChild(image)
 container.appendChild(p)
}

button.addEventListener('click', function() {
   let imgSrc;
   container.innerHTML = ''
   imgSrc = space[select.value].image
   weight = Number(input.value) * space[select.value].gravity
   containerUi(imgSrc,weight)
})