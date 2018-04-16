const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, data) => {
	if (err) return;
	// Set up regex
	const expression = /(htt(p|ps)\:\/\/([\w\W][^"|']+))/g;
	// Find matches
	const matches = data.match(expression);
	// Print all matches
	matches.forEach(match => {
		console.log(match);
	});
});



