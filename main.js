import { films } from '/assets/films.js'
import { people } from '/assets/people.js'

console.log('Hey, I am here')

let mainHeader = document.querySelector("h1")

console.log(mainHeader)

mainHeader.textContent = "I am awesome"
mainHeader.setAttribute("style", "color:red; border: 1px solid blue;");

let myBody = document.querySelector('body')
document.body.setAttribute('style', "background-color: #343434;");

let myParagraph = document.createElement('p')
myParagraph.textContent = "I am the best paragraph ever written"



let myDiv = document.createElement('div')
myDiv.appendChild(myParagraph)

//myDiv.textContent = "Hey, I am a Div!"

document.body.appendChild(myDiv)

console.log(myParagraph.textContent)

let myPic = document.createElement("img")

myPic.setAttribute('src', "https://competenetwork.com/wp-content/uploads/2019/06/pexels-photo-457882-1.jpeg")

document.body.appendChild(myPic)


console.log(films[0].opening_crawl)

let mainArea = document.querySelector('main')

films.forEach(function(film) {
let filmDiv = document.createElement('div')
let title = document.createElement('h1')
let crawl = document.createElement('p')


filmDiv.appendChild(title)
filmDiv.appendChild(crawl)

title.innerText = film.title
crawl.innerText = film.opening_crawl

mainArea.appendChild(filmDiv)
})

people.forEach(function(person){
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https:starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    mainArea.appendChild(personDiv)
})

let charNum = getCharNumber(person.url)

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substrong(end -2, end)
    if(charID.indexOf('/') !== < 1 ) {
        return charID.slice(1,2)
    } else {

    }
}








const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)
const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)