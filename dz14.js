const user = [
    {name: "Taras", eyeColor: "Blue", gender: "Male", isActive: false, email: "taras@gmail.com", age: 13},
    {name: "Maksym", eyeColor: "Red", gender: "Male", isActive: false, email: "maksymwithredeyes@gmail.com", age: 14},
    {name: "Baran", eyeColor: "Blue", gender: "Undefined", isActive: true, email: "baran@gmail.com", age: 18}
]

const userNames = user.map(user => user.name)
console.log(userNames)


const userEyes = user.map(user => user.eyeColor)
console.log(userEyes)


const userMale = user.filter(user => user.gender === "Male")
console.log(userMale)


const userIsActive = user.filter(user => user.isActive === false)
console.log(userIsActive)


const getUserNameByEmail = (arr, email) => {
    for (let user of arr) {
        if (user.email === email) {
            return user.name
        } else {
            return console.log("I can't find that email")
        }
    }
}

console.log(getUserNameByEmail(user, "taras@gmail.com"));

const userAge = (arr, min, max) => user.filter(user => user.age > min && user.age < max)
  console.log(userAge(user, 12, 16));