// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: 
// [
//   'G', 'o', 'l', 'f', ' ', '2', '0', '2', '2' 
// ]
// b) Verify and explain: .split() is a built-in method that splits each character inside of a string into it's own string, then concatenates the individual strings into an array for the output. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: The function will log undefined because the function is not being called due to not having the keyword 'return'
// b) Verify and explain: The return keyword ensures that function will quit executing and will output a specified statement once the function is invoked with its variable and parameter

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The built in method .map() is an accessor which iterates through the array and returns the original array. A higher order function is taken as an argument inside of .map() in order for each number inside of the array the pass through the parameter and multiply each by two.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: The built in method .filter() iterates through the array returns a smaller in length array compared to the original. The higher order function is used to pass through as an argument in order to return numbers that are not divisible by two. Using the modulus  operator as well as the bang operator, this returns a new array of numbers that are only odd.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The constant myCodingSkills iis an object and that has four key:value pairs. Using dot notation, we use the key named 'languages' in order to find the value. Since the value of 'languages' is an array, we can use bracket notation to find the index of 0. Knowing that arrays are zero indexed, we find that the value at index zero is the string "JavaScript".

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
/*
Learn
{
  student: "George",
  cohort: "Foxtrot",
  year: 2022
}
*/
// b) Verify and explain: inside the variable, the keyword 'new' creates a new object through the class 'Learn' and passes through the parameter of name as "George". So logging the variable 'learnStudent', the console will print the new object 'Learn' with the key:value pairs of -> student: "George", cohort: "Foxtrot", and year: 2022.
