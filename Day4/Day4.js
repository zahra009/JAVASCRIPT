let age = prompt("Enter your age") 
if (age>=18) {
console.log("You are old enough to drive")
}
else {
   console.log("You are left with" + (18-age) +"years to drive") 
}

let myAge = prompt("Enter my age")
let yourAge = prompt ("Enter your age")
if (yourAge>myAge) {
    console.log("You are " + (yourAge-myAge) + " years older than me")
} else {
    
}

let a = 4
let b = 3
if (a>b) {
    console.log( a+  "is greater than" + b);
} else {
    console.log( a+ "is less than" + b);
}
const output=a>b
?(a+  "is greater than" + b): (a + "is less than" + b)
console.log(output);
 
let odd = prompt("Enter a number")
if (odd %2 == 0) {
  console.log(odd+ "is an even number")  
}else {
    console.log(odd+ "is an odd number")     
    }

let grade = 90
if (grade>=80) {
    console.log("A")
} else  if (grade>=70 && grade <= 79){
    console.log("B")
} else  if (grade>=60 && grade <= 69){
    console.log("C")
} else  if (grade>=50 && grade <= 59)
    console.log("D")
 else  if (grade>=0 && grade <= 49)
    console.log("F")  
    
let season = prompt("Enter a season");

switch (season) {
    case 'September':
    case 'October':
    case 'November':
        console.log('Autumn')
        break;
        case 'December': 
        case'January':
        case 'February':
            console.log('Winter')
            break;
          case 'March':
          case 'April':
          case 'May':
            console.log('Spring')
            break;
          case 'June':
          case 'July':
          case 'August':
            console.log('summer')
         break;   
       default:
}

let day = prompt(" Enter the day  today")
if (day=== "Saturday") {
    console.log("Saturday is a weekend")
} else if (day=== "saturDaY") {
    console.log("Saturday is a weekend")
} else if (day=== "Friday") {
    console.log(" Friday is a working day")
} else if (day=== "FrIDAy") {
    console.log(" Friday is a working day")
}

let Month =prompt ("Enter a month")
switch (Month.toLowerCase()){
    case 'January':
     console.log (Month+ 'has 31 days')
    break;
    case 'February':
     console.log (Month+ 'has 28 days')
    break;
    default:   
}
let leapYear =prompt ("Enter a leapYear")
switch (leapYear.toLowerCase()){
    case 'feburary':
     console.log (leapYear+ 'has 29 days')
    break;
    default:
}       