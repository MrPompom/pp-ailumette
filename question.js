const readline = require('readline');

function LM_question() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const lines = rl.question("Lines : ", (answer) => {
    rl.close();
  });
  const matches = rl.question("Matches : ", (answer) => {
    rl.close();
  });
}

module.exports = LM_question;