import {countries_data} from './countries.mjs'
console.log(countries_data)

let body = document.body
body.style.display = 'flex'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'Roboto'

let wrapper = document.querySelector('.wrapper')
// wrapper.style.backgroundColor = '#f1efee'
// wrapper.style.width =  '70%'
// wrapper.style.height = ''
wrapper.style.display = 'grid'
wrapper.style.boxShadow = '0px 0px 10px black'
wrapper.style.backgroundColor = "#f1efee"
wrapper.style.width = '75rem'

let world = document.querySelector('h2')
world.style.textAlign = 'center'
world.style.color = 'orange'
world.style.fontSize = '3rem'
world.style.fontWeight = '400'
world.style.margin = '0.8rem'

let subtitle = document.querySelector('p')
subtitle.style.textAlign = 'center'
subtitle.style.color = '#555555'
subtitle.style.fontWeight = '500'
subtitle.style.fontSize = '20px'

let button = document.querySelector('.population')
button.style.backgroundColor = 'orange'
button.style.border = 'none'
button.style.padding = '0.5rem 1.5rem'
// button.style.marginRight = '0.5rem'
button.style.borderRadius = '2px'
button.style.textTransform = 'uppercase'
button.style.textAlign = 'center'

let languages = document.querySelector('.languages')
languages.style.backgroundColor = 'orange'
languages.style.border = 'none'
languages.style.padding = '0.5rem 1.5rem'
languages.style.marginRight = '0.5rem'
languages.style.borderRadius = '2px'
languages.style.textTransform = 'uppercase'
languages.style.textAlign = 'center'

let spoken = document.querySelector('.spoken')
spoken.style.color = '#555555'
spoken.style.fontWeight = '500'
spoken.style.fontSize = '20px'


let box = document.querySelector('.box')
box.style.textAlign = 'center'

// const paragraph = document.querySelector('p')
// paragraph.forEach( paragraph => {

//     if (paragraph.classList.contains('subtitle')) {
//      paragraph.textContent = 'currently'
//     }

//     if (paragraph.classList.contains('spoken')) {
//         paragraph.textContent = `we have ${countries.length} countries`
//     }
// }) 

// const populationFunction = () => {
    
//     const totalPopulation = countries.reduce( (acc, cur) => acc + cur.population, 0)

//     const populationCount = countries.sort( (a,b) => b.population - a.population).slice(0, 10)
    
//     graphDisplay.innerHTML =``

    // const languageCount = countries.map( country => country.languages).flat(). reduce( (acc,language) => acc[language] ? acc[language] += 1 : acc[language] = 1; return acc}, {});


//     const languageTotal = Object.entries(languageCount) .reduce( (acc,cur) => acc + cur[1], 0)

//     const languageSort = Object.entries(languageCount).sort( (a,b) => b[1] -a[1]).slice(0,10).forEach( value => {
//         graphDisplay.innerHTML += `<span>${value[0]}</span><span class= 'range' style=width: ${
//             Number( (value[1] * 100)/100)
//         }`
//     })

//     graphTittle.textContent = '10 Most spoken languages in the world'
// }

// button.forEach( btn=> {

    // btn.addEventListner('click', (e) => {
    //     const pressed = e.currentTarget.classList
    //     pressed.contains('population') ? populationFunction(): pressed.contains('languages') ? languagePopulation(): 
    // })
// })


// function palindrome(str) {
//     str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== str[str.length - 1 -i]) {
//             return false;
//         }
//     }
//     return true;
// }


// function convertToRoman(num) {
//     let roman = {
//      M: 1000,
//      CM: 900,
//      D: 500,
//      CD: 400,
//      C: 100,
//      XC: 90,
//      L: 50,
//      XL: 40,
//      X: 10,
//      IX: 9,
//      V: 5,
//      IV: 4,
//      I: 1
//     };
  
//    let str = '';
  
//     for (let i of Object.keys(roman)) {
//       let q = Math.floor(num / roman[i]);
//       num -= q * roman[i];
//       str += i.repeat(q);
//     }
  
//     return str;
//   }
  
  
  
//   convertToRoman(36);


// function rot13(str) {
//     let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let cip = "NOPQRSTUVWXYZABCDEFGHIJKLM"
//     return str.replace(/[a-z]/gi, letter => cip[alp.indexOf(letter)]);
//   }
  
//   rot13("SERR PBQR PNZC");

// function telephoneCheck(str) {
//     let regex = /^[1]*[\s|-]*\d{3}[\s|-]*\d{3}[\s|-]*\d{4}$/;
  
//      let regexParentheses = /^[1]*[\s]*[(]\d{3}[)][\s]*\d{3}[\s|-]*\d{4}$/;
//    if (!regex.test(str)) {
//       return regexParentheses.test(str);
//     } else {
//       return true;
//     }
  
//   }
  
//   telephoneCheck("1 555)555-5555") 
//   telephoneCheck("555-555-5555");
  //only allow numbers, dashes, dots parentheses, and spaces

    //replace all non-numbers with an empty string

    // function telephoneCheck(str) {
    //     let isValid = false;
        
    //     if (/^[\d-()\s.]+$/ig.test(str)) {
        
    //       let justNumbers = str.replace(/\D/g, '');
    //       let count = justNumbers.length;
    //       if(count === 10 || (count === 11 && justNumbers[0] === "1") ){
    //         isValid = true;
    //       }
    //     }
    //     console.log(isValid, str);
    //     return isValid;
    //   }


    // function telephoneCheck(str) {
  // function telephoneCheck(str) {
//   let isValid = false;
  
//   if (/^[\d-()\s.]+$/ig.test(str)) {
  
//     let justNumbers = str.replace(/\D/g, '');
//     let count = justNumbers.length;
//     if(count === 10 || (count === 11 && justNumbers[0] === "1") ){
//       isValid = true;
//     }
//   }
//   console.log(isValid, str);
//   return isValid;
// }
 

// telephoneCheck("555-555-5555");

// function telephoneCheck(str) {
//     let regex = /^[1]*[\s|-]*\d{3}[\s|-]*\d{3}[\s|-]*\d{4}$/;
  
//      let regexParentheses = /^[1]*[\s]*[(]\d{3}[)][\s]*\d{3}[\s|-]*\d{4}$/;
//    if (!regex.test(str)) {
//       return regexParentheses.test(str);
//     } else {
//       return true;
//     }
  
//   }
  
//   telephoneCheck("1 555)555-5555") 
//   telephoneCheck("555-555-5555");

// function checkCashRegister(price, cash, cid) {
//   let change = cash * 100 - price * 100;
//   let cidTotal = 0

//   for(let elem of cid){
//     cidTotal += elem[1]*100
//   }
//   if (change > cidTotal){
//     return  {status: "INSUFFICIENT_FUNDS", change: []}
//   } else if (change === cidTotal){
//     return {status: "CLOSED", change: cid}
//   } else {
//     let answer = []
//     cid=cid.reverse()
//     let moneyUnits = {"ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1}
//    for(let elem of cid){
//      let holder = [elem[0], 0]
//     //  console.log(holder)
//      elem[1]=elem[1]*100
//      while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
//        change -= moneyUnits[elem[0]]
//        elem[1] -= moneyUnits[elem[0]]
//        holder[1] += moneyUnits[elem[0]]/100
//      }
//      if (holder[1] > 0){
//        answer.push(holder)
//      }
//    } 
//    if (change > 0){
//     return  {status: "INSUFFICIENT_FUNDS", change: []}
//    }
//    return {status: "OPEN", change: answer}
//    }
// }

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  // console.log(cidTotal)