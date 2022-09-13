// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count 
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()
// console.log(innerFunc())
// console.log(innerFunc())

function outerFunction() {
     let count = 0;
     function plusOne() {
        count++
        return count
     }
     function minusOne() {
        count--
        return count
     }
     function addOne() {
        count++
        return count
     }

     return {
        plusOne:plusOne(),
        minusOne:minusOne(),
        addOne:addOne()
    } 

}
const innerFunc = outerFunction()

console.log(innerFunc.plusOne)
console.log(innerFunc.minusOne)
console.log(innerFunc.addOne)