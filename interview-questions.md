# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The difference between a parameter and an argument is that a parameter has a value that passes through an argument. 
For example when writing a function through JavaScript

const functionName = (parameter) => {
    return parameter
}

console.log(functionName(argument))

Researched answer: A parameter is a value that gets defined when a function gets invoked. As parameter also has an argument pass through the parameter during the invocation. An argument is usually an array like object that gets passed through the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The JavaScript built in method .map() is used to iterate through the original array it is attached to using dot notation. The predefined parameters is logic that would change the elements in some way, while also keeping the original length of the array.
For example:
let array = [1, 2, 3]
const changeArray = array.map((value) => {
    return value * 2
})

console.log(changeArray)
-> [2, 4, 6]

Researched answer: The JavaScript built in method .map() calls a provided call back function which only invokes for arrays with assigned values. The call back function only takes in three arguments to the parameters: the values of the element, the index of the element, and the array object being mapped.

3. What is the difference between map and filter?

Your answer: The main difference between map and filter is that map keeps the original length of the array while filter only takes in the elements that fulfill its arguments(i.e. creates a new array with a smaller length than the original array)

Researched answer: Map accesses the array and changes the values of each element, but it keeps the original length of the array. Filter uses boolean conditions in order to return a new array, if the element returns to true then it keeps the element, if it returns false then it excludes the element.

4. What is iteration?

Your answer: Iteration is when you go through each element of an array, or a character in a string, until a defined condition is met.

Researched answer: Iteration is the process of going through each element in an array until a condition is met

5. What is the difference between a class and an object?

Your answer: The difference between a class and an object is that a class creates an object with parameters that can be invoked multiple times while an object uses those parameters to create values in a key: value pair.

Researched answer: Classes are function like in that they can create classes that intertwine data and behavior. Objects have symbols and any javascript data type in a key:value pair. 

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting in JavaScript is when you have invocations above that log the arguments of the function instead of below the function

Researched answer: Hoisting in JavaScript is a default behavior of JavaScript when the declaration of functions, variables, or classes above said functions, variables, or classes are moved to the top of their scope. Where instead of it being a local scope to its functions, it becomes more of a global variable/scope.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: User stories is a specific feature or component that describes how to render the function for the user to interact with.

2. Spread operator: The spread operator is a JavaScript function that is used to iterate through an array or an object and creates an exact copy into a new array or object.

3. React: React is a JavaScript library that is used to create webpages, mobile webpages, and mobile applications.

4. React props: Props are used to communicate between the main component folder and its nested components

5. DOM events: The DOM is the Document Object Module which gives a visual representation to your code. DOM events are interactions with the user in mind. 
