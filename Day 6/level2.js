function makeid() {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 12; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  console.log(makeid())
  
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
console.log(randomHex())

// let countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]


let countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya']
    let newArr = []
 for(let i = 0; i < countries.length; i++){
    newArr.push(countries[i].toUpperCase())
 }
 console.log(newArr)

//  for(let i = 0; i < countries.length; i++){
//     newArr.push(countries[i].length())
//  }
//  console.log(newArr)
