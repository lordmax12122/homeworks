// task 1
const boxElement = document.querySelector('.box')
console.log(boxElement)
const textElement = document.querySelector('.boxtext')
console.log(textElement)
const buttonElement = document.querySelector('.buttontext')
console.log(buttonElement)
buttonElement.textContent = textElement.textContent
// task 2
const imageElement = document.querySelector('.boximg')
console.log(imageElement)
imageElement.src = "https://www.balisafarimarinepark.com/wp-content/uploads/2023/07/MONYET-jpg.webp"
// task 3
const imgElement = document.querySelector('.boxpanda')
console.log(imgElement)
imgElement.alt = "a Giant Panda"
const aElement = document.querySelector('.panda-info')
console.log(aElement)
aElement.href = "https://en.wikipedia.org/wiki/Pandas_(disambiguation)"
// task 4
const ulElement = document.querySelector('ul')
console.log(ulElement)
const text = ulElement.firstElementChild
console.log(text)
text.textContent = "new text"

