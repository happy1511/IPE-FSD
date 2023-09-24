// Write a script to meet following requirements:
// (1) Create an index.html file & open it on localhost.
// (2) After clicking submit button, it should jump to "savesession" page. Store username
// in session.
// (3) After saving session, redirect to "fetchsession" page & read session value. Put a
// logout link button here.
// (4) Jump on "deletesession" page on clicking "logout" link.
// (5) Destroy the session on this page & redirect to index.html page

const exp = require("express");
const sess = require("express-session");

const app = exp();
app.use(exp.urlencoded({extended:true}))
app.use(exp.static(__dirname));

app.use(
  sess({
    resave: false,
    saveUninitialized: true,
    secret: "session",
  })
);


app.post("/savesession", (req, res) => {
  const {uname,pass} = req.body
  req.session.uname = uname;
  req.session.pass = pass;
});

app.get("/fetchsession", (req, res) => {
  res.send(`<h1>${req.session.uname}</h1><a href="/deletesession">logout</a>`);
});

app.get("/deletesession", (req, res) => {
  req.session.destroy(res.redirect("/"));
  res.end();
});

app.listen(8000)
