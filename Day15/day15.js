class Animal {
    constructor(name, age, color, legs) {
        console.log(this)
        this.name = name
        this.age= age
        this.color= color
        this.legs= legs
    }
}

const Animal1 = new Animal('mimi', 2, 'brown', 4)

console.log(Animal1)

const animal1 = new Animal('mimi', 2, 'brown', 4)
const animal2 = new Animal('linat', 4, 'white', 6)

console.log(animal1.getAge)
console.log(animal1.getColor)

constructor(name, age, color, legs) {
    super(name, age, color, legs)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }

// getter[get method]
// class Animal {
//     constructor(name, age, color, legs) {
//         console.log(this)
//         this.name = name
//         this.age= age
//         this.color= color
//         this.legs= legs
//     }

//     get getAge() {
//         return this.age
//       }
//     get getColor() {
//         return this.color
//     }
// }

// const animal1 = new Animal('mimi', 2, 'brown', 4)
// const animal2 = new Animal('linat', 4, 'white', 6)

// console.log(animal1.getAge)
// console.log(animal1.getColor)

// constructor(name, age, color, legs) {
//     super(name, age, color, legs)
//     this.gender = gender
//   }

//   saySomething() {
//     console.log('I am a child of the person class')
//   }

// setter
// class Animal {
//     constructor(name, age, color, legs) {
//         console.log(this)
//         this.name = name
//         this.age= age
//         this.color= color
//         this.legs= legs
//     }

//     getFullName() {
//         const fullName = this.name + ' ' + this.age
//         return 
//       }

//       get getColor() {
//         return this.color
//       }
//       get getLegs() {
//         return this.legs
//       }
//       set setColor(color) {
//         this.color += color
//       }
//       set setSkill(skill) {
//         this.skills.push(skill)
//       }
// }

// const animal1 = new Animal('mimi', 2, 'brown', 4)
// const animal2 = new Animal('linat', 4, 'white', 6)

// animal1.setLeg = 1
// animal1.setColor = 'red'
// animal1.setColor = 'yellow'
// animal1.setColor = 'black'

// animal2.setLeg = 1
// animal2.setColor = 'Planning'
// animal2.setColor = 'Managing'
// animal2.setColor = 'Organizing'

// console.log(animal1.color)
// console.log(animal2.color)

// console.log(animal1.legs)
// console.log(animal2.legs)



// static method
// Create a Dog and Cat child class from the Animal Class

// class Person {
//     constructor(firstName, lastName, age, country, city) {
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.country = country
//       this.city = city
//       this.score = 0
//       this.skills = []
//     }
//     getFullName() {
//       const fullName = this.firstName + ' ' + this.lastName
//       return fullName
//     }
//     get getScore() {
//       return this.score
//     }
//     get getSkills() {
//       return this.skills
//     }
//     set setScore(score) {
//       this.score += score
//     }
//     set setSkill(skill) {
//       this.skills.push(skill)
//     }
//     getPersonInfo() {
//       let fullName = this.getFullName()
//       let skills =
//         this.skills.length > 0 &&
//         this.skills.slice(0, this.skills.length - 1).join(', ') +
//           ` and ${this.skills[this.skills.length - 1]}`
  
//       let formattedSkills = skills ? `He knows ${skills}` : ''
  
//       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//       return info
//     }
//     static favoriteSkill() {
//       const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//       const index = Math.floor(Math.random() * skills.length)
//       return skills[index]
//     }
//     static showDateTime() {
//       let now = new Date()
//       let year = now.getFullYear()
//       let month = now.getMonth() + 1
//       let date = now.getDate()
//       let hours = now.getHours()
//       let minutes = now.getMinutes()
//       if (hours < 10) {
//         hours = '0' + hours
//       }
//       if (minutes < 10) {
//         minutes = '0' + minutes
//       }
  
//       let dateMonthYear = date + '.' + month + '.' + year
//       let time = hours + ':' + minutes
//       let fullTime = dateMonthYear + ' ' + time
//       return fullTime
//     }
//   }
  
//   console.log(Person.favoriteSkill())
//   console.log(Person.showDateTime())

// class Student extends Person {
//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//   }
  
//   const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
//   console.log(s1)
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())


// getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//     return info
//   }
//   static favoriteSkill() {
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     return skills[index]
//   }

//   getPersonInfo ( {
//     let fullName = this.getFullName()
//     let skills = 
//      this.skills.length > 0 &&
//      this.skills.slice(0, this.skills.length - 1).join
//      (', ') +
//      ` and ${this.skills[this.skills.length - 1]}`

//      let formattedSkills = skills ? `He knows ${skills}
//      ` : ''

//      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//      return info
//   })

class  PersonAccount{
        constructor( firstname, lastname, incomes, expenses ) {
            console.log(this)
            this.name = name
            this.age= age
            this.color= color
            this.legs= legs
        }
    }
    
    // const Animal1 = new Animal('mimi', 2, 'brown', 4)
    
    // console.log(Animal1)

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count', statistics.count()) 
// console.log('Sum: ', statistics.sum()) 
// console.log('Min: ', statistics.min()) 
// console.log('Max: ', statistics.max()) 
// console.log('Range: ', statistics.range()) 
// console.log('Mean: ', statistics.mean()) 
// console.log('Median: ',statistics.median()) 
// console.log('Mode: ', statistics.mode())
// console.log('Variance: ',statistics.var())
// console.log('Standard Deviation: ', statistics.std()) 

// console.log('Variance: ',statistics.var()) 
// console.log('Frequency Distribution: ',statistics.freqDist()) 