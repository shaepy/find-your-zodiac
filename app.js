const animals = [
    "Rat 🐭", 
    "Ox 🐂", 
    "Tiger 🐯", 
    "Rabbit 🐰", 
    "Dragon 🐲",
    "Snake 🐍", 
    "Horse 🐴", 
    "Goat 🐐", 
    "Monkey 🐒", 
    "Rooster 🐓", 
    "Dog 🐶", 
    "Pig 🐷" 
  ]

  const elementsObj = {
  0: ["Metal 🔩", "Yang"],
  1: ["Metal 🔩", "Yin"],
  2: ["Water 🌊", "Yang"],
  3: ["Water 🌊", "Yin"],
  4: ["Wood 🪵", "Yang"],
  5: ["Wood 🪵", "Yin"],
  6: ["Fire 🔥", "Yang"],
  7: ["Fire 🔥", "Yin"],
  8: ["Earth 🌎", "Yang"],
  9: ["Earth 🌎", "Yin"]
}

// log to check
console.log(elementsObj)
console.log(animals)

// html references
const submit = document.querySelector('#submit')
const form = document.querySelector('#form')
const display = document.querySelector('#display')
const yearInputField = document.querySelector('input[name="year"]')
// zodiac object
const zodiac = {}

// function to find what animal and element, returns as an object
function findZodiac(year) {
    const animal = animals[(year - 4) % 12]
    const elements = elementsObj[year % 10]
    const element = elements[0]
    const taijitu = elements[1]

    zodiac.animal = animal
    zodiac.element = element
    zodiac.taijitu = taijitu
}

// this grabs the value that was entered after pressing submit
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const formdata = new FormData(this)
    const yearInput = formdata.get('year')
    const year = Number(yearInput)

    console.log('year submitted is:', year) // check
    
    // validate year
    if (year && yearInput.length === 4) {
        findZodiac(year)
        display.innerHTML = `
        <p>
        Your Zodiac Animal is ${zodiac.animal}
        <br>
        and your Element is ${zodiac.element} (${zodiac.taijitu})
        </p>
        `
        console.log(zodiac) // check object
    }
    else {
        console.log(`invalid entry: ${yearInput}`)
        display.textContent = `Please enter a valid 4-digit year.`
        form.reset()
    }
})

// clear the result when user interacts with year field again
yearInputField.addEventListener('input', () => {
  display.textContent = ''
  console.log('clearing display')
})
