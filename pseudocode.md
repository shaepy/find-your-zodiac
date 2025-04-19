psuedo-code:
- when submit is pressed
- check the year 
- if year was X X X X
- which zodiac is it?
- which element is it?

the chinese zodiac is determined by 12-year cycles

1. Rat
2. Ox
3. Tiger
4. Rabbit
5. Dragon
6. Snake
7. Horse
8. Goat
9. Monkey
10. Rooster
11. Dog
12. Pig

5 elements

1. Wood
2. Fire
3. Earth
4. Water


## Total 60-year cycle composed of:
-  12 zodiac animals
- 5 elements, each lasting 2 consecutive years

12 animals × 5 elements × 2 years = 60 year cycle

```const animals = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

const animal = animals[(year - 4) % 12];
```

## Simplified 5 Elements Cycle
The 5 elements repeat every 10 years, and each element spans 2 years in a fixed order:

Last Digit(s) of Year
- 0, 1:	Metal
- 2, 3:	Water
- 4, 5:	Wood
- 6, 7:	Fire
- 8, 9:	Earth

```
const simpleElements = {
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
};

const element = simpleElements[year % 10];
```
