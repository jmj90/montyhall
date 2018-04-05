const fs = require('fs');
const calculationsFile = './results.txt';

function montyHall(simulations) {
  let results = {
    keep: 0,
    change: 0
  };

  for (let i = 0; i <= simulations; i++) {
    let winningSelection = Math.floor(Math.random()*3) + 1;
    let initialSelection = Math.floor(Math.random()*3)+ 1;
    let scratchSelection;

    switch (initialSelection) {
      case 1:
        scratchSelection =
          winningSelection != 2 ? 2 : 3;
        break;
      case 2:
        scratchSelection =
          winningSelection != 1 ? 1 : 3;
        break;
      case 3:
        scratchSelection =
          winningSelection != 1 ? 1 : 2;
        break;
      default:
        break;
     }

    if (initialSelection === winningSelection) {
      results.keep ++
    } else {
      results.change ++;
    }

  }

  results.keep = results.keep / simulations;
  results.change = results.change / simulations;

  console.log('\n'+'results: ', results, '\n')

  let simulationRan =
  `simulation ran ${simulations} times ` + '\n' +
  'keeping initial choice: ' + Math.floor((results.keep * 100)) + '%' + '\n' +
  'changing initial choice: ' + Math.floor((results.change * 100)) + '%'

  return simulationRan;
}

let results = montyHall(10000)

fs.writeFile(calculationsFile, results, (err) => {
  if (err) console.error(err)
  else {
    console.log('Monty Hall calculations sucessfully printed to results.txt' + '\n');
  }
})
