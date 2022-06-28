
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

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
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


const countryMap = countries.map(country => {
  return country.toUpperCase();
})

console.log(countryMap)
for (let i = 0; i < countries.length; i++) {
  const countries = array[i];
  
}