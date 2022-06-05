// Creating elements like on its html page
const main = document.createElement('main')
const container = document.createElement('div')
const cardBox = document.createElement('div')

// Card box inside

// The top of it
const cardHeading = document.createElement('div')
const currentItem = document.createElement('img')
const iconsBox = document.createElement('div')
// icons
const heart = document.createElement('img')
const chart = document.createElement('img')
const eye = document.createElement('img')

// The bottom of it
const cardContent = document.createElement('div')
const nameBox = document.createElement('div')
const name = document.createElement('a')
const status = document.createElement('span')
const priceBox = document.createElement('div')
const price = document.createElement('span')

// Giving each element its own class

container.classList.add('container')
cardBox.classList.add('card__box')

cardHeading.classList.add('card__item')
currentItem.src = '././assets/png/kinder_delice.jpg'
iconsBox.classList.add('icons')

heart.src = './assets/svg/heart.svg'
chart.src = './assets/svg/bar-chart-2.svg'
eye.src = './assets/svg/eye.svg'

cardContent.classList.add('card__item__details')
nameBox.classList.add('name')
name.innerHTML = "Пирожное 'Kinder Delice' с Молочной Начинкой 39 гр"
name.href = '#'

status.classList.add('status')
status.innerHTML = 'Много'

priceBox.classList.add('price')
price.innerHTML = '6 320 UZS/шт'

// Connecting each of the elements to another

document.body.append(main)
main.append(container)
container.append(cardBox)
cardBox.append(cardHeading, cardContent)
cardHeading.append(currentItem, iconsBox)
iconsBox.append(heart, chart, eye)
cardContent.append(nameBox, status, priceBox)
nameBox.append(name)
priceBox.append(price)


