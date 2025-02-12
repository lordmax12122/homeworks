const categoriesItem = document.querySelectorAll(".categories-item");
console.log(`У списку ${categoriesItem.length} категорії.`);

categoriesItem.forEach((item) => {
    const categoryTitle = item.querySelector("h2");
    const categoryItem = item.querySelectorAll(".categories-item-child");
    console.log(`Категорія: ${categoryTitle.textContent}`);
    console.log(`Кількість елементів: ${categoryItem.length}`);
});

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.map((goods) => {
    const goodsItem = document.createElement("li");
    goodsItem.textContent = goods;
    ingredientsList.append(goodsItem);
});
console.log(ingredientsList);

const images = [
    {
        url:
            'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
            'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
            'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector("#gallery");
const galleryItem = images.map((image) => 
`<li class="gallery-item">
<img class="gallery-image" src="${image.url}" alt="${image.alt}">
</li>`);
gallery.insertAdjacentHTML("beforeend", galleryItem);
console.log(gallery)

