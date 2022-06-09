let fs = require('fs')

//sync
// try{
//     let data = fs.readFileSync('readMe.txt', 'utf-8')
//     console.log(data)
//     fs.writeFileSync('writeMe.txt', data)
// }
// catch(er){
//     console.log(er.message)
// }



//async
//try catch --> callbacks

fs.readFile('readMe.txt', 'utf-8', (err, data)=>{
    if(err === null){
        console.log(data)
        fs.writeFile('writeMe.txt', data, (err)=>{
            if(err === null){
                console.log('File written successfully')
            }
            else{
                console.log(err.message)
            }
        })
    }
    else{
        console.log(err.message)
    }
})
