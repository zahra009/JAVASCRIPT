import countries from './countries.js'

console.log(countries)
console.log('h1')

import { webTechs } from './web_techs.js'
console.log(webTechs)

let index1 = countries.indexOf('Ethiopia');
if(index1 === -1){
    console.log(countries.push('Ethiopia'))
}else{
    console.log(countries[index1].toUpperCase())
}
// const arr  = ['item1', 'item2','item3']
webTechs.push('Sass')
console.log(webTechs)

// countries.splice(5,1)
console.log(countries.splice())

// countries.push('Dubia')
// console.log(countries)
