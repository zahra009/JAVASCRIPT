import {asabenehChallenges2020} from"./data.mjs"

console.log(asabenehChallenges2020)

let body = document.body

// body.style.display = 'grid'
// body.style.placeItems = 'center'
body.style.margin = '0'
body.style.padding = '0'
body.style.fontFamily = 'Roboto'
body.style.boxSizing = 'borderBox'


const mainWrapper = document.querySelector("#wrapper")
const challengeTitle = asabenehChallenges2020.challengeTitle
const challengeSubtitle = asabenehChallenges2020.challengeSubtitle


const header = document.createElement('header')
header.textContent = asabenehChallenges2020.challengeTitle












mainWrapper.appendChild(header)