var fs = require('fs');

var text = fs.readFileSync('text1.txt').toString();

console.log(text);
console.log("File read operation at the end");