// Write a node.js script to load one simple.html file on a NodeJS server & print its
// contents. HTML file should be opened on localhost & designing should be according to
// HTML markup.

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    if(req.url==='/simple.html'){
        fs.readFile(__dirname+'/simple.html','utf-8',(err,data)=>{
            if(err){
                console.log(err)
                return
            }
            res.writeHead(200   ,{'Content-Type':'text/pain'})
            res.end(data)
        })
    }
})

server.listen(8000)