const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // modifies each string in the array to convert to title case
  return tutorials.map((string) => {

    // creates string we want to return
    let newString = ''

    let i = 0

    // loops through each letter in the string
    for (const letter of string){
      // if the letter has a space before it, capitalize it and add
      if (string[string.indexOf(letter, i) - 1] === ' '){
        newString = newString + letter.toUpperCase()
        // if the letter does not have a space before it, lowercase it and add
      } else {
        newString = newString + letter
      }
      i++
    }

    // capitalize the first letter
    newString = newString[0].toUpperCase() + newString.slice(1)

    return newString
  })
}

console.log(titleCased())
