function printFullName (){
    let firstName = 'fatimah'
    let lastName = 'zahra'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}
printFullName()

function printFull (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFull())

function addTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum 
}
console.log(addTwoNumbers(5, 2))

function areaOfRectangle() {
    let length = 7
    let width = 9
    let multiply = length * width
    return multiply
}
console.log(areaOfRectangle())

function perimeterOfRectangle() {
    let length = 3
    let width = 4
    // let num = 2
    let perimeter = 2 *(length + width)
    console.log(perimeter)
}
perimeterOfRectangle()

function volumeOfRectPrism() {
    let length = 3
    let width = 4
    let height = 3
    let volume = length * width * height
    return volume
}
console.log(volumeOfRectPrism())

function areaOfCircle(r) {
    // let radius = 3
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(4))

function circumOfCircle(r) {
    let area =  2 * Math.PI * r * r;
    return area;
}
console.log(circumOfCircle(4))

function density() {
    let mass = 12
    let volume = 4
    let perimeter = mass / volume
    console.log(perimeter)
}
density()

function speed() {
    let distance = 36
    let time = 6
    let perimeter = distance / time
    console.log(perimeter)
}
speed()

function weight() {
    let mass = 4
    let gravity = 6
    let perimeter = mass * gravity
    console.log(perimeter)
}
weight()

function convertCelsiusToFahrenheit(c) {
    let celsius =  c * (9/5) + 32;
    return celsius;
}
console.log(convertCelsiusToFahrenheit(4))

// function checkSeason(Autumn, Winter, Spring Summer) {
//     return `${firstName} ${lastName}`
//   }
//   console.log(printFullName('Asabeneh', 'Yetayeh'))

