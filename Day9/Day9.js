
// arr.forEach(products ('Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand') {
//     console.log('Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand')
//   })

// .forEach((element, index, arr) => {
//     console.log(index, element, arr)
//   })
// Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself.//
//map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array//

//Filter: Filter out items which full fill filtering conditions and return a new array//

//A callback is a function which can be passed as parameter to other function//

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((country) => console.log(country.toUpperCase()))

names.forEach((name) => console.log(name))
numbers.forEach((number) => console.log(number))
const namesForEach = names.forEach((name) => console.log(name))


// const countryMap = countries.map((country) => country.toUpperCase)
// console.log(countryMap)

const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

const squaredNum = numbers.map(num => {
  return num * num
})
console.log(squaredNum)

const namesToUppercase = names.map((name) => name.toUpperCase())
console.log(namesToUppercase)

const mapProduct = products.map((prod) => ({ prod  }))
console.log(mapProduct)

const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesWithSix = countries.filter((country) =>  country.length === 6)
console.log(countriesWithSix)

const countriesHaveSixLetters = countries.filter((country) => country.length >= 6)
console.log(countriesHaveSixLetters)

const countriesStartWith = countries.filter((country) => country.startsWith('E'))
console.log(countriesStartWith)

// Use filter to filter out only prices with values.

const priceWithValue = products.filter((price) => price.price > 0)
console.log(priceWithValue)

const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

// Use reduce to sum all the numbers in the numbers array
// const sum = numbers.reduce()

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

//  function getStringLists(name) {
//   return[]
//  }

//  Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
// function shuffleArr (arr) {
// const arr = [1,2,3,4,5]
// const emptyArr = []
// for (let i = 0; i < 20; i++) {
//   const random = Math.floor(Math.random() * arr.length)
//   if(emptyArr.indexOf(arr[random]) === -1 && emptyArr.length !== arr.length){
//     emptyArr.push(arr[random])
//   }
// }
// return emptyArr
// }
// console.log(shuffleArr())

// Explain the difference between some and every

// every: Check if all the elements are similar in one aspect. It returns boolean

// some: Check if some of the elements are similar in one aspect. It returns boolean


// Use some to check if some names' length greater than seven in names array

const greaterThanSeven = names.some((name) => name.length > 7);
console.log(greaterThanSeven);

const allCountry = countries.every((country) => country.includes("land"))
console.log(allCountry);

const onlySixCountries = countries.find((country) => country.length === 6);
console.log(onlySixCountries);

const firstCountry = countries.findIndex((country) => country.length === 6);
console.log(firstCountry);

const positionOfNorway = countries.findIndex((country) => country === 'Norway');
console.log(positionOfNorway)

const positionOfRussia = countries.findIndex((country) => country === 'Russia');
console.log(positionOfRussia)

// arr.reduce(function(a, b){ return a.x + b.x; });
const priceSum = products.reduce(function(acc, cur) { return acc + cur},0);
console.log(priceSum);

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// let priceProducts = products.map(function(product){
//   return products.price
// }) 

let priceProducts = products.map((product) => 
     products.price)
     
    // precaution
    // const fact = (n) => n === 0 ? 1 : n* fact(n-1)
    // console.logfact()

    // Find the sum of price of products using only reduce reduce(callback))

    // console.log(arrProducts,reduce((acc, {product,price}) => {

    //   if(typeof price === "number")
    //   acc+=price  
    //  return acc
    // }, 0))

    
