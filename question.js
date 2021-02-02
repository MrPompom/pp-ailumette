const readline = require('readline');

function demande() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Lines : ", (answer) => {
    console.log(answer);
    rl.close();
  });
  rl.question("Matches : ", (answer) => {
    console.log(answer);
    rl.close();
  });
}

module.exports = demande;