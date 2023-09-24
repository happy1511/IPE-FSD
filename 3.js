// Develop a user signup form for a website using Express.js and cookies. Implement the
// following requirements:
// Create a form with the following fields:
// o	Name (input field)
// o	Contact Number (input field)
// o	Email (input field)
// o	Address (textarea field)
// o	Gender (radio buttons: Male, Female, Others)
// o	DOB (date picker)
// o	Submit button
// When the user submits the form, store their information (name, contact number, email,
// Address, gender & DOB) in a cookie named "registered" that expires in 15 seconds.
// Display a confirmation message to the user after successfully submitting the form &
// Create a link to display the details stored in the "registered" cookie.
// When the user clicks to the link, retrieve the information from the cookie and display it
// on the page also include a link on the details page to Logout. When the user clicks the
// link, user redirected to home page

const Express = require('express')
const path = require('path')
const cookie = require('cookie-parser')
const app = Express()

app.use(Express.static(__dirname));
app.use(cookie())

app.get('/',(req,res)=>{
    console.log(path.join(__dirname,'3_form.html'))
    res.setHeader("Content-Type", "text/html");
    res.sendFile(__dirname+'/3_form.html')
})

app.get('/submit',(req,res)=>{
    res.cookie('registered',JSON.stringify(req.query))
    res.send('<a href="/detail">details</a>')
    res.end()
})

app.get('/detail',(req,res)=>{
    const userdata =(req.cookies.registered)
    res.setHeader("Content-Type", "text/html");
    res.send(JSON.parse(userdata)+'<a href="/logout">logout</a>')
    res.end()
})

app.get('/logout',(req,res)=>{
    res.clearCookie('registered')
    res.redirect('/')
})

app.listen('8000')