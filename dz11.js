const bankAccount = {
    ownerName: "Max",
    accountNumber: 1,
    balance: 10000,
  };

  const deposit = Number(prompt("На скільки ви хочете поповнити свій рахунок?"));
bankAccount.balance = bankAccount.balance + deposit

const withdraw = Number(prompt("Скільки гривень ви хочете зняти з рахунку"));
bankAccount.balance = bankAccount.balance - withdraw

console.log(bankAccount)

const weather = {
    temperature: 11,
    humidity: 70,
    windSpeed: 2
}

if (weather.temperature < 0) {
    console.log("температура нижче 0 градусів Цельсія");
} else (weather.temperature >= 0) {
    console.log("температура вище або дорівнює 0 градусам Цельсія")
}


const user = {
    name: "Max",
    email: "max@gmail.com",
    password: "1234"
}

const loginEmail = (prompt("Введіть свою пошту"));
    if (loginEmail === user.email) {
        alert("Правильно тепер введіть пароль");
    } else {
        alert("Не правильно повторіть спробу");
    }

const loginPassword = (prompt("Введіть свій пароль"));
    if (loginEmail === user.email) {
        alert("Правильно!");
    } else {
        alert("Не правильно повторіть спробу");
        
    }

console.log(user.email, loginEmail, user.password, loginPassword )


const film = {
    movie: "The Founder",
    director: "John Lee Hancock",
    year: 2016,
    rating: 9
}

const movieRating = film.rating
  if (movieRating > 8) {
    alert("Цей фільм має рейтинг більше ніж 8 (з 10) і вважається хорошим")
} else {
    alert("Цей Фільм має рейтинг менше ніж 8 (з 10)")
}


