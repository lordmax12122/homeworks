// function greeting() {
//     const click = confirm('Click ok')
//     if (click === true) {
//         console.log('Hello World!')
//     }
// }
// greeting()

// const answer = Math.floor(Math.random() * 100)
// console.log(answer)
// const personAnswer = Number(prompt('Вгадай число від 1 до 100'))

// function checkRightAnswer() {
//     if (personAnswer === answer) {
//         console.log('+')
//     } else {
//         console.log('-')
//     }

// }
// checkRightAnswer()

// let timesClicked = 0;
// function checkIfClicked() {
//     const clicked = confirm('Are u going to click?')
//     if (clicked) {
//         timesClicked++;
//         console.log('U clicked');
//     } else {
//         console.log('U didnt click');
//     }
// }
// checkIfClicked()

// const arr = [ 2, 3, 4, 5];

// function applyCallbackToEachElement(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++){
//         result.push(callback(arr[i]))
//     }
//     return result
// }

// function squareCallback(arr) {
//     return arr * arr
//   }

// console.log(applyCallbackToEachElement(arr, squareCallback))


// const calculateDiscountedPrice = (price, discount, callback) => {
//   const calculatedPrice = price * discount;
//   callback(calculatedPrice);
// };

// const showCalculatedPrice = (calculatedPrice) => console.log(`Calculated price is ${calculatedPrice}`)

// calculateDiscountedPrice(55.51, 0.123512, showCalculatedPrice);


