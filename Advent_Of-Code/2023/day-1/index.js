import fs, { readFileSync } from 'fs';

let input = readFileSync('./input.txt', 'utf-8')
  .split('\r\n')
  .filter(x => !!x)

  
let sum = 0;
const numbers = '123456789'

const numbersAsStrings = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
}

input.forEach(word => {
  let numbersInString = [];

  for (let i = 0; i < word.length; i++) {
    if (numbers.includes(word[i])) {
      numbersInString.push(word[i]);
    }

    for (let j = 3; j <= 5; j++) {
      if (numbersAsStrings[word.substring(i, i+j)] !== undefined) {
        numbersInString.push(numbersAsStrings[word.substring(i, i+j)]);
      }
    }

  }

  sum += parseInt(numbersInString[0] + '' +  numbersInString[numbersInString.length - 1])

})

console.log(sum);
