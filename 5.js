// Write a program to upload a text file upto 1MB size only using express JS. Perform
// necessary validation for file format and size.

var exp = require('express')
var multer = require('multer')

const app = exp()
var upload = multer({storage:multer.memoryStorage(),dest:'./uploads',limits:{fileSize:1024*1024},fileFilter:(req,file,cb)=>{
    if (file.mimetype === 'text/plain'){
        cb(null,true)
    }
    else{
        cb(new Error('only text file allowed'))
    }
}})

app.use(exp.static(__dirname))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/5_file.html')
})

app.post('/submit',upload.single('myfile'),(req,res)=>{
    console.log('body:'+JSON.stringify(req.body))
    console.log('file:'+JSON.stringify(req.file))
    res.end()
})

app.listen(8000)