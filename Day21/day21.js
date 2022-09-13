// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let allTitles = document.querySelector('p')
console.log(allTitles)
// console.log(allTitles.length)


// Get each of the the paragraph using document.querySelector('#id') and by their id
let firstTitle = document.querySelector('#first-title')
console.log(firstTitle)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const everyTittle = document.querySelectorAll('p')
console.log(everyTittle.length)
for (let i=0; i < everyTittle.length; i++){
    console.log(everyTittle[i])
}

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

const tittle = document.querySelectorAll('p')
tittle[3].textContent = 'Fourth Paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods
// const titles = document.querySelectorAll('p')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')
// const titles = document.querySelectorAll('p')
// titles[2].setAttribute('class', 'title')
// titles[2].setAttribute('id', 'fourth-title')
// const titles = document.querySelectorAll('p')
// titles[1].setAttribute('class', 'title')
// titles[1].setAttribute('id', 'fourth-title')
// const titles = document.querySelectorAll('p')
// titles[0].setAttribute('class', 'title')
// titles[0].setAttribute('id', 'fourth-title')

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// const tittles = document.querySelectorAll('p')
// tittles.forEach((tittle, i) => {
//   tittle.style.fontSize = '24px'
//   if (i % 2=== 0) {
//     tittle.style.color = 'green'  
//   }
//   else {
//     tittle.style.color = 'red'
//   }
// })

// const titles = document.querySelectorAll('p')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px'
//   if (i % 2 === 0) {
//     title.style.backgroundColor = 'red'
//   } else {
//     title.style.backgroundColor = 'green'
//   }
// })

// const tittles = document.querySelectorAll('p')
// tittles.forEach((tittle, i) => {
//     tittle.style.fontSize = '24PX'
//     if (i % 2 === 0) {
//         tittle.style.fontSize = '20px'
//     } else {
//         tittle.style.fontSize = '30px'
//     }
// })
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
 const tittles = document.querySelectorAll('p')
 tittles.forEach((tittle, i) => {
    tittle.style.fontSize = '24px'
    if (i % 2 === 0) {
        tittle.style.color = 'green'
    } else {
        tittle.style.color = 'red'
    }
 }) 

//  Set text content, id and class to each paragraph
