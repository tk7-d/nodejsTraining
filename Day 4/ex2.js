var fs = require('fs');

var text1 = fs.readFileSync('text1.txt').toString();
var text2 = fs.readFileSync('text2.txt').toString();
var text3 = text1 + "\n" + text2;

fs.writeFile("text3.txt", text3, function(err) {
    if(err) {
        return console.log(err);
    }
}); 