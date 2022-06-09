let fs = require('fs')

//sync
let data = fs.readFileSync('readMe.txt')
console.log(data)



//async