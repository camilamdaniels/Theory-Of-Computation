var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    const expression = /\d/g;

    // Find matches
    let matches = null;
    matches = line.match(expression);

    // If match found, print number with no spaces, parens, or dashes
    if (matches !== null && matches.length === 10) console.log(matches.join(''));
    // Else print that no number was found
    else {
    	console.log("No number was found.");
    };
    
});
