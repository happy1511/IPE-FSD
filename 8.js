// You are tasked with creating a basic Express.js application for a small online store. The
// application should have the following features:
// 1) Create a server using Express.js that listens on port 3000. Set up a route to display a
// welcome message on the homepage ("/") when a user visits it.
// 2)Create a route to display a list of products ("/products"). You should define an array of
// product objects with properties like "name," "description," and "price."
// 3)Create a route handler that renders this list of products in an HTML format.
// Implement a dynamic route for product details ("/products/:id").
// 4)Handle 404 errors by displaying a custom error page when a user tries to access a nonexistent route.
// 5)Your task is to write the Express.js code to achieve the above functionality.
// 6)Please make sure to include all the necessary dependencies and set up the Express
// application correctly.
// Note: You can use any template engine (e.g. Pug) of your choice to render HTML
// pages, or you can send plain HTML as a response. Ensure that you have installed the
// required packages and set up the project structure accordingly. Write the Express.js code
// to implement the features mentioned above.

const exp = require("express");

const app = exp();
const products = [
  { id: 1, name: "p1", desc: "d1", price: 100 },
  { id: 2, name: "p2", desc: "d2", price: 200 },
  { id: 3, name: "p3", desc: "d3", price: 300 },
];
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end('<h1>Welcome To Store</h1><a href="/products">products</a>');
});

app.get("/products", (req, res) => {
  var str = "";
  str += "<ul>";
  for (const product of products) {
    str += `<li><h1>${product.id}</h1><h2>${product.name}</h2><h3>${product.desc}</h3><h4>${product.price}</h4></li>`;
  }
  str += "</ul>";
  res.send(str);
  res.end();
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  res.send(
    `<h1>${product.id}</h1><h2>${product.name}</h2><h3>${product.desc}</h3><h4>${product.price}</h4>`
  );
  res.end();
});

app.use((req, res) => {
  res.writeHead(404).send("not found");
});

app.listen(8000);
