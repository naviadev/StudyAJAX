const fs = require("fs");
const csv = require("csv-parser");
const result = [];




fs.readFile('./조명.csv', 'EUC-KR', (error, data)=>{
  console.log(data)
})
