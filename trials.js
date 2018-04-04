const fs = require('fs');
const calculationsFile = './results.txt';
var { bar } = require('./cliPreset.js');
var _colors = require('colors');

function montyHall(simulations) {
// results to tally the amount of winners who kept their selection and changed
  let results = {
    keep: 0,
    change: 0
  };

  //  *** code for progress bar in terminal, not necessary for problem
  bar.start(simulations, 0);

  for (let i = 0; i <= simulations; i++) {

    // creating random winning selections and user selections
    let winningSelection = Math.floor(Math.random()*3) + 1;
    let innitialSelection = Math.floor(Math.random()*3)+ 1;

    // creating our scratch choice after a users innitial selection is made. At
    // this point we don't know what our scratch selection will be, so we define
    // it with no value to begin.
    let scratchSelection;

    // a switchc/case statement to declare what our scratch selection will be
      // -- we could use a lot of if statements, but that doenst look nice
    switch (innitialSelection) {
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

    // if user innitialSelection is the correct answer, increment the keep value
    if (innitialSelection === winningSelection) {
      results.keep ++
    } else {
      // if user innitialSelection is incorrect and they should have changed,
      // increment the change value
      results.change ++;
    }

    //  *** code for progress bar in terminal, not necessary for problem
    bar.update(i);
  }

  //  *** code for progress bar in terminal, not necessary for problem
  bar.stop();

  //turn the number of wins for either choice into a decimal percentage
  results.keep = results.keep / simulations;
  results.change = results.change / simulations;

  // displays our results in the terminal
  console.log(_colors.yellow('\n'+'results:\n'), results, '\n')

  // variable for printing to results.txt
  let simulationRan =
  `simulation ran ${simulations} times ` + '\n' +
  'keeping initial choice: ' + Math.floor((results.keep * 100)) + '%' + '\n' +
  'changing initial choice: ' + Math.floor((results.change * 100)) + '%'

  return simulationRan;
}

let results = montyHall(10000)

//write the results to the calculationsFile
fs.writeFile(calculationsFile, results, (err) => {
  if (err) console.error(_colors.red(err))
  else {
    console.log(_colors.green('Monty Hall calculations sucessfully printed to results.txt' + '\n'));
  }
})
