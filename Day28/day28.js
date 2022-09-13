let body = document.body

body.style.margin = '0'
body.style.padding = '0'

let h2 = document.querySelector('h2')
h2.style.textAlign= 'center'

let form = document.querySelector('form')
form.style.display = 'flex'
form.style.justifyContent = 'center'

let input = document.querySelector('input')
input.style.outline = 'none'
input.style.borderColor = 'magenta'
input.style.height = '2rem'
input.style.marginRight = '0.5rem'

let Ln = document.querySelector('.Ln')
Ln.style.marginRight = '0.5rem'
Ln.style.borderColor = 'magenta'
Ln.style.outline = 'none'

let country = document.querySelector('.country')
country.style.marginRight = '0.5rem'
country.style.borderColor = 'magenta'
country.style.outline = 'none'

let number = document.querySelector('.number')
number.style.marginRight = '0.5rem'
number.style.borderColor = 'magenta'
number.style.outline = 'none'

let button = document.querySelector('button')
button.style.border = 'none'
// button.style.padding = '0 0rem'
button.style.outline = 'none'
button.style.width = '9rem'
button.style.backgroundColor = '#e5c9c5'
button.style.color = 'white'

let div = document.querySelector('div')
div.style.display = 'grid'
div.style.width = '60rem'
div.style.margin = 'auto'

// document.getElementsByName('firstName')[0].placeholder = 'new text for email';
// document.getElementsByName('lastName')[0].placeholder = 'new text for fname';
// document.getElementsByName('country')[0].placeholder = 'new text for lname';
// document.getElementsByName('player score')[0].placeholder = 'new text for lname';

const divEl = document.querySelector("div");
const users = [
  {
    firstName: "MARTHA",
    lastName: "YOHANES",
    date: new Date().toDateString(),
    country: "FINLAND",
    score: 85,
  },
  {
    firstName: "DAVID",
    lastName: "SMITH",
    date: new Date().toDateString(),
    country: "UNITED KINGDOM",
    score: 80,
  },
  {
    firstName: "ASABENEH",
    lastName: "YETAYEH",
    date: new Date().toDateString(),
    country: "FINLAND",
    score: 75,
  },
  {
    firstName: "MATHIAS",
    lastName: "ELIAS",
    date: new Date().toDateString(),
    country: "SWEDEN",
    score: 70,
  },
];


users.forEach((user) => {
    const userEl = document.createElement("div");
    userEl.classList.add("user");
    userEl.style.backgroundColor = "#e5c9c5";
    userEl.style.marginBottom = "0.5rem";
    userEl.style.display = "flex";
    // userEl.style.flexDirection = 'column';
    userEl.style.justifyContent = "space-between";
    userEl.style.alignItems = "center";
    userEl.style.padding = "1rem";
    userEl.innerHTML = `

    <div class="inner2">
          <span>${user.firstName} ${user.lastName}</span>
          <span>${user.date}</span>
        </div>
        <div class="nation">${user.country}</div>
        <div>${user.score}</div>
        <div class="events">
          <img class="delete" src="./image/img.svg" alt="" />
          <span class='five'>+5</span>
          <span class='five'>-5</span>
        </div>
      
      `;
      const spanEl = document.querySelectorAll(".five");
      spanEl.forEach((span) => {
        span.style.width = "2rem";
        span.style.height = "2rem";
        span.style.borderRadius = "50%";
        span.style.backgroundColor = "white";
        span.style.display = "grid";
        span.style.placeItems = "center";
      });
      divEl.appendChild(userEl);
    });
    const eventEl = document.querySelectorAll(".events");
    eventEl.forEach((event) => {
      event.style.display = "flex";
      event.style.justifyContent = "space-between";
    });
    const deleteEl = document.querySelectorAll(".delete");
    const buttonEl = document.querySelector("button");
    const inputEl = document.querySelectorAll("input");
    const pEl = document.querySelector("p");
    pEl.style.textAlign = "center";
    const userEl = document.querySelectorAll(".user");
    buttonEl.addEventListener("click", (e) => {
      inputEl.forEach((input) => {
        if (!input.value) {
          pEl.textContent = "All fields required";
          pEl.style.color = "red";
          setTimeout(() => {
            pEl.textContent = "";
          }, 2000);
        }
      });
      if (
        inputEl[0].value &&
        inputEl[1].value &&
        inputEl[2].value &&
        inputEl[3].value 
      ) {
        const newEl = document.createElement("div");
        newEl.classList.add("user");
        newEl.style.backgroundColor = "red";
        newEl.style.marginBottom = "0.5rem";
        newEl.style.display = "flex";
        newEl.style.justifyContent = "space-between";
        newEl.style.alignItems = "center";
        newEl.style.padding = "1rem";
        newEl.innerHTML = `<div class="inner2">
          <span>${inputEl[0].value.toUpperCase()} ${inputEl[1].value.toUpperCase()}</span>
          <span>${new Date().toDateString()}</span>
          </div>
          <div class="nation">${inputEl[2].value.toUpperCase()}</div>
          <div>${inputEl[3].value}</div>
          <div class="events">
          <img class="delete" src="./images/trash.png" alt="">
          <span class='five'>+5</span>
          <span class='five'>-5</span>
          </div>`;
          divEl.appendChild(newEl);
          document.querySelectorAll(".events").forEach((event) => {
            event.style.display = "flex";
            event.style.justifyContent = "space-between";
          });
          const deleteEls = document.querySelectorAll(".delete");
          const userEls = document.querySelectorAll(".user");
          let currentUserEl = userEls.forEach((userr) => {
            userr[userr.length - 1];
          });
          let currentDeleteEl = deleteEls.forEach((delet) => {
            delet[delet.length - 1];
          });
          currentDeleteEl.addEventListener("click", (e) => {
            currentUserEl.remove();
          });
        }
        inputEl.forEach((value) => (value = ""));
      });

    //   deleteEl.forEach((deletee) => {
    //     deletee.addEventListener("click", (e) => {
    //     //   userEl.forEach((user) => {
    //       userEl.remove();
    //     });
    //   });
    //   deleteEl.addEventListener("click", (e) => {
    //     userEl.remove();
    //   });
       

