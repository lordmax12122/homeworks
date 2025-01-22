const users = [
    {name: "Taras", balance: 100, friends: "marik", skills: ["swimming", "football", "hockey"], email: "taras@gmail.com", age: 13},
    {name: "Maksym", balance: 173, friends: "marik", skills: ["swimming", "basketball"], email: "maksymwithredeyes@gmail.com", age: 14},
    {name: "Baran", balance: 100, friends: "komar", skills: ["swimming", "cooking"], email: "baran@gmail.com", age: 18}
]

const sumBalance = users.reduce((acc, user) => {
    return acc + user.balance
},0);

console.log(sumBalance);

const userFriends = users.reduce((acc, user) => {
   if (user.friends.includes("marik")) {
    acc.push(user.name)
   }
    return acc
} ,[]);

console.log(userFriends)


const sortByFriends = (a, b) => a.friends - b.friends
console.log(users.sort(sortByFriends))

const arrSkills = users.reduce((acc, user) => {
    acc.push(...user.skills);
    return acc
  } ,[]);
  console.log(arrSkills)

const filteredArrSkills = arrSkills.reduce((acc, skill) => {
   return acc.includes(skill) ? acc : [...acc, skill] 
} ,[])

console.log(filteredArrSkills.sort());