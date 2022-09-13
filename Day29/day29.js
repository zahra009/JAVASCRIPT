// const containerE1 = document.querySelector('div')
// const random = () => {
//     return Math.floor(Math.random() * 256)
// };
// const fonts = [
//     "Courier New",
//     "Franklin Gothic Medium",
//     "Arial Narrow",
//     "sans-serif",
//     "Segoe UI",
//     "Times New Roman",
// ];
// const randomFonts = () => {
//     return Math.floor(Math.random() * fonts.length)
// };
// const sentence = containerEl.textContent.split("");
//     console.log(sentence);
//     let i = 0;
//     setInterval(() => {
//       containerE1.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
//       containerE1.innerHTML = "";
//       containerE1.style.fontFamily = fonts[randomFonts()];

//       sentence.forEach((letter) => {
//         const letterE1 = document.createElement('"span');
//         letterE1.classList.add("letters");
//         letterE1.style.color = `rgb(${random()}, ${random()}, ${random()})`;
//         letterE1.textContent = letter;
//         containerE1.appendChild(letterE1)
//       });
//       const spanE1 = document.querySelectorAll("span");

//       if (i === 0)
