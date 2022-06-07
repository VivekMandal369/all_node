const fs = require('fs');

const text = fs.readFileSync("mytext.txt", "utf8");
console.log(text);
const newText = text.replace(/Vivek/g, 'Mr.Zero'); // replace all the vivek string
fs.writeFileSync("mytext1.txt", newText, 'utf8');

const data = fs.readFileSync('mytext1.txt', 'utf8');
console.log(data);
