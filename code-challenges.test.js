// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

/*
Boiler Plate for Test Function:

describe("areYouHungry", () => {
  it("returns eat food or keep coding based on input", () => {
    expect(areYouHungry("yes")).toEqual("eat food")
    expect(areYouHungry("no")).toEqual("keep coding")
  })
})

*/

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
    const object1 = { number: 15 }
    const object1OutPut = "15 is divisible by three"
    expect(divByThree(object1.number)).toEqual(object1OutPut)
    const object2 = { number: 0 }
    const object2OutPut = "0 is divisible by three"
    expect(divByThree(object2.number)).toEqual(object2OutPut)
    const object3 = { number: -7 }
    const object3OutPut = "-7 is not divisible by three"
    expect(divByThree(object3.number)).toEqual(object3OutPut)
    })
})

// ReferenceError: divByThree is not defined

// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
/*
Create a function named divByThree that has only one parameter that takes an object as an argument
    Use a conditional statement to determine 
    If the parameter is divisible by three by using the modulus to strictly equal zero
    return the output that the object is divisible by 3
    if the object is not divisible by 3
        return the object is not divisible by 3
    For an edge case
    if the object is not a number
        return the object is not a number
*/

const divByThree = (object) => {
    if (object % 3 === 0) {
        return `${object} is divisible by three`
    } else if (object % 3 !== 0) {
        return `${object} is not divisible by three`
    } else {
        return `${object} is not a number`
    }
}

// Originally I was getting a syntax error and that the input of the object was undefined.
//In order to get the correct input I needed, I used dot notation in order to access the value from the key: number. 
//For the outputs that were divisible by three, the tests passed
//But the test that did not pass was for the argument that the number was not divisible by 3
//I looked back at my function that I was testing and it did not have an edge case through the use of the keyword 'else'
//Once adding the else statement to my function, all of the tests passed.

// ✓ takes a object as an argument and decides if the number inside it is evenly divisible by three or not. (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("capArray", () => {
    it("that takes in an array of words and returns an array with all the words capitalized.", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    const randomNouns1Output = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        expect(capArray(randomNouns1)).toEqual(randomNouns1Output)
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    const randomNouns2Output = ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(capArray(randomNouns2)).toEqual(randomNouns2Output)
    })
})
// ReferenceError: capArray is not defined

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

/*
Create a function that takes uses one parameter to input an array
Using .map() to iterate through the array in order to keep the original length of the array
    Use higher order functions to go through each string inside of the array
    Then capitalize each first letter of the string while keeping the rest of the string in lower case
    return the new array
    .charAt() is a string method that returns a new string with the exact location of a character. If there is no specified  argument, the location is always zero.
    .slice() is an array method that returns a smaller portion of the array  and takes in the start and end of the location with only the start location having to be specified.
    Stacking these two methods together keeps the original string inside each element as well as keeping the elements inside of the array.
*/

const capArray = (array) => {
    return array.map((value) => {
        return value.charAt().toUpperCase() + value.slice(1).toLowerCase()
    })
}

// ✓ that takes in an array of words and returns an array with all the words capitalized. (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel.", () => {
    const vowelTester1 = "learn"
    const vowelTester1Output = 1
    expect(firstVowel(vowelTester1)).toEqual(vowelTester1Output)
    const vowelTester2 = "academy"
    const vowelTester2Output = 0
    expect(firstVowel(vowelTester2)).toEqual(vowelTester2Output)
    const vowelTester3 = "challenges"
    const vowelTester3Output = 2
    expect(firstVowel(vowelTester3)).toEqual(vowelTester3Output)
    })
})


// Expected output: 1
// Expected output: 0
// Expected output: 2

// b) Create the function that makes the test pass.

/*
create a function that will take in one parameter as an argument
A string will be passed through the parameter of the function
Iterate through a string by using regex and look for characters that are vowels 
    i.e."a", "e", "i", "o", "u"
    Regex , otherwise known as regular expressions, are patterns to match character combinations in a string. In this case, we are searching for the characters that match vowels. while the 'i' on the outside  of the matchers is a method in which makes the characters case insensitive. Meaning that we can match the characters in either lowercase or uppercase.
Return the index of the first vowel found
*/

const firstVowel = (string) => {
    return string.search(/[a, e, i, o, u]/i)
}

// takes in a string and logs the index of the first vowel
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total