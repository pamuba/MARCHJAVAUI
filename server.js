const http = require('http')
const fs = require('fs')

// let server = http.createServer(function(req, res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end("<h1>Hello World</h1>"+" "+req.url)
// })

// server.listen(7000)

http.createServer(function(req, res){
    if(req.url === '/'){
        fs.createReadStream(__dirname+"/index.html")
        .pipe(res)
    }
    else if(req.url === "/cat"){
        fs.readFile(__dirname+'/images/cat.jpg', (err,data)=>{
            if(err){
                console.log(err.message)
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(`<div style="display:flex">
                    <img style="height:200px; width:400px" src="data:image/jpg;base64,`)
                res.write(Buffer.from(data).toString('base64'));
                res.write('"/></div>')
            }
        })
    }
    else if(req.url === '/api'){
        res.writeHead(200,{'Content-Type':'text/json'})

        let obj = {
            firstName:"Dark",
            lastName:"Night"
        }
        res.end(JSON.stringify(obj))
    }
    else{
        res.writeHead(404)
        res.end()
    }

}).listen(7000)