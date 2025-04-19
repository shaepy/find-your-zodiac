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

  const elements = {
  0: "Metal",
  1: "Metal",
  2: "Water",
  3: "Water",
  4: "Wood",
  5: "Wood",
  6: "Fire",
  7: "Fire",
  8: "Earth",
  9: "Earth"
}

function zodiacAnimal(year) {
    // function for checking year compatibility here later
    const animal = animals[(year - 4) % 12]
    console.log(`you are: year of the ${animal}`)
    return animal
}

function zodiacElement(year) {
    // function for checking year compatibility here later
    const element = elements[year % 10]
    console.log(`you are element of ${element}`)
    return element
}