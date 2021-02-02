const question = require('./question.js')


const map = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", " ", " ", " ", "|", " ", " ", " ", "*"],
    ["*", " ", " ", "|", "|", "|", " ", " ", "*"],
    ["*", " ", "|", "|", "|", "|", "|", " ", "*"],
    ["*", "|", "|", "|", "|", "|", "|", "|", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*"]
]
function display(map) {
  const rows = map.length

  for (let x = 0; x < rows; x++) {
    console.log(map[x].join(''))
  }
}
let x = 0;

display(map);
question()