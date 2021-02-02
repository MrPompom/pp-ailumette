const readline = require('readline');

function demande(src) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question(src, (answer) => {
    console.log(answer);
    rl.close();
  });
}

module.exports = demande;