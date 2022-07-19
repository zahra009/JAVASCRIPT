// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C
const num = new Set()
console.log(num)

num.add('0') 
num.add('1')
num.add('2')
num.add('3')
num.add('4')
num.add('5')
num.add('6')
num.add('7')
num.add('8')
num.add('9')
num.add('10')
console.log(num.size) 
console.log(num)

// const num = [0,1,2,3,4,5,6,7,8,9,10]
// setOfNum = new Set()
// for (const num of num) {
//   setOfNum.add(num)
// }
// console.log(setOfNum)
// console.log(num)

console.log(num.delete('0'))
console.log(num.size)

num.clear()
console.log(num)

const languages = [
    'Arabic',
    'English',
    'French',
    'Spanish',
    'Yoruba',
    'French',
  ]
  const langSet = new Set (languages)
console.log(langSet)

// const countries = ['Finland', 'Sweden', 'Norway']
 const countries = [
    ['Finland',1],
    ['Sweden', 2],
    ['Norway', 3],
  ]
const map = new Map(countries)
console.log(map)
console.log(map.size)
// Find a union b
let a = [4, 5, 8, 9]
let b = [3, 4, 5, 7]
let c = [...a,...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

// let a = [4, 5, 8, 9]
// let b = [3, 4, 5, 7]

// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) => B.has(num))
// let C = new Set(c)
// console.log(C)

// {Object.keys(country.languages).map(lang =>
//     <li key={lang}>{country.languages[lang]}</li>
//   )}