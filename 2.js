// Write a NodeJS script to copy content of one file to another file using asynchronous
// callback. Copy file content from source.txt to destination.txt. Sequence must be
// maintained

const fs = require('fs')

fs.readFile('source.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    else{
        fs.writeFile('destination.txt',data,'utf-8',(err)=>{
            if (err){
                console.log(err)
                return
            }
        })
    }
})