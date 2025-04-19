const animals = [
    "Rat", // 1
    "Ox", // 2
    "Tiger", // 3
    "Rabbit", // 4
    "Dragon", // 5
    "Snake", // 6
    "Horse", // 7
    "Goat", // 8
    "Monkey", // 9
    "Rooster", // 10
    "Dog", // 11
    "Pig" // 12
  ]
  console.log(animals)

  const elements = {
  0: ["Metal", "Yang"],
  1: ["Metal", "Yin"],
  2: ["Water", "Yang"],
  3: ["Water", "Yin"],
  4: ["Wood", "Yang"],
  5: ["Wood", "Yin"],
  6: ["Fire", "Yang"],
  7: ["Fire", "Yin"],
  8: ["Earth", "Yang"],
  9: ["Earth", "Yin"]
}
console.log(elements)

const submit = document.querySelector('#submit')
const form = document.querySelector('#form')
const display = document.querySelector('#display')

// function to find what animal and element, returns as an object
function findZodiac(year) {
    const animal = animals[(year - 4) % 12]
    const elementYinYang = elements[year % 10]
    const element = elementYinYang[0]
    const yinYang = elementYinYang[1]
    const zodiac = {}

    console.log(`you are: year of the ${animal}`)
    console.log(`you are element of ${element}`)
    console.log(`you are ${yinYang}`)

    zodiac.animal = animal
    zodiac.element = element
    zodiac.yinYang = yinYang
    
    return zodiac
}

// this grabs the value that was entered after pressing submit
form.addEventListener('submit', function(event) {
    event.preventDefault()

    const formdata = new FormData(this)
    const year = Number(formdata.get('year'))
    console.log('year submitted is:', year) // check
    
    if (year) {
        const zodiac = findZodiac(year)
        display.textContent = `Your Zodiac Animal is ${zodiac.animal} and your Element is ${zodiac.element} (${zodiac.yinYang})`
        console.log(zodiac) // check object
        
    } else {
        console.log('this is an empty submission')
    }
})
