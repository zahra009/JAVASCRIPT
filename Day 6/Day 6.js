const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
for(let i = 0; i <= 10; i++){
    console.log(i)
  }

  let i = 0
while (i <= 10) {
  console.log(i)
  i++
}

let b = 0
 do {
    console.log(b)
    b++
  } while (b <= 10)

  for (let c = 10; c>= 0; c--) {
    console.log(c);  
  }
// let a = "n"
  // for(let i = n; i >= 0; i++){
  //   console.log(i)
  // }

  // console.log('#\n##\n###\n####\n#####\n######\n#######')

//   let x =""
//   for (let i = 0; i < 7; i++) {
//     console.log(x += '#');
    
//   }

// for (let i = 0; i <= 7; i++) {
//     console.log('#'.repeat [i]);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`$(i) $(1 * i) $(1 * i * i)`);
    
// }

  for(let s = 0; s <= 10; s++){
    console.log(`${s} * ${s} = ${s * s}`)
  }
    

  for (let even = 0; even <= 100; even++) {
    if(even% 2 == 0)
    console.log(even)  
  }

  for (let odd = 1; odd <= 100 ; odd+= 2){
    console.log(odd)  
  }
 
  for (let i = 2; i < 20; i++) {
    console.log(i);
    
  }

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum)

let j;
let sumE = 0;
let sumO = 0;

for (j = 0; j <= 100; j++) {
  j % 2 == 0 ? (sumE += j) : (sumO += j);
}

console.log(sumE,sumO);

// var arr = [];
// while(arr.length < 5){
//     var r = Math.floor(Math.random() * 10) ;
//     arr.push(r);
// }
// console.log(arr);

// var arr = [];
// while(arr.length < 5){
//     var r = Math.floor(Math.random() * 100) ;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

const arrOfNos =[]
for (let i = 0; i < 5; i++)
arrOfNos.push(Math.floor(Math.random() * 10))

console.log(arrOfNos)

const arrOf = []
for (let i = 0; i < 5; i++) {
  const arrOf = Math.floor(Math.random() * 10);
  if (arrOf.indexOf(arrOf) === -1 && arrOf.length < 5)
  arrOf.push()
}


const randomLength = Math.floor(Math.random() *String.length)
// const keyH =() >={
//   const str ="0123456789abcdefghigklmnopqrstuvwxyz";
//   let emptyStr =""

//   for (let i = 0; i < 6; i++) {
    
    
//   }
// }

function makeid() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());

import countries from "./countries.js"
// let landWord = "land"
// if (countries.includes(landWord)){
//   console.log(countries)
// }

let countryArray
const countriesWithLand = countries.filter(count => count.includes("land"))
console.log(countriesWithLand)

for (let i = 0; i < 1; i++) {
  console.log(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random)})`);
  
}