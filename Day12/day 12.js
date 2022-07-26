// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

// const pattern = /\d+/g
//  const validatePattern = text.match(pattern)
// const result = validatePattern.reduce((a, v, i, arr) a += i === 0 )



// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.

const pattern2 = /-\d+|\d+/g
const validatePattern2 = text2.match(pattern2)
const result = validatePattern2.reduce((a,v) => Number(v) > 0 ? a += Number(v) : 0, 0)

 const sentence = `%I $am@% a %tea@cher%, &and& \ lo%#ve %tea@ching%;. There $is nothing; &as& mo@re\ rewarding as educa@ting &and& @emp%o@wering peo@ple.;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s9 mo@tivate yo@u to be a tea@cher!?`
matches = sentence.replace(/%/g, '')
  console.log(matches)

//   .replace(/^\s+|\s+$/gm,'')
  
const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches) 

const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

// console.log('%c30 Days Of JavaScript', 'color:green')
// console.log(
//     '%c30 Days%c %cOf%c %cJavaScript%c',
//     'color:green',
//     '',
//     'color:red',
//     '',
//     'color:yellow'
//   )

//   const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
//   }
//   console.table(user)