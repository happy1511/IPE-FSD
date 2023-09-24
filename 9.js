// You are developing a simple Express.js application for a weather forecast service. The
// application should have the following features:
// 1) Create an Express.js server that listens on port 3000.
// 2) Set up a route ("/") that displays a basic welcome message when a user visits the root
// URL.
// 3) Create a route ("/weather") that accepts a query parameter "location" and returns the
// weather forecast for the specified location. You can assume that the weather data is
// available as an object with properties like "location," "temperature," and "description."
// For example, if the user accesses "/weather?location=NewYork," the server should
// respond with the weather information for New York.
// 4)Handle cases where the user doesn't provide a location query parameter or provides an
// unknown location by displaying an appropriate error message.
// 5)Your task is to write the Express.js code to implement these features. Make sure to
// include all the necessary dependencies and set up the Express application correctly.
// 6)Note: You can use any template engine (e.g. Pug) of your choice to render HTML
// responses, or you can send plain JSON responses.

const exp = require('express')

const app = exp()

const weather = [
    {location:'newyork',temp:30,desc:'nydesc'},
    {location:'india',temp:30,desc:'idesc'},
    {location:'kullu',temp:30,desc:'kdesc'},
]

app.set('view engine','pug')
app.set('views', __dirname)


app.get('/',(req,res)=>{
    res.send('welcometo the weather')
    res.end()
})

app.get('/location',(req,res)=>{
    console.log(req.query.location)
    for(const loc of location){
        if(loc.location === req.query.location.toString()){
            res.render('weather',{location:req.query.location,temp:loc.})
        }
    }
    res.end()
})

app.listen(8000)
