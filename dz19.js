const modalOpen = document.querySelector('[open-modal]')
const modalClose = document.querySelector('[close-modal]')
const backdrop = document.querySelector(".backdrop")
const openButton = modalOpen.addEventListener('click', (event) => {
    backdrop.style.opacity = 1;
    backdrop.style.visibility = "visible"
    console.log(event.target)
});

const closeButton = modalClose.addEventListener('click', (event) => {
    backdrop.style.opacity = 0;
    backdrop.style.visibility = "hidden"
    console.log(event.target)
});

const closeByBackdrop = backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
    backdrop.style.opacity = 0;
    backdrop.style.visibility = "hidden"
}
    console.log(event.target)
});

const redInput = document.querySelector(".red-input")
const whiteInput = document.querySelector(".white-input")
const greenInput = document.querySelector(".green-input")
const page = document.querySelector('body')
const redBackground = redInput.addEventListener('click', (event) => {
    page.style.backgroundColor = "red";
    console.log(event.target)
});
const whiteBackground = whiteInput.addEventListener('click', (event) => {
    page.style.backgroundColor = "white";
    console.log(event.target)
});
const greenBackground = greenInput.addEventListener('click', (event) => {
    page.style.backgroundColor = "green";
    console.log(event.target)
});

const nameInput = document.querySelector('#name-input')
const nameOutput = document.querySelector('#name-output')
names = nameInput.addEventListener('change', (event) => {
    if (nameInput.value === '') {
        nameOutput.textContent = "незнайомець"
    } else {
        nameOutput.textContent = event.target.value
    }
});

const validationInput = document.querySelector("#validation-input")
console.log(validationInput)
const dataLength = parseInt(validationInput.getAttribute("data-length"));
console.log(dataLength)

validationInput.addEventListener('input', (event) => {
    if (validationInput.value.length === dataLength) {
        validationInput.style.border = "3px solid #4caf50"
    } else {
        validationInput.style.border = "3px solid #f44336"
    }
    console.log(dataLength)
});


const fontSizeControl = document.querySelector('#font-size-control');
const textControl = document.querySelector('#text');

fontSizeControl.addEventListener('input', (event) => {
   fontSizeValue = fontSizeControl.value + '1px';
   textControl.style.fontSize = fontSizeValue
   console.log(event.target)
});
