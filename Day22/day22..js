let body = document.body

let header = document.createElement('h1')
let topic = document.createElement('span')
let author = document.createElement('span')
let numberSpace = document.createElement('div')

body.append(header)
body.append(topic)
body.append(author)
body.append(numberSpace)

body.style.display = 'grid'
body.style.placeItems = 'center'
body.style.margin = '0'
body.style.padding = '0' 
body.style.fontFamily = 'Roboto'
topic.style.marginTop = '-1rem'
topic.style.fontSize = '22px'
author.style.textDecoration = 'underline'
topic.style.textDecoration = 'underline'

header.textContent = 'Number Generator'
topic.textContent='30DaysOfjavaScript:DOM Day 2'
author.textContent='Author: Fatimah Zahrah'

let numlist
let isPrime = (n) => {
    if (n<2) {
        return false
    }
    for (let i = 2; i<n; i++) {
if (n%i === 0) {
    return false
}
    }
    return true
}

for (let i =0; i < 102; i++) {
numlist = document.createElement('div')
numlist.textContent = i
isPrime(i)? numlist.style.backgroundColor = '#fd5e53' : i%2===0 ? numlist.style.backgroundColor = '#21bf73' : numlist.style.background = '#fddb3a'
numlist.style.padding = '1rem'
numlist.style.margin = '2px'
numlist.style.width = '5.5rem'
numlist.style.fontSize = '30px'
numlist.style.fontWeight = 'bold'
numlist.style.color = 'white'
numlist.style.textAlign = 'center'
numberSpace.append(numlist)
}

numberSpace.style.display = 'grid'
numberSpace.style.gridTemplateColumns = 'repeat(6,1fr)'
numberSpace.style.marginTop = '1rem'

