let title = document.querySelector('h2')
let topic = document.querySelector('div')
let author = document.querySelector('div')
let enter = document.querySelector('.enter')
let generate = document.querySelector(".generate")
let button = document.querySelector('button')
let type = document.querySelector('input')
let container = document.querySelector('.container')
let wrapper = document.querySelector('.wrapper')
// let top = document.querySelector('.top')


let body = document.body

body.style.display = 'flex'
body.style.flexDirection = 'column'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'Arial, Helvetica, sans-serif'


// top.style.display = 'flex'
// top.style.flexDirection='column'
// top.style.alignItems = 'center'
// top.style.justifyContent = 'center'

wrapper.style.display = 'flex'
wrapper.style.flexDirection='column'
wrapper.style.alignItems = 'center'
wrapper.style.justifyContent = 'center'

title.style.color = '#67c183'
enter.style.color = 'red'
enter.style.marginRight = '18rem'
generate.style.display = 'flex'
generate.style.textAlign = 'center'
type.style.width = '540px'
type.style.height = '40px'
type.style.borderColor = '#5bbc7a'
type.style.borderWidth = '0.2rem'
type.style.marginLeft = '4.4rem'
button.style.marginLeft = '1.3rem'
button.style.backgroundColor = '#5bbc7a'
button.style.color = 'white'
// button.style.width = '12rem'
button.style.padding = '12px'
button.style.border = 'none'
button.style.fontSize = '20px'


container.style.display = 'grid'
container.style.gridTemplateColumns = 'repeat(9, 1fr)'
container.style.margin = '10px'


function isPrime (num)  {
    if (num<2) {
        return false
    }
    for (let i = 2; i<num; i++) {
if (num%i == 0) {
    return false
}
    }
    return true
}

const generateNums = (max=51) => {
    container.innerHTML = ''
    Array.from(Array(max).keys()).forEach(num => {
        const eachDiv = document.createElement('div')
        eachDiv.textContent = num
        eachDiv.style.width = '90px'
        eachDiv.style.height = '40px'
        eachDiv.style.display = 'flex'
        eachDiv.style.justifyContent = 'center'
        eachDiv.style.alignItems = 'center'
        eachDiv.style.background = isPrime(num) ? 'red' :num % 2 ? 'green': 'yellow'
        eachDiv.style.margin = '2px'

        container.appendChild(eachDiv)
    })
}
generateNums()

button.addEventListener('click', () => {
    const inputValue = Number(type.value)
    console.log(inputValue)
    if(!inputValue) {
    enter.textContent = 'Input value must be a number'
    return
    } 
    generateNums(inputValue)
})
