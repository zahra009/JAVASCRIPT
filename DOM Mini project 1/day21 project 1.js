// The year color is changing every 1 second
const random=()=>{
   const rand= Math.floor(Math.random()*256)
    return rand
}
console.log(random());
const randomColor=()=>`rgb(${random()},${random()},${random()})`
console.log(randomColor()
)
const h1El=document.querySelector('span')

setInterval(()=>{
    h1El.style.color = randomColor()

},1000)

let every = document.querySelector('div')
let text = document.querySelector('ul')
let topic = document.querySelector('h2')
let span = document.querySelector('span')
let date = document.querySelector('h3')
let lists = document.querySelectorAll('li')

topic.style.textDecoration = 'underline'
topic.style.fontSize = '22px'
every.style.display = 'flex'
every.style.flexDirection = 'column'
every.style.alignItems = 'center'
every.style.maxWidth = '55%'
every.style.padding = '0'
every.style.margin = 'auto'
span.style.fontSize = '70px'
date.style.marginLeft = '14rem'
// date.style.marginRight = '14rem'
// date.style.fontSize= '18px'
// date.style.padding = '0.5rem'
text.style.listStyle = 'none'

let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


setInterval(() => {
    let now = new Date ()
    let month = months[now.getMonth()]
    let dates = now.getDate() 
    < 10 ? '0' + now.getDate : now.getDate()
    let year = now.getFullYear() 
    let hour = now.getHours() 
    < 10 ? '0' + now.getHours() : now.getHours()
    let minute = now.getMinutes() 
    < 10 ? '0' +  now.getMinutes() : `${now.getMinute()}`
    let seconds = now.getSeconds() < 10 ? '0' + `${now.getSeconds()}` : now.getSeconds() 
     date.textContent = `${month} ${dates}, ${year} ${hour}:${minute}:${seconds}`
}, 1000);

let border = () => {
    let  Alpahnumeric = '0123456789abcdef'
    let emptyStr = ''
    let index 
    for (let i=0; i<7; i++) {
        index = Math.floor(Math.random() * Alpahnumeric.length)
        index = Alpahnumeric[index]
        emptyStr = emptyStr + index
    }
    return ''
}

// date.innerHTML = currentDate()
// currentDate.style.backgroundColor = ''

lists.forEach((list) => {
    list.style.padding = '1rem'
    list.style.paddingRight = '24rem'
    list.style.marginTop = '4px'
    list.style.backgroundColor = list.textContent.includes('Done')?'green' :list.textContent.includes('Ongoing')?'yellow': 'red'
})
// lists[0].setAttribute('id', 'completed')
// lists[0].style.backgroundColor = '#00cf72'
// lists[1].style.backgroundColor = '#fce818'