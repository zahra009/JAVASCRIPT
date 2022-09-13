import { countries } from "./countries.mjs";
console.log(countries)

let body = document.body

body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'Arial, Helvetica, sans-serif'

let upper =document.querySelector('.upper')
upper.style.backgroundImage = "url('./images/globe-2.jpg')"
upper.style.backgroundBlendMode = 'multiply'
upper.style.backgroundColor= '#374c63cf'
upper.style.height = '28rem'
upper.style.backgroundSize= 'cover'
upper.style.backgroundPosition = 'center'
upper.style.paddingTop = '8rem'

let header= document.querySelector('header')
// header.style.display = 'flex'
// header.style.alignItems = 'center'
header.style.textAlign = 'center'
header.style.color = 'white'


let h1 = document.querySelector('h1')
h1.style.letterSpacing = '0.8rem'
h1.style.fontSize = '2.8rem'
h1.style.marginBottom = '1rem'

let input = document.querySelector('input')
input.style.borderRadius = '50px'
input.style.outline = 'none'
input.style.width = '25rem'
input.style.height ='2rem'
input.style.marginRight = '0.5rem'
input.style.borderColor = 'lightsteelblue'
input.style.paddingLeft = '0.5rem'
input.style.fontSize = '1rem'
input.style.textAlign = 'center'
// placeholder.style.textAlign = 'center'

let center = document.querySelector('center')
center.style.display = 'flex'
center.style.justifyContent = 'center'
center.style.textIndent = '1rem'

let button = document.querySelector('button')
button.style.color = 'white'
button.style.backgroundColor = '#8b6ee6' 
button.style.padding = '0.8rem'
button.style.outline = 'none'
button.style.borderRadius = '3PX'
button.style.border = 'none'   

let focus = document.querySelector('.focus')
focus.style.color = 'white'
focus.style.backgroundColor = '#8b6ee6' 
focus.style.padding = '0.8rem'
focus.style.outline = 'none'
focus.style.borderRadius = '3PX'
focus.style.border = 'none'
focus.style.backgroundColor = 'indigo'  
//  focus:hover {
//     background:#ff0000;
//     }

let up = document.querySelector('.up')
up.style.display = 'flex'
up.style.flexDirection = 'column'
up.style.fontSize = '10px'

let sort = document.querySelector('.sort')
sort.style.display = 'flex'

// var Button=document.getElementById('Button')
// Button.classList.add('Hove')

// const columns = document.querySelectorAll('button');

// for (let i = 0; i < columns.length; i++) {
//    columns[i].classList.add('hover');
// }

let search = document.querySelector('.search')
search.style.marginTop = '1.5rem'
search.style.marginLeft = '40rem'
// search.style.display = 'flelx'
// search.style.alignItems = 'center'
// search.style.justifyContent = 'center'

let lower = document.querySelector('.lower')
lower.style.display = 'grid'
lower.style.gridTemplateColumns = 'repeat(6, 1fr)'
lower.style.gridRowGap = '1rem'
lower.style.padding = '4rem 10rem'
lower.style.placeItems = 'center'
lower.style.backgroundColor = 'lightYellow'

document.getElementById("count").textContent = countries.length;
const buttonEl = document.querySelectorAll("button");
const lowerEl = document.querySelector(".lower");
const sortButtonEl = document.querySelector(".sort");
const arrowEl = document.querySelector(".arrow");
const inputEl = document.querySelector("input");
let order = "alphabetical";
let rotate = 180;
let searchBy = "";
let countryDisplayed;


const sortCountry = (data, order) => {
    let sortedCountry = data.sort();
    sortedCountry =
      order === "alphabetical" ? sortedCountry : sortedCountry.reverse();
    lowerEl.innerHTML = "";
    sortedCountry.forEach((item) => {
      const newEl = document.createElement("div");
      newEl.textContent = item;
      newEl.style.backgroundImage = `url("./map_image.jpg")
       `;
      newEl.style.backgroundSize = "contain";
      newEl.style.height = "10rem";
      newEl.style.color = "white";
      newEl.style.fontSize = "1rem";
      newEl.style.display = "grid";
      newEl.style.textAlign = "center";
      newEl.style.placeItems = "center";
      newEl.style.backgroundBlendMode = "multiply";
      newEl.style.backgroundColor = "#374c63cf";
      newEl.style.borderRadius = "3px";
      newEl.style.width = "9rem";
      newEl.style.fontWeight = "bolder";
      newEl.style.textTransform = "uppercase";
      lowerEl.appendChild(newEl);
    });
  };


  const searchCountryBy = (by, inputValue) => {
    if (by === "starting word") {
      countryDisplayed = countries.filter((country) =>
        country.toLocaleLowerCase().startsWith(inputValue.toLowerCase())
      );
    } else {
      countryDisplayed = countries.filter((country) =>
        country.toLocaleLowerCase().includes(inputValue.toLowerCase())
      );
    }
    sortCountry(countryDisplayed, order);
  };

  sortButtonEl.addEventListener("click", () => {
    lowerEl.innerHTML = "";
    rotate = rotate === 180 ? 0 : 180;
    arrowEl.style.transform = `rotate(${rotate}deg)`;
    order = order === "alphabetical" ? "reverse" : "alphabetical";
    sortCountry(countryDisplayed, order);
  });
  buttonEl.forEach((btn, btnIndex) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const buttonText = btn.textContent.toLowerCase();
      if (buttonText !== searchBy && btnIndex !== 2) {
        searchBy = buttonText;
      }
    });
  });
  inputEl.addEventListener("input", (e) => {
    if (searchBy) {
      searchCountryBy(searchBy, e.target.value);
    }
  });
  sortCountry(countries, order);  