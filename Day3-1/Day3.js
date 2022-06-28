let firstName ='fatimah'
console.log(typeof firstName);

let lastName  = 'zahra'
console.log(typeof lastName);

let country  ='nigeria'
console.log(typeof country);

let city  ='ilorin'
console.log(typeof city);

let age  = 35;
console.log(typeof age);

let isMarried = false
console.log(typeof isMarried);

let year = 2022;
console.log(typeof year);

let num = '10';
console.log(num===num);

let zero = 9.81
let ten = 10;
console.log(zero===ten);
// let zeroInt = parseInt(Math.round(9.8));

let people = 'life'
console.log(typeof people);
let roll = 20
console.log(typeof roll);
let cat = 'linat'
console.log(cat===cat)

let exam
console.log(exam)
let empty = null
console.log(empty) 
let girls = 10
let boys = 6
console.log(girls===boys)

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4'); 
console.log('python'.length > 'jargon'.length) 

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));


const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() +1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
const allSeconds = Date.now()
console.log(allSeconds);


const date = new Date();
const date1= date.getFullYear()
const date2= string(date.getDate()).padStart(2, '0')
const date3= string(date.getMonth()).padStart(2, '0')
const date4= string(date.getHours()).padStart(2, '0')
const date5= string(date.getMinutes())
console.log(`${date1} -${date2}-${date3} ${date4}:${date5}`)





// let number = prompt('Enter base: 20', 'Enter height:10')
// console.log(number)