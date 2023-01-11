const express = require('express'); // import the express package
const app = express();// create an express app
const http = require('http'); // import the Node Server package
const server = http.createServer(app);// use our app file with the server 

const port = process.env.PORT || 3001;

//This is a route handler -> listen for incoming requests and send back a response
//this is the root route / expects to render an index page
app.get('/', (req, res) => {
    //this is pointing at index.html -> listen for incoming 
  res.sendFile(__dirname + '/index.html');
});


app.get('/contact', (req, res) => {
    //this is pointing at index.html -> listen for incoming 
  res.sendFile(__dirname + '/contact.html');
});



//Set up the server to listen for incoming connections at this point
app.listen(port, () => {
  console.log(`listening on ${port}`);
});