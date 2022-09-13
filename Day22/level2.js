import {countries_data} from './countries.mjs'
console.log(countries_data)
let body = document.body

let header = document.createElement('h1')
let topic = document.createElement('h4')
let title = document.createElement('span')
let author = document.createElement('span')
let container = document.createElement('div')


// let container = document.querySelector('.container')
container.style.display ='grid'
container.style.gridTemplateColumns = 'repeat(6,1fr)'
container.style.gap = '5px'
container.style.maxWidth = '70%'
// container.style.backgroundColor = 'red'
// container.style.width='100%'


body.append(header)
body.append(topic)
body.append(title)
body.append(author)
body.append(container)


body.style.display = 'grid'
body.style.placeItems = 'center'
body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'Roboto'


header.textContent = 'WORLD COUNTRIES LIST'
topic.textContent = 'Total Number Of Countries: 193'
title.textContent = '30DaysOfJvaScript: DOM-Day-2'
author.textContent = 'Author: Fatimah Zahra'
// container.textContent = ''

for (let i=0; i < countries_data.length; i++){
    let country = document.createElement('div')
    country.textContent = countries_data[i].name
    country.fontSize = '15px'
    country.style.textAlign = 'center'
    country.style.padding = '30px 0'
    country.style.margin = '5px'
    country.style.boxShadow = '0 2px 8px rgba(0 0 0.2)'
    container.appendChild(country)
}
