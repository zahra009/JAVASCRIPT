const arr = []
console.log (arr)
const fruits = ['banana', 'orange', 'mango', 'lemon', 'apple', 'grape', 'guava']
console.log('Number of fruits:', fruits.length)

let firstFruit = fruits[0]
console.log(firstFruit)

let middleFruit = fruits[3]
console.log(middleFruit)

let lastFruit = fruits[6]
console.log(lastFruit)

const mixedDataTypes = ['lemon', 'apple', 100, 20, 'teaching', 'google', 'b' ]
console.log('Number of mixedDataTypes:', mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)

let firstCompanies = itCompanies[0]
console.log(firstCompanies)

let middleCompanies = itCompanies[3]
console.log(middleCompanies)

let lastCompanies = itCompanies[6]
console.log(lastCompanies)

const face = ['FACEBOOK']
console.log(face)

const gog = ['GOOGLE']
console.log(gog)

const micro = ['MICROSOFT']
console.log(micro)

const app = ['APPLE']
console.log(app)

const ib = ['IBM']
console.log(ib)

const ora = ['ORACLE']
console.log(ora)

const ama = ['AMAZON']
console.log(ama)

const Company = ['FACEBOOK', 'GOOGLE', 'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'AMAZON']
console.log(Company)

const Companies =[
    'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
];
let index = Companies.indexOf('Apple');
if (index === -1) {
    console.log("Apple is found")
} else {
  console.log("Apple is not found")  
}

// let x = 1;

// if (i<6) {
//     console.log(i)
// }

// if (Companies[i].includes('oo')) {
//     console.log(Companies[i]);
// }
// for (let i = 0; i < 6; i =  i+1) {
//   console.log(i)}
// if (companies[i].split('0')),length-1 >= {
//   console.log(companies[i]);
// }


    //  element = array i]

Companies.sort()
console.log(Companies)

console.log(Companies.reverse())
console.log(Companies.slice(0,3))
console.log(Companies.slice(4,7))

console.log(middleCompanies.slice())
console.log(firstCompanies.slice())

itCompanies.shift()
console.log(itCompanies)

itCompanies.splice(2,1)
console.log(itCompanies)

itCompanies.splice(0)
console.log(itCompanies)

// itCompanies.splice(4,5)
// console.log(itCompanies)

// itCompanies.pop()
// console.log(itCompanies)


let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart .unshift('Meat') 
console.log(shoppingCart)
shoppingCart .push('Sugar') 
console.log(shoppingCart)

const shoppingList = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingList .pop('Honey') 
console.log(shoppingList)

// console.log(Companies(i).split('').length);
// shoppingList .replce('Honey') 
// console.log(shoppingList.replace)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()
console.log(ages);

max = ages[ages.length - 1]; 
// min = ages[0];

const countries3 = [
  'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Dubia',
]
console.log(countries3);
