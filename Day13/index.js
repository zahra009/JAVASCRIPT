import { countries } from "./countries.mjs";

console.log( countries)
console.table(countries)

// Display the countries objects as table

// let countries = [{
//     named: "nigeria",
//     capital: "fct",
//     population: "7billion",
//     languages: ["hausa", "igbo", "yoruba"]
// },
// {
//     named: "germany",
//     capital: "munich",
//     population: "5billion",
//     languages: ["german"]
// }, {
//     named: "italy",
//     capital: "rome",
//     population: "6billion",
//     languages: ["italian", "latin"]
// },
// {
//     named: "france",
//     capital: "paris",
//     population: "6billion",
//     languages: ["french"]
// }
// ]
// console.table(countries)
// Use console.group() to group logs
// console.table(countries[0])

const names = ['Asabeneh', 'Brook', 'David', 'John']
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

console.assert(10 > 2 * 10,'is not correct')

console.warn('This is a warning')
console.error('we all make mistakes')

// console.clear(names)

// Check the speed difference among the following loops: while, for, for of, forEach

const fruits = ["apple", "banana", "orange", "watermelon", "cherry"]

// while
console.time("while loop")
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i])
    i++
}
console.timeEnd("while loop");

// for
console.tim("regular for loop")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
    }
console.timeEnd("regular for loop")

// for of
console.time('for of loop')
for (const [types] of fruits){
    console.log(types)
}

console.timeEnd('for of loop')

// forEach
console.time('forEach loop')
fruits.forEach(([types]) =>{
    console.log(types)
})
console.timeEnd('forEach loop')