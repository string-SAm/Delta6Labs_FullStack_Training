// const express = require('express');
// const app = express();
// const port = 3000;
 
// // Route for JSON response
// app.get('/json', (req, res) => {
//   // Sample JSON data
//   const jsonData = { message: 'Hello, this is a JSON response!' };
 
//   // Set Content-Type header to application/json
//   res.header('Content-Type', 'application/json');
 
//   // Send the JSON data as the response
//   res.send(JSON.stringify(jsonData, null, 2));
// });
 
// // Route for HTML response
// app.get('/html', (req, res) => {
//   // Sample HTML content
//   const htmlContent = `
// <!DOCTYPE html>
// <html>
// <head>
// <title>HTML Response</title>
// </head>
// <body>
// <h1>Hello, this is an HTML response!</h1>
// </body>
// </html>
//   `;
 
//   // Set Content-Type header to text/html
//   res.header('Content-Type', 'text/html');
 
//   // Send the HTML content as the response
//   res.send(htmlContent);
// });
 
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening at http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
// Middleware to parse JSON in POST requests
app.use(bodyParser.json());
 
// Define a route for GET requests
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!');
});
 
// Define a route for POST requests
app.post('/', (req, res) => {
  const dataFromClient = req.body; // Assuming the client sends JSON in the request body
  res.json({ message: 'Received POST request!', data: dataFromClient });
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 