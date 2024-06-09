let iconv = require('iconv-lite');
let fs = require('fs');

let content = fs.readFileSync('조명.csv');

// let utf8Str = iconv.decode(content, 'EUC-KR');
// console.log(utf8Str)
// fs.writeFileSync('newJson.json', utf8Str, { encoding: 'utf8' });

console.log(content.toString('hex'))
