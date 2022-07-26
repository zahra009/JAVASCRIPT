// Store you first name, last name, age, country, city in your browser localStorage
const user = {
    firstName: 'fatimah',
    lastName: 'zahra',
    age: 30,
    country: 'Nigeria',
    city: 'ilorin',
}
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)
  console.log(userText)

//   Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage
const student = {
    firstName: 'fatimah',
    lastName: 'zahra',
    age: 30,
    country: 'Nigeria',
    skills: ['HTML', 'CSS', 'JS', 'React']
}
const studentJSON = JSON.stringify(student)
localStorage.setItem('student', studentJSON)
console.log(student)

// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description

