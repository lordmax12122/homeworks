// const user = {
//     mood: "is happy",
//     hobby: "is playing football",
//     premium: "has premium"
// }

// user.hobby = "skydiving"
// user.premium = "doesn't have premium"

// const keys = Object.keys(user);

// for (const key of keys){
//     console.log('User', user[key])
// }

// const fruits = {
//     apples: 6,
//     grapes: 3,
//     pears: 12,
//     bananas: 2,
// };

// const values = Object.values(fruits)

// let total = 0;

// for(const value of values){
//     total = value + total
// }

// console.log(total)


// const workers = {
//     Sasha: 0,
//     Markiyan: 112,
//     Petro: 121,
//     Max: 122,
//     Pedro: 124,
// };

// let best = 0;
// let bestEmployee = "";
// function findBestEmployee(workers) {
// for (let name of Object.keys(workers)) {
//     if (workers[name] > best) {
//       best = workers[name];
//       bestEmployee = name;
//     }
//   }
//   return bestEmployee;
// }


// const salaries = {
//         Max: 6005,
//         Boryslav: 3020,
//         Markiyan: 8194,
//         Dominik: 2100,
//     };

//  function countTotalSalary(employees) {
//     let total = 0 
//     for(const number of Object.values(salaries))
//         total = total + number

//     return total
//  }

//  console.log(countTotalSalary(salaries))


// const iphones = [
//     { iphone: "Iphone 12", cost: 699 }, { iphone: "Iphone 15 Pro", cost: 999 }
// ];
// function getAllPropValues(arr, prop) {
//     const value = [];
//     for (const iphone of arr) {
//         value.push(iphone[prop]);
//     }
//     return value;
// }
// console.log(getAllPropValues(iphones, "iphone"));
// console.log(getAllPropValues(iphones, "cost"));


const bees = [
    { bee: "Music bee", cost: 699, total: 3 },
    { bee: "Photon bee", cost: 799, total: 4 },
    { bee: "Precise bee", cost: 999, total: 2},
];

function calculateTotalPrice(allProducts, productName) {
    let total = 0
    productName === bees.bee
    for(let bees of allProducts) {
                total = bees.cost * bees.total
        }
            return total;
         }

console.log(calculateTotalPrice(bees, "Music bee"))  
console.log(calculateTotalPrice(bees, "Photon bee"))
console.log(calculateTotalPrice(bees, "Precise bee"))       
