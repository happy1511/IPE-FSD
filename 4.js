// Write express js script to load student form using pug file which contains following
// fields:
// Roll No(number)
// Name(text)
// Division(text)
// Email(email)
// Subject(radio:FSD-2,COA,PYTHON-2,DM,TOC)
// Once form submitted then data must be displayed on ‘/data’ page using pug file. Means
// data should be submitted from express application to PUG file.
const Express = require('express')
const app = Express()

app.set('view engine','pug')
app.set('views',__dirname)
app.use(Express.static(__dirname))
app.use(Express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('4_form')
})

app.post('/submit',(req,res)=>{
    res.render('4_details',req.body)
})

app.listen(8000)