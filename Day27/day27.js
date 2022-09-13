//let body = document.body
//body.style.margin = '0'
//body.style.padding = '1.5rem 8.7rem'

// let h1 =document.querySelector('h1')
// h1.style.fontSize = '4rem'
// h1.style.letterSpacing = '1rem'
// h1.style.fontWeight = 'bold'

// let animation = document.querySelector('.animation')
// animation.style.backgroundColor = '#eddfde'
// animation.style.width = '100%'
// animation.style.height = '5rem'
// animation.style.display = 'flex'
// animation.style.alignItems = 'center'
// animation.style.padding = '0 1rem'
// animation.style.fontSize = '1.5rem'

// let p = document.querySelector('p')
// p.style.fontSize = '1.3rem'
// p.style.lineHeight = '2rem'

// let challenge = document.querySelector('.challenge')
// challenge.style.display = 'flex'
// challenge.style.padding = '0 4rem'
// challenge.style.justifyContent = 'spaceBetween'

// let box = document.querySelector('.box')
// box.style.backgroundColor = '#fdfefe'
// box.style.border = 'lightGray'
// box.style.borderRadius = '4px'
// box.style.display = 'flex'
// box.style.alignItems = 'center'
// box.style.justifyContent = 'center'
// box.style.padding = '1rem'
// box.style.textAlign  = 'center'
// box.style.width = '13rem'
// box.style.height = '7rem'


const courses = [
    {name: 'REDUX', color: "purple"},
    {name: "NODE", color: "green"},
    { name: "PYTHON", color: "blue" },
    { name: "MONGODB", color: "green" },
    { name: "PANDAS", color: "blue" },
    { name: "NUMPY", color: "blue" },
    { name: "HTML", color: "pink" },
    { name: "JAVASCRIPT", color: "yellow" },
    { name: "REACT", color: "lightblue" },
]

const skills = [
  "Content Creator",
  "Educator",
  "Instructor",
  "Motivator",
  "Motivational Speaker",
   "Programmer",
]
const animationE1 = document.querySelector("skills")
const coursesE1 = document.querySelector("courses")
const imageE1 = document.querySelector(".image")
let i=0;
setInterval(() => {
    coursesE1.textContent= courses[1].name;
    i =i === courses.length -1 ? 0 : i + 1;
    coursesE1.style.color = courses[1].color;
    coursesE1.style.fontSize = "2rem";
    coursesE1.style.fontWeight = "bolder";
}, 3000);

let j = 0;
setInterval(() => {
    animationE1.textContent = skills[j];
    j = j === skills.length -1 ? 0 : j + 1;
    imageE1.setAttribute("src", `./images/image${j}.svg`)
}, 3000)
